export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    'nuxt-icon',
    '@vueuse/nuxt',
    'nuxt-og-image',
    '@nuxtjs/tailwindcss'
  ],

  content: {
    highlight: {
      theme: 'github-dark',
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ['~/assets/css/main.css'],

  ogImage: {
    satoriOptions: {
      width: 1200,
      height: 630,
      tailwindConfig: {
        theme: {
          extend: {
            colors: {
              'vx-grey-500': '#181818',
            },
          },
        },
      },
    },
  },

  devtools: true
})