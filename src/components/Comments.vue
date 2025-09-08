<template>
  <div class="comments-section mt-8">
    <div ref="giscusContainer"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Props {
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: ''
})

const giscusContainer = ref<HTMLElement>()

onMounted(() => {
  if (!giscusContainer.value) return

  const isDark = document.documentElement.classList.contains('dark')
  const theme = isDark ? `${window.location.origin}/giscus-theme.css` : `${window.location.origin}/giscus-light-theme-clean.css`
  
  console.log('Loading giscus with theme:', theme)
  console.log('Current pathname:', window.location.pathname)
  
  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', 'marcelarie/marcelarie.com')
  script.setAttribute('data-repo-id', 'MDEwOlJlcG9zaXRvcnkyODU1OTY4MzE') 
  script.setAttribute('data-category', 'General')
  script.setAttribute('data-category-id', 'DIC_kwDOEQXcn84CvJvn') 
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '0')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'top')
  script.setAttribute('data-theme', theme)
  script.setAttribute('data-lang', 'en')
  script.setAttribute('data-loading', 'lazy')
  script.crossOrigin = 'anonymous'
  script.async = true

  giscusContainer.value.appendChild(script)

  const observer = new MutationObserver(() => {
    const isDarkNow = document.documentElement.classList.contains('dark')
    const newTheme = isDarkNow ? `${window.location.origin}/giscus-theme.css` : `${window.location.origin}/giscus-light-theme-clean.css`
    
    console.log('Theme change detected:', { isDarkNow, newTheme })
    
    const giscusFrame = giscusContainer.value?.querySelector('iframe')
    if (giscusFrame) {
      console.log('Updating theme via postMessage and reload')
      giscusFrame.contentWindow?.postMessage({
        giscus: { setConfig: { theme: newTheme } }
      }, 'https://giscus.app')
      
      setTimeout(() => {
        if (giscusFrame.contentDocument) {
          giscusFrame.src = giscusFrame.src
          console.log('Iframe reloaded')
        }
      }, 500)
    } else {
      console.log('No iframe found')
    }
  })

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  })
})
</script>

<style>
.comments-section {
  width: 100%;
  font-family: "IBM Plex Mono", monospace;
}

.comments-section:focus,
.comments-section *:focus,
.comments-section iframe:focus {
  outline: none !important;
  box-shadow: none !important;
  border: none !important;
}

</style>
