/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
        '10xl': '8rem',
        '11xl': '10rem',
        '12xl': '12rem',
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        liquid: {
          "0%": {
            transform: "translateY(0) rotate(0deg)",
          },
          "100%": {
            transform: "translateY(-100%) rotate(360deg)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 3s ease-out",
        "fade-in-right": "fade-in-right 3s ease-out",
        "liquid-fill": "liquid 6.5s ease-in-out 1 forwards",
      },
    },
  },
  plugins: [],
};
