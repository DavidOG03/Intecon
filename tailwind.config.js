/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue":"#00BFEC",
        "white": "#FFFFFF",
        "darkblue": "#546CFF",
        "edgeblue": "#0099BD",
        "border": "#D9D9D9"

      },
      backgroundImage:{
        "plan": 'url("/images/drawing-plan.png")',
        
      }
    },
  },
  plugins: [],
}

