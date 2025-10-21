import type { MetadataRoute } from "next"
import { locales } from "@/lib/i18n"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://example.com"
  const pages = ["", "/about"]

  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: page === "" ? 1 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${page}`,
            ur: `${baseUrl}/ur${page}`,
            es: `${baseUrl}/es${page}`,
          },
        },
      })
    }
  }

  return entries
}
