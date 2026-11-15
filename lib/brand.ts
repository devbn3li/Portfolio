import tokens from '@/brand/tokens.json';

// Brand colours for the few places that cannot read CSS variables (the OG
// image, the manifest, theme-color). Components use Tailwind classes or
// `rgb(var(--token))` instead.
export const color = tokens.color;
