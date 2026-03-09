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
        // Backgrounds
        cream: '#fffce3',
        offwhite: '#fafafa',
        white: '#ffffff',

        // Primary
        primary: '#242424',

        // Accent
        'accent-blue': '#6270f0',
        'accent-yellow': '#ffe600',

        // Category card backgrounds
        'category-works': '#fffce3',
        'category-sport': '#e9ffe3',
        'category-habits': '#e3e6ff',

        // Text
        'text-secondary': '#606060',
        muted: '#757575',

        // Utility
        divider: '#d7d7d7',
        error: '#e53935',
      },
      borderRadius: {
        screen: '30px',
        'task-list': '45px',
        pill: '100px',
      },
    },
  },
  plugins: [],
};
