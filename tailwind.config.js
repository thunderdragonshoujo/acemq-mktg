/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'hero-background-mobile': "url('/bg_mobile.png')",
        'hero-background-desktop': "url('/hero_bg.png')",
        'conner-gradient': 'linear-gradient(180deg, #FF88C3 0%, #9B86FE 100%)',
        'management-bg': "url('/management_bg.png')",
        "global-border": "url('/global_border.png')"
      },
      colors: {
        'bg-100': '#0D1117',
        'text-100': '#000000',
        'accent-100': '#8FD5CC',
        'accent-200': '#EA9EFF',
        'accent-300': '#33B3AE'
      }
    },
  },
  plugins: [],
};
