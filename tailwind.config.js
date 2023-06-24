/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite-react/**/*.js",
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
        },
        'genoa': {
          DEFAULT: '#166064',
          50: '#57D3DA',
          100: '#47CFD6',
          200: '#2CC0C8',
          300: '#25A0A7',
          400: '#1D8085',
          500: '#166064',
          600: '#0C3436',
          700: '#020808',
          800: '#000000',
          900: '#000000'
        },
        'cloud': {
          DEFAULT: '#C8C5BD',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#EDECEA',
          400: '#DBD9D3',
          500: '#C8C5BD',
          600: '#AFAA9E',
          700: '#958F80',
          800: '#787364',
          900: '#5A564B',
          950: '#4A473E'
        },
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
    require('flowbite/plugin')
  ],
}
