import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';
import { siteConfig, type SiteLocale } from '@/lib/site';

const intlMiddleware = createMiddleware(routing);

function detectLocaleFromHeader(header: string | null): SiteLocale {
  const value = (header || '').toLowerCase();

  if (value.includes('zh')) {
    return 'zh';
  }

  if (value.includes('is')) {
    return 'is';
  }

  if (value.includes('da')) {
    return 'da';
  }

  return siteConfig.defaultLocale;
}

export default function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/') {
    const userAgent = request.headers.get('user-agent') || '';
    const isBot = /bot|crawl|spider|slurp|bingpreview/i.test(userAgent);
    const locale = isBot
      ? siteConfig.defaultLocale
      : detectLocaleFromHeader(request.headers.get('accept-language'));

    return NextResponse.redirect(new URL(`/${locale}`, request.url), 302);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
