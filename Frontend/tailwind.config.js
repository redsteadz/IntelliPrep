/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "SignInBackground": "url('./src/assets/SignUpBG.jpg')",
      }
    },
  },
  plugins: [],
}

