/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "768px",
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        // Breakpoints customizados mantidos para compatibilidade
        sml: "500px",
        mdl: "768px",
        lgl: "1024px",
      },
      fontFamily: {
        bodyFont: ["Bruno Ace SC", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
          navBar: "0 10px 30px -10px rgba(2, 12, 27, 0.7)",
      },
      colors: {
        bodyColor: "#0a0e27",
        bodyColorLight: "#0f1629",
        textGreen: "#00d9ff",
        textGreenHover: "#00b8d9",
        textLight: "#e2e8f0",
        textDark: "#94a3b8",
        hoverColor: "rgba(0, 217, 255, 0.1)",
        accentPurple: "#8b5cf6",
        accentBlue: "#3b82f6",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
