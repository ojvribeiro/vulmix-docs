<template>
  <div>
    <NuxtLoadingIndicator color="repeating-linear-gradient(to right, #3DDA98 0%, #B940FF 50%, #F3A1F0 100%)" />

    <Navbar />

    <NuxtPage />
  </div>
</template>

<script setup>
  useHead({
    title: 'Vulmix'
  })
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&family=Inconsolata&family=Poppins:wght@400;700;800&display=swap');

  body {
    @apply bg-vx-grey-400 text-white min-h-screen overflow-x-hidden;

    font-family: 'DM Sans', sans-serif;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 16px;

      &-track {
        @apply bg-transparent;
      }

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

