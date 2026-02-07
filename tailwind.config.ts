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
        'bluenote': '#0055a4',      // 经典蓝   
        'jazz-black': '#0a0a0a',    // 深黑背景
        'off-white': '#f5f5f5',     // 米白文字
      },
      fontFamily: {
        sans: ['var(--font-inter)'],    // 正文
        display: ['var(--font-anton)'], // 巨大的标题字体
      },
    },
  },
  plugins: [],
};
export default config;