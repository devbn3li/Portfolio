const plugin = require('tailwindcss/plugin');
const tokens = require('./brand/tokens.json');

// brand/tokens.json is the single source of truth for colour. Each token is
// exposed as an RGB-channel CSS variable (so Tailwind opacity modifiers work)
// and as a Tailwind colour of the same name: bg-petrol, text-peach, ring-sky…
//
// Usage rules:
// - peach and sky only on petrol or abyss.
// - On shell: text is petrol, accent is lagoon. Lagoon on shell is 4.2:1, so
//   use it for large text and non-text accents only. Peach may fill, never text.
// - Dim text is mist at 70% or more (AA on both petrol and abyss).
const palette = { ...tokens.color, ...tokens.status };

const channels = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  return `${n >> 16} ${(n >> 8) & 255} ${n & 255}`;
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // Replaces (not extends) the default palette so only brand tokens exist.
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      ...Object.fromEntries(
        Object.keys(palette).map((name) => [
          name,
          `rgb(var(--${name}) / <alpha-value>)`,
        ])
      ),
    },
    fontFamily: {
      sans: ['var(--font-alexandria)', 'system-ui', 'sans-serif'],
      // System stack, nothing downloaded. Code output in the demos only.
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
    },
    // Two weights only.
    fontWeight: {
      normal: '400',
      extrabold: '800',
    },
    extend: {
      transitionTimingFunction: {
        reveal: 'cubic-bezier(.22, 1, .36, 1)',
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        ':root': Object.fromEntries(
          Object.entries(palette).map(([name, hex]) => [
            `--${name}`,
            channels(hex),
          ])
        ),
      });
    }),
  ],
};
