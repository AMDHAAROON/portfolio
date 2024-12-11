/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        marker:['Concert One'],
        chalk:['Edu AU VIC WA NT Arrows'],
        cursive:['Cedarville Cursive'],

      },
      colors:{
        flame:"#E1551E",
        richblack:"#11151C",
        lavender:"#B0BEE6",
        lightlaven:"#CCD6F1",
      },
    },
  },
  plugins: [],
}

