<template>
  <ul>
    <slot />
  </ul>
</template>

<style lang="scss" scoped>
  ul {
    @apply mb-12 text-lg;

    list-style: disc;
    margin-left: 20px;
  }
</style>
