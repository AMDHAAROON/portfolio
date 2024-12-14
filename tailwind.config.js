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
        flame:"#F7B2BD",
        dkflame:"#E77A8C",
        lavender:"#B0BEE6",
        lightlaven:"#CCD6F1",
        thicklav:"#86A4F7",
        mint:"#88ECCE",
        dmint:"#0DC18B",
       
      
      },
    },
  },
  plugins: [],
}

