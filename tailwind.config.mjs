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
        geist: ["Geist", "sans-serif"],
      },

      colors: {
        darkNavy: "#0D1A26",
        offWhite: "#F4FAFF",
        spurOrange: "#FF7F26",
        mutedNavy: "#2B3F53",
        spurTeal: "#00BCD4",
      },
    },
  },
  plugins: [],
};
