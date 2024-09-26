/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
    
    
  ],
  theme: {
    extend: {
      colors:{
        bodyColor: "#F3F3F3"
      }
    },
    fontFamily: {
      body: ['DM Sans']
    }
  },
  plugins: [],
}