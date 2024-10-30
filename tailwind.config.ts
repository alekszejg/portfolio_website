import type { Config } from "tailwindcss";


const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      'regular': ['Montserrat-Regular'],
      'medium': ['Montserrat-Medium'],
      'bold': ['Montserrat-Bold'],
      'extra-bold': ['Montserrat-ExtraBold']
    },
    screens: {
      'tablet': '480px',
      'ultrawide': '1400px',
    },
    extend: {
      spacing: {
        'cvSectionYGap': '3rem',
      },
      colors: {
        'cvGeneralSection': 'hsla(0, 0%, 93.5%, 1)',
      }
    },
  },
  plugins: [],
};

export default config;
