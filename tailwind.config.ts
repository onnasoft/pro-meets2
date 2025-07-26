import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        primary: {
          50: "#f5f3ff", // Muy claro (fondo)
          100: "#ede9fe", // Claro
          200: "#ddd6fe", //
          300: "#c4b5fd", //
          400: "#a78bfa", // Base claro
          500: "#8b5cf6", // Base (color principal)
          600: "#7c3aed", //
          700: "#6d28d9", // Base oscuro
          800: "#5b21b6", //
          900: "#4c1d95", // Muy oscuro
          950: "#2e1065", // Ultra oscuro
        },
        // Colores secundarios que combinan bien
        secondary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        // Colores para estados y acentos
        success: {
          50: "#f0fdf4",
          500: "#10b981",
          700: "#047857",
        },
        warning: {
          50: "#fefce8",
          500: "#f59e0b",
          700: "#b45309",
        },
        error: {
          50: "#fef2f2",
          500: "#ef4444",
          700: "#b91c1c",
        },
      },
      // Extender otras utilidades si es necesario
      boxShadow: {
        primary: "0 4px 14px 0 rgba(139, 92, 246, 0.25)",
        "primary-md": "0 6px 20px 0 rgba(139, 92, 246, 0.3)",
        "primary-lg": "0 10px 25px -5px rgba(139, 92, 246, 0.4)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
