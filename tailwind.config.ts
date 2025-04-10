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
    },
  },
  plugins: [],
};
export default config;
