import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import GullfossHero from '@/components/GullfossHero';
import GullfossIntro from '@/components/GullfossIntro';
import GullfossBasicInfo from '@/components/GullfossBasicInfo';
import GullfossHoursSection from '@/components/GullfossHoursSection';
import GullfossTicketsSection from '@/components/GullfossTicketsSection';
import TransportSection from '@/components/TransportSection';
import GullfossInfoSection from '@/components/GullfossInfoSection';
import GullfossRouteSection from '@/components/GullfossRouteSection';
import GullfossPhotoSpotsSection from '@/components/GullfossPhotoSpotsSection';
import HotelsSection from '@/components/HotelsSection';
import GullfossGallery from '@/components/GullfossGallery';
import GullfossFaqSection from '@/components/GullfossFaqSection';
import GullfossReviews from '@/components/GullfossReviews';
import GullfossMapEmbed from '@/components/GullfossMapEmbed';
import Footer from '@/components/Footer';
import { buildAlternates, getFaqTitle, getHomeSeo, getParkingFaq, siteConfig, type SiteLocale } from '@/lib/site';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const seo = getHomeSeo(locale as SiteLocale);

  return {
    title: seo.title,
    description: seo.description,
    alternates: buildAlternates(),
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${siteConfig.url}/${locale}`,
      siteName: siteConfig.guideName,
      type: 'article',
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const faqItems = getParkingFaq(locale as SiteLocale);
  const faqTitle = getFaqTitle(locale as SiteLocale);
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: locale,
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        <GullfossHero />
        <GullfossIntro />
        <GullfossBasicInfo />
        <GullfossHoursSection />
        <GullfossTicketsSection />
        <TransportSection />
        <GullfossInfoSection />
        <GullfossRouteSection />
        <GullfossPhotoSpotsSection />
        <HotelsSection />
        <GullfossFaqSection title={faqTitle} items={faqItems} />
        <GullfossGallery />
        <GullfossReviews />
        <GullfossMapEmbed />
      </main>
      <Footer />
    </>
  );
}
