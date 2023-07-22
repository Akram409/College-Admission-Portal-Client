/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0505fc",

          secondary: "#ef10ac",

          accent: "#ac19d1",

          neutral: "#29212b",

          "base-100": "#ffff",

          info: "#4bbae2",

          success: "#18c9b4",

          warning: "#c57711",

          error: "#ec7996",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
