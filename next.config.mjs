/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Enable image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  
  // Compiler optimizations
  compiler: {
    // Remove console.logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Experimental features for better performance
  experimental: {
    // Optimize package imports
    optimizePackageImports: ['framer-motion', 'react-icons', '@headlessui/react', '@heroicons/react', '@tabler/icons-react'],
  },
  
  // The CV page and its PDF were removed; send old links to the homepage.
  // Temporary (307) on purpose, so a future CV can reuse the path.
  async redirects() {
    return [
      { source: '/cv', destination: '/', permanent: false },
      { source: '/Mohamed-Ali-Hussein-CV.pdf', destination: '/', permanent: false },
    ];
  },

  // Headers for caching
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
