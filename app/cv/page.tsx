'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import GlobalChrome from '@/components/redesign/GlobalChrome';
import Nav from '@/components/redesign/Nav';
import Footer from '@/components/redesign/Footer';

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'SustainGRC',
    companyLink: 'https://www.sustaingrc.com',
    location: 'Remote | London',
    period: '03/2025 – Present',
    points: [
      'Led a full refactor of a large, multi-system React portal (25+ systems) that previously suffered from slow load times, outdated architecture, and inconsistent UI.',
      'Rebuilt the frontend architecture using modern Next.js patterns, optimized state management, and cleaned up legacy code, reducing initial load time from 60+ seconds to a few seconds.',
      'Designed and implemented a consistent, modern UI/UX across all systems, replacing outdated and unmaintainable components.',
      'Took ownership of major product decisions and cross-team coordination, acting as the primary point of responsibility for the portal\'s frontend quality and performance which contributed to bringing new clients to the platform.',
    ],
  },
  {
    title: 'Frontend Engineer',
    company: 'Actus Go',
    companyLink: 'https://actusgo.com',
    location: 'Remote | Jordan',
    period: '08/2024 – 03/2025',
    points: [
      'Developed the Super Application using React Native and Expo Go, and Next.js for the website.',
      'Collaborated with cross-functional teams to ensure seamless integration and functionality.',
    ],
  },
  {
    title: 'Intern Frontend Developer',
    company: 'SustainGRC',
    companyLink: 'https://www.sustaingrc.com',
    location: 'Remote | London',
    period: '01/2024 – 06/2024',
    points: [
      'Designed and developed the company\'s official website from scratch, creating a faster, more modern, and fully responsive online presence.',
    ],
  },
];

const education = [
  {
    degree: 'B.Sc. in Computer Science',
    school: 'University of the People, USA',
    period: '2024 – Present',
    description: 'Remote',
  },
  {
    degree: 'B.A. in English Literature',
    school: 'Faculty of Arts, Fayoum University, Egypt',
    period: '2021 – 2025',
    description: '',
  },
  {
    degree: 'Software Engineering Program',
    school: 'ALX Africa (Powered by Holberton School)',
    period: '02/2023 – 06/2024',
    description:
      'Completed a 15-month intensive program, mastering frontend engineering and CS fundamentals.',
  },
];

const skills = {
  webTechnologies: ['React.js', 'Next.js', 'WebSockets', 'Tailwind CSS', 'REST API'],
  technicalTools: ['Git', 'GitHub', 'Linux', 'Azure', 'CI/CD'],
  programmingLanguages: ['JavaScript', 'TypeScript', 'C', 'Python'],
};

const projects = [
  {
    title: 'Moviezone',
    tech: 'MERN STACK',
    description:
      'A fully functional application for Movies and TVShows using: Next.js, Tailwind, TypeScript, Node.js, MongoDB',
  },
];

const contactLinks = [
  { label: 'muhammed.ali.hissein@gmail.com', href: 'mailto:muhammed.ali.hissein@gmail.com' },
  { label: '+20 102 408 6643', href: 'tel:+201024086643' },
  { label: 'GITHUB ↗', href: 'https://github.com/devbn3li', external: true },
  { label: 'LINKEDIN ↗', href: 'https://linkedin.com/in/devbn3li', external: true },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <>
      <div className="font-mono text-[13px] tracking-[0.14em] text-accent">
        {index} / {title.toUpperCase()}
      </div>
      <h2 className="mb-6 mt-3 font-archivo text-[clamp(24px,3vw,34px)] font-extrabold tracking-[-0.01em]">
        {title}
      </h2>
    </>
  );
}

function Pill({ children, accent }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span
      className={
        accent
          ? 'rounded-full bg-accent/[0.12] px-4 py-2 font-mono text-[12px] tracking-[0.06em] text-accent-soft'
          : 'rounded-full border border-white/10 px-4 py-2 text-[13px] text-paper-muted'
      }
    >
      {children}
    </span>
  );
}

