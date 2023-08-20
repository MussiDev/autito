/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('@tailwindcss/forms')],
  theme:{
    extend:{
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        main:{
          900: '#000910', 
          500: '#010E18'
        },
        secondary: '#fb8500',
        third: '#0a1128',
        fourth: '#007ea7'
      }
    }
  }
}
