import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /* ── Design Tokens ─────────────────────────────────── */
      colors: {
        background: '#0a0a0a',
        surface:    '#111111',
        border:     '#222222',
        muted:      '#555555',
        offwhite:   '#f0f0f0',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        mono:  ['var(--font-space-mono)', 'monospace'],
        sans:  ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      /* ── Grid ──────────────────────────────────────────── */
      gridTemplateColumns: {
        'portfolio': 'repeat(12, 1fr)',
      },
    },
  },
  plugins: [],
}

export default config
