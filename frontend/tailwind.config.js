/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        user: '#333541',
        AI: '#444654',
      },
    },
  },
  plugins: [],
};
