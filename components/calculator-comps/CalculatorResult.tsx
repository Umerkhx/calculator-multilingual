"use client"

import { useState, useEffect } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { getTranslation, type Locale } from "@/lib/i18n"
import { Loader2 } from "lucide-react"

interface CalculatorResultProps {
  locale: Locale
  inputs: Record<string, number | string>
  result: string | number
  onRecalculate: () => void
}

export function CalculatorResult({ locale, inputs, result, onRecalculate }: CalculatorResultProps) {
  const [isLoading, setIsLoading] = useState(false)
  const isPlaceholder = result === "—"

  // 🌀 When result changes from placeholder → real value, show loader for 1s
  useEffect(() => {
    if (!isPlaceholder) {
      setIsLoading(true)
      const timer = setTimeout(() => setIsLoading(false), 1000)
      return () => clearTimeout(timer)
    }
  }, [result])

  return (
    <Card className="border-2 border-primary/20 shadow-lg transition-all duration-300 hover:shadow-xl">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          {getTranslation(locale, "Result Summary")}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        {/* 🧘 Neutral state */}
        {isPlaceholder && !isLoading && (
          <div className="text-center text-muted-foreground py-8 space-y-2">
            <p className="text-lg font-medium">No results yet</p>
            <p className="text-sm">Enter your details and hit “Calculate” to see your results.</p>
          </div>
        )}

        {/* 🔄 Loading state */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-10 space-y-3 animate-pulse">
            <Loader2 className="h-8 w-8 text-primary animate-spin" />
            <p className="text-sm text-muted-foreground">Calculating your result...</p>
          </div>
        )}

        {/* ✅ Final result state */}
        {!isPlaceholder && !isLoading && (
          <>
            <div>
              <p className="font-medium mb-2 text-foreground">Your Inputs:</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {Object.entries(inputs).map(([key, value]) => (
                  <li key={key}>
                    <span className="capitalize">{key.replace(/value/g, "Input ")}</span>:{" "}
                    <span className="font-semibold text-foreground">{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            <div>
              <p className="font-medium mb-1 text-foreground">Calculated Result:</p>
              <p className="text-3xl font-bold text-primary">{result}</p>
            </div>

            <Separator />

            <button
              onClick={onRecalculate}
              className="mt-3 inline-block w-full rounded-lg bg-primary text-primary-foreground py-2 font-medium transition hover:bg-primary/90"
            >
              Recalculate
            </button>
          </>
        )}
      </CardContent>
    </Card>
  )
}
