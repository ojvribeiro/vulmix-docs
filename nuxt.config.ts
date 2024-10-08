// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: (titleChunk: string) => {
        return titleChunk ? `${titleChunk} - Vulmix` : 'Vulmix'
      },
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
  ],

  build: { transpile: ['shiki'] },

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

  fonts: {
    families: [
      { name: 'DM Sans' },
      { name: 'Inconsolata' },
      { name: 'Poppins', weights: [400, 700, 800] },
    ],
  },

  tailwindcss: {
    viewer: false,
  },

  compatibilityDate: '2024-08-07',
})
