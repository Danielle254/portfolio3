import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-purple': '#522258',
        'main-pink': '#a73974',
        'accent-yellow': '#f8d279',
        'light-purple': '#f5eefc'
      }
    }
  },
  plugins: [],
} satisfies Config;
