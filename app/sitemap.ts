import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://devbn3li.vercel.app';

  const routes = [
    '',
    '/cv',
    '/blog',
    '/projects',
    '/tools',
    '/tools/px-converter',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: route === '' ? 1 : route === '/cv' ? 0.9 : 0.8,
  }));

  return routes;
}
