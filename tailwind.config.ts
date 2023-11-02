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
      },
      maxWidth: {
        layout: "1240px",
      },
    },
    colors: {
      primary: "#006ae7",
      secondary: "#fc0016",
      black: "#141313",
      accent: "#7d7373",
    },
    backgroundColor: {
      primary: "#006ae7",
      secondary: "#fc0016",
      black: "#141313",
      accent: "#7d7373",
    },
  },
  plugins: [],
};
export default config;
