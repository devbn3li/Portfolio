import Logo from '@/components/redesign/Logo';
import {
  CairoClock,
  CopyEmail,
  LoadRace,
  ResultPair,
} from '@/components/showcase';
import {
  CONTACT,
  IDENTITY,
  OWNERSHIP,
  ROLES,
  STACK,
  type Role,
} from '@/components/showcase/content';
import FacetDeck from '@/components/concepts/bento/FacetDeck';
import RoleRows from '@/components/concepts/bento/RoleRows';
import {
  ArrowDown,
  ArrowOut,
  ArrowUp,
  BTN_OUTLINE,
  BTN_PRIMARY,
  FIELD_LABEL,
  LINK,
  TILE,
  Tile,
  cx,
} from '@/components/concepts/bento/ui';

// "Living bento": the homepage as a grid of tiles, where the first screen is
// the showcase itself. Every fact comes from components/showcase/content.ts.

const CONTAINER = 'mx-auto w-full max-w-[1520px] px-4 sm:px-6 lg:px-10';
const SECTION = 'scroll-mt-[72px] pt-16 md:pt-24';
const H2 = 'm-0 text-[clamp(28px,3vw,40px)]';

const NAV = [
  { href: '#experience', label: 'Experience' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
];

const github = CONTACT.links[0];
const linkedin = CONTACT.links[1];
const [emailUser, emailHost] = CONTACT.email.split('@');

function RoleMeta({ role }: { role: Role }) {
  return (
    <p className="m-0 mt-2 text-sm leading-snug text-muted">
      {role.title} ·{' '}
      <a
        href={role.companyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={LINK}
      >
        {role.company}
      </a>{' '}
      · {role.location} · <span className="tabular-nums">{role.period}</span>
    </p>
  );
}

export default function BentoLayout() {
  const [current, previous, first] = ROLES;

  return (
    <div
      id="top"
      data-lab-root
      data-palette="lapis"
      className="min-h-screen overflow-x-clip bg-page text-base leading-[1.5] text-body"
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-surface focus:px-4 focus:py-3 focus:text-heading"
      >
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-body/[0.12] bg-page/85 backdrop-blur-md">
        <nav
          aria-label="Sections"
          className={cx(
            CONTAINER,
            'flex h-14 items-center justify-between gap-4',
          )}
        >
          <Logo href="#top" wordmarkClassName="hidden sm:inline" />
          <div className="flex min-w-0 items-center gap-1 sm:gap-2">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex h-10 items-center rounded-lg px-2 text-sm font-extrabold text-body no-underline transition-colors duration-150 hover:text-heading motion-reduce:transition-none sm:px-3"
              >
                {item.label}
              </a>
            ))}
            <a
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cx(
                BTN_OUTLINE,
                'ml-2 hidden h-10 px-4 text-sm md:inline-flex',
              )}
            >
              {github.label}
              <ArrowOut />
            </a>
          </div>
        </nav>
      </header>

      <main id="main" className={cx(CONTAINER, 'pt-[68px]')}>
        {/* First screen: identity, the result, the stage and the other facets */}
        <div className="grid gap-3 xl:h-[clamp(570px,calc(100svh-80px),720px)] xl:grid-cols-12">
          <div className="grid min-w-0 gap-3 md:grid-cols-12 xl:col-span-5 xl:flex xl:min-h-0 xl:flex-col">
            <Tile className="flex min-w-0 flex-col p-5 sm:p-7 md:col-span-7 xl:min-h-0 xl:flex-1">
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                <p className="m-0 text-[15px] leading-snug">
                  <span className="font-extrabold text-heading">
                    {IDENTITY.name}
                  </span>{' '}
                  <span className="text-muted">
                    known online as {IDENTITY.handle}
                  </span>
                </p>
                <p className="m-0 inline-flex items-center gap-2 text-[13px] text-body">
                  <span
                    aria-hidden
                    className="h-2 w-2 rounded-full bg-success"
                  />
                  {IDENTITY.availability}
                </p>
              </div>

              <h1 className="mb-0 mt-6 text-[clamp(30px,3.2vw,48px)] tracking-[-0.03em] [text-wrap:balance] xl:mt-auto">
                <span className="whitespace-nowrap">Frontend-first</span>{' '}
                software engineer.
              </h1>
              <p className="mb-0 mt-3 text-[clamp(17px,1.4vw,20px)] leading-snug text-heading">
                {IDENTITY.deck}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className={cx(
                    BTN_PRIMARY,
                    'w-full whitespace-nowrap sm:w-auto',
                  )}
                >
                  Email me
                </a>
                <a
                  href={github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cx(BTN_OUTLINE, 'flex-1 sm:flex-none')}
                >
                  {github.label}
                </a>
                <a
                  href={linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cx(BTN_OUTLINE, 'flex-1 sm:flex-none')}
                >
                  {linkedin.label}
                </a>
              </div>

              <dl className="m-0 mt-6 grid gap-x-6 gap-y-2 border-t border-body/[0.12] pt-4 text-sm leading-snug sm:grid-cols-[auto_1fr] xl:mt-auto">
                <dt className={FIELD_LABEL}>Now</dt>
                <dd className="m-0 text-heading">{IDENTITY.now}</dd>
                <dt className={FIELD_LABEL}>Owns</dt>
                <dd className="m-0 text-body">{IDENTITY.owns}</dd>
              </dl>
            </Tile>

            <Tile className="flex min-w-0 flex-col justify-center gap-2 p-5 sm:px-7 md:col-span-5 xl:shrink-0">
              <ResultPair className="text-[clamp(24px,2.6vw,38px)]" />
              <a
                href="#instrument"
                className={cx(
                  LINK,
                  'inline-flex min-h-10 w-fit items-center gap-2 text-sm',
                )}
              >
                Run it in real time
                <ArrowDown />
              </a>
            </Tile>
          </div>

          <div className="flex min-w-0 flex-col gap-3 xl:col-span-7 xl:min-h-0">
            <FacetDeck
              stageClassName="md:min-h-[440px] xl:min-h-0 xl:flex-1"
              previewsClassName="xl:h-[212px] xl:shrink-0"
            />
          </div>
        </div>

        <section
          id="experience"
          aria-labelledby="experience-heading"
          className={SECTION}
        >
          <h2 id="experience-heading" className={H2}>
            Experience
          </h2>

          <ul className="m-0 mt-6 grid list-none gap-3 p-0 sm:grid-cols-2 xl:grid-cols-4">
            {OWNERSHIP.map((item) => (
              <Tile as="li" key={item.verb} className="p-5">
                <span className="block text-xl font-extrabold leading-tight tracking-[-0.02em] text-heading">
                  {item.verb}
                </span>
                <span className="mt-2 block text-[15px] leading-snug text-body">
                  {item.line}
                </span>
              </Tile>
            ))}
          </ul>

          <Tile id="instrument" className="mt-3 scroll-mt-[72px] p-5 sm:p-8">
            <ResultPair className="text-[clamp(34px,6.4vw,96px)]" />
            <LoadRace className="mt-8 max-w-[880px]" />
          </Tile>

          <div className="mt-3 grid gap-3 xl:grid-cols-12">
            <Tile as="article" className="min-w-0 p-5 sm:p-7 xl:col-span-7">
              <p className="m-0 inline-flex items-center gap-2 text-[13px] text-body">
                <span aria-hidden className="h-2 w-2 rounded-full bg-success" />
                Current role
              </p>
              <h3 className="mb-0 mt-3 text-[clamp(22px,2.2vw,30px)] [text-wrap:balance]">
                {current.headline}
              </h3>
              <RoleMeta role={current} />
              <div className="mt-5">
                <RoleRows rows={current.rows} />
              </div>
            </Tile>

            <Tile as="article" className="min-w-0 p-5 sm:p-7 xl:col-span-5">
              <h3 className="m-0 text-xl [text-wrap:balance]">
                {previous.headline}
              </h3>
              <RoleMeta role={previous} />
              <div className="mt-5">
                <RoleRows rows={previous.rows} />
              </div>
            </Tile>

            <Tile as="article" className="min-w-0 p-5 sm:px-7 xl:col-span-12">
              <div className="grid gap-x-10 gap-y-3 xl:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] xl:items-center">
                <div>
                  <h3 className="m-0 text-base [text-wrap:balance]">
                    {first.headline}
                  </h3>
                  <RoleMeta role={first} />
                </div>
                <RoleRows rows={first.rows} />
              </div>
            </Tile>
          </div>
        </section>

        <section id="stack" aria-labelledby="stack-heading" className={SECTION}>
          <h2 id="stack-heading" className={H2}>
            Stack
          </h2>
          <Tile className="mt-6 p-5 sm:p-8">
            <p className="m-0 max-w-[62ch] text-heading">{IDENTITY.breadth}</p>

            <ol className="m-0 mt-8 list-none p-0">
              {STACK.map((group, index) => {
                const lead = index === 0;
                const last = index === STACK.length - 1;
                return (
                  <li
                    key={group.layer}
                    className="relative grid gap-x-6 gap-y-2 pb-7 pl-9 last:pb-0 sm:grid-cols-[150px_1fr] sm:items-baseline"
                  >
                    {/* The spine: one line through every layer, a node on each */}
                    {!last && (
                      <span
                        aria-hidden
                        className="absolute bottom-0 left-[7px] top-3 w-px bg-body/25"
                      />
                    )}
                    <span
                      aria-hidden
                      className={cx(
                        'absolute left-0 top-[5px] h-[15px] w-[15px] rounded-full border-2',
                        lead
                          ? 'border-brand bg-brand'
                          : 'border-muted bg-surface',
                      )}
                    />
                    <span className={FIELD_LABEL}>{group.layer}</span>
                    <ul className="m-0 flex list-none flex-wrap gap-x-7 gap-y-1 p-0">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className={cx(
                            'tracking-[-0.02em] text-heading',
                            lead
                              ? 'text-[clamp(20px,2vw,26px)] font-extrabold leading-tight'
                              : 'text-[clamp(17px,1.5vw,20px)] leading-tight',
                          )}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ol>
          </Tile>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className={SECTION}
        >
          <h2 id="contact-heading" className={H2}>
            Contact
          </h2>
          <div className="mt-6 grid gap-3 md:grid-cols-12">
            <Tile className="min-w-0 p-5 sm:p-8 md:col-span-7">
              <p className={cx(FIELD_LABEL, 'm-0')}>Email</p>
              <a
                href={`mailto:${CONTACT.email}`}
                className={cx(
                  LINK,
                  'mt-3 block text-[clamp(20px,2.9vw,40px)] font-extrabold leading-[1.15] tracking-[-0.02em] decoration-2 underline-offset-[6px]',
                )}
              >
                {emailUser}
                <wbr />@{emailHost}
              </a>
              <div className="mt-7 flex flex-wrap gap-2">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className={cx(
                    BTN_PRIMARY,
                    'w-full whitespace-nowrap sm:w-auto',
                  )}
                >
                  Email me
                </a>
                <CopyEmail />
              </div>
            </Tile>

            <Tile className="flex min-w-0 flex-col justify-between gap-6 p-5 sm:p-8 md:col-span-5">
              <CairoClock />
              <p className="m-0 text-[15px] leading-snug text-body">
                {IDENTITY.remote}
              </p>
            </Tile>

            {CONTACT.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cx(
                  TILE,
                  'flex min-h-[88px] items-center justify-between gap-4 p-5 text-xl font-extrabold tracking-[-0.02em] text-heading no-underline transition-colors duration-150 hover:border-muted motion-reduce:transition-none sm:px-7 md:col-span-4',
                )}
              >
                {link.label}
                <ArrowOut />
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className={cx(CONTAINER, 'mt-16 pb-44 md:mt-24')}>
        <div className="flex flex-col items-start justify-between gap-4 border-t border-body/[0.12] pt-6 text-sm sm:flex-row sm:items-center">
          <Logo href="#top" />
          <p className="m-0 text-muted">© 2026 {IDENTITY.name}</p>
          <a
            href="#top"
            className={cx(LINK, 'inline-flex min-h-10 items-center gap-2')}
          >
            Back to top
            <ArrowUp />
          </a>
        </div>
      </footer>
    </div>
  );
}
