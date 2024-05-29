/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "jost" : [ '"Jost", sans-serif'],
        "inter": [ '"Inter", sans-serif'],
      },
      colors: {
        "blue":"#00BFEC",
        "white": "#FFFFFF",
        "darkblue": "#546CFF",
        "edgeblue": "#0099BD",
        "border": "#D9D9D9"

      },
      backgroundImage:{
        "plan": 'url("/images/drawing-plan.png")',
        "plan-2": 'url("/images/drawing-plan-2.png")',
        
      }
    },
  },
  plugins: [],
}

