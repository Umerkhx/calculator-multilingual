import { enTranslations } from "./translations/en"
import { urTranslations } from "./translations/ur"
import { esTranslations } from "./translations/es"
import { frTranslations } from "./translations/fr"
import { arTranslations } from "./translations/ar"
import { deTranslations } from "./translations/de"
import { ptTranslations } from "./translations/pt"
import { ruTranslations } from "./translations/ru"
import { itTranslations } from "./translations/it"
import { zhTranslations } from "./translations/zh"
import { trTranslations } from "./translations/tr"
import { hiTranslations } from "./translations/hi"

export type Locale = "en" | "ur" | "es" | "fr" | "ar" | "de" | "pt" | "ru" | "it" | "zh" | "tr" | "hi"

export const locales: Locale[] = ["en", "ur", "es", "fr", "ar", "de", "pt", "ru", "it", "zh", "tr", "hi"]
export const defaultLocale: Locale = "en"

export const translations = {
  en: enTranslations,
  ur: urTranslations,
  es: esTranslations,
  fr: frTranslations,
  ar: arTranslations,
  de: deTranslations,
  pt: ptTranslations,
  ru: ruTranslations,
  it: itTranslations,
  zh: zhTranslations,
  tr: trTranslations,
  hi: hiTranslations,
}

export function getTranslation(locale: Locale, key: string): string {
  try {
    if (!locale || !key) {
      console.warn(`Invalid translation parameters: locale="${locale}", key="${key}"`)
      return key
    }

    const trans = translations[locale]

    if (!trans) {
      console.warn(`Locale not found: ${locale}`)
      return key
    }

    const keys = key.split(".")
    let value: any = trans

    for (let i = 0; i < keys.length; i++) {
      const k = keys[i]
      
      if (value === null || value === undefined) {
        console.warn(`Translation path broken at "${keys.slice(0, i).join(".")}" - cannot access "${k}" on null/undefined`)
        return key
      }

      if (!(k in value)) {
        console.warn(`Translation key not found: ${key} (failed at: ${keys.slice(0, i + 1).join(".")})`)
        return key
      }

      value = value[k]
    }

    if (typeof value === "string") {
      return value
    } else if (value === null || value === undefined) {
      console.warn(`Translation value is null/undefined for key: ${key}`)
      return key
    } else {
      console.warn(`Translation value is not a string for key: ${key}`, typeof value)
      return key
    }
  } catch (error) {
    console.error(`Error getting translation for key: ${key}`, error)
    return key
  }
}