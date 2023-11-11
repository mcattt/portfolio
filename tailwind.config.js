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
      backgroundImage: {
        'radial-gradient-1': 'radial-gradient(#8797ff, transparent, transparent)',
        'radial-gradient-2': 'radial-gradient(#FF9CEB, transparent, transparent)',
        'radial-gradient-3': 'radial-gradient(#6630FF, transparent, transparent)',
        'radial-gradient-4': 'radial-gradient(#4EB2FF, transparent, transparent)',
      },

      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      boxShadow: {
        'custom': 'inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, .2)',
      },
      fontFamily: {
        "extradica": ['extradica', 'sans-serif'],
        "sans": ['steppe', 'sans-serif'],
      },
      screens: {
        "desktop": "900px",
        'breakpoint-450': "450px",
        'breakpoint-560': "560px",
        'breakpoint-660': '660px',
        'breakpoint-1080': '1080px',
        'breakpoint-1200': '1200px',

      },
      animation: {
        'gradient': 'background 1s',

        text: 'text 15s ease infinite',

      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },

        },


      },
      transitionProperty: {
        'width': 'width', // Add a custom transition for the 'width' property
        // You can add more custom transition properties as needed
        'fill': 'fill',
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