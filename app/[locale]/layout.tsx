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

  return generateSEOMetadata({
    title: "Global Solutions - Professional Services",
    description: "Discover our professional services tailored for your business needs",
    locale,
    pathname: "/",
  })
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params

  return (
    <div className="flex min-h-screen flex-col">
      <Header locale={locale} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} />
    </div>
  )
}
