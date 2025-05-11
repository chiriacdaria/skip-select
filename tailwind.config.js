/** @type {import('tailwindcss').Config} */

const colors = require('./src/styles/colors.ts'); 

module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Make sure it points to your .tsx files
  ],
 theme: {
    extend: {
      colors: colors, 
   },
  },
  plugins: [
    require('@tailwindcss/postcss'),
    require('autoprefixer'),
  ],
};
