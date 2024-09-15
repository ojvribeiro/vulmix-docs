<template>
  <blockquote>
    <slot />
  </blockquote>
</template>

<script setup>
  const props = defineProps({})
</script>

<style lang="scss" scoped>
  blockquote {
    @apply mb-6 p-4;

    border-left: 2px solid rgba(#fff, 15%);
    border-radius: none;
  }
</style>
