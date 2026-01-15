
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          50: '#fdf8f1',
          100: '#fbeed9',
          200: '#f7dbb2',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      fontFamily: {
        title: ['Nanum Myeongjo', 'serif'],
        sans: ['Gowun Batang', 'serif'],
      },
      keyframes: {
        steam: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0' },
          '20%': { opacity: '0.4' },
          '100%': { transform: 'translateY(-80px) scale(1.8)', opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        steam: 'steam 3s infinite linear',
        fadeIn: 'fadeIn 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
