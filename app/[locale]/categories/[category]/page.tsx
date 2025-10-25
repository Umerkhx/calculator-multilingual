import { allCalculatorCategories, getCalculatorsByCategory } from "@/lib/calculators"
import { getTranslation, type Locale, defaultLocale } from "@/lib/i18n"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface CategoryPageProps {
  params: Promise<{
    locale?: string
    category: string
  }>
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { locale = defaultLocale, category } = await params
  
  const categoryData = allCalculatorCategories.find((c) => c.id === category.toLowerCase())
  const calculators = getCalculatorsByCategory(category)

  if (!categoryData) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-destructive">
          {getTranslation(locale as Locale, "search.notFound")}
        </h1>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href={`/${locale}/categories`}>
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {getTranslation(locale as Locale, "navigation.backToCategories")}
          </Button>
        </Link>
        
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-4xl font-bold">
            {getTranslation(locale as Locale, categoryData.name)}
          </h1>
        </div>
        <p className="text-muted-foreground text-lg">
          {getTranslation(locale as Locale, `${categoryData.name}.description`)}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {calculators.map((calculator) => (
          <Link 
            key={calculator.slug} 
            href={`/${locale}/categories/${category}/${calculator.slug}`}
            className="transition-transform hover:scale-105"
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>
                  {getTranslation(locale as Locale, calculator.titleKey)}
                </CardTitle>
                <CardDescription>
                  {getTranslation(locale as Locale, calculator.descriptionKey)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-primary">
                  {getTranslation(locale as Locale, "calculator.clickToOpen")} →
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {calculators.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            {getTranslation(locale as Locale, "calculator.noCalculators")}
          </p>
        </div>
      )}
    </div>
  )
}