/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        vx: {
          'grey-200': '#808080',
          'grey-300': '#4d4d4d',
          'grey-400': '#232323',

          'green-100': '#1DBA78',
          'green-200': '#199461',

          brand: {
            green: '#3DDA98',
            pink: '#F3A1F0',
          },

          alert: {
            warning: 'rgb(255 251 0 / 10%)',
            note: 'rgb(0 137 255 / 16%)',
            danger: 'rgb(255 0 0 / 16%)',
          },
        },
      },
    },
  },
  plugins: [],
}
