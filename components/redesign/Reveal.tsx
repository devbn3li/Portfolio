'use client';

import {
  useLayoutEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from 'react';

type RevealProps = {
  children: ReactNode;
  delay?: number; // ms
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  id?: string;
};

const EASE = 'cubic-bezier(.22,1,.36,1)';

// Fade + rise on scroll, matching the handoff reveal spec. Applied imperatively
// (like the prototype) so there is no hydration mismatch and no visible flash:
// SSR renders the element plainly, then a layout effect hides it before paint
// only when it sits below innerHeight * 0.92. Honors prefers-reduced-motion.
export default function Reveal({
  children,
  delay = 0,
  as,
  className,
  style,
  id,
}: RevealProps) {
  const Tag = (as ?? 'div') as ElementType;
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) return;

    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = `opacity .7s ${EASE} ${delay}ms, transform .7s ${EASE} ${delay}ms`;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = '1';
            el.style.transform = 'none';
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref as React.Ref<HTMLElement>} id={id} className={className} style={style}>
      {children}
    </Tag>
  );
}
