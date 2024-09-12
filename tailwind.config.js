import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {}
  },
  darkMode: "class",
  plugins: [nextui(
    {
      themes: {
        dark: {
          layout: {
            radius: {
              small: "0.125rem"
            }
          },
          colors: {
            content1: '#0d112e',
            content2: '#101437',
            content3: '#2a3375',
            default: {
              50: '#090b20',
              100: '#090b20',
              900: '#c8cbfe'
            }
          }
        }
      }
    }
  )],
}

