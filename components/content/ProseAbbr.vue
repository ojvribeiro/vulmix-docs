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
    @apply text-vx-brand-pink cursor-help border-b border-vx-brand-pink no-underline border-dashed;
  }
</style>
