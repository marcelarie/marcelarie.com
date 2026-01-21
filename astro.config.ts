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
	site: "https://followthetrace.com",
	server: {
		port: Number(env.PORT) || DEFAULT_PORT,
	},
	vite: {
		server: {
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, OPTIONS",
				"Access-Control-Allow-Headers": "Content-Type",
			},
		},
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
					primaryBorderColor: "#000000",
					lineColor: "#000000",
					secondaryColor: "transparent",
					tertiaryColor: "transparent",
					background: "transparent",
					mainBkg: "transparent",
					secondBkg: "transparent",
					tertiaryBkg: "transparent",
					textColor: "#000000",
					border1: "#000000",
					border2: "#000000",
					arrowheadColor: "#000000",
					fontFamily: "IBM Plex Mono, monospace",
					fontSize: "14px",
					nodeBorder: "#000000",
					clusterBkg: "transparent",
					clusterBorder: "#000000",
					defaultLinkColor: "#000000",
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
					light: {
						name: "minimal-light",
						type: "light",
						colors: {
							"editor.background": "transparent",
							"editor.foreground": "#000000",
						},
						tokenColors: [],
					},
					dark: {
						name: "minimal-dark",
						type: "dark",
						colors: {
							"editor.background": "transparent",
							"editor.foreground": "#ffffff",
						},
						tokenColors: [],
					},
				},
			},
		}),
		tailwind(),
	],
});
