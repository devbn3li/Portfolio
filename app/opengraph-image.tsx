import { ImageResponse } from 'next/og';
import { palette } from '@/lib/brand';

// OG image in the brand identity: a page-colour field, the mark, the name with
// the handle in the heading colour and the role in the brand colour.
// Generated at build time.
export const alt = 'Mohamed Ali (devbn3li), Frontend engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const NAME = 'Mohamed Ali (devbn3li)';
const ROLE = 'Frontend engineer';

// Fetches a subsetted TTF from Google Fonts (build-time only).
async function loadGoogleFont(family: string, weight: number, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
    family
  )}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+?)\) format\('(opentype|truetype)'\)/
  );
  if (resource) {
    const res = await fetch(resource[1]);
    if (res.ok) return res.arrayBuffer();
  }
  throw new Error(`Failed to load font: ${family}`);
}

export default async function Image() {
  const [heavy, regular] = await Promise.all([
    loadGoogleFont('Alexandria', 800, NAME),
    loadGoogleFont('Alexandria', 400, ROLE),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: palette.page,
          color: palette.heading,
          fontFamily: 'Alexandria',
        }}
      >
        {/* Same paths as brand/mark-on-dark.svg */}
        <svg width="168" height="168" viewBox="0 0 160 160" fill="none">
          <path
            d="M34 114 V50 L64 94 L94 50 L124 114"
            stroke={palette.brand}
            strokeWidth="15"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M84 92 H106"
            stroke={palette.accent}
            strokeWidth="13"
            strokeLinecap="round"
          />
        </svg>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
            }}
          >
            {NAME}
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 40,
              fontWeight: 400,
              color: palette.brand,
            }}
          >
            {ROLE}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Alexandria', data: heavy, weight: 800, style: 'normal' },
        { name: 'Alexandria', data: regular, weight: 400, style: 'normal' },
      ],
    }
  );
}
