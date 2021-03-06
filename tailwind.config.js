module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    fontFamily: {
      title: ["space age"],
      nunito: ["nunito"],
      secondary: ["Audiowide"],
      terminal: ["VT323"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ["OpenSans"],
      test: ["OpenSans"],
      essai: ["sanspro"],
    },
    fontSize: {
      xs: "1vw",
      xsms: "1.3vw",
      xms: "1.5vw",
      sm: "2vw",
      tiny: "3vw",
      base: "4vw",
      lg: "5vw",
      xl: "10vw",
    },

    animation: {
      spinslow: "spin 30s linear infinite",
      wave: "2s ",
      spinveryslow: "spin 230s linear infinite",
      bounce: " bounce 1s infinite",
      pulse: "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      none: "pulse 0s cubic-bezier(0.0, 0, 0.0, 0)",
    },

    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".1em",
      widest: "0.3em",
    },
    plugins: {
      require: "tailwindcss-textshadow",
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "900px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    margin: {
      vh2: "2vh",
      vh5: "5vh",
      vh10: "10vh",
      vh20: "20vh",
      vh30: "30vh",
    },
  },
  keyframes: {
    // wave: {
    //   a: 0 % { opacity: 0 },
    //   b: 50 % { opacity: 0.5 },
    //   c: 100 % { opacity: 1 },
    // },
  },
};
