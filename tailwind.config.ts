import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        card: {
          1: "#F9F8F8",
          2: "#123456",
        },
        primary: {
          1: "#274C5B",
        },
        font: {
          gray: "#B8B8B8",
          "dark-blue": "#274C5B",
        },
      },
    },
  },
  plugins: [],
};
export default config;
