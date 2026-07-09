import type { MetadataRoute } from 'next';
import { getAbsoluteUrl, getLocalePath, siteConfig } from '@/lib/site';

const localizedPaths = ['', '/privacy-policy', '/terms-of-service', '/cookie-settings'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return siteConfig.locales.flatMap((locale) =>
    localizedPaths.map((pathname) => ({
      url: getAbsoluteUrl(getLocalePath(locale, pathname)),
      lastModified: now,
      changeFrequency: pathname === '' ? 'weekly' : 'monthly',
      priority: pathname === '' ? 1 : 0.3,
    })),
  );
}
