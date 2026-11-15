// Colours are semantic roles backed by CSS variables. The values live in
// brand/palettes.json and are written into <head> by app/layout.tsx (see
// lib/brand.ts), so no hex value appears in a component or in this file.
//
// Usage rules:
// - bg-page is the page, bg-surface the second background. (The role is
//   "page", not "base": text-base is already a Tailwind font size.)
// - text-heading for headings, text-body for copy, text-muted for labels.
// - brand is for brand moments: primary buttons (with text-onbrand), the logo,
//   key graphics, small labels. accent is the second, rarer highlight.
// - Borders and neutral fills use body at low alpha (border-body/10).
const ROLES = [
  'page',
  'surface',
  'heading',
  'body',
  'muted',
  'brand',
  'onbrand',
  'accent',
  'success',
];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // Replaces (not extends) the default palette so only the roles exist.
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      ...Object.fromEntries(
        ROLES.map((role) => [role, `rgb(var(--${role}) / <alpha-value>)`])
      ),
    },
    fontFamily: {
      sans: ['var(--font-alexandria)', 'system-ui', 'sans-serif'],
      // System stack, nothing downloaded. Literal code only.
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
  plugins: [],
};
