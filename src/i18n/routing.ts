import { defineRouting } from 'next-intl/routing';
import { siteConfig } from '@/lib/site';

export const routing = defineRouting({
  locales: [...siteConfig.locales],
  defaultLocale: siteConfig.defaultLocale,
  localePrefix: {
    mode: 'always',
  },
  pathnames: {
    '/': '/',
    '/gullfoss-nature-reserve': '/gullfoss-nature-reserve',
    '/privacy-policy': '/privacy-policy',
    '/terms-of-service': '/terms-of-service',
    '/cookie-settings': '/cookie-settings',
  },
});

export type Locale = (typeof routing.locales)[number];
