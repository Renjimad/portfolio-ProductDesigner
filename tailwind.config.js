module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ['var(--font-anton)', 'sans-serif'],
        'roboto-mono': ['var(--font-roboto-mono)', 'monospace'],
        mono: ['JetBrains Mono', 'IBM Plex Mono', 'Courier Prime', 'monospace'],
      },
      colors: {
        cliBg: '#0b0b0b',
        cliBgAlt: '#111111',
        cliText: '#d1d5db',
        cliTextAlt: '#f3f4f6',
      },
    },
  },
  plugins: [],
};