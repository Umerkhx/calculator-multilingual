import type { Metadata } from "next";
import { locales, defaultLocale, type Locale } from "@/lib/i18n";
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

export async function generateMetadata({ params }: PageProps) {
  const { locale } = params;

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