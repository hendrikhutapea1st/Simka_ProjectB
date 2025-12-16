/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern Organic Palette
        'moss': {
          DEFAULT: '#2D3B2D', // Deep Dark Green
          light: '#3E4F3E',
        },
        'sky': {
          DEFAULT: '#A0D2EB', // Light Sky Blue (Biru Langit Muda)
          dim: '#89C2D9',
        },
        'cream': {
          DEFAULT: '#F7F5F0', // Warm Off-White
          dark: '#EBE9E1',
        },
      },
      fontFamily: {
        'display': ['Syne', 'sans-serif'], // For Headings (Artsy)
        'body': ['Space Grotesk', 'sans-serif'], // For Text (Modern Tech/Clean)
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}
