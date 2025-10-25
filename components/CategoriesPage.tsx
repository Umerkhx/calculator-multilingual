import Link from "next/link"
import { allCalculatorCategories } from "@/lib/calculators"
import { getTranslation, type Locale } from "@/lib/i18n"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface CategoriesPageProps {
    locale: Locale
}

export function CategoriesPage({ locale }: CategoriesPageProps) {

    return (
        <section className="relative overflow-hidden py-20 bg-zinc-50">
            <div className="container mx-auto px-4">
                {/* Page Heading */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-3 text-zinc-800">
                        {getTranslation(locale, "categoriespage.title")}
                    </h1>
                    <p className="text-zinc-500 max-w-2xl mx-auto">
                        {getTranslation(locale, "categoriespage.description")}

                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {allCalculatorCategories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/${locale}/categories/${category.id}`}
                            className="transition-transform hover:scale-105"
                        >
                            <Card className="h-full border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold text-zinc-800">
                                       {getTranslation(locale, category.name)}
                                    </CardTitle>
                           
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-zinc-400">
                                        {category.calculators.length} 
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
