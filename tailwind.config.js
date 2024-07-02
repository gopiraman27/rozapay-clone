/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage: {
        'cta-bg': "url('./image/CTABg.svg')",
        'core-features-bg': "url('./image/core-features-sectionBg.svg')",
        'feature-section-2-bg': "url('./image/feature-section-2BG.svg')",
        'instant-settlement-bg': "url('./image/instant-settlement-bg.svg')",
        'instantsettlement-hoverbg': "url('./image/instantsettlement-hoverbg.svg')",
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
