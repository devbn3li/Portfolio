import type { MetadataRoute } from 'next';
import { palette } from '@/lib/brand';

// Icons are generated from brand/icon.svg by scripts/generate-icons.mjs.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mohamed Ali (devbn3li)',
    short_name: 'devbn3li',
    start_url: '/',
    display: 'standalone',
    theme_color: palette.page,
    background_color: palette.page,
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
      {
        src: '/icons/icon-maskable-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
