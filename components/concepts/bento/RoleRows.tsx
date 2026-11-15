'use client';

import { useId, useState } from 'react';
import type { RoleRow } from '@/components/showcase/content';
import { FIELD_LABEL, Plus, cx } from './ui';

// A role's rows: verb, then a short phrase. A row whose full line says more
// is a disclosure that reveals it. Rows are independent: opening one never
// closes another, so nothing above the pointer moves.
export default function RoleRows({ rows }: { rows: readonly RoleRow[] }) {
  const [open, setOpen] = useState<ReadonlySet<number>>(new Set());
  const uid = useId();

  const toggle = (index: number) =>
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });

  return (
    <ul className="m-0 list-none p-0">
      {rows.map((row, index) => {
        const expandable = row.line !== row.short;
        const isOpen = open.has(index);
        const layout =
          'grid w-full grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 py-3 text-left sm:grid-cols-[104px_1fr_auto]';
        const content = (
          <>
            <span
              className={cx(
                FIELD_LABEL,
                'col-span-2 text-heading sm:col-span-1',
              )}
            >
              {row.verb}
            </span>
            <span className="text-[15px] leading-snug text-body sm:text-base">
              {row.short}
            </span>
          </>
        );

        return (
          <li key={row.verb} className="border-t border-body/[0.12]">
            {expandable ? (
              <>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`${uid}-${index}`}
                  onClick={() => toggle(index)}
                  className={cx(layout, 'min-h-12')}
                >
                  {content}
                  <span
                    className={cx(
                      'row-span-2 grid h-8 w-8 place-items-center rounded-lg border border-muted text-heading transition-transform duration-200 motion-reduce:transition-none sm:row-span-1',
                      isOpen && 'rotate-45',
                    )}
                  >
                    <Plus />
                  </span>
                </button>
                <div
                  id={`${uid}-${index}`}
                  inert={!isOpen}
                  className="grid transition-[grid-template-rows] duration-300 ease-reveal motion-reduce:transition-none"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="m-0 max-w-[62ch] pb-4 text-[15px] leading-relaxed text-body sm:pl-[120px]">
                      {row.line}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className={cx(layout, 'min-h-12')}>{content}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
