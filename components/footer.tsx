import Link from "next/link"
import { type Locale, translations } from "@/lib/i18n"
import { Facebook, FacebookIcon } from "lucide-react"
import Image from "next/image"

interface FooterProps {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  const t = translations[locale]

  return (
    <>
    <footer className="border-t border-border bg-zinc-100/20 backdrop-blur-3xl">
      <div className="container mx-auto max-w-7xl px-4 py-12">
          <div className="flex justify-between items-center px-20">
            <div className="flex flex-col items-center gap-2">
              <span className="font-bold text-9xl text-zinc-800">Calyx</span>
            <p className="mt-4 text-sm ">Professional solutions for global businesses</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={`/linkedin.png`} width={100} height={100} alt="facebook"/>
            </div>
          </div>
        <div className="grid gap-8 md:grid-cols-4 my-12 mx-auto">

          <div>
            <h4 className="font-semibold">Product</h4>
            <ul className="mt-4 space-y-2 text-sm ">
              <li>
                <Link href={`/${locale}`} className="">
                  Features
                </Link>
              </li>
              <li>
                <Link href={`/${locale}`} className="">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-4 space-y-2 text-sm ">
              <li>
                <Link href={`/${locale}`} className="">
                  About
                </Link>
              </li>
              <li>
                <Link href={`/${locale}`} className="">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm ">
              <li>
                <Link href={`/${locale}`} className="">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}`} className="">
                  {t.footer.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm ">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
    </>
    )}
  

