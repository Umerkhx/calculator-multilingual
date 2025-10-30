import CalculatorClient from "@/components/calculator-comps/CalculatorClient";
import { allCalculatorCategories, getCalculatorBySlug } from "@/lib/calculators";
import { getTranslation, type Locale, defaultLocale, locales } from "@/lib/i18n";

export async function generateStaticParams() {
  const paths: { locale: string; category: string; calculator: string }[] = [];

  locales.forEach((locale) => {
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
    <CalculatorClient calc={calc} locale={validLocale} formulaId={calc.formulaId} />
  );
}