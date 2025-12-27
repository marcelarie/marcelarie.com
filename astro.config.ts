import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import { loadEnv } from "vite";

const DEFAULT_PORT = 4321;

const env = loadEnv(process.env.PORT!, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: "https://marcelarie.xyz",
  server: {
    port: Number(env.PORT) || DEFAULT_PORT,
  },
  integrations: [
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
