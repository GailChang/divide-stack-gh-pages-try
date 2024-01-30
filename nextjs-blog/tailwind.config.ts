import colors from "tailwindcss/colors"
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.transparent,
          hover: colors.orange[200],
          text: colors.neutral[100],
        },
        secondary: {
          DEFAULT: colors.white,
          hover: colors.orange[200],
          text: colors.neutral[950],
          ["text-hover"]: colors.neutral[50]
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
export default config
