import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Projects', href: '/projects' },
  { label: 'Tools', href: '/tools' },
  { label: 'CV', href: '/cv' },
];

const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/devbn3li',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://linkedin.com/in/devbn3li',
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    url: 'https://twitter.com/devbn3lii',
  },
];

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-neutral-800 bg-neutral-950/50 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-black text-white">
              M<span className="text-brand">.</span>
            </Link>
            <p className="mt-3 text-sm text-white/50">
              Frontend Engineer building fast, scalable web applications with
              modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/70">
              Pages
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/70">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow me on ${social.name}`}
                  className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-2.5 transition-all hover:scale-110 hover:border-brand/30 hover:bg-brand/10"
                >
                  <social.icon
                    className="text-lg text-white/70"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-neutral-800 pt-6 text-center">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Mohamed Ali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
