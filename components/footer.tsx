import Link from "next/link"
import { type Locale, translations } from "@/lib/i18n"
import Image from "next/image"

interface FooterProps {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  const t = translations[locale]

  return (
     <footer className="border-t border-border bg-zinc-100/20 backdrop-blur-3xl">
      <div className="container mx-auto max-w-7xl px-4 py-12">
          <div className="flex justify-between items-center px-20">
            <div className="flex flex-col gap-2">
              <span className="font-bold text-8xl  text-zinc-800">Calyx</span>
            <p className="mt-1 md:text-base text-sm  ">Professional solutions for global businesses</p>
            </div>
            <div>
            <h4 className="font-bold text-3xl text-zinc-800 mb-3">Social Links</h4>
            <div className="flex items-center gap-2">
            <Link href={"#"}><Image src={'/facebook.png'} width={40} height={40} alt="facebook"/></Link>
            <Link href={"#"}><Image src={'/instagram.png'} width={40} height={40} alt="instagram"/></Link>
            <Link href={"#"}><Image src={'/linkedin.png'} width={40} height={40} alt="linkedin"/></Link>
            </div>
            </div>
          </div>
        <div className="grid gap-8 md:grid-cols-4 my-12 mx-auto px-20">

          <div>
            <h4 className="font-semibold">Meet Calyx</h4>
            <ul className="mt-4 space-y-2 text-sm ">
              <li>
                <Link href={`/${locale}`} className="hover:text-blue-600">Home</Link></li>
              <li><Link href={`/${locale}`} className="hover:text-blue-600">About</Link></li>
              <li><Link href={`/${locale}`} className="hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Calculator Categories</h4>
            <ul className="mt-4 space-y-2 text-sm ">
              <li><Link href={`/${locale}`} className="hover:text-blue-600">Biology</Link></li>
              <li><Link href={`/${locale}`} className="hover:text-blue-600">Conversion</Link></li>
              <li><Link href={`/${locale}`} className="hover:text-blue-600">Finance</Link></li>
              <li><Link href={`/${locale}`} className="hover:text-blue-600">Math</Link></li>
              <li><Link href={`/${locale}`} className="hover:text-blue-600">Statistics</Link></li>
            </ul>
          </div>

          <div>
            <ul className="mt-4 space-y-2 text-sm ">
              <li><Link href={`/${locale}`} className="hover:text-blue-600">Chemistry</Link></li>
              <li><Link href={`/${locale}`} className="hover:text-blue-600">Ecology</Link></li>
              <li><Link href={`/${locale}`} className="hover:text-blue-600">Food</Link></li>
              <li><Link href={`/${locale}`} className="hover:text-blue-600">Physics</Link></li>
              <li><Link href={`/${locale}`} className="hover:text-blue-600">Construction</Link></li>
            </ul>
          </div>

          <div>
            <ul className="mt-4 space-y-2 text-sm ">
              <li><Link href={`/${locale}`} className="hover:text-blue-600">Everyday life</Link></li>
              <li><Link href={`/${locale}`} className="hover:text-blue-600">Health</Link></li>
              <li><Link href={`/${locale}`} className="hover:text-blue-600">Sports</Link></li>
              <li><Link href={`/${locale}`} className="hover:text-blue-600">Loan Calculator</Link></li>
              <li><Link href={`/${locale}`} className="hover:text-blue-600">Other</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-black/10 pt-10 text-center text-sm"><p>{t.footer.copyright}</p></div>
      </div>
    </footer>
  
    )}