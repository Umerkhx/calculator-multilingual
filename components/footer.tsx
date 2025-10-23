import Link from "next/link"
import { type Locale, translations } from "@/lib/i18n"

interface FooterProps {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  const t = translations[locale]

  return (
    <footer className="border-t border-border bg-neutral-900 text-white">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary-light to-accent" />
              <span className="font-bold">Calyx</span>
            </div>
            <p className="mt-4 text-sm text-white/60">Professional solutions for global businesses</p>
          </div>

          <div>
            <h4 className="font-semibold">Product</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>
                <Link href={`/${locale}`} className="hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href={`/${locale}`} className="hover:text-white">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>
                <Link href={`/${locale}`} className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href={`/${locale}`} className="hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li>
                <Link href={`/${locale}`} className="hover:text-white">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}`} className="hover:text-white">
                  {t.footer.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
