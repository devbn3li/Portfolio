'use client';

import { useId, useState } from 'react';
import DemoCard from './DemoCard';
import { color as brand, toOklch } from '@/lib/brand';

// Lightness, chroma and the default hue all come from the brand peach token.
const BASE = toOklch(brand.peach);

// Demo 1 — Design tokens, live. Three sliders drive a swatch + live CSS output.
export default function TokenDemo() {
  const [radius, setRadius] = useState(16);
  const [hue, setHue] = useState(BASE.h);
  const [glow, setGlow] = useState(28);
  const uid = useId();

  const color = `oklch(${BASE.l} ${BASE.c} ${hue})`;
  const css = `border-radius: ${radius}px;\nbackground: oklch(${BASE.l} ${BASE.c} ${hue});\nbox-shadow: 0 ${glow / 2}px ${glow}px\n  oklch(${BASE.l} ${BASE.c} ${hue} / .5);`;

  const controls: {
    id: string;
    label: string;
    min: number;
    max: number;
    value: number;
    set: (v: number) => void;
  }[] = [
    { id: `${uid}-r`, label: 'RADIUS', min: 0, max: 36, value: radius, set: setRadius },
    { id: `${uid}-h`, label: 'HUE', min: 0, max: 360, value: hue, set: setHue },
    { id: `${uid}-g`, label: 'GLOW', min: 0, max: 60, value: glow, set: setGlow },
  ];

  return (
    <DemoCard title="DESIGN TOKENS, LIVE" tag="CSS + STATE">
      <div className="grid h-[130px] place-items-center rounded-xl border border-mist/[0.06] bg-petrol">
        <div
          style={{
            width: 120,
            height: 72,
            borderRadius: radius,
            background: color,
            boxShadow: `0 ${glow / 2}px ${glow}px oklch(${BASE.l} ${BASE.c} ${hue} / .5)`,
            transition: 'border-radius .2s, box-shadow .2s, background .2s',
          }}
        />
      </div>

      <div className="flex flex-col gap-[10px] text-[11px] text-mist">
        {controls.map((c) => (
          <div key={c.id} className="flex items-center gap-[10px]">
            <label htmlFor={c.id} className="w-[52px]">
              {c.label}
            </label>
            <input
              id={c.id}
              type="range"
              min={c.min}
              max={c.max}
              value={c.value}
              onChange={(e) => c.set(+e.target.value)}
              aria-label={`${c.label} ${c.value}`}
              className="flex-1 accent-peach"
            />
          </div>
        ))}
      </div>

      <pre className="m-0 whitespace-pre-wrap rounded-[10px] border border-mist/[0.06] bg-petrol p-3 font-mono text-[10.5px] leading-[1.5] text-peach">
        {css}
      </pre>
    </DemoCard>
  );
}
