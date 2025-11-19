import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#D97706',
          light: '#F5B885',
          dark: '#B8690F',
        },
        dark: {
          bg: '#1a1a1a',
          'bg-secondary': '#2d2d2d',
          text: '#e5e5e5',
          link: '#E8A36B',
          'link-hover': '#F5B885',
        },
        light: {
          bg: '#fafafa',
          'bg-secondary': '#f5f5f5',
          text: '#2d2d2d',
          link: '#B8690F',
          'link-hover': '#A05A0D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        japanese: ['"游ゴシック"', '"Yu Gothic"', '"Noto Sans JP"', 'sans-serif'],
        mono: ['"Fira Code"', '"JetBrains Mono"', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '800px',
            lineHeight: '1.7',
          },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}

export default config
