"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { getTranslation, type Locale } from "@/lib/i18n"
import type { Calculator } from "@/lib/calculators/types"

interface CalculatorAboutProps {
  calculator: Calculator
  locale: Locale
}

export function CalculatorAbout({ calculator, locale }: CalculatorAboutProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About This Calculator</CardTitle>
      </CardHeader>
      <CardContent className="text-muted-foreground space-y-3 leading-relaxed">
        <p>
          The <strong>{getTranslation(locale, calculator.titleKey)}</strong> helps you quickly estimate or
          calculate important values using trusted formulas. It’s built to give accurate,
          instant results without needing manual math.
        </p>
        <p>
          This calculator is ideal for anyone who wants quick answers — whether for{" "}
          <strong>personal, health, or finance</strong> use.
        </p>
        <p className="italic text-sm">
          ⚠️ Always verify results with a professional for critical or medical decisions.
        </p>
      </CardContent>
    </Card>
  )
}
