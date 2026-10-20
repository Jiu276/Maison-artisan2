import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — warm ivory, deep charcoal, dusty rose gold
        ivory: {
          50:  "#FDFBF7",
          100: "#FAF6EE",
          200: "#F5EDDB",
          300: "#EDE0C8",
          DEFAULT: "#F5EDDB",
        },
        charcoal: {
          50:  "#F5F5F4",
          700: "#2D2B2A",
          800: "#1E1C1B",
          900: "#141312",
          DEFAULT: "#2D2B2A",
        },
        gold: {
          200: "#E8D5B7",
          300: "#D4B896",
          400: "#C09C6E",
          500: "#A87C4F",
          600: "#8B6340",
          DEFAULT: "#C09C6E",
        },
        rosegold: {
          100: "#F5E6DC",
          300: "#DDB49A",
          400: "#C8937A",
          DEFAULT: "#C8937A",
        },
        sage: {
          100: "#E8EDE6",
          300: "#B5C4B0",
          500: "#7A9472",
          DEFAULT: "#7A9472",
        },
      },
      fontFamily: {
        serif:  ["'Cormorant Garamond'", "Georgia", "serif"],
        sans:   ["'DM Sans'", "system-ui", "sans-serif"],
        display:["'Playfair Display'", "Georgia", "serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
        widest3: "0.35em",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "fade-up":   "fadeUp 0.8s ease forwards",
        "fade-in":   "fadeIn 1s ease forwards",
        "slide-left":"slideLeft 0.6s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideLeft: {
          "0%":   { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
export default config;
