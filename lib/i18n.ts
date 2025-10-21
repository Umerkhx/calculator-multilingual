import { enTranslations } from "./translations/en"
import { urTranslations } from "./translations/ur"
import { esTranslations } from "./translations/es"
import { frTranslations } from "./translations/fr"
import { arTranslations } from "./translations/ar"

export type Locale = "en" | "ur" | "es" | "fr" | "ar"

export const locales: Locale[] = ["en", "ur", "es", "fr", "ar"]
export const defaultLocale: Locale = "en"

export const translations = {
  en: enTranslations,
  ur: urTranslations,
  es: esTranslations,
  fr: frTranslations,
  ar: arTranslations,
}

export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split(".")
  let value: any = translations[locale]

  for (const k of keys) {
    value = value?.[k]
  }

  return value || key
}
