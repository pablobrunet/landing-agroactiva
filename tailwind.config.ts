import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem"
      }
    },
    extend: {
      colors: {
        bg: {
          primary: "var(--bg-primary)",
          surface: "var(--bg-surface)",
          elevated: "var(--bg-elevated)"
        },
        accent: {
          primary: "var(--accent-primary)",
          secondary: "var(--accent-secondary)",
          warm: "var(--accent-warm)"
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)"
        },
        border: {
          DEFAULT: "var(--border)",
          hover: "var(--border-hover)"
        }
      },
      fontFamily: {
        display: ["var(--font-sora)"],
        sans: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains-mono)"]
      },
      backgroundImage: {
        "mesh-radial":
          "radial-gradient(circle at top left, rgba(0,191,114,0.18), transparent 34%), radial-gradient(circle at top right, rgba(4,27,77,0.14), transparent 28%), radial-gradient(circle at center, rgba(22,163,168,0.10), transparent 34%)"
      },
      boxShadow: {
        glow: "0 18px 45px rgba(0, 191, 114, 0.16)",
        card: "0 18px 40px rgba(11, 31, 51, 0.08)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        pulseGrid: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-grid": "pulseGrid 9s ease-in-out infinite"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
