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
        darkGray:"#BEBEC6",
        primary:"#00CED1",
        primaryText:"#a2a2a3"
      },
    },
  },
  plugins: [],
} satisfies Config;
