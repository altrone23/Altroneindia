/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7dc8fc',
          400: '#3aabf9',
          500: '#1493eb',
          600: '#0073ce',
          700: '#005ca7',
          800: '#084f8a',
          900: '#0c4273',
        },
        accent: {
          50: '#fff8e6',
          100: '#ffefc6',
          200: '#ffde85',
          300: '#ffc946',
          400: '#ffb91a',
          500: '#ff9900',
          600: '#e67a00',
          700: '#cc5500',
          800: '#a53f00',
          900: '#802e00',
        },
        secondary: {
          50: '#edfafa',
          100: '#d5f5f6',
          200: '#abe9eb',
          300: '#6ed9db',
          400: '#39c6c9',
          500: '#2aabae',
          600: '#1f8a8c',
          700: '#1d6c6e',
          800: '#1b5758',
          900: '#1a4a4b',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-in forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'text-shimmer': 'shimmer 2.5s ease-in-out infinite',
        'text-shadow': 'textShadow 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        shimmer: {
          '0%': { textShadow: '0 0 5px rgba(255, 153, 0, 0.2)' },
          '50%': { textShadow: '0 0 20px rgba(255, 153, 0, 0.6)' },
          '100%': { textShadow: '0 0 5px rgba(255, 153, 0, 0.2)' },
        },
        textShadow: {
          '0%': { textShadow: '0 0 10px rgba(0, 115, 206, 0)' },
          '50%': { textShadow: '0 0 10px rgba(0, 115, 206, 0.3)' },
          '100%': { textShadow: '0 0 10px rgba(0, 115, 206, 0)' },
        },
      },
      boxShadow: {
        'glow': '0 0 15px rgba(255, 153, 0, 0.5)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      transitionProperty: {
        'height': 'height',
      },
    },
  },
  plugins: [],
}