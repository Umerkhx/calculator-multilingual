"use client"

import { useState } from "react";
import Link from "next/link";
import { allCalculatorCategories } from "@/lib/calculators";
import { getTranslation, type Locale, translations } from "@/lib/i18n";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const t = translations[locale];
  const [selectedCategory, setSelectedCategory] = useState(allCalculatorCategories[0].id);

  const currentCategory = allCalculatorCategories.find(cat => cat.id === selectedCategory);
  const calculators = currentCategory?.calculators || [];

  const firstThree = calculators.slice(0, 3);
  const secondThree = calculators.slice(3, 6);
  const thirdThree = calculators.slice(6, 9);

  return (
    <footer className="border-t border-border bg-zinc-100/20 backdrop-blur-3xl">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        {/* Top section */}
        <div className="flex flex-col md:flex-row md:justify-between  items-center gap-5 md:px-20 px-5">
          {/* Name & Description */}
          <div className="flex flex-col gap-2 md:w-1/2">
            <span className="font-bold md:text-8xl text-6xl text-zinc-800">Calyx</span>
            <p className="mt-1 md:text-base text-sm md:mb-0 mb-5">
              Calyx – Simplify Math with Free Online Calculators
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-36 md:w-48">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {allCalculatorCategories.map(cat => (
                  <SelectItem key={cat.id} value={cat.id}>{getTranslation(locale, cat.name)}</SelectItem>
                ))}
              </SelectContent>
            </Select>

   
          </div>
        </div>

        {/* Bottom grids */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:px-20 px-5 my-10">
          {/* Meet Calyx column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Meet Calyx</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href={`/${locale}`} className="hover:text-blue-600">Home</Link></li>
              <li><Link href={`/${locale}/about`} className="hover:text-blue-600">About</Link></li>
              <li><Link href={`/${locale}/contact`} className="hover:text-blue-600">Contact</Link></li>
              <li><Link href={`/${locale}/categories`} className="hover:text-blue-600">Categories</Link></li>
            </ul>
          </div>

          {/* First calculator column */}
          <div>
            <h4 className="font-semibold text-lg mb-2">Our Popular Calculators</h4>
            <ul className="space-y-2 text-sm">
              {firstThree.map(calc => (
                <li key={calc.slug}>
                  <Link href={`/${locale}/categories/${currentCategory?.id}/${calc.slug}`} className="hover:text-blue-600">
                    {getTranslation(locale, calc.titleKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Second calculator grid */}
          <div>
            <ul className="space-y-2 text-sm">
              {secondThree.map(calc => (
                <li key={calc.slug}>
                  <Link href={`/${locale}/categories/${currentCategory?.id}/${calc.slug}`} className="hover:text-blue-600">
                    {getTranslation(locale, calc.titleKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Third calculator grid */}
          <div>
            <ul className="space-y-2 text-sm">
              {thirdThree.map(calc => (
                <li key={calc.slug}>
                  <Link href={`/${locale}/categories/${currentCategory?.id}/${calc.slug}`} className="hover:text-blue-600">
                    {getTranslation(locale, calc.titleKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-black/10 pt-10 text-center text-sm">
        <div className="flex justify-between items-center">
                 <div className="flex gap-3">
              <Link href="#"><img src="/facebook.png" alt="facebook" width={40} height={40} /></Link>
              <Link href="#"><img src="/instagram.png" alt="instagram" width={40} height={40} /></Link>
              <Link href="#"><img src="/linkedin.png" alt="linkedin" width={40} height={40} /></Link>
            </div>

          <p>{t.footer.copyright}</p>
        </div>
        </div>
      </div>
    </footer>
  );
}
