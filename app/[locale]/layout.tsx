import type React from "react"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { type Locale, locales } from "@/lib/i18n"
import { generateSEOMetadata } from "@/lib/seo"

interface LayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    ...generateSEOMetadata({
      title: "Calyx - Professional Services",
      description:
        "Discover our professional services tailored for your business needs",
      locale,
      pathname: "/",
    }),
    robots: {
      index: false, 
      follow: false, 
      nocache: true, 
      googleBot: {
        index: false,
        follow: false,
      },
    },
  }
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params

  const langMap: Record<string, string> = {
    en: "en",
    ur: "ur",
    es: "es",
    fr: "fr",
    ar: "ar",
    de: "de",
    pt: "pt",
    ru: "ru",
    it: "it",
    zh: "zh",
    tr: "tr",
    hi: "hi",
  }

  const htmlLang = langMap[locale] || "en"
  
  const isRTL = ["ar", "ur"].includes(locale)

  return (
    <html lang={htmlLang} dir={isRTL ? "rtl" : "ltr"} suppressHydrationWarning>
      <body>
        <div className="flex min-h-screen flex-col">
          <Header locale={locale} />
          <main className="flex-1">{children}</main>
          <Footer locale={locale} />
        </div>
      </body>
    </html>
  )
}