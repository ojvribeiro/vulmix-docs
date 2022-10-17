<template>
  <p>
    <slot />
  </p>
</template>

<style lang="scss" scoped>
  p {
    @apply text-lg mb-6;

    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
