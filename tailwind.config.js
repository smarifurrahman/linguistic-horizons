/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'transparent': 'transparent',
        'dark': '#1A1919',
        'light-dark': '#474747',
        'gray': '#757575',
        'white': '#FFFFFF',
        'deep-gray': '#E8E8E8',
        'deep-white': '#F4F4F4',
        'footer-dark': '#1D2228',
        'footer-white': 'rgba(255, 255, 255, 0.7)',
        'primary-color': '#4acdd5',
        'secondary-color': '#ff6799',
        'white-secondary': '#fafafa',
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}

