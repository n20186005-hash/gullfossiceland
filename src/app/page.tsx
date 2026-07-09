import { redirect } from 'next/navigation';
import { siteConfig } from '@/lib/site';

export default function RootPage() {
  redirect(`/${siteConfig.defaultLocale}`);
}
