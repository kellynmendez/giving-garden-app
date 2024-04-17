/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",'node_modules/preline/dist/*.js',],
  plugins:[require('flowbite/plugin'), require('preline/plugin'),],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roobert', 'sans-serif']
      }
    },
  },
  plugins: [],
}