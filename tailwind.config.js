/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'base': ['16px', '1.5'],
        'lg': ['18px', '1.75'],
        'xl': ['20px', '1.75'],
        '2xl': ['24px', '1.75'],
        '3xl': ['30px', '1.75'],
        '4xl': ['36px', '1.75'],
      },
      spacing: {
        'touch': '44px',
      },
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      },
    },
  },
  plugins: [],
};