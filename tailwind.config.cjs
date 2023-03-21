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
    fontFamily: {
      sans: [
        "Inter var, sans-serif",
        { fontFeatureSettings: '"cv11", "ss01"' },
      ],
    },
  },
  plugins: [],
};

module.exports = config;
