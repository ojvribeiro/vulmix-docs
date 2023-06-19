<script setup>
  defineProps(['src', 'alt'])
</script>

<template>
  <p>
    <nuxt-img format="webp" loading="lazy" :alt="alt" :src="src" />
  </p>
</template>

<style scoped>
  p {
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
</style>
