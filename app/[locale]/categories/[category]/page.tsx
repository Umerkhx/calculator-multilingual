import { allCalculatorCategories, getCalculatorsByCategory } from "@/lib/calculators"
import { getTranslation, defaultLocale, type Locale } from "@/lib/i18n"
import CategoryPage from "./CategoryPage"

interface PageProps {
  params: {
    locale?: string
    category: string
  }
}

export default async function Page({ params }: PageProps) {
  const { locale = defaultLocale, category } = params

  const categoryData = allCalculatorCategories.find((c) => c.id === category.toLowerCase())
  const calculators = getCalculatorsByCategory(category)

  return (
    <CategoryPage
      locale={locale as Locale}
      category={category}
      categoryData={categoryData}
      calculators={calculators}
    />
  )
}
