/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        all: "transform, opacity, background-color, border-color, color, fill, stroke, box-shadow, outline-color, outline-offset, outline-width",
      },
      screens: {
        xs: "370px",
      },
      fontSize: {
        base: "16px",
      },
    },
    colors: {
      accenttext: "var(--tg-theme-accent-text-color, #007DFF)",
      bg: "var(--tg-theme-secondary-bg-color, #FFFFFF)",
      bottombarbg: "var(--tg-theme-bottom-bar-bg-color)",
      button: "var(--tg-theme-button-color, #007DFF)",
      buttontext: "var(--tg-theme-button-text-color, #F3F4FA)",
      destructive: "var(--tg-theme-destructive-text-color,#FF0B18)",
      headerbg: "var(--tg-theme-header-bg-color)",
      hint: "var(--tg-theme-hint-color), rgba(0,0,0,0.4)",
      link: "var(--tg-theme-link-color, #007DFF)",
      secondarybg: "var(--tg-theme-bg-color, #F3F4FA)",
      sectionbg: "var(--tg-theme-section-bg-color)",
      sectionheadertext: "var(--tg-theme-section-header-text-color)",
      sectionseparator: "var(--tg-theme-section-separator-color)",
      subtitletext: "var(--tg-theme-subtitle-text-color, rgba(0,0,0,0.4))",
      text: "var(--tg-theme-text-color, #000000)",
    },
    borderRadius: {
      sm: "10px",
      md: "20px",
      lg: "30px",
      full: "99999px",
    },
    gap: {
      xs: "4px",
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "56px",
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-animate")],
};
