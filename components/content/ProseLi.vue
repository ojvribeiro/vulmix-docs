<template>
  <li><slot /></li>
</template>

<style lang="scss" scoped>
  li {
    @apply mb-3 pl-4;

    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
