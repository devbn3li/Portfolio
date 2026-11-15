// Checks every palette in brand/palettes.json against WCAG AA.
// Run: node scripts/check-palettes.mjs   (exits 1 if any pair fails)
//
// Rules: heading, body, muted, brand, accent and success must each reach
// 4.5:1 on both page and surface; onbrand must reach 4.5:1 on brand.
import { readFile } from 'node:fs/promises';

const { default: defaultName, palettes } = JSON.parse(
  await readFile(new URL('../brand/palettes.json', import.meta.url), 'utf8')
);

const ROLES = ['page', 'surface', 'heading', 'body', 'muted', 'brand', 'onbrand', 'accent', 'success'];
const TEXT_ROLES = ['heading', 'body', 'muted', 'brand', 'accent', 'success'];
const HEX = /^#[0-9a-fA-F]{6}$/;
const AA = 4.5;

const luminance = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  const [r, g, b] = [n >> 16, (n >> 8) & 255, n & 255].map((v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => {
  const [x, y] = [luminance(a), luminance(b)];
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
};

let failures = 0;
for (const [name, p] of Object.entries(palettes)) {
  const bad = ROLES.filter((r) => !HEX.test(p[r] ?? ''));
  if (bad.length) {
    console.log(`\n${name}: invalid or missing colours: ${bad.join(', ')}`);
    failures += bad.length;
    continue;
  }
  const rows = [];
  for (const fg of TEXT_ROLES) {
    for (const bg of ['page', 'surface']) rows.push([`${fg} on ${bg}`, ratio(p[fg], p[bg])]);
  }
  rows.push(['onbrand on brand', ratio(p.onbrand, p.brand)]);

  console.log(`\n${name}${name === defaultName ? ' (default)' : ''}: ${p.label} [${p.scheme}]`);
  for (const [pair, r] of rows) {
    const ok = r >= AA;
    if (!ok) failures += 1;
    console.log(`  ${ok ? 'pass' : 'FAIL'}  ${r.toFixed(2).padStart(5)}  ${pair}`);
  }
  console.log(`  info  ${ratio(p.page, p.surface).toFixed(2).padStart(5)}  surface vs page`);
}

console.log(failures ? `\n${failures} failing pair(s).` : '\nAll palettes pass WCAG AA.');
process.exit(failures ? 1 : 0);
