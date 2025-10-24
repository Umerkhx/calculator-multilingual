"use client";

import { useState } from "react";
import Link from "next/link";
import { type Locale } from "@/lib/i18n";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface MobileSidebarProps {
  locale: Locale;
}

export function MobileSidebar({ locale }: MobileSidebarProps) {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { key: "home", label: "Home", href: `/${locale}` },
    { key: "about", label: "About", href: `/${locale}/about` },
    { key: "contact", label: "Contact", href: `/${locale}/contact` },
  ];

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
            <Link href={`/${locale}`} onClick={() => setOpen(false)}>
              <span className="font-bold text-2xl uppercase">Calyx</span>
            </Link>
          </div>

          <nav className="flex-1 overflow-y-auto py-4">
            <div className="space-y-1 px-3">
              {navLinks.map(({ key, label, href }) => (
                <Link
                  key={key}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="p-4 border-t">
            <select
              value={locale}
              onChange={(e) => {
                const newLocale = e.target.value as Locale;
                window.location.href = `/${newLocale}`;
              }}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
            >
              <option value="en">English</option>
              <option value="ur">اردو</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="ar">العربية</option>
            </select>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
