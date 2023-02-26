/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        g500: "#5FA735",
        g600: "#64C42D",
        r600: "#DA5244",
        o500: "#F09839",
        b500: "#71BAC9",
      },
    },
  },
  plugins: [],
};
