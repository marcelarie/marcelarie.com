/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 'media' or 'class'
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            fontFamily: "IBM Plex Mono, monospace",
            h1: { fontWeight: "400", fontSize: "26px" },
            h2: { fontWeight: "bold", fontSize: "14px" },
            a: { "&:hover": { color: "#3182ce" }, fontSize: "14px" },
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
            code: {
              backgroundColor: "#333333",
              color: "var(--color-text)",
              border: "1px solid var(--color-link-visited-dark)",
            },
            "pre code": {
              backgroundColor: "transparent !important",
              color: "inherit !important",
            },
          },
        },
      },
    },
  },
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/typography")],
};
