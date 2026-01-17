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
  SiMongodb,
  SiJira,
  SiDocker
} from 'react-icons/si';
import { TbBrandReactNative } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import AnimatedSection from './ui/AnimatedSection';

const skills = [
  { name: 'React.js', icon: SiReact, color: '#61DAFB' },
  { name: 'React Native', icon: TbBrandReactNative, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'Redux', icon: SiRedux, color: '#764ABC' },
  { name: 'Docker', icon: SiDocker, color: '#007ACC' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Azure', icon: VscAzure, color: '#007ACC' },
  { name: 'Jira', icon: SiJira, color: '#0052CC' },
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
                  scale: 1.08,
                  boxShadow: `0 0 40px ${skill.color}40`,
                  borderColor: skill.color,
                }}
                className="relative group bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 cursor-pointer overflow-hidden transition-colors duration-300"
              >
                {/* Background glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color}20 0%, transparent 70%)`,
                  }}
                />

                <div className="relative z-10 flex flex-col items-center gap-3">
                  <motion.div
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.2,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <skill.icon
                      className="text-4xl drop-shadow-lg"
                      style={{
                        color: skill.color,
                        filter: `drop-shadow(0 0 10px ${skill.color}50)`,
                      }}
                    />
                  </motion.div>

                  <span className="text-white font-medium text-sm">
                    {skill.name}
                  </span>
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

