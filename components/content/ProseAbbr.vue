<template>
  <abbr :title="props.title"><slot /></abbr>
</template>

<script setup lang="ts">
  const props = defineProps<{
    title: string
  }>()
</script>

<style scoped>
  abbr {
    @apply cursor-help border-b border-dashed border-vx-brand-pink text-vx-brand-pink no-underline;
  }
</style>
