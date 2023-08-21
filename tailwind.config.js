/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        mediumseagreen: "#25ab75",
        seagreen: {
          "100": "#188759",
          "200": "#128655",
        },
        white: "#fff",
        gray: {
          "100": "rgba(255, 255, 255, 0.2)",
          "200": "rgba(255, 255, 255, 0.1)",
        },
      },
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
        "181xl": "200px",
      },
    },
    fontSize: {
      lg: "18px",
      "3xl": "22px",
      "31xl": "50px",
      "13xl": "32px",
      sm: "14px",
      "9xl": "28px",
      "6xl": "25px",
      xl: "20px",
      "101xl": "120px",
      "81xl": "100px",
      "54xl": "73px",
      smi: "13px",
      xs: "12px",
      "16xl": "35px",
      mini: "15px",
      base: "16px",
      "181xl": "200px",
      "131xl": "150px",
      "41xl": "60px",
      "3xs": "10px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
