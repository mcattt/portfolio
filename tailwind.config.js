/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gradient-1-start": " #8797FF",
        "gradient-1-end": "#FF9CEB",
        "gradient-2-start": "#6630FF",
        "gradient-2-end": "#4EB2FF",
        "background": "#111111",
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      fontFamily: {
        "extradica": ['extradica', 'sans-serif'],
        "sans": ['steppe', 'sans-serif'],
      },
      screens: {
        "desktop": "900px",
      },
      animation: {
        'gradient': 'background 1s',
      },
      keyframes: {
        'gradientAnimation': {
          '0%': { 'background-position': '0%' },
          '100%': { 'background-position': '100%' },
        },
        
      },
      transitionProperty: {
        'width': 'width', // Add a custom transition for the 'width' property
        // You can add more custom transition properties as needed
      },
      transitionDuration: {
        '200': '200ms', // Define the duration for 'width' transition
      },
      transitionTimingFunction: {
        'ease': 'ease', // Define the timing function
      },
    },
  },


  plugins: [],
}