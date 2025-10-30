import { allCalculatorCategories, getCalculatorsByCategory } from "@/lib/calculators";
import { getTranslation, defaultLocale, type Locale, locales } from "@/lib/i18n";
import CategoryPage from "./CategoryPage";

interface PageProps {
  params: {
    locale?: string;
    category: string;
  };
}

export async function generateStaticParams() {
  const paths: { locale: string; category: string }[] = [];

  allCalculatorCategories.forEach((category) => {
    locales.forEach((locale) => {
      paths.push({
        locale,
        category: category.id,
      });
    });
  });

  return paths;
}

export default async function Page({ params }: PageProps) {
  const { locale = defaultLocale, category } = params;
  const validLocale = (locales.includes(locale as Locale) ? locale : defaultLocale) as Locale;

  const categoryData = allCalculatorCategories.find((c) => c.id === category.toLowerCase());
  const calculators = getCalculatorsByCategory(category);

  if (!categoryData) {
    const translation = getTranslation(validLocale, "search.notFound");
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-destructive">{translation}</h1>
      </div>
    );
  }

  return (
    <CategoryPage
      locale={validLocale}
      category={category}
      categoryData={categoryData}
      calculators={calculators}
    />
  );
}