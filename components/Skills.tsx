'use client';

import { motion } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGit,
  SiNodedotjs,
  SiFigma,
  SiRedux,
  SiMongodb
} from 'react-icons/si';
import AnimatedSection from './ui/AnimatedSection';

const skills = [
  { name: 'React.js', icon: SiReact, color: '#61DAFB', level: 95 },
  { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF', level: 90 },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 85 },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 95 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 95 },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26', level: 98 },
  { name: 'CSS3', icon: SiCss3, color: '#1572B6', level: 95 },
  { name: 'Git', icon: SiGit, color: '#F05032', level: 85 },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 70 },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E', level: 80 },
  { name: 'Redux', icon: SiRedux, color: '#764ABC', level: 80 },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 65 },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    },
  } as const;

  return (
    <AnimatedSection>
      <section id="skills" className="py-20">
        <div className="max-w-5xl mx-auto px-5">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl text-white md:text-5xl font-black mb-4"
          >
            Skills<span className="text-[rgb(100_108_255_/_var(--tw-text-opacity))] font-black text-7xl">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/70 text-lg mb-12"
          >
            Technologies I work with to bring ideas to life
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 0 30px ${skill.color}30`,
                }}
                className="relative group bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 cursor-pointer overflow-hidden"
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color}15 0%, transparent 70%)`,
                  }}
                />

                <div className="relative z-10 flex flex-col items-center gap-3">
                  <skill.icon
                    className="text-4xl transition-all duration-300 group-hover:scale-110"
                    style={{ color: skill.color }}
                  />
                  <span className="text-white font-medium text-sm">{skill.name}</span>

                  {/* Progress bar */}
                  <div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Skills;
