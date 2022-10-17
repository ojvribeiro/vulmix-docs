<template>
  <blockquote>
    <slot />
  </blockquote>
</template>

<script setup>
  const props = defineProps({

  })
</script>

<style lang="scss" scoped>
  blockquote {
    @apply p-4 mb-6;

    border-left: 2px solid rgba(#fff, 15%);
    border-radius: none;
  }
</style>
