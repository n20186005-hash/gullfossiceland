import { setRequestLocale } from 'next-intl/server';
import { getMessages } from 'next-intl/server';
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
import GullfossReviews from '@/components/GullfossReviews';
import GullfossMapEmbed from '@/components/GullfossMapEmbed';
import Footer from '@/components/Footer';

export default async function GullfossPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <>
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
        <GullfossGallery />
        <GullfossReviews />
        <GullfossMapEmbed />
      </main>
      <Footer />
    </>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;
  return {
    title: messages.meta.title,
    description: messages.meta.description,
  };
}
