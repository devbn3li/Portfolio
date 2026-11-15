import data from '@/brand/palettes.json';

// Colour is defined once, in brand/palettes.json, as semantic roles. Components
// only ever use the role names (bg-page, text-heading, bg-brand, ...), so a
// palette can change without touching a component.
export const ROLES = [
  'page', // page background
  'surface', // second background: cards, panels, footer
  'heading', // heading text
  'body', // body text (also borders and neutral fills at low alpha)
  'muted', // secondary text: labels, captions
  'brand', // main brand colour: primary buttons, logo, key graphics, small labels
  'onbrand', // text on a brand fill
  'accent', // second accent: highlights, link hover, focus ring
  'success', // positive status
] as const;

export type Role = (typeof ROLES)[number];
export type Palette = Record<Role, string> & {
  label: string;
  scheme: 'dark' | 'light';
};

export const palettes = data.palettes as Record<string, Palette>;
export const defaultPaletteName: string = data.default;

// The live palette, for the few places that cannot read CSS variables (the OG
// image, the manifest, theme-color).
export const palette = palettes[defaultPaletteName];

// "#0B2B3C" -> "11 43 60", so Tailwind opacity modifiers work on the variable.
const channels = (hex: string) => {
  const n = parseInt(hex.slice(1), 16);
  return `${n >> 16} ${(n >> 8) & 255} ${n & 255}`;
};

const block = (selector: string, p: Palette) =>
  `${selector}{${ROLES.map((r) => `--${r}:${channels(p[r])}`).join(';')};color-scheme:${p.scheme}}`;

// CSS for <head>. The default palette goes on :root. With `all`, every palette
// is also exposed behind [data-palette="name"] for the local design lab.
export function paletteCss(all: boolean) {
  const css = [block(':root', palette)];
  if (all) {
    for (const [name, p] of Object.entries(palettes)) {
      css.push(block(`[data-palette="${name}"]`, p));
    }
  }
  return css.join('');
}
