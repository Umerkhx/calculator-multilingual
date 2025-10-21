import { getCalculatorBySlug } from "@/lib/calculators"
import { getTranslation, type Locale } from "@/lib/i18n"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface CalculatorPageProps {
  params: Promise<{
    locale: Locale
    category: string
    calculator: string
  }>
}

export default async function CalculatorPage({ params }: CalculatorPageProps) {
  const { locale, category, calculator } = await params
  const calc = getCalculatorBySlug(category, calculator)

  if (!calc) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-destructive">{getTranslation(locale, "calculators.notFound")}</h1>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-3">
        {/* Calculator Form */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>{getTranslation(locale, calc.titleKey)}</CardTitle>
              <CardDescription>{getTranslation(locale, calc.descriptionKey)}</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                {calc.inputs.map((input) => (
                  <div key={input.name} className="space-y-2">
                    <Label htmlFor={input.name}>
                      {getTranslation(locale, input.label)}
                      {input.unit && <span className="text-muted-foreground ml-1">({input.unit})</span>}
                    </Label>
                    {input.type === "select" ? (
                      <Select>
                        <SelectTrigger id={input.name}>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          {input.options?.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {getTranslation(locale, option.label)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : (
                      <Input id={input.name} type={input.type} placeholder={getTranslation(locale, input.label)} />
                    )}
                  </div>
                ))}
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Information Sections */}
        <div className="md:col-span-2">
          <Tabs defaultValue={calc.sections[0]?.id} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              {calc.sections.map((section) => (
                <TabsTrigger key={section.id} value={section.id}>
                  {getTranslation(locale, section.title)}
                </TabsTrigger>
              ))}
            </TabsList>
            {calc.sections.map((section) => (
              <TabsContent key={section.id} value={section.id}>
                <Card>
                  <CardHeader>
                    <CardTitle>{getTranslation(locale, section.title)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{getTranslation(locale, section.content)}</p>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  )
}
