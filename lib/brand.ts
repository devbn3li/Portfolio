import tokens from '@/brand/tokens.json';

// Brand colours for the few places that cannot read CSS variables (the OG
// image, the manifest, theme-color). Components use Tailwind classes or
// `rgb(var(--token))` instead.
export const color = tokens.color;

// sRGB hex -> OKLCH, so demos can derive their defaults from a brand token.
export function toOklch(hex: string) {
  const [r, g, b] = [1, 3, 5]
    .map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));

  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);

  const L = 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s;
  const A = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s;
  const B = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s;

  return {
    l: +L.toFixed(2),
    c: +Math.hypot(A, B).toFixed(2),
    h: Math.round(((Math.atan2(B, A) * 180) / Math.PI + 360) % 360),
  };
}
