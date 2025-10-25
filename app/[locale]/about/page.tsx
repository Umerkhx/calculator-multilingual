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
    title: "Calyx کے بارے میں",
    description: "ہم پرعزم ماہرین کی ایک ٹیم ہیں جو ہر منصوبے میں بہترین کارکردگی فراہم کرنے کے لیے وقف ہیں۔",
  },
  es: {
    title: "Acerca de Calyx",
    description: "Somos un equipo de profesionales dedicados comprometidos con ofrecer excelencia en cada proyecto.",
  },
  fr: {
    title: "À propos de Calyx",
    description: "Nous sommes une équipe de professionnels dévoués, engagés à offrir l’excellence dans chaque projet.",
  },
  ar: {
    title: "حول Calyx",
    description: "نحن فريق من المحترفين الملتزمين بتقديم التميز في كل مشروع.",
  },
  de: {
    title: "Über Calyx",
    description: "Wir sind ein Team engagierter Fachleute, die sich der Exzellenz in jedem Projekt verschrieben haben.",
  },
  tr: {
    title: "Calyx Hakkında",
    description: "Her projede mükemmellik sunmaya kararlı, adanmış profesyonellerden oluşan bir ekibiz.",
  },
  pt: {
    title: "Sobre a Calyx",
    description: "Somos uma equipe de profissionais dedicados comprometidos em oferecer excelência em cada projeto.",
  },
  zh: {
    title: "关于 Calyx",
    description: "我们是一支由敬业专业人士组成的团队，致力于在每个项目中追求卓越。",
  },
  hi: {
    title: "Calyx के बारे में",
    description: "हम समर्पित पेशेवरों की एक टीम हैं जो हर प्रोजेक्ट में उत्कृष्टता प्रदान करने के लिए प्रतिबद्ध हैं।",
  },
  it: {
    title: "Chi Siamo - Calyx",
    description: "Siamo un team di professionisti dedicati, impegnati a offrire eccellenza in ogni progetto.",
  },
  ru: {
    title: "О компании Calyx",
    description: "Мы — команда преданных профессионалов, стремящихся обеспечить высокое качество в каждом проекте.",
  },
};


  const content = aboutContent[locale]

  return (
    <div className="container mx-auto max-w-7xl px-4 py-20">
      <h1 className="text-4xl font-bold text-foreground">{content.title}</h1>
      <p className="mt-6 text-lg text-muted-foreground">{content.description}</p>
    </div>
  )
}
