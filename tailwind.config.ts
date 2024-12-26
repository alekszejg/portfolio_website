import type { Config } from "tailwindcss";


const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      'regular-italic': ['Montserrat-Regular-Italic'],
      'regular': ['Montserrat-Regular'],
      'medium': ['Montserrat-Medium'],
      'bold': ['Montserrat-Bold'],
      'extra-bold': ['Montserrat-ExtraBold']
    },
    screens: {
      'tablet': '480px',
      
      'cvTablet': '700px',
      'cvUltrawide': '1335px',
      
      'ultrawide': '1400px',
    },
    extend: {
      width: {
        // INTERACTIVE CV 
        'generalSectionWidth': '45%',
        'expertiseSectionWidth': '55%',
      },
      spacing: {
        // HOMEPAGE
        'homepageXPad': '5%',
        'homepageYPad': '2.5rem',

        // INTERACTIVE CV 
        'cvHeaders-mobile': '1rem',
        'cvHeaders-pc': '1.25rem',

        'cvPadX-mobile': '8%',
        'cvPadX-pc': '4vw',
      
        'cvSectionYGap': '3rem',

        // Individual Project Pages
        'projectYGap-mobile': '2.5rem',
        'projectYGap-pc': '4rem',

        // ADMIN PAGE
        'adminPageLSide': '1.25rem',
      },
      colors: {
        
        // INTERACTIVE CV SECTIONS
        'cvGeneralSection': 'hsl(0, 0%, 93.5%)',
        'cvGeneralHover': 'hsl(0,0%,92%,1)',
        'cvApproachSection': 'hsl(178, 75%, 93%)',
        'cvApproachSectionHover': 'hsl(178,85%,90%)',
        'cvApproachItem': 'hsl(0,0%,98%)',
        'cvApproachItemHover': 'hsl(0, 0%, 94%)',
        'cvSkillsSection': 'hsl(52, 85%, 93.5%)',
        'cvSkillsHover': 'hsl(52, 85%, 92%)',

        // SECTIONS OF EACH PROJECT PAGE
        'yellowProjectPage': 'hsl(53,90%,93%)',
        'blueProjectPage': 'hsl(179,100%,93%)',

        // ADMIN PAGE
        'formInput': 'hsl(0,0%,81%)',
        'formInputFocused': 'hsl(0,0%,51%)',

        'blogpostBorder': 'hsl(0,0%,75%)',
        'messageBorder': 'hsl(0,0%,75%)',
      },
      backgroundImage: {
        'gradient-to-135deg': 'linear-gradient(135deg, hsla(53,90%,93%,1) 0%, hsla(53,90%,87%,0.6) 65%, hsla(53,90%,84%,0.6) 100%)',
      },
      keyframes: {
        rotateForwards: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-180deg)' },
        },
        rotateBackwards: {
          from: { transform: 'rotate(-180deg)' },
          to: { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        rotateForwards: 'rotateForwards 0.5s forwards',
        rotateBackwards: 'rotateBackwards 0.5s forwards',
      },
    },
  },
  plugins: [],
};

export default config;
