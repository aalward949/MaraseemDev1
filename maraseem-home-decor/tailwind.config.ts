import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Maraseem Color Palette
        primary: "#2C3E50", // Deep Slate
        secondary: "#BFA27F", // Warm Gold
        accent: "#C2B8B2", // Faded Khaki
        darkAccent: "#1F2D35", // Charcoal
        warmAccent: "#8C6B45", // Rich Brown
      },
      fontFamily: {
        // English Fonts
        'heading': ['Playfair Display', 'serif'],
        'subheading': ['Inter', 'sans-serif'],
        'decorative': ['Merriweather', 'serif'],
        'body': ['Lato', 'sans-serif'],
        // Arabic Fonts
        'arabic-heading': ['Cairo', 'sans-serif'],
        'arabic-body': ['Tajawal', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4rem', { lineHeight: '1.1' }], // 64px
        'display-lg': ['3.5rem', { lineHeight: '1.1' }], // 56px
        'display-md': ['3rem', { lineHeight: '1.2' }], // 48px - H1
        'display-sm': ['2.25rem', { lineHeight: '1.25' }], // 36px - H2
        'heading-lg': ['1.875rem', { lineHeight: '1.3' }], // 30px
        'heading-md': ['1.5rem', { lineHeight: '1.4' }], // 24px - H3
        'heading-sm': ['1.25rem', { lineHeight: '1.4' }], // 20px - H4
        'body-lg': ['1.125rem', { lineHeight: '1.6' }], // 18px
        'body-md': ['1rem', { lineHeight: '1.6' }], // 16px - Body
        'body-sm': ['0.875rem', { lineHeight: '1.5' }], // 14px - Small
        'caption': ['0.75rem', { lineHeight: '1.4' }], // 12px
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'strong': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 4px 25px -5px rgba(0, 0, 0, 0.1)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'float': 'float 6s ease-in-out infinite',
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
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '16/9': '16 / 9',
        '21/9': '21 / 9',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};

export default config;