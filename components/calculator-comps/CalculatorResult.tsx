"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { getTranslation, type Locale } from "@/lib/i18n"

interface CalculatorResultProps {
  locale: Locale
  inputs: Record<string, number | string>
  result: string | number
  onRecalculate: () => void
}

export function CalculatorResult({ locale, inputs, result, onRecalculate }: CalculatorResultProps) {
  const isPlaceholder = result === "—"

  return (
    <Card className="border-2 border-primary/20 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          {getTranslation(locale, "Result Summary")}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <p className="font-medium mb-2">Your Inputs:</p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {Object.entries(inputs).map(([key, value]) => (
              <li key={key}>
                <span className="capitalize">{key}</span>:{" "}
                <span className="font-semibold text-foreground">{value}</span>
              </li>
            ))}
          </ul>
        </div>

        <Separator />

        <div>
          <p className="font-medium mb-1">Calculated Result:</p>
          <p
            className={`text-3xl font-bold ${
              isPlaceholder ? "text-muted-foreground" : "text-primary"
            }`}
          >
            {isPlaceholder ? "Awaiting calculation..." : result}
          </p>
        </div>

        <Separator />

        {!isPlaceholder && (
          <button
            onClick={onRecalculate}
            className="mt-3 inline-block w-full rounded-lg bg-primary text-primary-foreground py-2 font-medium transition hover:bg-primary/90"
          >
            Recalculate
          </button>
        )}
      </CardContent>
    </Card>
  )
}
