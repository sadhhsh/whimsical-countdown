import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        candleCream: '#F1DBC9',
        bone: '#E5D7C4',
        herbalGold: '#CCA071',
        mossGreen: '#8B9D83',
        kombuGreen: '#3B4D3A',
        celestialTeal: '#244747',
        deepSpace: '#0B272A',
        mysticEmber: '#7C3A27',
        moonstoneBlue: '#6FA4B8',
      },

      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;