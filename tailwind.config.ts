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
        'main-purple': '#37183b',
        'main-pink': '#a73974',
        'accent-orange': '#ffbd59',
        'light-purple': '#f5eefc'
      },
      fontFamily: {
        special: ['var(--font-caveat)']
      }
    }
  },
  plugins: [],
} satisfies Config;
