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
        bodyColor: "#2c4b77",
        textGreen: "#64ffda",
        textLight: "#ccd6f6",
        textDark: "#8892b0",
        hoverColor: "rgba(100, 255, 218, 0.1)"
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
