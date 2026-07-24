'use client';

import { useId, useState } from 'react';
import DemoCard from './DemoCard';

// Demo 1 — Design tokens, live. Three sliders drive a swatch + live CSS output.
export default function TokenDemo() {
  const [radius, setRadius] = useState(16);
  const [hue, setHue] = useState(275);
  const [glow, setGlow] = useState(28);
  const uid = useId();

  const color = `oklch(0.62 0.21 ${hue})`;
  const css = `border-radius: ${radius}px;\nbackground: oklch(0.62 0.21 ${hue});\nbox-shadow: 0 ${glow / 2}px ${glow}px\n  oklch(0.62 0.21 ${hue} / .5);`;

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
      <div className="grid h-[130px] place-items-center rounded-xl border border-white/[0.06] bg-ink">
        <div
          style={{
            width: 120,
            height: 72,
            borderRadius: radius,
            background: color,
            boxShadow: `0 ${glow / 2}px ${glow}px oklch(0.62 0.21 ${hue} / .5)`,
            transition: 'border-radius .2s, box-shadow .2s, background .2s',
          }}
        />
      </div>

      <div className="flex flex-col gap-[10px] font-mono text-[11px] text-paper-muted">
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
              className="flex-1 accent-accent"
            />
          </div>
        ))}
      </div>

      <pre className="m-0 whitespace-pre-wrap rounded-[10px] border border-white/[0.06] bg-ink p-3 font-mono text-[10.5px] leading-[1.5] text-accent-soft">
        {css}
      </pre>
    </DemoCard>
  );
}
