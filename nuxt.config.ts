export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', 'nuxt-icon'],

  content: {
    highlight: {
      theme: 'github-dark',
    },
  },
})

