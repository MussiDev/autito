/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
  theme:{
    extend:{
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        main: '#000910',
        secondary: '#fb8500',
        third: '#0a1128',
        fourth: '#007ea7'
      }
    }
  }
}
