import { FiCode, FiSmartphone, FiLayout, FiZap, FiRefreshCw, FiGlobe } from 'react-icons/fi';
import AnimatedSection from './ui/AnimatedSection';

const services = [
  {
    icon: FiCode,
    title: 'Web Development',
    description: 'Building modern, fast, and scalable web applications using React.js, Next.js, and TypeScript.',
    color: '#61DAFB',
  },
  {
    icon: FiSmartphone,
    title: 'Responsive Design',
    description: 'Creating pixel-perfect, mobile-first designs that look great on all devices and screen sizes.',
    color: '#06B6D4',
  },
  {
    icon: FiLayout,
    title: 'UI/UX Implementation',
    description: 'Transforming Figma/XD designs into functional, interactive, and accessible user interfaces.',
    color: '#F24E1E',
  },
  {
    icon: FiZap,
    title: 'Performance Optimization',
    description: 'Optimizing web applications for speed, SEO, and Core Web Vitals to ensure the best user experience.',
    color: '#F7DF1E',
  },
  {
    icon: FiRefreshCw,
    title: 'Code Refactoring',
    description: 'Improving existing codebases with modern practices, clean architecture, and better maintainability.',
    color: '#764ABC',
  },
  {
    icon: FiGlobe,
    title: 'API Integration',
    description: 'Connecting frontend applications with REST APIs, GraphQL, and third-party services seamlessly.',
    color: '#339933',
  },
];

const Services = () => {
  return (
    <AnimatedSection>
      <section id="services" className="py-20">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-4xl text-white md:text-5xl font-black mb-4">
            Services<span className="text-[rgb(100_108_255)] font-black text-7xl">.</span>
          </h2>
          <p className="text-white/70 text-lg mb-12">
            What I can do for you
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-2"
              >
                {/* Background glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${service.color}10 0%, transparent 70%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="relative z-10 w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${service.color}15`,
                    border: `1px solid ${service.color}30`,
                  }}
                >
                  <service.icon
                    className="text-2xl"
                    style={{ color: service.color }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[rgb(100_108_255)] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover border glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: `0 0 30px ${service.color}20`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Services;
