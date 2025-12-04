/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4C3B4D",       // Deep purple
        secondary: "#FF6B6B",     // Vibrant coral
        accent: "#C8E6C9",        // Soft teal
        surface: "#F5F5F5",       // Warm light gray
        muted: "#D7D7D7",         // Gentle neutral
      },
    },
  },
  plugins: [],
}
