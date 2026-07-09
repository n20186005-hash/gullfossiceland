export const siteConfig = {
  name: 'Gullfoss Iceland',
  guideName: 'Gullfoss Nature Reserve',
  url: 'https://www.gullfossiceland.com',
  locales: ['en', 'zh', 'is', 'da'] as const,
  defaultLocale: 'en' as const,
};

export type SiteLocale = (typeof siteConfig.locales)[number];

const htmlLangByLocale: Record<SiteLocale, string> = {
  en: 'en',
  zh: 'zh-CN',
  is: 'is',
  da: 'da',
};

const hreflangByLocale: Record<SiteLocale, string> = {
  en: 'en',
  zh: 'zh-Hans',
  is: 'is',
  da: 'da',
};

const homeSeoByLocale: Record<
  SiteLocale,
  {
    title: string;
    description: string;
  }
> = {
  en: {
    title: 'Gullfoss Waterfall Visitor Guide 2026: Parking Fee, Map & Best Routes',
    description:
      'Plan your visit to Gullfoss Waterfall with current parking fees, parking layout, map, opening hours, driving routes from Reykjavik, and practical visitor tips for 2026.',
  },
  zh: {
    title: 'Gullfoss 黄金瀑布游客指南 2026：停车费、地图与最佳路线',
    description:
      '面向中文游客的 Gullfoss 黄金瀑布实用指南，整合 2026 停车费、停车场分区、地图、开放时间、雷克雅未克自驾路线与现场游览建议。',
  },
  is: {
    title: 'Leidarvisir um Gullfoss 2026: Parkeringsgjald, kort og bestu leidar',
    description:
      'Skipuleggdu ferd til Gullfoss med uppfaerdum upplysingum um parkeringargjald, parkeringarsvaedi, kort, opnunartima og bestar akstursleidar fra Reykjavik arid 2026.',
  },
  da: {
    title: 'Gullfoss Guide 2026: Parkeringsafgift, kort og bedste ruter',
    description:
      'Planlag dit besog ved Gullfoss med opdaterede oplysninger om parkeringsafgift, parkeringsomrader, kort, abningstider og de bedste koreruter fra Reykjavik i 2026.',
  },
};

const parkingFaqByLocale: Record<
  SiteLocale,
  Array<{
    question: string;
    answer: string;
  }>
> = {
  en: [
    {
      question: 'Is parking free at Gullfoss?',
      answer:
        'No. Standard visitor parking for private cars is typically 750 ISK, while disabled visitors can use designated parking free of charge.',
    },
    {
      question: 'How much is the parking fee at Gullfoss?',
      answer:
        'The commonly published fee is around 750 ISK for private cars and about 2,500 ISK for tour buses, though local policies can change.',
    },
    {
      question: 'Where should I park at Gullfoss?',
      answer:
        'Most visitors use the main visitor parking area near the cafe and viewing paths, which provides the shortest walk to the upper viewpoints and visitor facilities.',
    },
  ],
  zh: [
    {
      question: 'Gullfoss 停车免费吗？',
      answer:
        '通常不免费。普通私家车停车费一般为 750 ISK 左右，残障人士专用停车位通常可免费使用。',
    },
    {
      question: 'Gullfoss 停车费多少钱？',
      answer:
        '常见公开信息显示，私家车约为 750 ISK，旅游巴士约为 2,500 ISK，但现场政策可能调整。',
    },
    {
      question: 'Gullfoss 应该停在哪个停车场？',
      answer:
        '大多数游客会使用靠近游客中心与观景步道的主停车区，这里前往上层观景点与配套设施的步行距离最短。',
    },
  ],
  is: [
    {
      question: 'Er okeypis ad leggja vid Gullfoss?',
      answer:
        'Nei. Almennt parkeringargjald fyrir einkabila er yfirleitt um 750 ISK, en adgengileg stedi fyrir fatlada eru oft gjaldfrjals.',
    },
    {
      question: 'Hvad kostar parkering vid Gullfoss?',
      answer:
        'Algengt birt gjald er um 750 ISK fyrir einkabila og um 2.500 ISK fyrir ferdamannarutur, en reglur geta breyst.',
    },
    {
      question: 'Hvar er best ad leggja vid Gullfoss?',
      answer:
        'Flestir leggja a adalbilastaedinu vid gestamidstod og gonguleidir, thar sem styst er ad efri utsynispollum og thjonustu.',
    },
  ],
  da: [
    {
      question: 'Er parkering gratis ved Gullfoss?',
      answer:
        'Nej. Normal parkering for private biler er typisk omkring 750 ISK, mens handicapparkering normalt kan bruges uden betaling.',
    },
    {
      question: 'Hvor meget koster parkering ved Gullfoss?',
      answer:
        'Den mest almindeligt offentliggjorte pris er cirka 750 ISK for private biler og omkring 2.500 ISK for turistbusser, men lokale regler kan aendres.',
    },
    {
      question: 'Hvor skal man parkere ved Gullfoss?',
      answer:
        'De fleste bruger hovedparkeringen ved visitor center og stierne, fordi den giver den korteste gangafstand til de ovre udsigtspunkter og faciliteterne.',
    },
  ],
};

function normalizePath(pathname = '') {
  if (!pathname || pathname === '/') {
    return '';
  }

  return pathname.startsWith('/') ? pathname : `/${pathname}`;
}

export function getHtmlLang(locale: string) {
  return htmlLangByLocale[(locale as SiteLocale) || siteConfig.defaultLocale] ?? 'en';
}

export function getHreflang(locale: SiteLocale) {
  return hreflangByLocale[locale];
}

export function getLocalePath(locale: SiteLocale, pathname = '') {
  return `/${locale}${normalizePath(pathname)}`;
}

export function getAbsoluteUrl(pathname = '') {
  return `${siteConfig.url}${normalizePath(pathname)}`;
}

export function buildAlternates(pathname = '') {
  const languages = Object.fromEntries(
    siteConfig.locales.map((locale) => [getHreflang(locale), getAbsoluteUrl(getLocalePath(locale, pathname))]),
  );

  return {
    canonical: getAbsoluteUrl(getLocalePath(siteConfig.defaultLocale, pathname)),
    languages: {
      ...languages,
      'x-default': getAbsoluteUrl(getLocalePath(siteConfig.defaultLocale, pathname)),
    },
  };
}

export function getHomeSeo(locale: SiteLocale) {
  return homeSeoByLocale[locale] ?? homeSeoByLocale.en;
}

export function getParkingFaq(locale: SiteLocale) {
  return parkingFaqByLocale[locale] ?? parkingFaqByLocale.en;
}
