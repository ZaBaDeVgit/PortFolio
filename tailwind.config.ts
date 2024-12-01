import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "rgba(255, 27, 0, 1)",
        darkBg: "linear-gradient(90.21deg, rgba(1, 1, 1, 1.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(90.21deg, rgba(0, 0, 0, 1.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",

      }
    },
  },
  plugins: [],
};
export default config;
