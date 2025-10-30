import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import type { Locale } from "@/lib/i18n";
import { generateSEOMetadata, generateSchemaMarkup } from "@/lib/seo";
import CardsSection from "@/components/CardSection";
import FadeIn from "@/components/FadeIn";
import AboutSection from "@/components/AboutSection";
import CategoriesSection from "@/components/categories-section";
import { defaultLocale, locales } from "@/lib/i18n";

interface PageProps {
  params: { locale: Locale };
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = params;

  return generateSEOMetadata({
    title: "Calyx - Professional Services",
    description: "Discover our professional services tailored for your business needs",
    locale,
    pathname: "/",
    ogType: "website",
  });
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = params;

  const organizationSchema = generateSchemaMarkup("Organization", {
    name: "Calyx",
    url: "https://calyx-mme.vercel.app/",
    logo: "https://calyx-mme.vercel.app/logo.png",
    description: "Professional services for global businesses",
    sameAs: ["https://twitter.com/calyx", "https://linkedin.com/company/calyx"],
  });

  return (
    <FadeIn>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <Hero locale={locale} />
      <CardsSection locale={locale} />
      <AboutSection locale={locale} />
      <CategoriesSection locale={locale} />
    </FadeIn>
  );
}
