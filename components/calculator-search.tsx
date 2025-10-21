"use client"

import { useState } from "react"
import Link from "next/link"
import { type Locale, getTranslation } from "@/lib/i18n"
import { allCalculatorCategories } from "@/lib/calculators"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Search } from "lucide-react"

interface CalculatorSearchProps {
  locale: Locale
}

export function CalculatorSearch({ locale }: CalculatorSearchProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [open, setOpen] = useState(false)

  const filteredResults = allCalculatorCategories.flatMap((category) => ({
    category,
    calculators: category.calculators.filter(
      (calc) =>
        getTranslation(locale, calc.titleKey).toLowerCase().includes(searchQuery.toLowerCase()) ||
        getTranslation(locale, calc.descriptionKey).toLowerCase().includes(searchQuery.toLowerCase()),
    ),
  }))

  const hasResults = filteredResults.some((cat) => cat.calculators.length > 0)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 bg-transparent">
          <Search className="h-4 w-4" />
          <span className="hidden sm:inline">{getTranslation(locale, "calculators.searchPlaceholder")}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="start">
        <div className="space-y-4 p-4">
          <Input
            placeholder={getTranslation(locale, "calculators.searchPlaceholder")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-9"
            autoFocus
          />

          {searchQuery && (
            <div className="max-h-96 space-y-4 overflow-y-auto">
              {hasResults ? (
                filteredResults.map(
                  (item) =>
                    item.calculators.length > 0 && (
                      <div key={item.category.id} className="space-y-2">
                        <h3 className="text-sm font-semibold text-muted-foreground">
                          {getTranslation(locale, item.category.name)}
                        </h3>
                        <div className="space-y-1">
                          {item.calculators.map((calc) => (
                            <Link
                              key={calc.slug}
                              href={`/${locale}/calculators/${item.category.id}/${calc.slug}`}
                              className="block rounded-md px-3 py-2 text-sm hover:bg-accent"
                              onClick={() => {
                                setOpen(false)
                                setSearchQuery("")
                              }}
                            >
                              {getTranslation(locale, calc.titleKey)}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ),
                )
              ) : (
                <p className="text-sm text-muted-foreground">No calculators found</p>
              )}
            </div>
          )}

          {!searchQuery && (
            <div className="space-y-3">
              {allCalculatorCategories.map((category) => (
                <div key={category.id} className="space-y-2">
                  <h3 className="text-sm font-semibold text-muted-foreground">
                    {getTranslation(locale, category.name)}
                  </h3>
                  <div className="space-y-1">
                    {category.calculators.slice(0, 3).map((calc) => (
                      <Link
                        key={calc.slug}
                        href={`/${locale}/calculators/${category.id}/${calc.slug}`}
                        className="block rounded-md px-3 py-2 text-sm hover:bg-accent"
                        onClick={() => setOpen(false)}
                      >
                        {getTranslation(locale, calc.titleKey)}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
