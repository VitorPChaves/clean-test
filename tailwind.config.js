/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#010066", // chosen blue
        secondary: "#00af94", // chosen green
        accent: "#FFD700", // optional: golden
      },
      fontFamily: {
        elegante: ["Elegante", "serif"], // For titles, headers
        poppins: ["Poppins", "sans-serif"], // For UI and body
        montblanc: ["MontBlanc", "sans-serif"], // For secondary text, pricing etc.
      },
    },
  },
  plugins: [],
};
