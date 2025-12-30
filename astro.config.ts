import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import { loadEnv } from "vite";
import mermaid from "astro-mermaid";

const DEFAULT_PORT = 4321;

const env = loadEnv(process.env.PORT!, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: "https://marcelarie.xyz",
  server: {
    port: Number(env.PORT) || DEFAULT_PORT,
  },
  integrations: [
    mermaid({
      theme: "base",
      autoTheme: true,
      mermaidConfig: {
        theme: "base",
        themeVariables: {
          primaryColor: "transparent",
          primaryTextColor: "#000000",
          primaryBorderColor: "#0000ee",
          lineColor: "#0000ee",
          secondaryColor: "transparent",
          tertiaryColor: "transparent",
          background: "transparent",
          mainBkg: "transparent",
          secondBkg: "transparent",
          tertiaryBkg: "transparent",
          textColor: "#000000",
          border1: "#0000ee",
          border2: "#0000ee",
          arrowheadColor: "#0000ee",
          fontFamily: "IBM Plex Mono, monospace",
          fontSize: "14px",
          nodeBorder: "#0000ee",
          clusterBkg: "transparent",
          clusterBorder: "#0000ee",
          defaultLinkColor: "#0000ee",
          titleColor: "#000000",
          edgeLabelBackground: "transparent",
          nodeTextColor: "#000000",
        },
      },
    }),
    vue(),
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        themes: {
          light: "light-plus",
          dark: "vesper",
        },
      },
    }),
    tailwind(),
  ],
});
