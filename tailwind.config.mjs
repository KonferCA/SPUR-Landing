import defaultTheme from "tailwindcss/defaultTheme";

/*
 *
 * @description Tailwind config
 *
 */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      keyframes: {
        rotateUp: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-180deg)" },
        },

        rotateDown: {
          "0%": { transform: "rotate(-180deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },

      animation: {
        rotateUp: "rotateUp 0.3s forwards",
        rotateDown: "rotateDown 0.3s forwards",
      },

      fontSize: {
        "2.5xl": ["1.6875rem", "1.2"],
        "3.5xl": ["2rem", "1.2"],
        "4.5xl": ["2.6875rem", "1.2"],
        "5.5xl": ["3.375rem", "1"],
        "6.5xl": ["4.125rem", "1"],
        "7.5xl": ["5.25rem", "1"],
        "8.5xl": ["6.875rem", "1"],
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      colors: {
        peachPuff: "#FDDDB7",
      },

      translate: {
        0.75: "0.1875rem", // (0.125rem + 0.25) / 2
      },
    },
  },
  plugins: [],
};
