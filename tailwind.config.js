/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-black': '#0D0D0D',
        'electric-green': '#00FF41',
        'neon-orange': '#FF7A00',
      },
      boxShadow: {
        'glow-green': '0 0 20px 5px rgba(0, 255, 65, 0.5)',
        'glow-orange': '0 0 20px 5px rgba(255, 122, 0, 0.5)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'grid': "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-size': '2rem 2rem',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-subtle': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
        'pulse-subtle': 'pulse-subtle 2.5s infinite ease-in-out',
      }
    },
  },
  plugins: [],
}