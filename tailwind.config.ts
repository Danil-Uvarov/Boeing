import type { Config } from "tailwindcss";

export default {
  content: [
    "./assets/**/*.{vue,js,css}",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "4rem",
        sm: "3.5rem",
        lg: "4em",
        xl: "3.5rem",
        "2xl": "4rem",
      },
    },
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },

      colors: {
        yellow: "#FFDF3A",
        primary: "#0033A1",
        blue: "#083ADB",
        darkBlue: "#002574",
        sky: "#D7ECFC",
        black: "#000000",
      },
    },
    plugins: [],
  },
} as Config;
