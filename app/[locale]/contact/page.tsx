import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { generateSEOMetadata } from "@/lib/seo";
import FadeIn from "@/components/FadeIn";
import ContactHero from "@/components/contact-comps/ContactHero";
import ContactSupport from "@/components/contact-comps/ContactSupport";


interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  return generateSEOMetadata({
    title: "Contact Calyx – We're Here to Help",
    description:
      "Have a question, suggestion, or partnership idea? Get in touch with Calyx — we're always happy to hear from you.",
    locale,
    pathname: "/contact",
  });
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <FadeIn>
      <ContactHero locale={locale} />
      <ContactSupport locale={locale} />
    </FadeIn>
  );
}
