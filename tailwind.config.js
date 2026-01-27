/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  darkMode: 'class',
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
        },
        // Space Theme Colors
        space: {
          void: '#050510',
          deep: '#0f0f1e',
          nebula: '#1a1a35',
          star: '#ffffff',
        },
        cosmic: {
          cyan: '#00d4ff',
          purple: '#8b5cf6',
          pink: '#ec4899',
          green: '#10b981',
          gold: '#fbbf24',
          indigo: '#6366f1',
          violet: '#a855f7',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'nebula-dark': 'radial-gradient(ellipse at center, rgba(139,92,246,0.15) 0%, transparent 70%)',
        'nebula-light': 'radial-gradient(ellipse at center, rgba(99,102,241,0.1) 0%, transparent 70%)',
        'cosmic-gradient': 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
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
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      boxShadow: {
        'cosmic': '0 0 20px var(--glow-color), 0 0 40px var(--glow-color)',
        'cosmic-sm': '0 0 10px var(--glow-color)',
        'cosmic-lg': '0 0 30px var(--glow-color), 0 0 60px var(--glow-color)',
      },
    },
  },
  plugins: [
  ],
});
