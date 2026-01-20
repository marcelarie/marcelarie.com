<template>
  <div :class="['notification', type]" class="notification">
    <div class="notification-header">
      <span class="notification-author">{{ author }}</span>
      <div class="notification-meta">
        <span v-if="replies" class="notification-replies">{{ replies }}</span>
        <span v-if="time" class="notification-time">{{ time }}</span>
      </div>
    </div>
    <div class="notification-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  author: string;
  replies?: number;
  type?: "urgent" | "info" | "warning";
  time?: string;
}

withDefaults(defineProps<Props>(), {
  replies: undefined,
  type: undefined,
  time: undefined,
});
</script>

<style scoped>
.notification {
  max-width: 300px;
  height: 80px;
  margin: 0 auto 1rem auto;
  padding: 0.5rem 0.75rem 0.625rem 0.75rem;
  border-radius: 18px;
  font-family: var(--font-atkinson);
  font-size: 0.85rem;
  line-height: 1.35;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

:root .notification {
  background: linear-gradient(135deg, #dcf8c6 0%, #d4f7c6 100%);
}

:root .notification.urgent {
  background: linear-gradient(135deg, #ffdede 0%, #ffd1d1 100%);
}

:root .notification.warning {
  background: linear-gradient(135deg, #fff7d6 0%, #ffebbf 100%);
}

:root .notification.info {
  background: linear-gradient(135deg, #d6e8ff 0%, #c7dfff 100%);
}

html.dark .notification {
  background: linear-gradient(135deg, #0a3d2e 0%, #082e22 100%);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

html.dark .notification.urgent {
  background: linear-gradient(135deg, #3d1a1a 0%, #2d1212 100%);
}

html.dark .notification.warning {
  background: linear-gradient(135deg, #3d2f0d 0%, #2d2208 100%);
}

html.dark .notification.info {
  background: linear-gradient(135deg, #0d1f3d 0%, #08142d 100%);
}

.notification-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
}

.notification-author {
  font-weight: 600;
  color: #075e54;
  font-size: 0.9rem;
}

html.dark .notification-author {
  color: #25d366;
}

.notification-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.notification-replies {
  font-size: 0.65rem;
  padding: 0.15rem 0.4rem;
  border-radius: 9999px;
  background-color: rgba(7, 94, 84, 0.15);
  color: #075e54;
  font-weight: 600;
}

html.dark .notification-replies {
  background-color: rgba(37, 211, 102, 0.2);
  color: #25d366;
}

.notification-time {
  font-size: 0.65rem;
  color: rgba(7, 94, 84, 0.7);
  font-weight: 500;
}

html.dark .notification-time {
  color: rgba(37, 211, 102, 0.7);
}

.notification-content {
  color: #111b21;
  word-wrap: break-word;
}

html.dark .notification-content {
  color: #ece5dd;
}
</style>
