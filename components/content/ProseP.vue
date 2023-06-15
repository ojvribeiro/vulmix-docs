<template>
  <p>
    <slot />
  </p>
</template>

<style lang="scss" scoped>
  p {
    @apply mb-6 text-lg;

    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