const CVPage = () => {
  return (
    <div
      id="top"
      className="relative min-h-screen overflow-x-hidden bg-ink font-grotesk text-[17px] leading-[1.6] text-paper"
    >
      <GlobalChrome />
      <Nav />

      <main className="relative z-[2] mx-auto max-w-[920px] px-6 pb-24 pt-32 md:px-10 md:pt-36">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="rounded-[20px] border border-white/[0.08] bg-surface p-7 md:p-12"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="mb-10 flex flex-col justify-between gap-6 border-b border-white/[0.08] pb-8 md:flex-row md:items-center"
          >
            <div>
              <div className="mb-3 font-mono text-[13px] tracking-[0.14em] text-accent">
                CV · MOHAMED ALI
              </div>
              <h1 className="m-0 font-archivo text-[clamp(34px,5vw,56px)] font-extrabold leading-[1.02] tracking-[-0.02em]">
                Mohamed Ali Hussein
              </h1>
              <p className="mt-2 font-mono text-[13px] tracking-[0.14em] text-paper-muted">
                FRONTEND ENGINEER · CAIRO, EG
              </p>
            </div>
            <a
              href="/Mohamed-Ali-Hussein-CV.pdf"
              download="Mohamed-Ali-Hussein-CV.pdf"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-7 py-[14px] font-semibold text-white no-underline transition-[transform,background-color] duration-200 hover:-translate-y-[3px] hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              Download CV <span aria-hidden>↓</span>
            </a>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={itemVariants}
            className="mb-12 flex flex-wrap gap-x-7 gap-y-3 font-mono text-[13px] tracking-[0.04em] text-paper-muted"
          >
            {contactLinks.map((c) => (
              <a
                key={c.label}
                href={c.href}
                {...(c.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="no-underline transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none"
              >
                {c.label}
              </a>
            ))}
          </motion.div>

          {/* Summary */}
          <motion.section variants={itemVariants} className="mb-14">
            <SectionHeading index="01" title="Summary" />
            <p className="m-0 max-w-[680px] text-paper-muted">
              Frontend Engineer with 2+ years of experience developing scalable
              web applications. Skilled in MERN Stack development, WebSocket
              real-time systems. Proven track record in optimizing UI/UX,
              improving performance, and delivering high-quality software
              solutions for international clients.
            </p>
          </motion.section>

          {/* Experience */}
          <motion.section variants={itemVariants} className="mb-14">
            <SectionHeading index="02" title="Experience" />
            <div className="flex flex-col gap-9">
              {experiences.map((exp) => (
                <motion.div
                  key={exp.title + exp.period}
                  variants={itemVariants}
                  className="relative border-l border-white/10 pl-6"
                >
                  <span
                    className={`absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full bg-accent ${
                      exp.period.includes('Present') ? 'rd-pulse' : ''
                    }`}
                    style={
                      exp.period.includes('Present')
                        ? { animation: 'rd-pulse 2s infinite' }
                        : undefined
                    }
                  />
                  <div className="flex flex-col justify-between gap-1 md:flex-row md:items-baseline">
                    <h3 className="m-0 font-archivo text-[20px] font-bold">
                      {exp.title}
                    </h3>
                    <span className="font-mono text-xs tracking-[0.08em] text-accent">
                      {exp.period}
                    </span>
                  </div>
                  <div className="mb-3 mt-1 text-[15px] text-paper-dim">
                    {exp.companyLink ? (
                      <Link
                        href={exp.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-paper-muted no-underline hover:text-accent"
                      >
                        {exp.company}
                      </Link>
                    ) : (
                      <span className="text-paper-muted">{exp.company}</span>
                    )}{' '}
                    · {exp.location}
                  </div>
                  <ul className="m-0 flex list-none flex-col gap-2 p-0">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-[15px] text-paper-muted"
                      >
                        <span className="mt-[2px] text-accent" aria-hidden>
                          ·
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Education */}
          <motion.section variants={itemVariants} className="mb-14">
            <SectionHeading index="03" title="Education" />
            <div className="flex flex-col gap-6">
              {education.map((edu) => (
                <motion.div
                  key={edu.degree}
                  variants={itemVariants}
                  className="relative border-l border-white/10 pl-6"
                >
                  <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full bg-accent" />
                  <div className="flex flex-col justify-between gap-1 md:flex-row md:items-baseline">
                    <h3 className="m-0 font-archivo text-[20px] font-bold">
                      {edu.degree}
                    </h3>
                    <span className="font-mono text-xs tracking-[0.08em] text-accent">
                      {edu.period}
                    </span>
                  </div>
                  <p className="mb-1 mt-1 text-[15px] text-paper-muted">
                    {edu.school}
                  </p>
                  {edu.description && (
                    <p className="m-0 text-[14px] text-paper-dim">
                      {edu.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Skills */}
          <motion.section variants={itemVariants} className="mb-14">
            <SectionHeading index="04" title="Skills" />
            <div className="flex flex-col gap-6">
              <div>
                <div className="mb-3 font-mono text-[11px] tracking-[0.12em] text-paper-dim">
                  WEB TECHNOLOGIES
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.webTechnologies.map((s) => (
                    <Pill key={s} accent>
                      {s}
                    </Pill>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-3 font-mono text-[11px] tracking-[0.12em] text-paper-dim">
                  TECHNICAL TOOLS
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.technicalTools.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-3 font-mono text-[11px] tracking-[0.12em] text-paper-dim">
                  PROGRAMMING LANGUAGES
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.programmingLanguages.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Projects */}
          <motion.section variants={itemVariants}>
            <SectionHeading index="05" title="Projects" />
            <div className="flex flex-col gap-4">
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  className="rounded-[14px] border border-white/[0.08] bg-ink p-5"
                >
                  <div className="mb-2 flex items-center gap-3">
                    <h3 className="m-0 font-archivo text-[18px] font-bold">
                      {project.title}
                    </h3>
                    <span className="rounded-full bg-accent/[0.12] px-3 py-1 font-mono text-[11px] tracking-[0.08em] text-accent-soft">
                      {project.tech}
                    </span>
                  </div>
                  <p className="m-0 text-[15px] text-paper-muted">
                    {project.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default CVPage;
