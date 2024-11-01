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
      'cvUltrawide': '1335px',
      'ultrawide': '1400px',
    },
    extend: {
      spacing: {
        'cvSectionYGap': '3rem',
      },
      colors: {
        'cvGeneralSection': 'hsl(0, 0%, 93.5%)',
        'cvGeneralHover': 'hsl(0,0%,92%,1)',
        'cvApproachSection': 'hsl(178, 75%, 93%)',
        'cvApproachSectionHover': 'hsl(178,85%,90%)',
        'cvApproachItem': 'hsl(0,0%,98%)',
        'cvApproachItemHover': 'hsl(0, 0%, 94%)',
        'cvSkillsSection': 'hsl(52, 85%, 93.5%)',
        'cvSkillsHover': 'hsl(52, 85%, 92%)',
      },
      keyframes: {
        rotateForwards: {
          from: { transform: 'rotate(-180deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        rotateBackwards: {
          from: { transform: 'rotate(-180deg)' },
          to: { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        rotateForwards: 'rotateForwards 0.5s ease-in-out forwards',
        rotateBackwards: 'rotateBackwards 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
