/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
          invert: "var(--color-text-invert)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-fill)",
          navbar: "var(--color-fill-navbar)",
          card: "var(--color-card-accent)",
          search: "var(--color-fill-search)",
          invert: "var(--color-text-muted)",
        },
      },
      boxShadow: {
        navbar: "0px 0px 7px 2px rgba(0, 0, 0, 0.03)",
        search: " 0px 2px 9px 0px rgba(0, 0, 0, 0.05)",
        card: "0px 0px 7px 2px rgba(0, 0, 0, 0.03)",
        pill: "0px 0px 4px 1px rgba(0, 0, 0, 0.10)",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
        xxl: "2000px",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("tailwind-scrollbar-hide"),
    // eslint-disable-next-line no-undef
    require("tailwind-scrollbar"),
  ],
};
