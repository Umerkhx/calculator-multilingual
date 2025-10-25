import { allCalculatorCategories } from "@/lib/calculators"
import { getTranslation, type Locale, defaultLocale } from "@/lib/i18n"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface CategoriesPageProps {
  params: Promise<{ locale?: string }>
}

export default async function CategoriesPage({ params }: CategoriesPageProps) {
  const { locale = defaultLocale } = await params

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">
          {getTranslation(locale as Locale, "categories.title")}
        </h1>
        <p className="text-muted-foreground">
          {getTranslation(locale as Locale, "categories.description")}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {allCalculatorCategories.map((category) => (
          <Link 
            key={category.id} 
            href={`/${locale}/categories/${category.id}`}
            className="transition-transform hover:scale-105"
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {getTranslation(locale as Locale, category.name)}
                </CardTitle>
                <CardDescription>
                  {getTranslation(locale as Locale, `${category.name}.description`)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {category.calculators.length} {getTranslation(locale as Locale, "categories.calculators")}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}