import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core surfaces — warm cream theme (from Wisest Maths brand)
        background: "#f5f0e8",
        foreground: "#2d2a26",
        primary: {
          DEFAULT: "#faf7f2",
          foreground: "#2d2a26",
        },
        // Signature accent: teal (Wisest Maths brand)
        accent: {
          DEFAULT: "#0d9488",
          foreground: "#ffffff",
          light: "#ccfbf1",
          glow: "#0f766e",
        },
        secondary: {
          DEFAULT: "#d4775c",
          foreground: "#ffffff",
        },
        // Elevated surfaces
        surface: {
          DEFAULT: "#faf7f2",
          alt: "#f0ebe3",
          raised: "#e8e0d4",
        },
        border: "#e0d8cc",
        muted: {
          DEFAULT: "#f0ebe3",
          foreground: "#8a857d",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        ring: "#0d9488",
        input: "#e0d8cc",
        card: {
          DEFAULT: "#faf7f2",
          foreground: "#2d2a26",
        },
        popover: {
          DEFAULT: "#faf7f2",
          foreground: "#2d2a26",
        },
        sidebar: {
          DEFAULT: "#faf7f2",
          foreground: "#4a453e",
          primary: "#0d9488",
          "primary-foreground": "#ffffff",
          accent: "#f0ebe3",
          "accent-foreground": "#2d2a26",
          border: "#e0d8cc",
          ring: "#0d9488",
        },
        chart: {
          "1": "#0d9488",
          "2": "#d4775c",
          "3": "#c4a35a",
          "4": "#059669",
          "5": "#e07c6b",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
        math: ["KaTeX_Main", "Times New Roman", "serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "6px",
        xl: "16px",
        "2xl": "20px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)",
        md: "0 4px 20px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)",
        lg: "0 10px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)",
        glow: "0 0 40px rgba(13,148,136,0.18), 0 0 80px rgba(15,118,110,0.08)",
        "glow-sm": "0 0 20px rgba(13,148,136,0.12)",
        "inner-glow": "inset 0 1px 0 0 rgba(255,255,255,0.8)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
        "aurora": "linear-gradient(125deg, #0d9488 0%, #0f766e 40%, #d4775c 100%)",
        "subtle-gradient": "linear-gradient(180deg, rgba(13,148,136,0.06) 0%, transparent 60%)",
      },
      keyframes: {
        "aurora-shift": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)", opacity: "0.6" },
          "50%": { transform: "translate(-10%, 5%) rotate(4deg)", opacity: "0.8" },
        },
        "aurora-shift-2": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)", opacity: "0.5" },
          "50%": { transform: "translate(8%, -6%) rotate(-4deg)", opacity: "0.7" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "shimmer": {
          "100%": { transform: "translateX(100%)" },
        },
        "spin-slow": {
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "aurora-shift": "aurora-shift 18s ease-in-out infinite",
        "aurora-shift-2": "aurora-shift-2 22s ease-in-out infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "shimmer": "shimmer 2.5s ease-in-out infinite",
        "spin-slow": "spin-slow 40s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
