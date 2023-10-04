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
      boxShadow: {
        normal: '0px 4px 24px rgba(189, 189, 189, 0.23)',
        normal_dark: '0px 4px 24px rgba(16, 31, 46, 0.53)',
      },
      fontSize: {
        xxs: '0.625rem',
      },
    },
  },
  plugins: [],
}