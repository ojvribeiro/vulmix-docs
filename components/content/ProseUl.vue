<template>
  <ul>
    <slot />
  </ul>
</template>

<style lang="scss" scoped>
  ul {
    @apply text-lg mb-12;

    list-style: disc;
    margin-left: 20px;
  }
</style>
