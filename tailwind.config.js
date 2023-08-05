/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  safelist: [
    // BACKGROUNDS
    "bg-slate-100",
    "bg-green-100",
    "bg-purple-100",
    "bg-blue-100",
    "bg-yellow-100",
    "bg-red-100",

    "hover:bg-slate-200",
    "hover:bg-green-200",
    "hover:bg-purple-200",
    "hover:bg-blue-200",
    "hover:bg-yellow-200",
    "hover:bg-red-200",

    "dark:bg-slate-950",
    "dark:bg-green-950",
    "dark:bg-purple-950",
    "dark:bg-blue-950",
    "dark:bg-yellow-950",
    "dark:bg-red-950",

    "dark:hover:bg-slate-800",
    "dark:hover:bg-green-800",
    "dark:hover:bg-purple-800",
    "dark:hover:bg-blue-800",
    "dark:hover:bg-yellow-800",
    "dark:hover:bg-red-800",

    // ----
    // TEXT
    "text-slate-600",
    "text-green-600",
    "text-slate-500",
    "text-purple-600",
    "text-blue-600",
    "text-yellow-600",
    "text-red-600",

    "dark:text-slate-400",
    "dark:text-green-400",
    "dark:text-purple-400",
    "dark:text-blue-400",
    "dark:text-yellow-400",
    "dark:text-red-400",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        mono: ["var(--font-space-mono)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/container-queries"),
  ],
};
