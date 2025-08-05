/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Maraseem Home Decor Color Palette
        primary: {
          DEFAULT: '#2C3E50', // Deep Slate
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        secondary: {
          DEFAULT: '#BFA27F', // Warm Gold
          50: '#FEFCF8',
          100: '#FDF8F0',
          200: '#FBF0E0',
          300: '#F7E4C0',
          400: '#F2D4A0',
          500: '#E8C080',
          600: '#D4A860',
          700: '#BFA27F',
          800: '#A88B5F',
          900: '#8C6B45',
        },
        accent: {
          DEFAULT: '#C2B8B2', // Faded Khaki
          50: '#FDFCFB',
          100: '#FAF9F7',
          200: '#F5F3F0',
          300: '#EDEAE5',
          400: '#E0DBD4',
          500: '#C2B8B2',
          600: '#A89E98',
          700: '#8E847E',
          800: '#746A64',
          900: '#5A504A',
        },
        darkAccent: {
          DEFAULT: '#1F2D35', // Charcoal
          50: '#F7F9FA',
          100: '#EFF3F5',
          200: '#DDE7EC',
          300: '#C3D4DD',
          400: '#9BB8C7',
          500: '#6B8FA3',
          600: '#4A6B7F',
          700: '#3A5568',
          800: '#2F4556',
          900: '#1F2D35',
        },
        warmAccent: {
          DEFAULT: '#8C6B45', // Rich Brown
          50: '#FDFCFA',
          100: '#FAF7F2',
          200: '#F5EDE0',
          300: '#EDDFC8',
          400: '#E2CCA8',
          500: '#D4B588',
          600: '#C4A068',
          700: '#B08B4E',
          800: '#8C6B45',
          900: '#6B5235',
        },
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Cormorant Garamond', 'serif'],
        'sans': ['Inter', 'Lato', 'sans-serif'],
        'arabic': ['Cairo', 'Tajawal', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'inner-xl': 'inset 0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(191, 162, 127, 0.3)',
        'glow-lg': '0 0 40px rgba(191, 162, 127, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  darkMode: 'class',
};