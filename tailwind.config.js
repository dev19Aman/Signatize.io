module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "rgb(1, 104, 1)",
        secondary: "#0F256E",
        tabs: "#F8F9FB",
        AnimateModal: "#E3E3E3",
        textBlue: " #84a7c1",
        textColor: " #646464",
      },
      transitionProperty: {
        width: "width",
      },
      keyframes: {
        roll: {
          "0%, 10%, 20%, 30%, 40%, 60%, 70%, 80%, 90%, 100%": {
            transform: "scale(1)",
          },
          "50%": { transform: "scaleY(0)" },
        },

        movement: {
          "0%, 20%, 40%, 60%, 80%, 100%": { transform: "translateX(0rem)" },
          "10%": { transform: "translateX(2rem)" },
          "30%": { transform: "translateX(-2rem)" },
          "50%": { transform: "translateY(1rem)" },
          "70%": { transform: "translateY(-1rem)" },
        },
      },
      animation: {
        roll: "roll 3s infinite ",
        movement: "movement 5s infinite",
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover", "group-hover"],
    },
  },
  plugins: [require("daisyui")],
};
