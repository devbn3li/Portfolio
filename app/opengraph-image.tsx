import { ImageResponse } from 'next/og';

// OG image built from the redesign hero: three-line Archivo headline with the
// outlined middle line, mono eyebrow, accent period. Generated at build time.
export const alt =
  'Mohamed Ali, Frontend Engineer. Interfaces that feel alive.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

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

const HEADLINE = 'INTERFACES THAT FEEL ALIVE.';
const EYEBROW =
  'MOHAMED ALI · FRONTEND ENGINEER REACT NEXT.JS TYPESCRIPT devbn3li.app';

export default async function Image() {
  const [archivo, mono] = await Promise.all([
    loadGoogleFont('Archivo', 800, HEADLINE),
    loadGoogleFont('JetBrains Mono', 500, EYEBROW),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '64px 72px',
          background:
            'radial-gradient(circle at 85% 10%, rgba(111,91,245,.22), transparent 55%), #0a0a0e',
          color: '#ecebe4',
        }}
      >
        <div
          style={{
            fontFamily: 'JetBrains Mono',
            fontSize: 26,
            letterSpacing: '0.14em',
            color: '#6f5bf5',
            marginBottom: 28,
          }}
        >
          MOHAMED ALI · FRONTEND ENGINEER
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Archivo',
            fontSize: 118,
            lineHeight: 0.98,
            letterSpacing: '-0.02em',
          }}
        >
          <div style={{ color: '#ecebe4' }}>INTERFACES</div>
          <div
            style={{
              color: 'rgba(236,235,228,.14)',
              WebkitTextStroke: '2px rgba(236,235,228,.85)',
            }}
          >
            THAT FEEL
          </div>
          <div style={{ display: 'flex', color: '#6f5bf5' }}>
            ALIVE<span style={{ color: '#ecebe4' }}>.</span>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 40,
            fontFamily: 'JetBrains Mono',
            fontSize: 22,
            letterSpacing: '0.1em',
            color: '#55545e',
          }}
        >
          <span>REACT · NEXT.JS · TYPESCRIPT</span>
          <span>devbn3li.app</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Archivo', data: archivo, weight: 800, style: 'normal' },
        { name: 'JetBrains Mono', data: mono, weight: 500, style: 'normal' },
      ],
    }
  );
}
