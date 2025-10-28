"use client";

import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Locale } from "@/lib/i18n";

interface LanguageSelectorProps {
  locale: Locale;
}

const LanguageSelector = ({ locale }: LanguageSelectorProps) => {
  const languages = [
    { code: "en", label: "English", flag: "/usa-flag.webp" },
    { code: "ur", label: "اردو", flag: "/pakistan-flag.webp" },
    { code: "es", label: "Español", flag: "/spanish-flag.webp" },
    { code: "fr", label: "Français", flag: "/french-flag.webp" },
    { code: "de", label: "Deutsch", flag: "/german-flag.webp" },
    { code: "pt", label: "Português", flag: "/portuguese-flag.webp" },
    { code: "ru", label: "Русский", flag: "/russia-flag.webp" },
    { code: "it", label: "Italiano", flag: "/italia-flag.webp" },
    { code: "tr", label: "Türkçe", flag: "/turkey-flag.webp" },
    { code: "zh", label: "中文", flag: "/china-flag.webp" },
    { code: "ar", label: "العربية", flag: "/arabia-flag.webp" },
    { code: "hi", label: "हिंदी", flag: "/india-flag.webp" },
  ];

  const handleChange = (newLocale: string) => {
    if (newLocale === locale) return;
    window.location.href = `/${newLocale}`;
  };

  const currentLang = languages.find((l) => l.code === locale);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 rounded-md border border-border bg-background text-foreground"
        >
         
          {currentLang && (
            <div className="flex items-center gap-2">
              <Image
                src={currentLang.flag}
                alt={currentLang.label}
                width={20}
                height={14}
                className="rounded-sm object-cover"
              />
              <span className="capitalize">{currentLang.label}</span>
            </div>
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-44">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleChange(lang.code)}
            className={`flex items-center gap-2 cursor-pointer ${
              locale === lang.code ? "bg-muted font-semibold" : ""
            }`}
          >
            <Image
              src={lang.flag}
              alt={lang.label}
              width={20}
              height={14}
              priority
              className="rounded-sm object-cover"
            />
            <span>{lang.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
