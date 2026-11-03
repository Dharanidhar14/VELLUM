import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vellum: {
          ivory: "#F5F1E8",
          "ivory-dark": "#ECE5D8",
          charcoal: "#252820",
          "charcoal-muted": "#52574A",
          "charcoal-light": "#6E7564",
          sage: "#647763",
          "sage-dark": "#4C5B4B",
          "sage-light": "#859784",
          "sage-tint": "#E8EFE8",
          sand: "#D8CBB5",
          "sand-light": "#E8DFCFA",
          "sand-dark": "#B8A990",
          border: "rgba(37, 40, 32, 0.14)",
          "border-subtle": "rgba(37, 40, 32, 0.08)",
          "border-strong": "rgba(37, 40, 32, 0.35)",
        },
      },
      fontFamily: {
        serif: ["var(--font-bodoni)", "Didot", "Bodoni MT", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "-apple-system", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "IBM Plex Mono", "Menlo", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        wide: "0.04em",
        wider: "0.08em",
        widest: "0.14em",
        technical: "0.2em",
      },
      boxShadow: {
        editorial: "0 1px 3px rgba(37, 40, 32, 0.06), 0 1px 2px rgba(37, 40, 32, 0.04)",
        "editorial-lg": "0 10px 30px -10px rgba(37, 40, 32, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
