/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "550px",
      // => @media (min-width: 640px) { ... }

      md: "880px",
      // => @media (min-width: 880px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        press: [' "Press Start 2P" ', "sans-serif"],
      },
    },
  },
  plugins: [],
};
