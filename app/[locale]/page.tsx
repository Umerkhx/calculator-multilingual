import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { CategoriesSection } from "@/components/categories-section"
import { generateSEOMetadata, generateSchemaMarkup } from "@/lib/seo"
import { defaultLocale } from "@/lib/i18n"

export async function generateMetadata(): Promise<Metadata> {
  return generateSEOMetadata({
    title: "Calyx - Professional Services",
    description: "Discover our professional services tailored for your business needs",
    locale: defaultLocale,
    pathname: "/",
    ogType: "website",
  })
}

export default async function HomePage() {
  const organizationSchema = generateSchemaMarkup("Organization", {
    name: "Calyx",
    url: "https://calculator-multilingual.vercel.app/",
    logo: "https://calculator-multilingual.vercel.app/logo.png",
    description: "Professional services for global businesses",
    sameAs: ["https://twitter.com/calyx", "https://linkedin.com/company/calyx"],
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Hero locale={defaultLocale} />
      <Features locale={defaultLocale} />
      <CategoriesSection locale={defaultLocale} />
    </>
  )
}





  // const organizationSchema = generateSchemaMarkup("Organization", {
  //   name: "Calyx",
  //   url: "https://calculator-multilingual.vercel.app/",
  //   logo: "https://calculator-multilingual.vercel.app//logo.png",
  //   description: "Professional services for global businesses",
  //   sameAs: ["https://twitter.com/calyx", "https://linkedin.com/company/calyx"],
  // })