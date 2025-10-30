"use client"

import { useState } from "react"
import Link from "next/link"
import { allCalculatorCategories } from "@/lib/calculators"
import { getTranslation, type Locale, translations } from "@/lib/i18n"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface FooterProps {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  const t = translations[locale]
  const [selectedCategory, setSelectedCategory] = useState(allCalculatorCategories[0].id)

  const currentCategory = allCalculatorCategories.find((cat) => cat.id === selectedCategory)
  const calculators = currentCategory?.calculators || []

  // Build calculator hrefs dynamically (no `/categories/`)
  const calculatorLinks = calculators.map((calc) => ({
    slug: calc.slug,
    href:
      locale === "en"
        ? `/${currentCategory?.id}/${calc.slug}`
        : `/${locale}/${currentCategory?.id}/${calc.slug}`,
  }))

  const firstThree = calculators.slice(0, 3)
  const secondThree = calculators.slice(3, 6)
  const thirdThree = calculators.slice(6, 9)

  return (
    <footer className="border-t border-border bg-zinc-100/20 backdrop-blur-3xl">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-5 md:px-20 px-5">
          <div className="flex flex-col gap-2 md:w-1/2">
            <h2 className="font-bold md:text-8xl text-6xl text-zinc-800">
              {t.nav.name}
            </h2>
            <p className="mt-2 md:text-base text-sm md:mb-0 mb-5">
              {t.footer.subtitle}
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-36 md:w-48">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {allCalculatorCategories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {getTranslation(locale, cat.name)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:px-20 px-5 my-10">
          {/* Column 1 — Static links (no locale) */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.footer.gridtitle1}</h3>
            <ul className="space-y-2 text-base">
              <li>
                <Link href={locale === "en" ? "/" : `/${locale}`} className="hover:text-blue-600">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link  href={locale === "en" ? "/about" : `/${locale}/about`} className="hover:text-blue-600">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href={locale === "en" ? "/contact" : `/${locale}/contact`} className="hover:text-blue-600">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">{t.footer.gridtitle2}</h3>
            <ul className="space-y-2 text-base">
              {firstThree.map((calc) => {
                const href =
                  calculatorLinks.find((link) => link.slug === calc.slug)?.href || "#"
                return (
                  <li key={calc.slug}>
                    <Link href={href} className="hover:text-blue-600">
                      {getTranslation(locale, calc.titleKey)}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <ul className="space-y-2 text-base">
              {secondThree.map((calc) => {
                const href =
                  calculatorLinks.find((link) => link.slug === calc.slug)?.href || "#"
                return (
                  <li key={calc.slug}>
                    <Link href={href} className="hover:text-blue-600">
                      {getTranslation(locale, calc.titleKey)}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Column 4 — Calculators 7–9 */}
          <div>
            <ul className="space-y-2 text-base">
              {thirdThree.map((calc) => {
                const href =
                  calculatorLinks.find((link) => link.slug === calc.slug)?.href || "#"
                return (
                  <li key={calc.slug}>
                    <Link href={href} className="hover:text-blue-600">
                      {getTranslation(locale, calc.titleKey)}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-black/10 pt-10 text-center text-sm">
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <Link href="#">
                <img src="/facebook.png" alt="facebook" width={40} height={40} />
              </Link>
              <Link href="#">
                <img src="/instagram.png" alt="instagram" width={40} height={40} />
              </Link>
              <Link href="#">
                <img src="/linkedin.png" alt="linkedin" width={40} height={40} />
              </Link>
            </div>

            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
