/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        bg: {
          DEFAULT: 'hsl(40 33% 98%)',
          warm: 'hsl(36 50% 96%)',
          mint: 'hsl(170 40% 96%)',
        },
        ink: {
          DEFAULT: 'hsl(195 45% 11%)',
          soft: 'hsl(195 18% 35%)',
          muted: 'hsl(195 12% 55%)',
        },
        teal: {
          50: 'hsl(173 50% 96%)',
          100: 'hsl(173 50% 90%)',
          200: 'hsl(173 50% 80%)',
          300: 'hsl(173 55% 65%)',
          400: 'hsl(173 58% 50%)',
          500: 'hsl(173 58% 39%)',
          600: 'hsl(173 58% 31%)',
          700: 'hsl(174 60% 22%)',
          800: 'hsl(176 60% 15%)',
        },
        gold: {
          50: 'hsl(43 96% 95%)',
          200: 'hsl(43 96% 80%)',
          400: 'hsl(43 96% 62%)',
          500: 'hsl(43 96% 56%)',
          600: 'hsl(36 90% 48%)',
        },
      },
      backgroundImage: {
        'noise':
          "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.18 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      boxShadow: {
        'soft': '0 12px 40px -12px hsl(195 30% 25% / 0.18)',
        'softer': '0 4px 24px -8px hsl(195 30% 25% / 0.10)',
        'glow': '0 0 60px -10px hsl(173 58% 50% / 0.55)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        sheen: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        sheen: 'sheen 3s linear infinite',
      },
    },
  },
  plugins: [],
};
