/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,html}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#192833',
        green: '#339933',
        green_dark: '#006300',
        red_sale: '#FF32A1',
      },
      borderRadius: {
        tiny: '5px',
        xsmall: '10px',
        small: '15px',
        medium: '20px',
        middle: '25px',
        normal: '30px',
        large: '50px',
      },
    },
  },
  plugins: [],
}