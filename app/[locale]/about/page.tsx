import type { Metadata } from "next"
import type { Locale } from "@/lib/i18n"
import { generateSEOMetadata } from "@/lib/seo"

interface PageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params

  return generateSEOMetadata({
    title: "About Us - Calyx",
    description: "Learn more about Calyx and our mission",
    locale,
    pathname: "/about",
  })
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params

  const aboutContent = {
    en: {
      title: "About Calyx",
      description: "We are a team of dedicated professionals committed to delivering excellence in every project.",
    },
    ur: {
      title: "عالمی حل کے بارے میں",
      description: "ہم وقف پروفیشنلز کی ایک ٹیم ہیں جو ہر پروجیکٹ میں بہتری فراہم کرنے کے لیے پرعزم ہیں۔",
    },
    es: {
      title: "Acerca de Soluciones Calyxes",
      description: "Somos un equipo de profesionales dedicados comprometidos a entregar excelencia en cada proyecto.",
    },
    fr: {
      title: "Acerca de Soluciones Calyxes",
      description: "Somos un equipo de profesionales dedicados comprometidos a entregar excelencia en cada proyecto.",
    },
    ar: {
      title: "Acerca de Soluciones Calyxes",
      description: "Somos un equipo de profesionales dedicados comprometidos a entregar excelencia en cada proyecto.",
    },
  }

  const content = aboutContent[locale]

  return (
    <div className="container mx-auto max-w-7xl px-4 py-20">
      <h1 className="text-4xl font-bold text-foreground">{content.title}</h1>
      <p className="mt-6 text-lg text-muted-foreground">{content.description}</p>
    </div>
  )
}
