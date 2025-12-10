'use client';

import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiArrowLeft, FiPhone } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'SustainGRC',
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
    description: 'Completed a 15-month intensive program, mastering frontend engineering and CS fundamentals.',
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
    tech: 'MERN Stack',
    description: 'A fully functional application for Movies and TVShows using: Next.js, Tailwind, TypeScript, Node.js, MongoDB',
  },
];

const CVPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    },
  } as const;

  return (
    <div className="min-h-screen bg-bg py-10 px-5">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto mb-8"
      >
        <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors">
          <FiArrowLeft />
          <span>Back to Portfolio</span>
        </Link>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 md:p-12"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 pb-8 border-b border-neutral-800">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
              Mohamed Ali Hussein
            </h1>
            <p className="text-xl text-[rgb(100_108_255)] font-semibold">Frontend Engineer</p>
          </div>
          <motion.a
            href="/Mohamed-Ali-Hussein-CV.pdf"
            download="Mohamed-Ali-Hussein-CV.pdf"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(100, 108, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-[rgb(100_108_255)] text-white font-semibold rounded-lg flex items-center gap-2 cursor-pointer"
          >
            <FiDownload />
            Download CV
          </motion.a>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-6 mb-10 text-white/70">
          <a href="mailto:muhammed.ali.hissein@gmail.com" className="flex items-center gap-2 hover:text-[rgb(100_108_255)] transition-colors">
            <FiMail /> muhammed.ali.hissein@gmail.com
          </a>
          <a href="tel:+201024086643" className="flex items-center gap-2 hover:text-[rgb(100_108_255)] transition-colors">
            <FiPhone /> +201024086643
          </a>
          <a href="https://github.com/devbn3li" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[rgb(100_108_255)] transition-colors">
            <FaGithub /> GitHub
          </a>
          <a href="https://linkedin.com/in/devbn3li" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[rgb(100_108_255)] transition-colors">
            <FaLinkedin /> LinkedIn
          </a>
        </motion.div>

        {/* Summary */}
        <motion.div variants={itemVariants} className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Summary</h2>
          <p className="text-white/70 leading-relaxed">
            Frontend Engineer with 2+ years of experience developing scalable web applications. Skilled in MERN Stack development, WebSocket real-time systems. Proven track record in optimizing UI/UX, improving performance, and delivering high-quality software solutions for international clients.
          </p>
        </motion.div>

        {/* Experience */}
        <motion.div variants={itemVariants} className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-6 border-l-2 border-[rgb(100_108_255_/_0.3)]"
              >
                {/* Timeline dot - pulsing if current */}
                {exp.period.includes('Present') ? (
                  <div className="absolute left-[-9px] top-0">
                    <motion.div
                      className="w-4 h-4 bg-[rgb(100_108_255)] rounded-full"
                      animate={{
                        boxShadow: [
                          '0 0 0 0 rgba(100, 108, 255, 0.7)',
                          '0 0 0 10px rgba(100, 108, 255, 0)',
                        ],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeOut',
                      }}
                    />
                  </div>
                ) : (
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-[rgb(100_108_255)] rounded-full" />
                )}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <span className="text-[rgb(100_108_255)] text-sm">{exp.period}</span>
                </div>
                <p className="text-white/50 mb-3">{exp.company} • {exp.location}</p>
                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-white/70 text-sm flex gap-2">
                      <span className="text-[rgb(100_108_255)]">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div variants={itemVariants} className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-6 border-l-2 border-[rgb(100_108_255_/_0.3)]"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-[rgb(100_108_255)] rounded-full" />
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                  <span className="text-[rgb(100_108_255)] text-sm">{edu.period}</span>
                </div>
                <p className="text-white/50 mb-2">{edu.school}</p>
                {edu.description && <p className="text-white/70 text-sm">{edu.description}</p>}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div variants={itemVariants} className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-6">Skills</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white/80 mb-3">Web Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.webTechnologies.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-[rgb(100_108_255_/_0.1)] text-[rgb(100_108_255)] rounded-lg text-sm border border-[rgb(100_108_255_/_0.2)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white/80 mb-3">Technical Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.technicalTools.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-neutral-800/50 text-white/70 rounded-lg text-sm border border-neutral-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white/80 mb-3">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.programmingLanguages.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-neutral-800/50 text-white/70 rounded-lg text-sm border border-neutral-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold text-white mb-6">Projects</h2>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-4 bg-neutral-800/30 rounded-xl border border-neutral-700"
              >
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <span className="px-2 py-1 bg-[rgb(100_108_255_/_0.1)] text-[rgb(100_108_255)] rounded text-xs">
                    {project.tech}
                  </span>
                </div>
                <p className="text-white/70 text-sm">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CVPage;
