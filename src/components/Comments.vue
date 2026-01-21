<template>
  <div class="comments-section mt-8">
    <div ref="giscusContainer"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { SITE_CONFIG } from "../config";

interface Props {
	title?: string;
}

const props = withDefaults(defineProps<Props>(), {
	title: "",
});

const giscusContainer = ref<HTMLElement>();

onMounted(() => {
	if (!giscusContainer.value) return;

	const getThemeUrl = () => {
		const origin = window.location.origin;
		const root = document.documentElement;
		const timestamp = new Date().getTime();
		if (root.classList.contains("dark")) {
			return `${origin}/giscus-theme.css?t=${timestamp}`;
		}
		return `${origin}/giscus-light-theme-clean.css?t=${timestamp}`;
	};

	let currentTheme = getThemeUrl();

	const script = document.createElement("script");
	script.src = "https://giscus.app/client.js";
	script.setAttribute(
		"data-repo",
		`${SITE_CONFIG.github.username}/${SITE_CONFIG.github.repo}`,
	);
	script.setAttribute("data-repo-id", SITE_CONFIG.github.repoId);
	script.setAttribute("data-category", SITE_CONFIG.giscus.category);
	script.setAttribute("data-category-id", SITE_CONFIG.giscus.categoryId);
	script.setAttribute("data-mapping", "pathname");
	script.setAttribute("data-strict", "0");
	script.setAttribute("data-reactions-enabled", "0");
	script.setAttribute("data-emit-metadata", "0");
	script.setAttribute("data-input-position", "top");
	script.setAttribute("data-theme", currentTheme);
	script.setAttribute("data-lang", "en");
	script.setAttribute("data-loading", "lazy");
	script.crossOrigin = "anonymous";
	script.async = true;

	giscusContainer.value.appendChild(script);

	const observer = new MutationObserver(() => {
		const newTheme = getThemeUrl();
		if (newTheme === currentTheme) return;
		currentTheme = newTheme;

		console.log("Theme change detected:", { newTheme });

		const giscusFrame = giscusContainer.value?.querySelector("iframe");
		if (giscusFrame) {
			console.log("Updating theme via postMessage");
			giscusFrame.contentWindow?.postMessage(
				{
					giscus: { setConfig: { theme: newTheme } },
				},
				"https://giscus.app",
			);
		} else {
			console.log("No iframe found");
		}
	});

	observer.observe(document.documentElement, {
		attributes: true,
		attributeFilter: ["class"],
	});
});
</script>

<style>
.comments-section {
  width: 100%;
  font-family: "IBM Plex Mono", monospace;
}

.comments-section:focus,
.comments-section iframe:focus {
  outline: none !important;
  box-shadow: none !important;
  border: none !important;
}
</style>
