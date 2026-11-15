'use client';

import { useId, useState } from 'react';
import type { Role } from './data';

// One role open at a time. Closed panels stay in the HTML (for search engines)
// but are inert, so they are skipped by keyboard and assistive tech.
export default function RoleAccordion({ roles }: { roles: Role[] }) {
  const [open, setOpen] = useState(0);
  const uid = useId();

  return (
    <div className="border-b border-body/[0.09]">
      {roles.map((role, i) => {
        const isOpen = open === i;
        const buttonId = `${uid}-b${i}`;
        const panelId = `${uid}-p${i}`;

        return (
          <div key={role.title + role.period} className="border-t border-body/[0.09]">
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="group grid w-full grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2 py-7 text-left md:grid-cols-[200px_1fr_auto]"
              >
                <span className="col-span-2 flex items-center gap-[10px] text-xs font-normal tracking-[0.1em] text-brand md:col-span-1">
                  {role.current && (
                    <span
                      aria-hidden
                      className="rd-pulse h-2 w-2 shrink-0 rounded-full bg-success"
                      style={{ animation: 'rd-pulse 2s infinite' }}
                    />
                  )}
                  {role.period.toUpperCase()}
                </span>
                <span>
                  <span className="block text-[clamp(22px,2.4vw,30px)] transition-colors duration-200 group-hover:text-accent">
                    {role.title}
                  </span>
                  <span className="mt-1 block text-[15px] font-normal tracking-normal text-muted">
                    {role.company} · {role.location}
                  </span>
                </span>
                <span
                  aria-hidden
                  className={`grid h-10 w-10 place-items-center rounded-full border border-body/[0.14] text-[20px] font-normal leading-none text-brand transition-transform duration-300 motion-reduce:transition-none ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!isOpen}
              className="grid transition-[grid-template-rows] duration-500 ease-reveal motion-reduce:transition-none"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <div className="pb-8 md:pl-[224px] md:pr-16">
                  <ul className="m-0 flex list-none flex-col gap-3 p-0">
                    {role.points.map((point) => (
                      <li key={point} className="flex gap-3 text-body">
                        <span aria-hidden className="text-brand">
                          ·
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={role.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block text-[15px] text-body no-underline hover:text-accent"
                  >
                    Visit {role.company} <span aria-hidden>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
