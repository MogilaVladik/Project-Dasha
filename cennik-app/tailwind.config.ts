import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: "var(--navy)",
        gold: "var(--gold)",
        "gold-light": "var(--gold-light)",
        "gold-dark": "var(--gold-dark)",
        ivory: "var(--ivory)",
        cream: "var(--cream)",
        black: "var(--black)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        serif: ["var(--font-serif)", "serif"],
        sans: ["system-ui", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        "art-deco": "0.15em",
        luxury: "0.25em",
      },
      fontSize: {
        hero: ["3.5rem", { lineHeight: "1", letterSpacing: "0.05em" }],
        display: ["2.5rem", { lineHeight: "1.2", letterSpacing: "0.05em" }],
      },
    },
  },
  plugins: [],
} satisfies Config;
