/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary": "#B1A5CA",
      "secondary": "#64734D",
      "accent": "#D9D9D9",
      "neutral": "#f2f2f2",
      "base-100": "#f2f2f2",
      "info": "#b9b9b9",
      "success": "#AFBF9F",
      "warning": "#FFFEC8",
      "error": "#FF7F7F"
     }
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require("tailwindcss-radix")({
      variantPrefix: 'radix',
        }),
  ],
}

