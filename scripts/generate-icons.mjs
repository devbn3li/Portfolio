// Regenerates the brand mark files and every site icon from the default
// palette in brand/palettes.json. Run after changing that palette:
//   node scripts/generate-icons.mjs
// Uses sharp, which is already installed as part of Next.js (no extra dependency).
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const root = new URL('..', import.meta.url);
const at = (p) => new URL(p, root);

const { default: paletteName, palettes } = JSON.parse(
  await readFile(at('brand/palettes.json'), 'utf8')
);
const palette = palettes[paletteName];

// The mark: an M with a short crossbar. Same paths as components/redesign/Logo.tsx.
const mark = (stroke, bar) =>
  `<path d="M34 114 V50 L64 94 L94 50 L124 114" fill="none" stroke="${stroke}" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>` +
  `<path d="M84 92 H106" fill="none" stroke="${bar}" stroke-width="13" stroke-linecap="round"/>`;
const svgFile = (inner) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160">${inner}</svg>\n`;

const iconSvg = svgFile(
  `<rect width="160" height="160" rx="36" fill="${palette.page}"/>${mark(palette.brand, palette.accent)}`
);
const svg = Buffer.from(iconSvg);

const png = (size) =>
  sharp(svg, { density: 72 * (size / 160) * 4 })
    .resize(size, size)
    .png()
    .toBuffer();

// Full-bleed variant (a square field in the page colour, no transparent
// corners) for platforms that apply their own mask: the iOS home screen and
// maskable icons.
const fullBleed = async (size, scale = 1) => {
  const inner = Math.round(size * scale);
  return sharp({
    create: { width: size, height: size, channels: 4, background: palette.page },
  })
    .composite([{ input: await png(inner), gravity: 'centre' }])
    .png()
    .toBuffer();
};

// ICO container holding PNG-encoded 16, 32 and 48px images.
const ico = async (sizes) => {
  const images = await Promise.all(sizes.map(png));
  const header = Buffer.alloc(6);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = 6 + 16 * images.length;
  const entries = images.map((img, i) => {
    const e = Buffer.alloc(16);
    e.writeUInt8(sizes[i], 0);
    e.writeUInt8(sizes[i], 1);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(img.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += img.length;
    return e;
  });
  return Buffer.concat([header, ...entries, ...images]);
};

// Brand files: the app icon, and the bare mark for dark and for light
// backgrounds (on light, the mark is drawn in the page ink with a brand bar).
await writeFile(at('brand/icon.svg'), iconSvg);
await writeFile(at('brand/mark-on-dark.svg'), svgFile(mark(palette.brand, palette.accent)));
await writeFile(at('brand/mark-on-light.svg'), svgFile(mark(palette.page, palette.brand)));

await mkdir(at('public/icons/'), { recursive: true });
await writeFile(at('app/icon.svg'), iconSvg);
await writeFile(at('app/favicon.ico'), await ico([16, 32, 48]));
await writeFile(at('app/apple-icon.png'), await fullBleed(180));
await writeFile(at('public/icons/icon-192.png'), await png(192));
await writeFile(at('public/icons/icon-512.png'), await png(512));
await writeFile(at('public/icons/icon-maskable-512.png'), await fullBleed(512, 0.8));

console.log(`Brand marks and icons generated from the "${paletteName}" palette.`);
