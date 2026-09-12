/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#050505',
          900: '#0B0B0B',
          850: '#111113',
          800: '#16161A',
          700: '#23232A',
          600: '#32323D',
        },
        offwhite: {
          50: '#FFFFFF',
          100: '#FAF9F5',
          200: '#F5F3ED',
          300: '#EAE7DD',
          400: '#D5D1C4',
        },
        brand: {
          yellow: '#FFD21F',
          gold: '#FFC400',
          hover: '#E5B800',
          subtle: '#FFF3B3',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        handwriting: ['"Caveat"', '"Kalam"', 'cursive'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'yellow-glow': '0 0 35px -5px rgba(255, 210, 31, 0.25)',
        'yellow-glow-lg': '0 0 60px -10px rgba(255, 210, 31, 0.35)',
        'dark-card': '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
