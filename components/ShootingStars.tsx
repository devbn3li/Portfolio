export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
      {/* Deep space gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#09090b] to-[#0d0d12]" />

      {/* Subtle radial glow - top left accent */}
      <div
        className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(88, 28, 135, 0.15) 0%, transparent 70%)' }}
      />

      {/* Subtle radial glow - bottom right accent */}
      <div
        className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(30, 58, 138, 0.15) 0%, transparent 70%)' }}
      />

      {/* Center glow accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(100, 108, 255, 0.05) 0%, transparent 60%)' }}
      />

      {/* Static stars layer using CSS */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 20% 50%, rgba(255,255,255,0.6), transparent),
            radial-gradient(1.5px 1.5px at 30% 10%, rgba(255,255,255,0.9), transparent),
            radial-gradient(1px 1px at 40% 70%, rgba(255,255,255,0.5), transparent),
            radial-gradient(1px 1px at 50% 30%, rgba(255,255,255,0.7), transparent),
            radial-gradient(1.5px 1.5px at 60% 80%, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 70% 15%, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 80% 45%, rgba(255,255,255,0.5), transparent),
            radial-gradient(1.5px 1.5px at 90% 65%, rgba(255,255,255,0.7), transparent),
            radial-gradient(1px 1px at 15% 85%, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 25% 35%, rgba(255,255,255,0.5), transparent),
            radial-gradient(1.5px 1.5px at 35% 55%, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 45% 25%, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 55% 95%, rgba(255,255,255,0.7), transparent),
            radial-gradient(1px 1px at 65% 5%, rgba(255,255,255,0.5), transparent),
            radial-gradient(1.5px 1.5px at 75% 75%, rgba(255,255,255,0.9), transparent),
            radial-gradient(1px 1px at 85% 35%, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 95% 15%, rgba(255,255,255,0.7), transparent),
            radial-gradient(1px 1px at 5% 60%, rgba(255,255,255,0.5), transparent),
            radial-gradient(1.5px 1.5px at 12% 42%, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 22% 88%, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 32% 28%, rgba(255,255,255,0.7), transparent),
            radial-gradient(1.5px 1.5px at 42% 62%, rgba(255,255,255,0.5), transparent),
            radial-gradient(1px 1px at 52% 8%, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 62% 48%, rgba(255,255,255,0.6), transparent),
            radial-gradient(1.5px 1.5px at 72% 92%, rgba(255,255,255,0.7), transparent),
            radial-gradient(1px 1px at 82% 22%, rgba(255,255,255,0.5), transparent),
            radial-gradient(1px 1px at 92% 52%, rgba(255,255,255,0.9), transparent),
            radial-gradient(1px 1px at 8% 78%, rgba(255,255,255,0.6), transparent),
            radial-gradient(1.5px 1.5px at 18% 12%, rgba(255,255,255,0.7), transparent)
          `,
          backgroundSize: '100% 100%'
        }}
      />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Noise texture for depth */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Vignette effect */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.4) 100%)' }}
      />
    </div>
  );
}
