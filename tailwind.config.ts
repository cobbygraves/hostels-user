import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'hostel-yellow': 'yellow'
      },
      screens: {
        lg: '1280px',
        xl: '1440px'
      }
    }
  },
  plugins: []
}
export default config
