import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { getHomeSeo, getHtmlLang, siteConfig } from '@/lib/site';
import { Suspense } from 'react';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const seo = getHomeSeo(locale as any);

  return {
    metadataBase: new URL(siteConfig.url),
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${siteConfig.url}/${locale}`,
      siteName: siteConfig.guideName,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  // #region debug-point D:layout-order
  fetch('http://127.0.0.1:7777/event', { method: 'POST', body: JSON.stringify({ sessionId: 'client-side-exception', runId: 'post-fix', hypothesisId: 'D', location: 'src/app/[locale]/layout.tsx', msg: '[DEBUG] Locale layout renders GoogleAnalytics inside NextIntlClientProvider', data: { locale, gaOutsideProvider: false }, ts: Date.now() }) }).catch(() => {});
  // #endregion

  return (
    <html lang={getHtmlLang(locale)} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen">
        <NextIntlClientProvider messages={messages}>
          <Suspense fallback={null}>
            <GoogleAnalytics />
          </Suspense>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
