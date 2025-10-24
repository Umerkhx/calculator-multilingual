import { type Locale, translations } from "@/lib/i18n"
interface HeroProps {
  locale: Locale
}

export function Hero({ locale }: HeroProps) {
  const t = translations[locale]

  return (
    <section className="overflow-hidden inset-0 -z-10 w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">{t.hero.title}</h1>
          <p className="mt-6 text-sm text-zinc-800 md:text-base">{t.hero.subtitle}</p>
          <button className="mt-8 rounded-lg bg-zinc-800 px-8 py-3 font-semibold text-zinc-50 transition-transform hover:scale-105">
            {t.hero.cta}
          </button>
        </div>
      </div>
    </section>
  )
}
