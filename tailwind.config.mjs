/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      display: ["Lora", "serif"],
      logo: ["Indie Flower", "cursive"],
    },
    extend: {
      colors: {
        light: {
          // "color-fill": "#FAFCFC",
          "color-fill": "#F2F5EC",
          "color-text-base": "#353538",
          "color-accent": "#75AADB",
          "color-card": "#EACEDB",
          "color-card-muted": "#F1BAD4",
          "color-border": "#E3A9C6",
        },
        dark: {
          "color-fill": "#353641",
          "color-text-base": "#E9EDF1",
          "color-accent": "#75AADB",
          "color-card": "#4B4C59",
          "color-card-muted": "#715566",
          "color-border": "#86436B",
        },
      },
    },
  },
  plugins: [],
};
