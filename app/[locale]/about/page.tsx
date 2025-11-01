import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { locales, defaultLocale } from "@/lib/i18n";
import AboutHero from "@/components/about-comps/AboutHero";
import AboutMission from "@/components/about-comps/AboutMission";
import FadeIn from "@/components/FadeIn";
import AboutValues from "@/components/about-comps/AboutValues";

interface PageProps {
  params: { locale: Locale };
}

export async function generateStaticParams() {
  return locales
    .filter((locale) => locale !== defaultLocale)
    .map((locale) => ({
      locale,
    }));
}

export async function generateMetadata({ params }: PageProps){
  const { locale } = params;

}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = params;
  return (
    <FadeIn>
      <AboutHero locale={locale} />
      <AboutMission locale={locale} />
      <AboutValues locale={locale} />
    </FadeIn>
  );
}