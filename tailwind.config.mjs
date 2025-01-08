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
          "color-fill": "#F2F5EC",
          "color-text-base": "#353538",
          "color-accent": "#75AADB",
        },
        dark: {
          "color-fill": "#353641",
          "color-text-base": "#E9EDF1",
          "color-accent": "#75AADB",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
