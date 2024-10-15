/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       colors: {
        "extra-color": "#ffdd79", // Custom color
      },
    },
  },
  plugins: [],
};