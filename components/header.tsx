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
import { MobileSidebar } from "./MobileSidebar";

interface HeaderProps {
  locale: Locale;
}

export function Header({ locale }: HeaderProps) {
  const navLinks = [
    { key: "home", label: "Home" },
    { key: "about", label: "About" },
    { key: "contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-20">
        <div className="flex items-center gap-3">
          <MobileSidebar locale={locale} />

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
        </div>

        <Link href={`/${locale}`} className="absolute left-1/2 -translate-x-1/2">
          <span className="font-bold text-foreground text-2xl sm:text-3xl lg:text-4xl uppercase">Calyx</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <CalculatorSearch locale={locale} />

          <select
            value={locale}
            onChange={(e) => {
              const newLocale = e.target.value as Locale;
              window.location.href = `/${newLocale}`;
            }}
            className="hidden sm:block rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
          >
            <option value="en">English</option>
            <option value="ur">اردو</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
            <option value="pt">Português</option>
            <option value="ru">Русский</option>
            <option value="it">Italiano</option>
            <option value="tr">Türkçe</option>
            <option value="zh">中文</option>
            <option value="ar">العربية</option>
            <option value="hi">हिंदी</option>
          </select>
        </div>
      </div>
    </header>
  );
}
