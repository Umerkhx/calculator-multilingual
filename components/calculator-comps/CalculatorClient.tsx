"use client"

import { useState } from "react"
import { CalculatorForm } from "@/components/calculator-comps/calculator-form"
import { CalculatorSections } from "@/components/calculator-comps/calculator-sections"
import { healthFormulas } from "@/lib/calculators/formulas/health-formulas"
import { financeFormulas } from "@/lib/calculators/formulas/finance-formulas"
import FadeIn from "@/components/FadeIn"
import type { Locale } from "@/lib/i18n"

const allFormulas = { ...healthFormulas, ...financeFormulas }

interface CalculatorClientProps {
  calc: any
  locale: Locale
  formulaId: string
}

export default function CalculatorClient({ calc, locale, formulaId }: CalculatorClientProps) {
  const [result, setResult] = useState<string | number | null>(null)
  const calculatorFunc = allFormulas[formulaId as keyof typeof allFormulas]

  const handleCalculate = (inputs: Record<string, number | string>) => {
    if (calculatorFunc) {
      const res = calculatorFunc(inputs)
      setResult(res)
    }
  }

  return (
    <FadeIn>
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <CalculatorForm
              calculator={calc}
              locale={locale}
              onCalculate={handleCalculate}
              result={result}
            />
          </div>
          <div className="md:col-span-2">
            <CalculatorSections
              calculator={calc}
              locale={locale}
            />
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
