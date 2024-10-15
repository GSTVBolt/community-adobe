import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // 'iphone-x': '350px',
      },
      colors: {
        bgNav: "#4f8ec5",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
