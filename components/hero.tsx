import { type Locale, translations } from "@/lib/i18n"
import Link from "next/link"

interface HeroProps {
  locale: Locale
}

export function Hero({ locale }: HeroProps) {
  const t = translations[locale]

  const symbols = ["+","-","×","÷","="]

  const repeatedSymbols = Array(600).fill(symbols).flat()

  return (
    <section className="relative overflow-hidden flex items-center justify-center py-30 bg-zinc-50">
      
      {/* Background Grid */}
      <div
        className="absolute inset-0 grid w-full h-full text-[24px] md:text-[32px] text-[#2a262767] font-mono leading-none"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(40px, 1fr))",
          gridAutoRows: "40px",
          opacity: 0.2,
        }}
      >
        {repeatedSymbols.map((symbol, i) => (
          <span key={i} className="text-center select-none">{symbol}</span>
        ))}
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 container mx-auto max-w-6xl px-4 text-center">
        <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-zinc-800">
          {t.hero.title}
        </h1>
        <p className="my-6 text-sm text-zinc-500 md:text-base">{t.hero.subtitle}</p>
        <Link href={`${locale}/categories`} className="mt-4 rounded-lg bg-zinc-800 px-8 py-3 font-semibold text-zinc-50 backdrop-blur-md transition-transform hover:scale-105">
          {t.hero.cta}
        </Link>
      </div>
    </section>
  )
}