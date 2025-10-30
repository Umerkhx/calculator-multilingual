import type { Metadata } from "next";
import { locales, defaultLocale, type Locale } from "@/lib/i18n";
import { generateSEOMetadata } from "@/lib/seo";
import FadeIn from "@/components/FadeIn";
import ContactHero from "@/components/contact-comps/ContactHero";
import ContactSupport from "@/components/contact-comps/ContactSupport";

interface PageProps {
  params: { locale: Locale };
}

export async function generateStaticParams() {
  return locales
    .filter((locale) => locale !== defaultLocale)
    .map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = params;
  return generateSEOMetadata({
    title: "Contact Vast Calculators | Get Support or Share Feedback",
    description:
      "Need help or have a suggestion? Contact Vast Calculators for support, bug reports, or feature requests. Our team responds within 24 hours to keep your experience smooth and accurate.",
    locale,
    pathname: "/contact",
  });
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = params;
  return (
    <FadeIn>
      <ContactHero locale={locale} />
      <ContactSupport locale={locale} />
    </FadeIn>
  );
}