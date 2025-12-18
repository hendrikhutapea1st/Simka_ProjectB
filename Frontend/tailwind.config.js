/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fresh & Light Palette
        'moss': {
          DEFAULT: '#1E5631', // Deep Forest Green (Fresh & Serious)
          light: '#4CA068',   // Fresh Leaf Green
        },
        'sky': {
          DEFAULT: '#E0F2FE', // Very Pale Fresh Blue
          dim: '#BAE6FD',     // Clear Sky Blue
        },
        'cream': {
          DEFAULT: '#FAFCF9', // Cool Mint-Tinted White
          dark: '#F0F7F4',    // Pale Mist
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
