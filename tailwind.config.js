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
          DEFAULT: "#E63946",      // Strategic red (warmer, more vibrant)
          dark: "#C1303A",         // Darker for hovers
          light: "#FF6B76",        // Lighter for accents
        },
        gold: {
          DEFAULT: "#F4A261",      // Warm amber/gold for CTAs
          dark: "#E89241",         // Darker amber
          light: "#F7C094",        // Light amber
          lighter: "#FFF5ED",      // Very light cream background
        },
        neutral: {
          50: "#FAFAF9",           // Off-white backgrounds
          100: "#F5F5F4",          // Light section backgrounds
          200: "#E7E5E4",          // Borders
          300: "#D6D3D1",          // Dividers
          400: "#A8A29E",          // Muted text
          500: "#78716C",          // Secondary text
          600: "#57534E",          // Body text (softer than pure black)
          700: "#44403C",          // Headings
          800: "#292524",          // Dark elements
          900: "#1C1917",          // Darkest
        },
        accent: {
          blue: "#457B9D",         // Cool accent for trust elements
          green: "#2A9D8F",        // Success states
        },
        // Legacy support (keeping old names for gradual migration)
        dark: {
          DEFAULT: "#1F2937",
          charcoal: "#374151",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0",
        wide: "0.01em",
        wider: "0.02em",
        widest: "0.05em",
      },
      lineHeight: {
        tight: "1.2",
        snug: "1.4",
        normal: "1.6",
        relaxed: "1.8",
        loose: "2.0",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        "card-hover": "0 20px 40px -10px rgba(230, 57, 70, 0.15)",
        "button": "0 4px 12px -2px rgba(230, 57, 70, 0.3)",
      },
      borderRadius: {
        sm: "0.375rem",
        DEFAULT: "0.5rem",
        md: "0.625rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
