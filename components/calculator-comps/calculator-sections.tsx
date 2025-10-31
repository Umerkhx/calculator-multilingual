"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getTranslation, type Locale } from "@/lib/i18n"
import type { Calculator, CalculatorSection } from "@/lib/calculators/types"

interface CalculatorSectionsProps {
  calculator: Calculator
  locale: Locale
  formulaFunc?: Function
}

export function CalculatorSections({ calculator, locale }: CalculatorSectionsProps) {
  const sections = calculator.sections || []
  const tabCount = sections.length + (calculator.faqs ? 1 : 0)


  const renderSection = (section: CalculatorSection) => {
    const list = section.listKey ? getTranslation(locale, section.listKey) : null

    return (
      <div key={section.id} className="space-y-4">
        {section.titleKey && (
          <h2 className="text-lg font-semibold">
            {getTranslation(locale, section.titleKey || "")}
          </h2>
        )}
        {section.titleKey2 && (
          <h3 className="text-lg font-semibold">
            {getTranslation(locale, section.titleKey2)}
          </h3>
        )}

        {section.contentKey && (
          <p className="text-muted-foreground">
            {getTranslation(locale, section.contentKey)}
          </p>
        )}

        {section.imageKey && (
          <img className="mx-auto my-5" src={getTranslation(locale, section.imageKey)} width={500} height={500} alt="" />
        )}

        {calculator.highlightsTitleKey && calculator.highlights && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">
              {getTranslation(locale, calculator.highlightsTitleKey)}
            </h2>
            <ul className="space-y-3 list-disc pl-6">
              {calculator.highlights.map((highlight, index) => (
                <li key={index} className="text-muted-foreground">
                  {getTranslation(locale, highlight.key)}
                </li>
              ))}
            </ul>
          </div>
        )}

        {section.formulaKey && (
          <div>
            <p className="text-muted-foreground font-mono">
              {getTranslation(locale, section.formulaKey)}
            </p>
          </div>
        )}

        {section.exampleKey && (
          <div className="bg-zinc-200/80 p-3 rounded-lg">
            <p className="text-zinc-950">
              {getTranslation(locale, section.exampleKey)}
            </p>
          </div>
        )}

        {section.subsections && section.subsections.length > 0 && (
          <div className="space-y-4 pl-3 border-l border-muted">
            {section.subsections.map((sub) => renderSection(sub))}
          </div>
        )}
      </div>
    )
  }

  return (
    <Tabs defaultValue={sections[0]?.id} className="w-full">
      <TabsList className={`grid w-full grid-cols-3 `}>
        {sections.map((section) => (
          <TabsTrigger key={section.id} value={section.id}>
            {getTranslation(locale, section.titleKey || "")}
          </TabsTrigger>
        ))}

        {calculator.faqs && calculator.faqs.length > 0 && (
          <TabsTrigger value="faqs">
            {getTranslation(locale, calculator.faqTitleKey || "common.faqs")}
          </TabsTrigger>
        )}
      </TabsList>

      {sections.map((section) => (
        <TabsContent key={section.id} value={section.id}>
          <Card>
            <CardHeader>
     
            </CardHeader>
            <CardContent className="space-y-6">
              {renderSection(section)}
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
