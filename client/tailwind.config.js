/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray : {
          200:"#647C90",
          100:"#eeeeef",
          600:"#95989c"
        },
        purple:{
          200:"#D4F1F4",
          500:"#189AB4",
          600:"#05445E"
        }
      }
    },
  },
  plugins: [],
}

