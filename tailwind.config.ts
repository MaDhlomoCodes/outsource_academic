import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        sand: "#F4F1EA",
        ocean: "#1B2A4A",
        moss: "#3B4E36",
        clay: "#D9A47E",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        serif: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 24px 70px rgba(27, 42, 74, 0.09)",
      },
    },
  },
  plugins: [],
};

export default config;
