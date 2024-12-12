/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        marker:['Concert One'],
        chalk:['Edu AU VIC WA NT Arrows'],
        cursive:['Cookie'],
        true:['Yuji Mai'],
        design:['Oleo Script'],

      },
      colors:{
        flame:"#E1551E",
        richblack:"#11151C",
        lavender:"#B0BEE6",
        lightlaven:"#CCD6F1",
        thicklav:"#86A4F7",
        blood:"#8D5B4C",
        mint:"#CCF5AC",
      },
    },
  },
  plugins: [],
}

