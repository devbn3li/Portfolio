/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#646cff',
          50: '#eef0ff',
          100: '#e0e3ff',
          200: '#c7cbff',
          300: '#a5aaff',
          400: '#8186ff',
          500: '#646cff',
          600: '#4a4af5',
          700: '#3d3ad8',
          800: '#3231ae',
          900: '#2c2e89',
          950: '#1b1b50',
        },
        bg: '#09090b',

        // Portfolio redesign tokens (devbn3li.app)
        ink: '#0a0a0e',
        surface: '#111118',
        'surface-alt': '#0d0d13',
        'surface-hover': '#131320',
        paper: '#ecebe4',
        'paper-muted': '#9a99a3',
        'paper-dim': '#55545e',
        accent: {
          DEFAULT: '#6f5bf5',
          hover: '#8271ff',
          soft: '#8f8bff',
        },
        success: '#3ddc97',
      },
      fontFamily: {
        poppins: ["Poppins", "Poppins Fallback", "sans-serif"],
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
        archivo: ["var(--font-archivo)", "system-ui", "sans-serif"],
        grotesk: ["var(--font-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      transitionTimingFunction: {
        reveal: 'cubic-bezier(.22, 1, .36, 1)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
