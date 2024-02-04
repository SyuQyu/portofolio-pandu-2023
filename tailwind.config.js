/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/parts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#E4E6EC",
          100: "#C6C9D8",
          200: "#8C93B0",
          300: "#596182",
          400: "#323649",
          500: "#0B0C10",
          600: "#08090C",
          700: "#060709",
          800: "#040506",
          900: "#020203",
          950: "#020203"
        },
        secondary: {
          50: "#F0FFFE",
          100: "#E1FEFC",
          200: "#C3FEFA",
          300: "#A5FDF7",
          400: "#87FDF5",
          500: "#66FCF1",
          600: "#23FBEC",
          700: "#04D2C4",
          800: "#038C83",
          900: "#014641",
          950: "#012321"
        }
      
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        xsm: '360px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [
  ],
});
