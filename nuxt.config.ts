export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@vueuse/nuxt',
  ],

  content: {
    highlight: {
      theme: 'github-dark',
    },
  },
})
