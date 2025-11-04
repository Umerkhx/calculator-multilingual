import type { Metadata } from "next";
import CalculatorClient from "@/components/calculator-comps/CalculatorClient";
import { allCalculatorCategories, getCalculatorBySlug } from "@/lib/calculators";
import { getTranslation, type Locale, defaultLocale, locales } from "@/lib/i18n";

const baseUrl = "https://vastcalculators.com";

export async function generateStaticParams() {
  const paths: { locale: string; category: string; calculator: string }[] = [];

  locales
    .filter((locale) => locale !== defaultLocale)
    .forEach((locale) => {
      allCalculatorCategories.forEach((category) => {
        category.calculators.forEach((calc) => {
          paths.push({
            locale,
            category: category.id,
            calculator: calc.slug,
          });
        });
      });
    });

  return paths;
}

interface CalculatorPageProps {
  params: { locale?: string; category: string; calculator: string };
}

export async function generateMetadata({ params }: CalculatorPageProps): Promise<Metadata> {
  const { locale = defaultLocale, category, calculator } = params;
  const validLocale = (locales.includes(locale as Locale) ? locale : defaultLocale) as Locale;
  const calc = getCalculatorBySlug(category, calculator);

  if (!calc) {
    return {
      title: "Calculator Not Found",
      description: "The calculator you're looking for could not be found.",
    };
  }

  const title = getTranslation(validLocale, calc.metaTitleKey);
  const description = getTranslation(validLocale, calc.metaDescriptionKey);

  const canonical =
    locale === defaultLocale || !locale
      ? `${baseUrl}/${category}/${calculator}`
      : `${baseUrl}/${locale}/${category}/${calculator}`;

  const languages = Object.fromEntries(
    locales.map((l) => {
      const url =
        l === defaultLocale
          ? `${baseUrl}/${category}/${calculator}`
          : `${baseUrl}/${l}/${category}/${calculator}`;
      return [l, url];
    })
  );

  return {
    title,
    description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
    },
  };
}

export default async function CalculatorPage({ params }: CalculatorPageProps) {
  const { locale = defaultLocale, category, calculator } = params;
  const validLocale = (locales.includes(locale as Locale) ? locale : defaultLocale) as Locale;
  const calc = getCalculatorBySlug(category, calculator);

  if (!calc) {
    const translation = getTranslation(validLocale, "search.notFound");
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-destructive">{translation}</h1>
      </div>
    );
  }

  return (
    <CalculatorClient calc={calc} locale={validLocale} formulaId={calc.formulaId} category={category} />
  );
}