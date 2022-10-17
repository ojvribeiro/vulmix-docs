<template>
  <NuxtLink :href="href">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
  defineProps({
    href: {
      type: String,
      default: ''
    },
    blank: {
      type: Boolean,
      default: false
    }
  })
</script>

<style lang="scss" scoped>
  a {
    @apply text-vx-brand-green;

    padding: 2px 0;

    &:hover {
      border-bottom: 1px dashed rgba(#fff, 20%);
    }
  }
</style>
