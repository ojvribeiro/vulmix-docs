export default defineNuxtConfig({
  modules: ['@nuxt/content', 'nuxt-icon', '@vueuse/nuxt', 'nuxt-og-image'],

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
      height: 627,
    },
  },
})
