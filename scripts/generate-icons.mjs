// Regenerates every site icon from brand/icon.svg. Run: node scripts/generate-icons.mjs
// Uses sharp, which is already installed as part of Next.js (no extra dependency).
import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const root = new URL('..', import.meta.url);
const at = (p) => new URL(p, root);

const svg = await readFile(at('brand/icon.svg'));
const { color } = JSON.parse(await readFile(at('brand/tokens.json'), 'utf8'));

const png = (size) =>
  sharp(svg, { density: 72 * (size / 160) * 4 })
    .resize(size, size)
    .png()
    .toBuffer();

// Full-bleed variant (square petrol field, no transparent corners) for
// platforms that apply their own mask: iOS home screen and maskable icons.
const fullBleed = async (size, scale = 1) => {
  const inner = Math.round(size * scale);
  return sharp({
    create: { width: size, height: size, channels: 4, background: color.petrol },
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

await mkdir(at('public/icons/'), { recursive: true });
await copyFile(at('brand/icon.svg'), at('app/icon.svg'));
await writeFile(at('app/favicon.ico'), await ico([16, 32, 48]));
await writeFile(at('app/apple-icon.png'), await fullBleed(180));
await writeFile(at('public/icons/icon-192.png'), await png(192));
await writeFile(at('public/icons/icon-512.png'), await png(512));
await writeFile(at('public/icons/icon-maskable-512.png'), await fullBleed(512, 0.8));

console.log('Icons generated from brand/icon.svg');
