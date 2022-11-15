/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      Montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        'darkslate-grey': '#273042',
      },
      strokeWidth: {
        6: '6px',
      },
      spacing: {
        200: '200%',
      },
    },
  },
  plugins: [],
};
