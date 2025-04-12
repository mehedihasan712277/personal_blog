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
        bg: "var(--bg)",
        foreground: "var(--foreground)",
        textColor: "var(--textColor)",
        softBg: "var(--softBg)",
        softTextColor: "var(--softTextColor)"
      },
      fontFamily: {
        sans: ["var(--font-work-sans)", "sans-serif"],
        raleway: ["var(--font-raleway)", "sans-serif"],
      },
      screens: {
        "21i": "1900px",
        "15i": "1500px",
        "14i": "1360px",
        "ms": "300px",
        "mm": "350px",
        "ml": "425px",
        "mv": "572px",
      }
    },
  },
  plugins: [],
};
export default config;
