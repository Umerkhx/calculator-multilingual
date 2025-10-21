"use client"

import Link from "next/link"
import { type Locale, translations, getTranslation } from "@/lib/i18n"
import { CalculatorSearch } from "@/components/calculator-search"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { allCalculatorCategories } from "@/lib/calculators"

interface HeaderProps {
  locale: Locale
}

export function Header({ locale }: HeaderProps) {
  const t = translations[locale]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent" />
          <span className="font-bold text-foreground">Global</span>
        </Link>

        <nav className="hidden gap-8 md:flex">
          {Object.entries(t.nav).map(([key, label]) => {
            if (key === "calculators") {
              return (
                <NavigationMenu key={key}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground">
                        {label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-96 grid-cols-2 gap-4 p-4">
                          {allCalculatorCategories.map((category) => (
                            <div key={category.id} className="space-y-2">
                              <h3 className="font-semibold text-foreground">{getTranslation(locale, category.name)}</h3>
                              <div className="space-y-1">
                                {category.calculators.map((calc) => (
                                  <Link
                                    key={calc.slug}
                                    href={`/${locale}/calculators/${category.id}/${calc.slug}`}
                                    className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                                  >
                                    {getTranslation(locale, calc.titleKey)}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              )
            }

            return (
              <Link
                key={key}
                href={`/${locale}${key === "home" ? "" : `/${key}`}`}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          <CalculatorSearch locale={locale} />

          <select
            value={locale}
            onChange={(e) => {
              const newLocale = e.target.value as Locale
              window.location.href = `/${newLocale}`
            }}
            className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
          >
            <option value="en">English</option>
            <option value="ur">اردو</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="ar">العربية</option>
          </select>
        </div>
      </div>
    </header>
  )
}
