/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						fontFamily: "IBM Plex Mono, monospace",
						h1: { fontWeight: "400", fontSize: "26px" },
						h2: { fontWeight: "bold", fontSize: "14px" },
						a: { "&:hover": { color: "#3182ce" }, fontSize: "14px" },
					},
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
