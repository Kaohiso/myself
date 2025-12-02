// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        amatic: ["var(--font-amatic-sc)", "cursive"],
      },
    },
    textShadow: {
      "glow-blue":
        "0 0 10px #0D7CFF, 0 0 20px #0D7CFF, 0 0 30px #0D7CFF, 0 0 40px #0D7CFF",
    },
    transitionProperty: {
      all: "all",
    },
    transitionDuration: {
      500: "500ms",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          "text-shadow": "0 0 0 transparent", // Par défaut, pas de shadow
        },
        ".transition-all-500": {
          transition: "all 0.5s ease",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
