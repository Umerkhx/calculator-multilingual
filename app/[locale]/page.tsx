import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { CategoriesSection } from "@/components/categories-section"
import type { Locale } from "@/lib/i18n"
import { generateSEOMetadata, generateSchemaMarkup } from "@/lib/seo"

interface PageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params

  return generateSEOMetadata({
    title: "Global Solutions - Professional Services",
    description: "Discover our professional services tailored for your business needs",
    locale,
    pathname: "/",
    ogType: "website",
  })
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params

  const organizationSchema = generateSchemaMarkup("Organization", {
    name: "Global Solutions",
    url: "https://example.com",
    logo: "https://example.com/logo.png",
    description: "Professional services for global businesses",
    sameAs: ["https://twitter.com/globalsolutions", "https://linkedin.com/company/globalsolutions"],
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Hero locale={locale} />
      <Features locale={locale} />
      <CategoriesSection locale={locale} />
    </>
  )
}
