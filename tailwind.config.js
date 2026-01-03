/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#DC2626",
          dark: "#B91C1C",
        },
        gold: {
          DEFAULT: "#D4A574",
          light: "#E8DCC4",
          lighter: "#F5EFE7",
        },
        dark: {
          DEFAULT: "#1F2937",
          charcoal: "#374151",
        },
        green: {
          accent: "#10B981",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
