import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { CategoriesSection } from "@/components/categories-section"
import type { Locale } from "@/lib/i18n"
import { generateSEOMetadata, generateSchemaMarkup } from "@/lib/seo"
import CardsSection from "@/components/CardSection"

interface PageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params

  return generateSEOMetadata({
    title: "Calyx - Professional Services",
    description: "Discover our professional services tailored for your business needs",
    locale,
    pathname: "/",
    ogType: "website",
  })
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params

  const organizationSchema = generateSchemaMarkup("Organization", {
    name: "Calyx",
    url: "https://calculator-multilingual.vercel.app/",
    logo: "https://calculator-multilingual.vercel.app//logo.png",
    description: "Professional services for global businesses",
    sameAs: ["https://twitter.com/calyx", "https://linkedin.com/company/calyx"],
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Hero locale={locale} />
      {/* <Features locale={locale} /> */}
      <CardsSection locale={locale} />
      <CategoriesSection locale={locale} />
    </>
  )
}




