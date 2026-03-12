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
        olive: "#246235",
        oliveDeep: "#163f23",
        moss: "#5f7d4b",
        gold: "#c69e56",
        ink: "#132117",
        dusk: "#445345",
      },
      boxShadow: {
        panel: "0 18px 50px rgba(19, 33, 23, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
