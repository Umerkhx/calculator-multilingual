"use client";

import Link from "next/link";
import { type Locale } from "@/lib/i18n";
import { CalculatorSearch } from "@/components/calculator-search";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface HeaderProps {
  locale: Locale;
}

export function Header({ locale }: HeaderProps) {
  // ✅ Yahan apne navigation links define karo
  const navLinks = [
    { key: "home", label: "Home" },
    { key: "about", label: "About" },
    { key: "contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-20">

        {/* ✅ Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ key, label }) =>
            key === "calculators" ? (
              <NavigationMenu key={key}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-medium">
                      {label}
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
                {label}
              </Link>
            )
          )}
        </nav>

        {/* ✅ Logo */}
        <Link href={`/${locale}`}><span className="font-bold text-foreground text-4xl uppercase">Calyx</span></Link>

        {/* ✅ Search + Language Switcher */}
        <div className="flex items-center gap-4">
          <CalculatorSearch locale={locale} />

          <select
            value={locale}
            onChange={(e) => {
              const newLocale = e.target.value as Locale;
              window.location.href = `/${newLocale}`;
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
  );
}
