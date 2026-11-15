'use client';

import { useSyncExternalStore } from 'react';
import { IDENTITY } from './content';
import { FIELD_LABEL, cx } from './scene';

const MINUTE = 60_000;

// The current minute, as an external store: the server snapshot is null, so
// the server HTML and the first client render both show the city only, and
// the time appears right after hydration with no mismatch.
function subscribe(notify: () => void) {
  let timer = 0;
  const arm = () => {
    timer = window.setTimeout(() => {
      notify();
      arm();
    }, MINUTE - (Date.now() % MINUTE) + 50);
  };
  arm();
  // A tab that was asleep is told as soon as it is visible again.
  document.addEventListener('visibilitychange', notify);
  return () => {
    window.clearTimeout(timer);
    document.removeEventListener('visibilitychange', notify);
  };
}
const currentMinute = () => Math.floor(Date.now() / MINUTE);
const noMinute = () => null;

// Minutes between the wall clock in `timeZone` and UTC at that instant. Read
// from Intl each time, never hard-coded: Egypt observes summer time.
function zoneOffset(timeZone: string, at: Date) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hourCycle: 'h23',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }).formatToParts(at);
  const part = (type: Intl.DateTimeFormatPartTypes) =>
    Number(parts.find((p) => p.type === type)?.value);
  const wall = Date.UTC(part('year'), part('month') - 1, part('day'), part('hour'), part('minute'));
  return Math.round((wall - at.getTime()) / MINUTE);
}

function gapText(minutesAhead: number) {
  if (minutesAhead === 0) return 'Same time as you';
  const total = Math.abs(minutesAhead);
  const hours = Math.floor(total / 60);
  const minutes = total % 60;
  const parts: string[] = [];
  if (hours) parts.push(`${hours} ${hours === 1 ? 'hour' : 'hours'}`);
  if (minutes) parts.push(`${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`);
  return `${parts.join(' ')} ${minutesAhead > 0 ? 'ahead of' : 'behind'} you`;
}

/**
 * Where he is and what time it is there. Server HTML: the city only. After
 * mount: the current time in IDENTITY.timeZone and how far that is from the
 * visitor's own clock, refreshed on the minute. The time is 2em of this
 * element's font-size, so font-size on the element scales it.
 */
export function CairoClock({ className }: { className?: string }) {
  const minute = useSyncExternalStore<number | null>(subscribe, currentMinute, noMinute);
  const at = minute === null ? null : new Date(minute * MINUTE);

  return (
    <div className={cx('flex flex-col', className)}>
      <span className={FIELD_LABEL}>{IDENTITY.city}</span>
      {/* Both lines keep their height before the time is known: no jump. */}
      <span className="mt-[0.2em] min-h-[1.1em] text-[2em] font-extrabold leading-[1.1] tracking-[-0.02em] tabular-nums text-heading">
        {at && (
          <time dateTime={at.toISOString()}>
            {new Intl.DateTimeFormat(undefined, {
              timeZone: IDENTITY.timeZone,
              hour: '2-digit',
              minute: '2-digit',
            }).format(at)}
          </time>
        )}
      </span>
      <span className="mt-[0.3em] min-h-[1.4em] text-[length:max(12px,0.8em)] leading-[1.4] tabular-nums text-body">
        {at && gapText(zoneOffset(IDENTITY.timeZone, at) + at.getTimezoneOffset())}
      </span>
    </div>
  );
}
