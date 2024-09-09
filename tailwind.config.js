/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-blue' : "#007BFF",
        'dark-blue': '#1A88FF',
        'light-bg': '#FFFFFF',
        'dark-bg': '#0D0D0D',
        'light-sm-bg' : "#E5F2FF",
        "dark-sm-bg" : "#1A1A1A",
        'light-lg-title': '#00254D',
        'dark-lg-title': '#B2D7FF',
        'light-sm-title': "#003166",
        'dark-sm-title':"#003E80",
        'light-text' : "#000C1A",
        'dark-text' : "#FFFFFF",
        'light-gray-color' : "#4D555E",
        'dark-gray-color' : "#999DA1"
      },
      fontFamily: {
        'IBMArabic': ['"IBM Plex Sans Arabic"', 'sans-serif']
      },
    },
  },
};
