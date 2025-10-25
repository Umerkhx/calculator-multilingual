"use client"

import { useState } from "react"
import { getCalculatorBySlug } from "@/lib/calculators"
import { getTranslation, type Locale, defaultLocale } from "@/lib/i18n"
import { CalculatorForm } from "@/components/calculator-form"
import { CalculatorSections } from "@/components/calculator-sections"
import { healthFormulas } from "@/lib/calculators/formulas/health-formulas"
import { financeFormulas } from "@/lib/calculators/formulas/finance-formulas"

interface CalculatorPageProps {
  params: Promise<{
    category: string
    calculator: string
  }>
  searchParams: Promise<{ locale?: string }>
}

const allFormulas = { ...healthFormulas, ...financeFormulas }

export default async function CalculatorPage({ params, searchParams }: CalculatorPageProps) {
  const { category, calculator } = await params
  const { locale = defaultLocale } = await searchParams
  const calc = getCalculatorBySlug(category, calculator)

  if (!calc) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-destructive">{getTranslation(locale as Locale, "search.notFound")}</h1>
      </div>
    )
  }

  return <CalculatorPageContent calc={calc} locale={locale as Locale} formulaId={calc.formulaId} />
}

function CalculatorPageContent({ calc, locale, formulaId }: any) {
  const [result, setResult] = useState<string | number | null>(null)
  const calculatorFunc = allFormulas[formulaId as keyof typeof allFormulas]

  const handleCalculate = (inputs: Record<string, number | string>) => {
    if (calculatorFunc) {
      const res = calculatorFunc(inputs)
      setResult(res)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <CalculatorForm calculator={calc} locale={locale} onCalculate={handleCalculate} result={result} />
        </div>
        <div className="md:col-span-2">
          <CalculatorSections calculator={calc} locale={locale} />
        </div>
      </div>
    </div>
  )
}
