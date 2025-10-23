import type { Metadata } from "next"
import type { Locale } from "@/lib/i18n"
import { generateSEOMetadata, generateLocalBusinessSchema } from "@/lib/seo"

interface PageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params

  return generateSEOMetadata({
    title: "Contact Us - Calyx",
    description: "Get in touch with our team for any inquiries or support",
    locale,
    pathname: "/contact",
  })
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params

  const contactContent = {
    en: {
      title: "Contact Us",
      description: "Have questions? We'd love to hear from you. Get in touch with our team.",
      email: "info@calyx.com",
      phone: "+1 (555) 123-4567",
      address: "123 Business Street, New York, NY 10001",
    },
    ur: {
      title: "ہمسے رابطہ کریں",
      description: "کیا آپ کے کوئی سوالات ہیں؟ ہم آپ سے سننا پسند کریں گے۔ ہماری ٹیم سے رابطہ کریں۔",
      email: "info@calyx.com",
      phone: "+92 (300) 123-4567",
      address: "123 کاروباری سڑک، کراچی، پاکستان",
    },
    es: {
      title: "Contáctenos",
      description: "¿Tiene preguntas? Nos encantaría saber de usted. Póngase en contacto con nuestro equipo.",
      email: "info@calyx.com",
      phone: "+34 (91) 123-4567",
      address: "123 Calle de Negocios, Madrid, España",
    },
    fr: {
      title: "Contáctenos",
      description: "¿Tiene preguntas? Nos encantaría saber de usted. Póngase en contacto con nuestro equipo.",
      email: "info@calyx.com",
      phone: "+34 (91) 123-4567",
      address: "123 Calle de Negocios, Madrid, España",
    },
    ar: {
      title: "Contáctenos",
      description: "¿Tiene preguntas? Nos encantaría saber de usted. Póngase en contacto con nuestro equipo.",
      email: "info@calyx.com",
      phone: "+34 (91) 123-4567",
      address: "123 Calle de Negocios, Madrid, España",
    },
  }

  const content = contactContent[locale]

  const localBusinessSchema = generateLocalBusinessSchema({
    name: "Calyx",
    description: "Professional services for global businesses",
    address: content.address,
    telephone: content.phone,
    email: content.email,
    url: "https://calculator-multilingual.vercel.app/",
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <div className="container mx-auto max-w-7xl px-4 py-20">
        <h1 className="text-4xl font-bold text-foreground">{content.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{content.description}</p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="font-semibold text-foreground">Email</h3>
            <p className="mt-2 text-muted-foreground">{content.email}</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="font-semibold text-foreground">Phone</h3>
            <p className="mt-2 text-muted-foreground">{content.phone}</p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="font-semibold text-foreground">Address</h3>
            <p className="mt-2 text-muted-foreground">{content.address}</p>
          </div>
        </div>
      </div>
    </>
  )
}
