/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xz: "320px",
        xy: "376px",
        xx: "415px",
        xs: "480px",
        xm: "575px",
        ss: "620px",
        sm: "768px",
        sd: "991px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [require("daisyui")],
  
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#B809C3",
          "secondary": "#ffffff",
          "accent": "#37cdbe",
          "neutral": "#3151AA",
          "base-100": "#ffffff",
        },
      },
      "light"
    ],
  },
}
