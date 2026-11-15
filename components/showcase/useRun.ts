'use client';

import { useCallback, useEffect, useRef, useState, type AnimationEvent } from 'react';

// Name of the keyframes that time a whole run (see showcase.css). The scene
// root plays it for exactly as long as the run lasts, so the end of the run is
// its animationend event and no duration is repeated in JavaScript.
const CLOCK = 'shw-clock';

/**
 * One-shot run for a scene.
 *
 * `run()` sets data-run on the scene root, which starts one CSS timeline in
 * which every step takes its delay from its --i index. When the timeline ends
 * the attribute is removed, the scene is back in its rest state and `status`
 * holds the outcome for a role="status" element.
 *
 * Under prefers-reduced-motion nothing is started: the rest state already is
 * the finished state, so only the outcome is announced.
 */
export function useRun<T extends HTMLElement>(outcome: string) {
  const ref = useRef<T>(null);
  const timer = useRef(0);
  const [status, setStatus] = useState('');

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const run = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    window.clearTimeout(timer.current);
    setStatus('');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // Cleared first, then set, so the same outcome is announced each time.
      timer.current = window.setTimeout(() => setStatus(outcome), 60);
      return;
    }

    // Remove, flush, add: a press during a run restarts it from zero.
    el.removeAttribute('data-run');
    void el.offsetWidth;
    el.setAttribute('data-run', '');
  }, [outcome]);

  const onAnimationEnd = useCallback(
    (event: AnimationEvent<T>) => {
      if (event.target !== event.currentTarget || event.animationName !== CLOCK) return;
      event.currentTarget.removeAttribute('data-run');
      setStatus(outcome);
    },
    [outcome]
  );

  return { ref, status, run, onAnimationEnd };
}
