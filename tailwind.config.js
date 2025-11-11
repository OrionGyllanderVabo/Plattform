/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      // Custom färgpalett för AutoMäklaren
      colors: {
        midnight: {
          DEFAULT: '#0A2540',
          blue: '#0A2540',
        },
        ocean: {
          DEFAULT: '#1E4D8B',
          blue: '#1E4D8B',
        },
        sky: {
          DEFAULT: '#E8F4FC',
          blue: '#E8F4FC',
        },
        sunset: {
          DEFAULT: '#FF6B35',
          orange: '#FF6B35',
        },
        peach: {
          DEFAULT: '#FFEBE5',
          soft: '#FFEBE5',
        },
        charcoal: '#1A1A1A',
        steel: {
          DEFAULT: '#6B7280',
          grey: '#6B7280',
        },
        light: {
          DEFAULT: '#E5E7EB',
          grey: '#E5E7EB',
        },
        offwhite: '#F8FAFB',
      },

      // Typografi
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },

      // Custom font sizes med line-height och letter-spacing
      fontSize: {
        // H1 Desktop
        'h1-desktop': ['56px', {
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        }],
        // H1 Mobile
        'h1-mobile': ['36px', {
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        }],
        // H2 Desktop
        'h2-desktop': ['40px', {
          lineHeight: '1.2',
          fontWeight: '600',
        }],
        // H2 Mobile
        'h2-mobile': ['28px', {
          lineHeight: '1.2',
          fontWeight: '600',
        }],
        // Body
        'body': ['16px', {
          lineHeight: '1.7',
          fontWeight: '400',
        }],
        // Body Small
        'body-small': ['14px', {
          lineHeight: '1.5',
          fontWeight: '400',
        }],
      },

      // Custom spacing (8px grid)
      spacing: {
        'xs': '8px',
        's': '16px',
        'm': '24px',
        'l': '32px',
        'xl': '48px',
        'xxl': '64px',
      },

      // Custom border radius
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
      },

      // Custom box shadows
      boxShadow: {
        'sm': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'md': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'lg': '0 8px 24px rgba(0, 0, 0, 0.12)',
      },

      // Animationer
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
    },
  },
  plugins: [],
}
