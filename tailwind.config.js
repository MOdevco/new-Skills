/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#001C54',
        purple: '#AA3CF1',
        orange: '#FC8040',
        pink: '#FA9CE2',
        yellow: '#FFA9E8'
      }
    },
    screens: {
      xs: '420px',
      ss: '620px',
      sm: '768px',
      md: '920px',
      lg: '1200px',
      xl: '1700px',
    }
  },
  plugins: [],
}