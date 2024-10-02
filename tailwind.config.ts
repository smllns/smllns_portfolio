const svgToDataUri = require('mini-svg-data-uri');
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xxs: '1px',
        xs: '360px',
      },
      animation: {
        first: 'moveVertical 30s ease infinite',
        second: 'moveInCircle 20s reverse infinite',
        third: 'moveInCircle 40s linear infinite',
        fourth: 'moveHorizontal 40s ease infinite',
        fifth: 'moveInCircle 20s ease infinite',
        firstTwo: 'moveVerticalTwo 30s ease infinite',
        secondTwo: 'moveInCircleTwo 20s reverse infinite',
        thirdTwo: 'moveInCircleTwo 40s linear infinite',
        fourthTwo: 'moveHorizontalTwo 40s ease infinite',
        fifthTwo: 'moveInCircleTwo 20s ease infinite',
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
      keyframes: {
        moveHorizontal: {
          '0%': {
            transform: 'translateX(-50%) translateY(-10%)',
          },
          '50%': {
            transform: 'translateX(30%) translateY(10%)',
          },
          '100%': {
            transform: 'translateX(-50%) translateY(-10%)',
          },
        },
        moveInCircle: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '50%': {
            transform: 'rotate(180deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        moveVertical: {
          '0%': {
            transform: 'translateY(-50%)',
          },
          '50%': {
            transform: 'translateY(30%)',
          },
          '100%': {
            transform: 'translateY(-50%)',
          },
        },
        moveHorizontalTwo: {
          '0%': {
            transform: 'translateX(-20%) translateY(-5%)',
          },
          '50%': {
            transform: 'translateX(20%) translateY(5%)',
          },
          '100%': {
            transform: 'translateX(-20%) translateY(-5%)',
          },
        },
        moveInCircleTwo: {
          '0%': {
            transform: 'rotate(0deg) translate(0, -20%)',
          },
          '50%': {
            transform: 'rotate(180deg) translate(0, 20%)',
          },
          '100%': {
            transform: 'rotate(360deg) translate(0, -20%)',
          },
        },
        moveVerticalTwo: {
          '0%': {
            transform: 'translateY(-20%)',
          },
          '50%': {
            transform: 'translateY(20%)',
          },
          '100%': {
            transform: 'translateY(-20%)',
          },
        },
        scroll: {
          to: {
            transform: 'translate(calc(-30% - 0.5rem))',
          },
        },
      },
    },
    plugins: [
      addVariablesForColors,
      function ({ matchUtilities, theme }: any) {
        matchUtilities(
          {
            'bg-dot-thick': (value: any) => ({
              backgroundImage: `url("${svgToDataUri(
                `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
              )}")`,
            }),
          },
          {
            values: flattenColorPalette(theme('backgroundColor')),
            type: 'color',
          }
        );
      },
    ],
  },
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}
export default config;
