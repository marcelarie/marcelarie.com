import { loadEnv } from "vite";
import { getSpecificRepoLanguage } from "./getLanguageColor";

const env = loadEnv(process.env.GITHUB_TOKEN!, process.cwd(), "");
const ghApi = "https://api.github.com";

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

export type Repo = RepoInfo;

export type ReposTopicResponse = {
  total_count: number;
  incomplete_results: boolean;
  items: Repo[];
};

export async function getRepoInfo(
  repoOwner: string,
  repoName: string,
): Promise<RepoInfo> {
  const response = await fetch(`${ghApi}/repos/${repoOwner}/${repoName}`, {
    headers: {
      Authorization: `Bearer ${env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch repository info: ${response.statusText}`);
  }

  const data: RepoInfo = await response.json();
  return data;
}

export async function getRepoLanguages(
  repoOwner: string,
  repoName: string,
): Promise<Language[]> {
  const response = await fetch(
    `${ghApi}/repos/${repoOwner}/${repoName}/languages`,
    {
      headers: {
        Authorization: `Bearer ${env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
    },
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch repository info: ${response.statusText}`);
  }

  const colorsResponse = await fetch(
    "https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml",
  );

  if (!colorsResponse.ok) {
    throw new Error(`Failed to fetch repository info: ${response.statusText}`);
  }

  const data: Record<string, number> = await response.json();
  const colorData = await colorsResponse.text();
  const totalBytes = Object.entries(data).reduce(
    (acc, [_, bytes]) => acc + bytes,
    0,
  );

  const langs: Language[] = Object.entries(data).map(([lang, bytes]) => {
    const color = getSpecificRepoLanguage(colorData, lang);

    return {
      name: lang,
      bytes,
      percent: (bytes / totalBytes) * 100,
      color: color || "#333",
    };
  });

  return langs;
}
