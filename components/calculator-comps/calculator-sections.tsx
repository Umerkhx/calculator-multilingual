"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getTranslation, type Locale } from "@/lib/i18n"
import type { Calculator } from "@/lib/calculators/types"

interface CalculatorSectionsProps {
  calculator: Calculator
  locale: Locale
  formulaFunc?: Function
}

export function CalculatorSections({ calculator, locale, formulaFunc }: CalculatorSectionsProps) {
  return (
    <Tabs defaultValue={calculator.sections[0]?.id} className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        {calculator.sections.map((section) => (
          <TabsTrigger key={section.id} value={section.id}>
            {getTranslation(locale, section.title)}
          </TabsTrigger>
        ))}
      </TabsList>

      {calculator.sections.map((section) => (
        <TabsContent key={section.id} value={section.id}>
          <Card>
            <CardHeader>
              <CardTitle>{getTranslation(locale, section.title)}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {getTranslation(locale, section.content)}
              </p>

            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  )
}
