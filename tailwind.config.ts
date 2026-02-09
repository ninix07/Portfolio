import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Modern neutral palette with better contrast
        background: "hsl(0 0% 98%)",
        foreground: "hsl(240 10% 3.9%)",
        card: "hsl(0 0% 100%)",
        "card-foreground": "hsl(240 10% 3.9%)",
        popover: "hsl(0 0% 100%)",
        "popover-foreground": "hsl(240 10% 3.9%)",
        
        // New primary - Slate
        primary: "hsl(215 28% 17%)",
        "primary-foreground": "hsl(0 0% 98%)",
        "primary-dark": "hsl(215 30% 14%)",
        "primary-light": "hsl(215 25% 27%)",
        
        // Refined secondary colors
        secondary: "hsl(240 4.8% 95.9%)",
        "secondary-foreground": "hsl(240 5.9% 10%)",
        
        // Subtle muted tones
        muted: "hsl(240 4.8% 95.9%)",
        "muted-foreground": "hsl(240 3.8% 46.1%)",
        
        // New accent - Cyan
        accent: "hsl(188 80% 40%)",
        "accent-foreground": "hsl(0 0% 98%)",
        
        // Error states
        destructive: "hsl(0 84.2% 60.2%)",
        "destructive-foreground": "hsl(0 0% 98%)",
        
        // Borders and inputs
        border: "hsl(240 5.9% 90%)",
        input: "hsl(240 5.9% 90%)",
        ring: "hsl(188 80% 40%)",
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        // Modern shadow system
        soft: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        medium: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        strong: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        glow: "0 0 20px rgba(59, 130, 246, 0.15)",
        "glow-accent": "0 0 20px rgba(34, 197, 94, 0.15)",
      },
      backgroundImage: {
        // Modern gradient system
        "gradient-primary": "linear-gradient(135deg, hsl(215 28% 17%) 0%, hsl(215 30% 14%) 100%)",
        "gradient-secondary": "linear-gradient(135deg, hsl(240 4.8% 95.9%) 0%, hsl(240 5.9% 90%) 100%)",
        "gradient-hero": "linear-gradient(135deg, hsl(215 28% 17%) 0%, hsl(188 80% 40%) 100%)",
        "gradient-card": "linear-gradient(145deg, hsl(0 0% 100%) 0%, hsl(240 4.8% 97%) 100%)",
        "gradient-mesh": "radial-gradient(at 40% 20%, hsl(215 28% 17%) 0px, transparent 50%), radial-gradient(at 80% 0%, hsl(188 80% 40%) 0px, transparent 50%), radial-gradient(at 0% 50%, hsl(215 25% 27%) 0px, transparent 50%)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Montserrat", "Poppins", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "xs": ["0.75rem", { lineHeight: "1rem" }],
        "sm": ["0.875rem", { lineHeight: "1.25rem" }],
        "base": ["1rem", { lineHeight: "1.5rem" }],
        "lg": ["1.125rem", { lineHeight: "1.75rem" }],
        "xl": ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      keyframes: {
        // --- ADDED THIS KEYFRAME FOR THE BACKGROUND ---
        aurora: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '25%': { transform: 'translate(40px, -60px) scale(1.1)' },
          '50%': { transform: 'translate(10px, 20px) scale(1)' },
          '75%': { transform: 'translate(-30px, 50px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        // --- Your existing keyframes ---
        fadeIn: { 
          from: { opacity: "0", transform: "translateY(20px)" }, 
          to: { opacity: "1", transform: "translateY(0)" } 
        },
        slideUp: { 
          from: { opacity: "0", transform: "translateY(30px)" }, 
          to: { opacity: "1", transform: "translateY(0)" } 
        },
        slideInLeft: {
          from: { opacity: "0", transform: "translateX(-30px)" },
          to: { opacity: "1", transform: "translateX(0)" }
        },
        slideInRight: {
          from: { opacity: "0", transform: "translateX(30px)" },
          to: { opacity: "1", transform: "translateX(0)" }
        },
        float: { 
          "0%, 100%": { transform: "translateY(0px)" }, 
          "50%": { transform: "translateY(-10px)" } 
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" }
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" }
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        }
      },
      animation: {
        // --- ADDED THIS UTILITY FOR THE BACKGROUND ---
        "aurora": "aurora 30s linear infinite",
        // --- Your existing animations ---
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "gradient": "gradient 3s ease infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;