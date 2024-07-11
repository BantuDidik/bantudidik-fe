import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        carmine: '#B0183D',
        rose: '#E23C64',
        valencia: '#FF5E5E',
        sunglow: '#FFD464',
        peach: '#FCEDD8',
        gray: '#F5F6FB',
        secondary: '#8B8B8B'
      },

    },
  },
  plugins: [],
};
export default config;
