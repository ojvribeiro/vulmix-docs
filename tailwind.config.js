/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app.vue', './pages', './components'],
  theme: {
    extend: {
      colors: {
        vx: {
          'brand-green': '#3DDA98',
          'brand-pink': '#F3A1F0',

          'grey-300': '#4d4d4d',
          'grey-400': '#232323',
        },
      },
    },
  },
  plugins: [],
}
