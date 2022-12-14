/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'retro': ['\'Press Start 2P\'', 'Roboto', 'sans-serif'],
      },
      transitionProperty: {
        'height': 'height',
        'width': 'width',
      },
      height: {
        'screen/2': '50vh',
        'screen/3': '33.333333vh',
        'screen/4': '25vh',
        'screen/5': '20vh',
      }
    },
  },
  plugins: [],
}