<template>
  <div>
    <NuxtLoadingIndicator
      color="repeating-linear-gradient(to right, #3DDA98 0%, #B940FF 50%, #F3A1F0 100%)"
    />

    <Navbar />

    <SeoKit />
    <NuxtPage />
  </div>
</template>

<script setup>
  useHead({
    htmlAttrs: {
      lang: 'en',
    },

    meta: [
      {
        name: 'google-site-verification',
        content: 'P-pb9Ch6gLn9pkjGK95KSwOVXp_QWcCMmEAZ8PRSHMk',
      },
    ],

    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/img/icons/favicon/apple-touch-icon.png',
      },

      {
        rel: 'icon',
        sizes: '32x32',
        href: '/img/icons/favicon/favicon-32x32.png',
      },

      {
        rel: 'icon',
        sizes: '16x16',
        href: '/img/icons/favicon/favicon-16x16.png',
      },

      {
        rel: 'manifest',
        href: '/img/icons/favicon/site.webmanifest',
      },

      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },

      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: '',
      },
    ],
  })
</script>

<style lang="scss">
  @import '~/assets/sass/main';

  body {
    @apply min-h-screen overflow-x-hidden bg-vx-grey-400 text-white;

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

    pre,
    code {
      font-family: 'Inconsolata', monospace;
    }
  }
</style>
