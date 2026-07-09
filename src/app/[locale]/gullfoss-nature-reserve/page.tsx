import { redirect } from 'next/navigation';
import { getLocalePath, type SiteLocale } from '@/lib/site';

export default async function GullfossPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(getLocalePath(locale as SiteLocale));
}
