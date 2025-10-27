"use client";

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
    { code: "en", label: "English" },
    { code: "ur", label: "اردو" },
    { code: "es", label: "Español" },
    { code: "fr", label: "Français" },
    { code: "de", label: "Deutsch" },
    { code: "pt", label: "Português" },
    { code: "ru", label: "Русский" },
    { code: "it", label: "Italiano" },
    { code: "tr", label: "Türkçe" },
    { code: "zh", label: "中文" },
    { code: "ar", label: "العربية" },
    { code: "hi", label: "हिंदी" },
  ];

  const handleChange = (newLocale: string) => {
    if (newLocale === locale) return;
    window.location.href = `/${newLocale}`;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 rounded-md border border-border bg-background text-foreground"
        >
          <Globe className="h-4 w-4" />
          <span className="capitalize">
            {languages.find((l) => l.code === locale)?.label || "Language"}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleChange(lang.code)}
            className={`cursor-pointer ${
              locale === lang.code ? "bg-muted font-semibold" : ""
            }`}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
