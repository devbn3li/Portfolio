'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import AnimatedSection from './ui/AnimatedSection';

const socialLinks = [
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/devbn3li', color: '#FFFFFF' },
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/devbn3li', color: '#0A66C2' },
  { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com/devbn3lii', color: '#1DA1F2' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    alert('Message sent successfully!');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  } as const;

  return (
    <AnimatedSection>
      <section id="contact" className="py-20">
        <div className="max-w-5xl mx-auto px-5">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl text-white md:text-5xl font-black mb-4"
          >
            Contact<span className="text-[rgb(100_108_255_/_var(--tw-text-opacity))] font-black text-7xl">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/70 text-lg mb-12"
          >
            Let&apos;s work together! Feel free to reach out.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.form
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-white/80 mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[rgb(100_108_255)] transition-colors"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-white/80 mb-2 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[rgb(100_108_255)] transition-colors"
                  placeholder="your@email.com"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-white/80 mb-2 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[rgb(100_108_255)] transition-colors resize-none"
                  placeholder="Your message..."
                />
              </motion.div>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(100, 108, 255, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-[rgb(100_108_255)] text-white font-semibold rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </motion.button>
            </motion.form>

            {/* Contact Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <div className="p-3 bg-[rgb(100_108_255_/_0.1)] rounded-lg">
                  <FiMail className="text-xl text-[rgb(100_108_255)]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <a href="mailto:muhammed.ali.hissein@gmail.com" className="text-white/60 hover:text-[rgb(100_108_255)] transition-colors">
                    muhammed.ali.hissein@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <div className="p-3 bg-[rgb(100_108_255_/_0.1)] rounded-lg">
                  <FiMapPin className="text-xl text-[rgb(100_108_255)]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Location</h4>
                  <p className="text-white/60">Cairo, Egypt</p>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants}>
                <h4 className="text-white font-semibold mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow me on ${social.name}`}
                      whileHover={{
                        scale: 1.2,
                        backgroundColor: 'rgba(100, 108, 255, 0.2)',
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg transition-colors"
                    >
                      <social.icon className="text-2xl text-white/70 hover:text-white" aria-hidden="true" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Decorative element */}
              <motion.div
                variants={itemVariants}
                className="relative mt-8 p-6 bg-gradient-to-br from-[rgb(100_108_255_/_0.1)] to-transparent rounded-2xl border border-neutral-800"
              >
                <p className="text-white/80 italic">
                  &quot;I&apos;m always excited to connect with fellow developers and discuss new opportunities!&quot;
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Contact;
