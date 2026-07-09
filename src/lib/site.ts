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
    title: 'Gullfoss Waterfall Ultimate Guide (Free Parking, Hike & Visitor Info)',
    description:
      'Plan your visit to Gullfoss Nature Reserve in Iceland. Find essential info on free parking, visitor center facilities, wheelchair access, and dog-friendly hiking paths. Open 24/7.',
  },
  zh: {
    title: '冰岛黄金瀑布 (Gullfoss) 游览指南：免费停车、徒步与游客中心',
    description:
      '规划您的冰岛黄金瀑布自然保护区之旅。获取关于免费停车场、游客中心、无障碍通道及狗狗友好徒步路线的最新信息。全天24小时开放。',
  },
  is: {
    title: 'Gullfoss leidarvisir: okeypis bilastaedi, gonguleidir og gestathjonusta',
    description:
      'Skipuleggdu heimsokn til Gullfoss med upplysingum um okeypis bilastaedi, gestamidstod, adgengi fyrir hjolastola og gonguleidir thar sem hundar eru velkomnir. Opið allan solarhringinn.',
  },
  da: {
    title: 'Gullfoss guide: gratis parkering, vandrestier og visitor center',
    description:
      'Planlaeg dit besog ved Gullfoss med opdaterede oplysninger om gratis parkering, visitor center, adgang for korestole og hundevenlige stier. Aabent dognets 24 timer.',
  },
};

const faqTitleByLocale: Record<SiteLocale, string> = {
  en: 'Frequently Asked Questions',
  zh: '常见问题',
  is: 'Algengar spurningar',
  da: 'Ofte stillede spørgsmål',
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
        'Yes. Parking at both the upper and lower Gullfoss car parks is currently free for private cars, tour buses, and accessible parking users.',
    },
    {
      question: 'What are the opening hours for Gullfoss Nature Reserve?',
      answer:
        'The nature reserve and waterfall viewpoints are open 24 hours a day, year-round. The visitor center, restaurant, and shop follow seasonal opening hours.',
    },
    {
      question: 'Are there hiking trails and is the area dog-friendly?',
      answer:
        'Yes. Short maintained walking paths connect the parking areas and viewpoints, and dogs are generally welcome on a leash along the marked paths.',
    },
    {
      question: 'Is Gullfoss part of a national park in Iceland?',
      answer:
        'No. Gullfoss is a designated nature reserve and one of the three core stops on the Golden Circle, usually visited together with Thingvellir National Park and the Geysir geothermal area.',
    },
  ],
  zh: [
    {
      question: 'Gullfoss 停车免费吗？',
      answer:
        '免费。Gullfoss 上下两个停车场目前对私家车、旅游巴士和无障碍停车位使用者均免费开放。',
    },
    {
      question: '黄金瀑布自然保护区的开放时间是？',
      answer:
        '黄金瀑布自然保护区和各观景区域全年 24 小时开放。游客中心、餐厅和商店则按季节调整营业时间。',
    },
    {
      question: '景区周边有徒步路线吗？可以带宠物吗？',
      answer:
        '有。景区内设有维护良好的短途步道连接停车场与观景台，通常允许牵引宠物犬沿标识步道同行。',
    },
    {
      question: '黄金瀑布属于冰岛国家公园吗？',
      answer:
        '不属于。Gullfoss 是独立的自然保护区，也是黄金圈三大核心景点之一，通常与辛格韦德利国家公园和 Geysir 地热区一同游览。',
    },
  ],
  is: [
    {
      question: 'Er okeypis ad leggja vid Gullfoss?',
      answer:
        'Ja. Baeði efra og nedra bilastaedið vid Gullfoss eru um þessar mundir okeypis fyrir einkabila, ferdamannarutur og adgengileg stedi.',
    },
    {
      question: 'Hver er opnunartimi Gullfoss?',
      answer:
        'Fridlandid og utsynissvaedin eru opin allan solarhringinn arid um kring. Gestamidstod, veitingasalur og verslun fylgja hins vegar arstidarbreytilegum opnunartimum.',
    },
    {
      question: 'Eru gonguleidir og ma taka med hund?',
      answer:
        'Ja. Stuttar og vel merktar gonguleidir tengja bilastaedin og utsynispallana, og almennt er leyfilegt ad vera med hund i taumi a merktum leidum.',
    },
    {
      question: 'Er Gullfoss hluti af thjodgardi?',
      answer:
        'Nei. Gullfoss er skilgreint fridland og einn af thremur meginastodum Gullna hringsins, oft heimsott samhliða Thingvöllum og Geysi.',
    },
  ],
  da: [
    {
      question: 'Er parkering gratis ved Gullfoss?',
      answer:
        'Ja. Både den øvre og den nedre parkeringsplads ved Gullfoss er i øjeblikket gratis for personbiler, turistbusser og handicapparkering.',
    },
    {
      question: 'Hvad er åbningstiderne for Gullfoss Naturreservat?',
      answer:
        'Naturreservatet og udsigtspunkterne er åbne 24 timer i døgnet hele året. Visitor center, restaurant og butik følger derimod sæsonbestemte åbningstider.',
    },
    {
      question: 'Er der vandrestier, og er området hundevenligt?',
      answer:
        'Ja. Korte, velholdte stier forbinder parkeringsområderne med udsigtspunkterne, og hunde er normalt velkomne i snor på de markerede ruter.',
    },
    {
      question: 'Er Gullfoss en del af en nationalpark på Island?',
      answer:
        'Nej. Gullfoss er et selvstændigt naturreservat og et af de tre hovedstop på Golden Circle, ofte besøgt sammen med Thingvellir National Park og Geysir-området.',
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

export function getFaqTitle(locale: SiteLocale) {
  return faqTitleByLocale[locale] ?? faqTitleByLocale.en;
}

export function getParkingFaq(locale: SiteLocale) {
  return parkingFaqByLocale[locale] ?? parkingFaqByLocale.en;
}
