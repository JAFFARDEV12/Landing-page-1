/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gamma-blue': '#485BFF',
        'aqua-marine': '#15F5BA',
        'gamma-dust': '#8B9AFF',
        'gamma-dark': '#1A1F3A',
        'gray-light': '#F5F7FA',
        'gray-medium': '#E8ECF0',
      },
      fontFamily: {
        'akceler': ['Roboto', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

