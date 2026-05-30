/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#E9D1B3",
        "on-background": "#000000",
        "surface": "#E9D1B3",
        "on-surface": "#000000",
        "primary": "#000000",
        "on-primary": "#E9D1B3",
        "primary-container": "#000000",
        "on-primary-container": "#E9D1B3",
        "secondary": "#000000",
        "surface-variant": "#dfc6a8",
        "outline": "#000000",
        "outline-variant": "#2a2a2a",
        "surface-container": "#f1e1cd",
        "surface-container-high": "#dfc6a8",
        "surface-container-highest": "#d4ba9c",
        "surface-container-low": "#eee2d2",
        "surface-container-lowest": "#f7f0e6"
      },
      borderRadius: {
        "DEFAULT": "0px",
        "lg": "0px",
        "xl": "0px",
        "full": "9999px"
      },
      spacing: {
        "stack-md": "16px",
        "container-margin": "20px",
        "unit": "8px",
        "stack-sm": "8px",
        "gutter": "16px",
        "stack-lg": "32px"
      },
      fontFamily: {
        // Default sans used by Tailwind utilities
        sans: ["Be Vietnam Pro", "Space Grotesk", "sans-serif"],
        "headline-lg": ["Space Grotesk", "sans-serif"],
        "body-lg": ["Be Vietnam Pro", "sans-serif"],
        "body-md": ["Be Vietnam Pro", "sans-serif"],
        "label-bold": ["Space Grotesk", "sans-serif"],
        "price-display": ["Space Grotesk", "sans-serif"],
        "display-xl": ["Space Grotesk", "sans-serif"],
        "headline-md": ["Space Grotesk", "sans-serif"],
        brand: ["AllrounderMonument", "Space Grotesk", "sans-serif"]
      },
      fontSize: {
        "headline-lg": ["32px", {"lineHeight": "1.2", "fontWeight": "600"}],
        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "label-bold": ["14px", {"lineHeight": "1.0", "letterSpacing": "0.05em", "fontWeight": "700"}],
        "price-display": ["20px", {"lineHeight": "1.0", "fontWeight": "700"}],
        "display-xl": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
        "headline-md": ["24px", {"lineHeight": "1.3", "fontWeight": "600"}]
      }
    },
  },
  plugins: [],
}
