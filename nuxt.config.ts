export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%pageTitle %titleSeparator %siteName',
    },
  },

  modules: [
    '@nuxt/content',
    'nuxt-icon',
    '@vueuse/nuxt',
    'nuxt-og-image',
    '@nuxtjs/tailwindcss',
  ],

  extends: ['nuxt-seo-kit'],

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://vulmix.dev',
      siteName: 'Vulmix',
      siteDescription: 'A Vue 3 meta-framework that uses Laravel Mix.',
      titleSeparator: '-',
      language: 'en-US',
    },
  },

  content: {
    documentDriven: true,
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

  devtools: true,
})
