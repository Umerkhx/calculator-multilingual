import CalculatorClient from "@/components/calculator-comps/CalculatorClient"
import { getCalculatorBySlug } from "@/lib/calculators"
import { getTranslation, type Locale, defaultLocale } from "@/lib/i18n"

interface CalculatorPageProps {
  params: Promise<{
    category: string
    calculator: string
  }>
  searchParams: Promise<{ locale?: string }>
}

export default async function CalculatorPage({ params, searchParams }: CalculatorPageProps) {
  const { category, calculator } = await params
  const { locale = defaultLocale } = await searchParams
  const calc = getCalculatorBySlug(category, calculator)

  if (!calc) {
    const translation = getTranslation(locale as Locale, "search.notFound")
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-destructive">{translation}</h1>
      </div>
    )
  }

  return (
    <CalculatorClient
      calc={calc}
      locale={locale as Locale}
      formulaId={calc.formulaId}
    />
  )
}
