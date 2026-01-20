<template>
  <div :class="['notification', type]" class="notification">
    <div class="notification-header">
      <span class="notification-author">{{ author }}</span>
      <span v-if="replies" class="notification-replies">{{ replies }}</span>
    </div>
    <div class="notification-content">
      <slot />
    </div>
    <div v-if="date || time" class="notification-footer">
      <span v-if="date" class="notification-date">{{ formatDate(date) }}</span>
      <span v-if="time" class="notification-time">{{ formatTime(time) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  author: string;
  replies?: number;
  type?: "urgent" | "info" | "warning";
  date?: string;
  time?: string;
}

withDefaults(defineProps<Props>(), {
  replies: undefined,
  type: undefined,
  date: undefined,
  time: undefined,
});

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString([], { month: "short", day: "numeric" });
};

const formatTime = (timeStr: string) => {
  return timeStr;
};
</script>

<style scoped>
.notification {
  max-width: 320px;
  margin: 0 auto 1rem auto;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  font-family: var(--font-atkinson);
  font-size: 0.875rem;
  line-height: 1.4;
  border: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

:root .notification {
  background-color: #e7ffdb;
  border-left: 4px solid #25d366;
}

:root .notification.urgent {
  background-color: #fff7ed;
  border-left-color: #ff4500;
}

:root .notification.warning {
  background-color: #fffbeb;
  border-left-color: #ff9500;
}

:root .notification.info {
  background-color: #f0f4ff;
  border-left-color: #0066cc;
}

html.dark .notification {
  background-color: #005c4b;
  border-left-color: #25d366;
}

html.dark .notification.urgent {
  background-color: rgba(255, 69, 0, 0.2);
  border-left-color: #ff6b6b;
}

html.dark .notification.warning {
  background-color: rgba(255, 149, 0, 0.2);
  border-left-color: #ffa94d;
}

html.dark .notification.info {
  background-color: rgba(0, 102, 204, 0.2);
  border-left-color: #74c0fc;
}

.notification-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.notification-author {
  font-weight: 600;
  color: var(--color-text);
  font-size: 0.95rem;
}

.notification-replies {
  font-size: 0.7rem;
  padding: 0.2rem 0.5rem;
  border-radius: 9999px;
  background-color: rgba(0, 0, 0, 0.1);
  color: var(--color-text);
  font-weight: 500;
}

html.dark .notification-replies {
  background-color: rgba(255, 255, 255, 0.15);
}

.notification-content {
  color: var(--color-text);
  margin-bottom: 0.5rem;
}

.notification-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
}

.notification-date,
.notification-time {
  font-size: 0.7rem;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 400;
}

html.dark .notification-date,
html.dark .notification-time {
  color: rgba(255, 255, 255, 0.5);
}

:root .notification-content a {
  color: var(--color-link);
  text-decoration: underline;
}

html.dark .notification-content a {
  color: #74c0fc;
}
</style>
