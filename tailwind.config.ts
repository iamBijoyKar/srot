import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'brand-purple': 'rgb(var(--brand-purple))',
        'brand-pink': 'rgb(var(--brand-pink))',
        'brand-light-pink': 'rgb(var(--brand-light-pink))',
        'primary-bg': 'rgb(var(--primary-bg))',
        'secondary-bg': 'rgb(var(--secondary-bg))',
        'ternary-bg': 'rgb(var(--ternary-bg))',
        'primary-text': 'rgb(var(--primary-text))',
        'secondary-text': 'rgb(var(--secondary-text))',
        'ternary-text': 'rgb(var(--ternary-text))'
      }
    }
  },
  plugins: []
}
export default config
