import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        thumb: "url('/bg.png')",
      },
      colors: {
        white: "#FFFFFF",
        gray1: "#F1F1F1",
        purple1: "#C6B3E2",
        purple2: "#967AC3",
        purple3: "#795EB5",
        purple4: "#604A8F",
        navy: "#0E212E",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
export default config;
