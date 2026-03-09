/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        cream: '#fffce3',
        primary: '#242424',
        'accent-blue': '#a8c8f8',
        offwhite: '#f5f5f5',
        muted: '#9e9e9e',
        white: '#ffffff',
        error: '#e53935',
        'task-yellow': '#f7e96b',
        'task-pink': '#f8c8d4',
        'task-green': '#c8f0d8',
        'task-blue': '#a8c8f8',
      },
      fontFamily: {
        sans: ['System'],
      },
      borderRadius: {
        DEFAULT: '8px',
        lg: '16px',
        xl: '24px',
        full: '9999px',
      },
    },
  },
  plugins: [],
};
