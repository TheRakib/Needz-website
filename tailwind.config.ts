import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      width: {
        layout: "1240px",
        maxLayout: "100%",
      },
      maxWidth: {
        layout: "1240px",
        maxLayout: "100%",
      },
      fontSize: {
        title: "55px",
      },
    },
    colors: {
      primary: "#606C38",
      secondary: "#283618",
      black: "#181818",
      accent: "#7d7373",
      white: "#ffffff",
      yellow: "#ffc000",
    },
    backgroundColor: {
      primary: "#606C38",
      secondary: "#283618",
      black: "#181818",
      accent: "#7d7373",
      white: "#ffffff",
      yellow: "#ffc000",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
