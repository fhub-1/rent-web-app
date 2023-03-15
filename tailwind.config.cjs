/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: '#1aa090',
        brand1: "#ffffff"
      },
    },
  },
  plugins: [],
};

module.exports = config;
