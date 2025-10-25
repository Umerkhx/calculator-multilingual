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
    title: "Contactez-nous",
    description: "Des questions ? Nous serions ravis d'avoir de vos nouvelles. Contactez notre équipe.",
    email: "info@calyx.com",
    phone: "+33 (1) 23 45 67 89",
    address: "123 Rue des Affaires, Paris, France",
  },
  ar: {
    title: "اتصل بنا",
    description: "هل لديك أسئلة؟ يسعدنا سماعك. تواصل مع فريقنا.",
    email: "info@calyx.com",
    phone: "+971 (50) 123-4567",
    address: "123 شارع الأعمال، دبي، الإمارات العربية المتحدة",
  },
  de: {
    title: "Kontaktieren Sie uns",
    description: "Haben Sie Fragen? Wir freuen uns, von Ihnen zu hören. Kontaktieren Sie unser Team.",
    email: "info@calyx.com",
    phone: "+49 (30) 123-4567",
    address: "123 Geschäftsstraße, Berlin, Deutschland",
  },
  tr: {
    title: "Bize Ulaşın",
    description: "Sorularınız mı var? Sizden haber almak isteriz. Ekibimizle iletişime geçin.",
    email: "info@calyx.com",
    phone: "+90 (212) 123-4567",
    address: "123 İş Caddesi, İstanbul, Türkiye",
  },
  pt: {
    title: "Contate-nos",
    description: "Tem perguntas? Adoraríamos ouvir de você. Entre em contato com nossa equipe.",
    email: "info@calyx.com",
    phone: "+351 (21) 123-4567",
    address: "123 Rua de Negócios, Lisboa, Portugal",
  },
  zh: {
    title: "联系我们",
    description: "有问题吗？我们很乐意听到您的意见。请与我们的团队联系。",
    email: "info@calyx.com",
    phone: "+86 (10) 1234-5678",
    address: "中国北京市商务街123号",
  },
  hi: {
    title: "हमसे संपर्क करें",
    description: "क्या आपके कोई प्रश्न हैं? हमें आपसे सुनकर खुशी होगी। हमारी टीम से संपर्क करें।",
    email: "info@calyx.com",
    phone: "+91 (22) 1234-5678",
    address: "123 बिज़नेस स्ट्रीट, मुंबई, भारत",
  },
  it: {
    title: "Contattaci",
    description: "Hai domande? Ci piacerebbe sentirti. Mettiti in contatto con il nostro team.",
    email: "info@calyx.com",
    phone: "+39 06 1234 5678",
    address: "123 Via degli Affari, Roma, Italia",
  },
  ru: {
    title: "Свяжитесь с нами",
    description: "Есть вопросы? Мы будем рады вам помочь. Свяжитесь с нашей командой.",
    email: "info@calyx.com",
    phone: "+7 (495) 123-4567",
    address: "123 Деловая улица, Москва, Россия",
  },
};


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
