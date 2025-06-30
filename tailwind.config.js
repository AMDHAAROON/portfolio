/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily:{
        marker:['Concert One'],
        chalk:['Edu AU VIC WA NT Arrows'],
        cursive:['Cookie'],
        true:['Yuji Mai'],
        design:['Oleo Script'],
        cal:[ "Cal Sans"], 
      },
      
      colors:{
        flame:"#FD6D85",
        amarnath:'#D6415A',
        dkflame:"C90021",
        lavender:"#6C91FF",
        lightlaven:"#CCD6F1",
        thicklav:"#86A4F7",
        mint:"#88ECCE",
        dmint:"#0DC18B",
       
      
      },
     
    },
  },
  plugins: [],
}

