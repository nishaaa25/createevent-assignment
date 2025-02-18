/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "black-400": "#1E2524",
        "green-600": "#58E9D6",
        "gray-600": "#9DA4AE",
      },
      fontSize: {
        "4xl": ["64px", "124px"],
        "2xl": ["24px", "20px"],
        lg: ["18px", "20px"],
      },
    },
  },
  plugins: [],
};

export default config;
