const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 5s linear infinite",
        glow: "glow 5s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-80%)" },
        },
        glow: {
          "0%, 100%": {
            "text-shadow": "0 0 10px #fff, 0 0 20px #ff0000",
            filter: "brightness(1.2)",
          },
          "50%": {
            "text-shadow": "0 0 20px #ff0000, 0 0 30px #ff0000",
            filter: "brightness(1.5)",
          },
        },
      },
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), nextui()],
};
