/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // or 'media' or 'class'
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
          },
        },
      },
    },
  },
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/typography")],
};
