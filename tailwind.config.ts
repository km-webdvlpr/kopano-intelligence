import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: "#4e784a",
        oliveDeep: "#315b30",
        moss: "#7f9962",
        sand: "#b38748",
        ink: "#152018",
        dusk: "#465442",
      },
      boxShadow: {
        panel: "0 20px 60px rgba(21, 32, 24, 0.07)",
      },
    },
  },
  plugins: [],
};

export default config;
