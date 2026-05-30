import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#06244a",
        electric: "#0a66d8",
        steel: "#eef3f8",
        copper: "#c97238",
        industrial: "#111827"
      },
      boxShadow: {
        lift: "0 24px 70px rgba(6, 36, 74, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
