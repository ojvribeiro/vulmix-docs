export default defineNuxtConfig({
  modules: ['@nuxt/content', 'nuxt-icon', '@vueuse/nuxt'],

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
})
