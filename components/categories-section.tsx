import Link from "next/link"
import { type Locale, getTranslation } from "@/lib/i18n"
import { allCalculatorCategories } from "@/lib/calculators"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface CategoriesSectionProps {
  locale: Locale
}

export function CategoriesSection({ locale }: CategoriesSectionProps) {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {getTranslation(locale, "calculators.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {getTranslation(locale, "calculators.description") || "Explore our collection of useful calculators"}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {allCalculatorCategories.map((category) => (
            <Card key={category.id} className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                <CardTitle className="text-2xl">{getTranslation(locale, category.name)}</CardTitle>
                <CardDescription>
                  {category.calculators.length} {category.calculators.length === 1 ? "calculator" : "calculators"}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 pt-6">
                <div className="space-y-3">
                  {category.calculators.map((calc) => (
                    <Link
                      key={calc.slug}
                      href={`/${locale}/calculators/${category.id}/${calc.slug}`}
                      className="group flex items-center justify-between rounded-lg border border-border p-3 transition-colors hover:bg-accent"
                    >
                      <div>
                        <p className="font-medium text-foreground">{getTranslation(locale, calc.titleKey)}</p>
                        <p className="text-sm text-muted-foreground">{getTranslation(locale, calc.descriptionKey)}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
