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
        mist: "#f4f1e8",
        parchment: "#efe9dc",
        olive: "#6b7148",
        oliveDeep: "#4c5231",
        sage: "#dbe1cf",
        clay: "#b88f72",
        ink: "#171713",
        dusk: "#4f5146",
      },
      boxShadow: {
        panel: "0 24px 64px rgba(23, 23, 19, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
