"use client"

import { useState } from "react"
import { CalculatorForm } from "@/components/calculator-comps/calculator-form"
import { CalculatorSections } from "@/components/calculator-comps/calculator-sections"
import { healthFormulas } from "@/lib/calculators/formulas/health-formulas"
import { financeFormulas } from "@/lib/calculators/formulas/finance-formulas"
import FadeIn from "@/components/FadeIn"
import type { Locale } from "@/lib/i18n"
import { CalculatorResult } from "./CalculatorResult"
import { CalculatorAbout } from "./CalculatorAbout"

const allFormulas = { ...healthFormulas, ...financeFormulas }

interface CalculatorClientProps {
  calc: any
  locale: Locale
  formulaId: string
}

export default function CalculatorClient({ calc, locale, formulaId }: CalculatorClientProps) {
  const [result, setResult] = useState<string | number | null>(null)
  const [inputs, setInputs] = useState<Record<string, number | string>>({})
  const calculatorFunc = allFormulas[formulaId as keyof typeof allFormulas]

  const handleCalculate = (userInputs: Record<string, number | string>) => {
    setInputs(userInputs)
    if (calculatorFunc) {
      const res = calculatorFunc(userInputs)
      setResult(res)
    }
  }

  return (
    <FadeIn>
      <div className="container mx-auto px-4 py-10 space-y-10">
        <div className="grid gap-8 md:grid-cols-2">
          <CalculatorForm
            calculator={calc}
            locale={locale}
            onCalculate={handleCalculate}
            result={result}
          />

          {result !== null && (
            <CalculatorResult
              locale={locale}
              inputs={inputs}
              result={result}
              onRecalculate={() => setResult(null)}
            />
          )}
        </div>

        <CalculatorSections calculator={calc} locale={locale} formulaFunc={calculatorFunc} />

        <CalculatorAbout calculator={calc} locale={locale} />
      </div>
    </FadeIn>
  )
}
