const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "config/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "card-2": {
          DEFAULT: "hsl(var(--card-2))",
          foreground: "hsl(var(--card-2-foreground))",
        },
        section: {
          DEFAULT: "hsl(var(--section))",
          foreground: "hsl(var(--section-foreground))",
        },
        "section-2": {
          DEFAULT: "hsl(var(--section-2))",
          foreground: "hsl(var(--section-2-foreground))",
        },
        "section-3": {
          DEFAULT: "hsl(var(--section-3))",
          foreground: "hsl(var(--section-3-foreground))",
        },
        "section-4": {
          DEFAULT: "hsl(var(--section-4))",
          foreground: "hsl(var(--section-4-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        arteria: ["var(--font-arteria)"],
        "arteria-thin": ["var(--font-arteria-thin)"],
        "arteria-bold": ["var(--font-arteria-bold)"],
        "arteria-black": ["var(--font-arteria-black)"],
        "arteria-light": ["var(--font-arteria-light)"],
        "arteria-regular": ["var(--font-arteria-regular)"],
        "arteria-extrabold": ["var(--font-arteria-extrabold)"],
        "arteria-extralight": ["var(--font-arteria-extralight)"],
        "arteria-demi": ["var(--font-arteria-demi)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.4s ease-in-out forwards",
        "accordion-up": "accordion-up 0.4s ease-in-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
