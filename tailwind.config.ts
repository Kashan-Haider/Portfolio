import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    {
      raw: `bg-dark bg-primary text-dark text-primary`, // Explicitly list the classes
    },
  ],
  theme: {
    extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
        },
      colors: {
        dark: "#0D0A0E",
        primaryDark:"#76282E",
        primary:"#d35a60",
        primaryText:"#a2a2a3"
      },
    },
  },
  plugins: [],
} satisfies Config;
