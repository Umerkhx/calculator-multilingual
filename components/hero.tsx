import { type Locale, translations } from "@/lib/i18n"

interface HeroProps {
  locale: Locale
}

export function Hero({ locale }: HeroProps) {
  const t = translations[locale]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary to-primary-light py-20 text-white md:py-32">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">{t.hero.title}</h1>
          <p className="mt-6 text-lg text-white/90 md:text-xl">{t.hero.subtitle}</p>
          <button className="mt-8 rounded-lg bg-white px-8 py-3 font-semibold text-primary transition-transform hover:scale-105">
            {t.hero.cta}
          </button>
        </div>
      </div>
    </section>
  )
}
