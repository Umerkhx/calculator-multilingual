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
de: {
  title: "Unsere Dienstleistungen",
  description: "Wir bieten eine umfassende Palette professioneller Dienstleistungen, die auf Ihre geschäftlichen Bedürfnisse zugeschnitten sind.",
  services: [
    {
      name: "Beratung",
      description: "Fachkundige Unternehmensberatung zur Förderung von Wachstum und Effizienz",
    },
    {
      name: "Entwicklung",
      description: "Maßgeschneiderte Softwareentwicklungs­lösungen für moderne Unternehmen",
    },
    {
      name: "Support",
      description: "Technischer Support und Wartungsdienste rund um die Uhr",
    },
  ],
},

tr: {
  title: "Hizmetlerimiz",
  description: "İş ihtiyaçlarınıza uygun profesyonel hizmetlerin kapsamlı bir yelpazesini sunuyoruz.",
  services: [
    {
      name: "Danışmanlık",
      description: "Büyüme ve verimliliği artırmak için uzman iş danışmanlığı",
    },
    {
      name: "Geliştirme",
      description: "Modern işletmeler için özel yazılım geliştirme çözümleri",
    },
    {
      name: "Destek",
      description: "7/24 teknik destek ve bakım hizmetleri",
    },
  ],
},

pt: {
  title: "Nossos Serviços",
  description: "Oferecemos uma gama completa de serviços profissionais adaptados às suas necessidades empresariais.",
  services: [
    {
      name: "Consultoria",
      description: "Consultoria empresarial especializada para impulsionar o crescimento e a eficiência",
    },
    {
      name: "Desenvolvimento",
      description: "Soluções personalizadas de desenvolvimento de software para empresas modernas",
    },
    {
      name: "Suporte",
      description: "Serviços de suporte técnico e manutenção 24 horas por dia, 7 dias por semana",
    },
  ],
},

zh: {
  title: "我们的服务",
  description: "我们提供全面的专业服务，以满足您的业务需求。",
  services: [
    {
      name: "咨询",
      description: "专业的商业咨询，助力增长与效率提升",
    },
    {
      name: "开发",
      description: "为现代企业量身定制的软件开发解决方案",
    },
    {
      name: "支持",
      description: "全天候技术支持与维护服务",
    },
  ],
},

hi: {
  title: "हमारी सेवाएँ",
  description: "हम आपके व्यावसायिक आवश्यकताओं के अनुरूप पेशेवर सेवाओं की एक पूरी श्रृंखला प्रदान करते हैं।",
  services: [
    {
      name: "परामर्श",
      description: "विकास और दक्षता को बढ़ावा देने के लिए विशेषज्ञ व्यावसायिक परामर्श",
    },
    {
      name: "विकास",
      description: "आधुनिक व्यवसायों के लिए अनुकूलित सॉफ्टवेयर विकास समाधान",
    },
    {
      name: "सहायता",
      description: "24/7 तकनीकी सहायता और रखरखाव सेवाएँ",
    },
  ],
},

it: {
  title: "I Nostri Servizi",
  description: "Offriamo una gamma completa di servizi professionali su misura per le esigenze della tua azienda.",
  services: [
    {
      name: "Consulenza",
      description: "Consulenza aziendale esperta per favorire la crescita e l’efficienza",
    },
    {
      name: "Sviluppo",
      description: "Soluzioni personalizzate di sviluppo software per aziende moderne",
    },
    {
      name: "Supporto",
      description: "Servizi di supporto tecnico e manutenzione 24 ore su 24, 7 giorni su 7",
    },
  ],
},

ru: {
  title: "Наши услуги",
  description: "Мы предлагаем полный спектр профессиональных услуг, адаптированных под ваши бизнес-потребности.",
  services: [
    {
      name: "Консалтинг",
      description: "Профессиональные консультации для повышения роста и эффективности бизнеса",
    },
    {
      name: "Разработка",
      description: "Индивидуальные решения по разработке программного обеспечения для современных компаний",
    },
    {
      name: "Поддержка",
      description: "Круглосуточная техническая поддержка и обслуживание",
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
