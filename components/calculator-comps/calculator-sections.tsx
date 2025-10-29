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

export function CalculatorSections({ calculator, locale }: CalculatorSectionsProps) {
  const tabCount = calculator.sections.length + (calculator.faqs ? 1 : 0)
  
  return (
    <Tabs defaultValue={calculator.sections[0]?.id} className="w-full">
      <TabsList className={`grid w-full ${tabCount === 3 ? 'grid-cols-3' : `grid-cols-${tabCount}`}`}>
        {calculator.sections.map((section) => (
          <TabsTrigger key={section.id} value={section.id}>
            {getTranslation(locale, section.titleKey)}
          </TabsTrigger>
        ))}
        {calculator.faqs && calculator.faqs.length > 0 && (
          <TabsTrigger value="faqs">
            {getTranslation(locale, calculator.faqTitleKey || "common.faqs")}
          </TabsTrigger>
        )}
      </TabsList>

      {calculator.sections.map((section) => (
        <TabsContent key={section.id} value={section.id}>
          <Card>
            <CardHeader>
              <CardTitle>{getTranslation(locale, section.titleKey)}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {section.contentKey && (
                <p className="text-muted-foreground">
                  {getTranslation(locale, section.contentKey)}
                </p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      ))}

      {calculator.faqs && calculator.faqs.length > 0 && (
        <TabsContent value="faqs">
          <Card>
            <CardHeader>
              <CardTitle>
                {getTranslation(locale, calculator.faqTitleKey || "common.faqs")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {calculator.faqs.map((item, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0">
                    <p className="font-medium mb-2">
                      {getTranslation(locale, item.qKey)}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {getTranslation(locale, item.aKey)}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      )}
    </Tabs>
  )
}