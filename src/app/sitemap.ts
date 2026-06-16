import { MetadataRoute } from 'next';
import { appsData } from '@/data/apps';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://utsavjetani95.github.io';

  const mainRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  const appRoutes = appsData.map((app) => ({
    url: `${baseUrl}/apps/${app.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const privacyRoutes = appsData.map((app) => ({
    url: `${baseUrl}/privacy-policy/${app.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...mainRoutes, ...appRoutes, ...privacyRoutes];
}
