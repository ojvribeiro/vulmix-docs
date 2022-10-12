<template>
  <div class="bg-vx-grey-400 text-white min-h-screen">
    <NuxtPage />
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&family=Inconsolata&family=Poppins:wght@400;700;800&display=swap');

  body {
    font-family: 'DM Sans', sans-serif;

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

