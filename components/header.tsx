"use client";

import Link from "next/link";
import { type Locale, translations } from "@/lib/i18n";
import { CalculatorSearch } from "@/components/calculator-search";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MobileSidebar } from "./MobileSidebar";
import LanguageSelector from "./LanguageSelector";

interface HeaderProps {
  locale: Locale;
}

export function Header({ locale }: HeaderProps) {
  const t = translations[locale].nav;

  const navKeys: (keyof typeof t)[] = ["home", "about", "contact"];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-20">
        <div className="flex items-center gap-3">
          <MobileSidebar locale={locale} />

          <nav className="hidden md:flex items-center gap-8">
            {navKeys.map((key) =>
              key === "calculators" ? (
                <NavigationMenu key={key}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-sm font-medium">
                        {t[key]}
                      </NavigationMenuTrigger>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              ) : (
                <Link
                  key={key}
                  href={`/${locale}${key === "home" ? "" : `/${key}`}`}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t[key]}
                </Link>
              )
            )}
          </nav>
        </div>

        <Link href={`/${locale}`} className="absolute left-1/2 -translate-x-1/2">
          <span className="font-bold text-foreground text-2xl sm:text-3xl lg:text-4xl uppercase">
            Calyx
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <CalculatorSearch locale={locale} />
          <div className="hidden md:block">
            <LanguageSelector locale={locale} />
          </div>
        </div>
      </div>
    </header>
  );
}
