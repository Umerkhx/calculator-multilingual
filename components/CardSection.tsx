"use client";
import Link from "next/link";
import { type Locale, getTranslation } from "@/lib/i18n"
import { ArrowRight } from "lucide-react";
import { allCalculatorCategories } from "@/lib/calculators";

interface CardsSectionProps {
  locale: Locale;
}

export default function CardsSection({ locale}: CardsSectionProps) {
  return (
    <section className="container px-12 mx-auto py-10">
      <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-center mb-10">
        {getTranslation(locale, 'cards.title')}
      </h2>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 justify-center">
        {allCalculatorCategories.map((category) => (
          <Link
            key={category.id}
            href={`/${locale}/categories/${category.id}`}
            className="relative w-[250px] h-[250px] rounded-[14px] overflow-hidden flex flex-col items-center justify-center shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] transition-transform duration-300 hover:scale-105"
          >
            {/* Glass Layer */}
            <div className="absolute top-[5px] left-[5px] w-[240px] h-[240px] z-[2] bg-white/95 backdrop-blur-[24px] rounded-[10px] overflow-hidden outline outline-2 outline-white"></div>

            {/* Background Glow */}
            <div className="absolute z-[1] top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-[#111] opacity-100 blur-[12px] animate-blob-bounce"></div>

            {/* Content */}
            <div className="z-[3] text-center p-4">
              <h3 className="text-lg font-bold text-zinc-900">
                {getTranslation(locale, category.name)}
              </h3>
              <p className="text-sm text-zinc-600 mt-1">
                {category.calculators.length}{" "}
                {category.calculators.length === 1 ? "Calculator" : "Calculators"}
              </p>
              <ArrowRight className="h-4 w-4 text-muted-foreground mx-auto mt-2 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
