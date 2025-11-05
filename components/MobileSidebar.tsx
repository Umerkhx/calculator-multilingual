"use client";

import { useState } from "react";
import Link from "next/link";
import { type Locale, getTranslation, translations } from "@/lib/i18n";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import { allCalculatorCategories } from "@/lib/calculators";

interface MobileSidebarProps {
  locale: Locale;
}

export function MobileSidebar({ locale }: MobileSidebarProps) {
  const [open, setOpen] = useState(false);
  const [calcOpen, setCalcOpen] = useState(false);

  const t = translations[locale].nav;
  const navKeys: (keyof typeof t)[] = ["home", "about", "contact"];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-64 p-0">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <Link href={locale === "en" ? "/" : `/${locale}`} onClick={() => setOpen(false)}>
              <span className="font-bold text-xl uppercase">{t.name}</span>
            </Link>
          </div>

          <nav className="flex-1 overflow-y-auto py-4">
            <div className="space-y-1 px-3">
              {navKeys.map((key) => {
                const href = locale === "en" 
                  ? key === "home" ? "/" : `/${key}` 
                  : key === "home" ? `/${locale}` : `/${locale}/${key}`;
                return (
                  <Link
                    key={key}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent transition-colors"
                  >
                    {t[key as keyof typeof t]}
                  </Link>
                );
              })}

              <div className="flex flex-col">
                <button
                  onClick={() => setCalcOpen(!calcOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md hover:bg-accent transition-colors"
                >
                  <span>{t.calculators || "Calculators"}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      calcOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    calcOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex flex-col pl-6 mt-1">
                    {allCalculatorCategories.map((cat) => (
                      <Link
                        key={cat.id}
                         href={locale === "en" ? `/${cat.id}` : `/${locale}/${cat.id}`}
                        onClick={() => setOpen(false)}
                        className="block px-2 py-1 text-sm text-muted-foreground hover:text-foreground hover:bg-zinc-100 rounded-md transition-colors"
                      >
                        {getTranslation(locale, cat.name)}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Language Selector */}
              <div className="mt-4 border-t pt-3">
                <LanguageSelector locale={locale} />
              </div>
            </div>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
