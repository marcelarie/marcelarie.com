/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class", // 'media' or 'class'
	theme: {
		extend: {
			typography: (theme) => ({
				DEFAULT: {
					css: {
						fontFamily: theme("fontFamily.mono"),
						h1: { fontWeight: "500", fontSize: "2rem" },
						h2: { fontWeight: "400", fontSize: "1.75rem" },
						h3: { fontWeight: "400", fontSize: "1.5rem" },
						h4: { fontWeight: "300", fontSize: "1.25rem" },
						h5: { fontWeight: "300", fontSize: "1.125rem" },
						h6: { fontWeight: "300", fontSize: "1rem" },
						a: { "&:hover": { color: "#3182ce" } },
						article: { backgroundColor: "#f7f7f7" },
						code: {
							backgroundColor: "#ffffff",
							color: "var(--color-text)",
							padding: "0 0.25rem 0.125rem 0.25rem",
							border: "1px solid var(--color-border)",
							borderRadius: "0.125rem",
							fontWeight: "500",
							fontSize: "0.875em",
							lineHeight: "1.2",
							display: "inline-block",
							verticalAlign: "middle",
							"&::before": { content: '""' },
							"&::after": { content: '""' },
						},
						"code::before": { content: '""' },
						"code::after": { content: '""' },
						"pre code": {
							backgroundColor: "transparent !important",
							padding: "0 !important",
							borderRadius: "0 !important",
							fontWeight: "inherit !important",
							color: "inherit !important",
							border: "none !important",
						},
						"pre code::before": { content: '""' },
						"pre code::after": { content: '""' },
					},
				},
				invert: {
					css: {
						h1: { fontWeight: "500", color: "var(--color-text)" },
						h2: { fontWeight: "400", color: "var(--color-text)" },
						h3: { fontWeight: "400", color: "var(--color-text)" },
						h4: { fontWeight: "300", color: "var(--color-text)" },
						h5: { fontWeight: "300", color: "var(--color-text)" },
						h6: { fontWeight: "300", color: "var(--color-text)" },
						a: { color: "var(--color-link-visited-dark)" },
						"a:hover": { color: "#ffffff" },
						code: {
							backgroundColor: "#333333",
							color: "var(--color-text)",
							border: "1px solid var(--color-highlight-dark)",
						},
						"pre code": {
							backgroundColor: "transparent !important",
							color: "inherit !important",
						},
						blockquote: {
							color: "var(--color-text)",
						},
					},
				},
			}),
		},
	},
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	plugins: [require("@tailwindcss/typography")],
};
