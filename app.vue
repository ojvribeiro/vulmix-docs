<template>
  <div>
    <NuxtLoadingIndicator />

    <NuxtPage />
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&family=Inconsolata&family=Poppins:wght@400;700;800&display=swap');

  body {
    @apply bg-vx-grey-400 text-white min-h-screen;

    font-family: 'DM Sans', sans-serif;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      @apply bg-vx-grey-400;

      width: 16px;

      &-thumb {
        @apply bg-vx-grey-300;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      @apply mb-6 mt-12;

      font-family: 'Poppins', sans-serif;
      font-weight: 800;
    }

    pre, code {
      font-family: 'Inconsolata', monospace;
    }
  }
</style>

