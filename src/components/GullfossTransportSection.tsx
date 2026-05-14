import { useTranslations } from 'next-intl';

export default function GullfossTransportSection() {
  const t = useTranslations('transport');

  const transportOptions = [
    { key: 'walking', icon: 'M5 17h14M5 17a2 2 0 1 0 4 0M15 17a2 2 0 1 0 4 0M5 11l2-4h10l2 4M5 11a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2M7 9v2M17 9v2' },
    { key: 'bus', icon: 'M8 6v6M15 6v6M2 12h19.6M18 18h3M3 18h1M6 18h1M17 18h1M9 18h1M12 6v12M6 6h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z' },
    { key: 'car', icon: 'M18 10h-4V8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v6h12a2 2 0 0 0 2-2v-2zM6 18V16M18 18v-2' },
    { key: 'fromReykjavik', icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z' },
    { key: 'fromAirport', icon: 'M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 2v1h12v-1l-2-2v-5.5l8 2.5z' },
  ];

  return (
    <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <div className="space-y-4">
          {/* Driving (Recommended) */}
          <div className="p-5 rounded-xl" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--accent)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d={transportOptions[0].icon} />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {t('walking.title')}
                  <span className="ml-2 text-sm font-normal" style={{ color: 'var(--accent)' }}>{t('walking.badge')}</span>
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{t('walking.desc')}</p>
              </div>
            </div>
          </div>

          {/* Bus Tour */}
          <div className="p-5 rounded-xl" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--accent)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d={transportOptions[1].icon} />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{t('bus.title')}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{t('bus.desc')}</p>
              </div>
            </div>
          </div>

          {/* Parking */}
          <div className="p-5 rounded-xl" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--accent)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d={transportOptions[2].icon} />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{t('car.title')}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{t('car.desc')}</p>
              </div>
            </div>
          </div>

          {/* From Reykjavik */}
          <div className="p-5 rounded-xl" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--accent)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d={transportOptions[3].icon} />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{t('fromReykjavik.title')}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{t('fromReykjavik.desc')}</p>
              </div>
            </div>
          </div>

          {/* From Airport */}
          <div className="p-5 rounded-xl" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--accent)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d={transportOptions[4].icon} />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{t('fromAirport.title')}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{t('fromAirport.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
