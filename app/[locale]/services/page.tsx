import type { Metadata } from "next"
import type { Locale } from "@/lib/i18n"
import { generateSEOMetadata, generateSchemaMarkup } from "@/lib/seo"

interface PageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params

  return generateSEOMetadata({
    title: "Services - Calyx",
    description: "Explore our comprehensive range of professional services",
    locale,
    pathname: "/services",
  })
}

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params

  const servicesContent = {
    en: {
      title: "Our Services",
      description: "We offer a comprehensive range of professional services tailored to meet your business needs.",
      services: [
        {
          name: "Consulting",
          description: "Expert business consulting to drive growth and efficiency",
        },
        {
          name: "Development",
          description: "Custom software development solutions for modern businesses",
        },
        {
          name: "Support",
          description: "24/7 technical support and maintenance services",
        },
      ],
    },
    ur: {
      title: "ہماری خدمات",
      description: "ہم آپ کی کاروباری ضروریات کو پورا کرنے کے لیے جامع پروفیشنل خدمات فراہم کرتے ہیں۔",
      services: [
        {
          name: "مشاورت",
          description: "ترقی اور کارکردگی کو بڑھانے کے لیے ماہرانہ کاروباری مشاورت",
        },
        {
          name: "ترقیات",
          description: "جدید کاروبار کے لیے حسب ضرورت سافٹ ویئر ترقیات",
        },
        {
          name: "معاونت",
          description: "24/7 تکنیکی معاونت اور دیکھ بھال کی خدمات",
        },
      ],
    },
    es: {
      title: "Nuestros Servicios",
      description: "Ofrecemos una gama completa de servicios profesionales adaptados a sus necesidades comerciales.",
      services: [
        {
          name: "Consultoría",
          description: "Consultoría empresarial experta para impulsar el crecimiento y la eficiencia",
        },
        {
          name: "Desarrollo",
          description: "Soluciones de desarrollo de software personalizado para empresas modernas",
        },
        {
          name: "Soporte",
          description: "Servicios de soporte técnico y mantenimiento 24/7",
        },
      ],
    },
    fr: {
      title: "Nuestros Servicios",
      description: "Ofrecemos una gama completa de servicios profesionales adaptados a sus necesidades comerciales.",
      services: [
        {
          name: "Consultoría",
          description: "Consultoría empresarial experta para impulsar el crecimiento y la eficiencia",
        },
        {
          name: "Desarrollo",
          description: "Soluciones de desarrollo de software personalizado para empresas modernas",
        },
        {
          name: "Soporte",
          description: "Servicios de soporte técnico y mantenimiento 24/7",
        },
      ],
    },
    ar: {
      title: "Nuestros Servicios",
      description: "Ofrecemos una gama completa de servicios profesionales adaptados a sus necesidades comerciales.",
      services: [
        {
          name: "Consultoría",
          description: "Consultoría empresarial experta para impulsar el crecimiento y la eficiencia",
        },
        {
          name: "Desarrollo",
          description: "Soluciones de desarrollo de software personalizado para empresas modernas",
        },
        {
          name: "Soporte",
          description: "Servicios de soporte técnico y mantenimiento 24/7",
        },
      ],
    },
  }

  const content = servicesContent[locale]

  const organizationSchema = generateSchemaMarkup("Organization", {
    name: "Calyx",
    url: "https://calculator-multilingual.vercel.app/",
    logo: "https://calculator-multilingual.vercel.app//logo.png",
    description: "Professional services for global businesses",
    sameAs: ["https://twitter.com/calyx", "https://linkedin.com/company/calyx"],
    areaServed: ["US", "PK", "ES"],
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <div className="container mx-auto max-w-7xl px-4 py-20">
        <h1 className="text-4xl font-bold text-foreground">{content.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{content.description}</p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {content.services.map((service, index) => (
            <div key={index} className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-xl font-semibold text-foreground">{service.name}</h3>
              <p className="mt-2 text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
