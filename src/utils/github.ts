import { loadEnv } from "vite";
import { getSpecificRepoLanguage } from "./getLanguageColor";

const env = loadEnv(process.env.GITHUB_TOKEN!, process.cwd(), "");

// Cache for language colors to avoid fetching multiple times
let languageColorsCache: Promise<string> | null = null;

export type Language = {
  name: string;
  bytes: number;
  percent: number;
  color: string;
};

export type RepoInfo = {
  name: string;
  description: string;
  html_url: string;
};

// Fetch and cache language colors once (cache the promise to prevent duplicate fetches)
async function getLanguageColors(): Promise<string> {
  if (!languageColorsCache) {
    languageColorsCache = (async () => {
      const colorsResponse = await fetch(
        "https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml",
      );

      if (!colorsResponse.ok) {
        throw new Error(
          `Failed to fetch language colors: ${colorsResponse.statusText}`,
        );
      }

      return await colorsResponse.text();
    })();
  }

  return languageColorsCache;
}

// GraphQL query to fetch multiple repos at once
export async function getMultipleRepos(
  repoOwner: string,
  repoNames: readonly string[],
): Promise<Map<string, { info: RepoInfo; languages: Language[] }>> {
  const repoFragments = repoNames
    .map(
      (name, index) => `
    repo${index}: repository(owner: "${repoOwner}", name: "${name}") {
      name
      description
      url
      languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
        edges {
          size
          node {
            name
          }
        }
      }
    }
  `,
    )
    .join("\n");

  const query = `
    query {
      ${repoFragments}
    }
  `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error(`GraphQL request failed: ${response.statusText}`);
  }

  const result = await response.json();

  if (result.errors) {
    throw new Error(`GraphQL errors: ${JSON.stringify(result.errors)}`);
  }

  const colorData = await getLanguageColors();

  const reposMap = new Map<string, { info: RepoInfo; languages: Language[] }>();

  repoNames.forEach((repoName, index) => {
    const repo = result.data[`repo${index}`];

    if (!repo) {
      console.warn(`Repository ${repoName} not found in GraphQL response`);
      return;
    }

    const languageEdges = repo.languages.edges || [];
    const totalBytes = languageEdges.reduce(
      (acc: number, edge: any) => acc + edge.size,
      0,
    );

    const languages: Language[] = languageEdges.map((edge: any) => {
      const color = getSpecificRepoLanguage(colorData, edge.node.name);
      return {
        name: edge.node.name,
        bytes: edge.size,
        percent: (edge.size / totalBytes) * 100,
        color: color || "#333",
      };
    });

    reposMap.set(repoName, {
      info: {
        name: repo.name,
        description: repo.description || "",
        html_url: repo.url,
      },
      languages,
    });
  });

  return reposMap;
}
