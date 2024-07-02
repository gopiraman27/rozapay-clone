/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage: {
        'cta-bg': "url('./image/CTABg.svg') !important",
        'core-features-bg': "url('./image/core-features-sectionBg.svg') !important",
        'feature-section-2-bg': "url('./image/feature-section-2BG.svg') !important",
        'instant-settlement-bg': "url('./image/instant-settlement-bg.svg') !important",
        'bg-instant-settlement-hover-bg': "url('./image/instant-settlement-hoverbg.svg') !important"
      },
      fontFamily: {
        mullish: ["Mulish", "sans-serif"],
      },
      colors: {
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
      },
    },
  },
  plugins: [],
}
