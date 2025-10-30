import { allCalculatorCategories } from "@/lib/calculators";
import type { MetadataRoute } from "next";

const BASE_URL = "http://localhost:3000";

const locales = [
  "en", "es", "ar", "fr", "de", "it", "pt", "ru", "zh", "ur", "hi", "tr"
];
const defaultLocale = "en";

const staticPages = ["", "/about"];

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  // Static pages with language alternates
  staticPages.forEach((page) => {
    locales.forEach((locale) => {
      const isDefault = locale === defaultLocale;
      const pageUrl = isDefault ? `${BASE_URL}/en${page}` : `${BASE_URL}/${locale}${page}`;

      urls.push({
        url: pageUrl,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: page === "" ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [
              l,
              l === defaultLocale ? `${BASE_URL}/en${page}` : `${BASE_URL}/${l}${page}`,
            ])
          ),
        },
      });
    });
  });

  allCalculatorCategories.forEach((category) => {
    locales.forEach((locale) => {
      const isDefault = locale === defaultLocale;
      const categoryUrl = isDefault
        ? `${BASE_URL}/en/${category.id}`
        : `${BASE_URL}/${locale}/${category.id}`;

      urls.push({
        url: categoryUrl,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [
              l,
              l === defaultLocale
                ? `${BASE_URL}/en/${category.id}`
                : `${BASE_URL}/${l}/${category.id}`,
            ])
          ),
        },
      });
    });
  });

  // Dynamic calculator pages
  allCalculatorCategories.forEach((category) => {
    category.calculators.forEach((calculator) => {
      locales.forEach((locale) => {
        const isDefault = locale === defaultLocale;
        const calcUrl = isDefault
          ? `${BASE_URL}/en/${category.id}/${calculator.slug}`
          : `${BASE_URL}/${locale}/${category.id}/${calculator.slug}`;

        urls.push({
          url: calcUrl,
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.8,
          alternates: {
            languages: Object.fromEntries(
              locales.map((l) => [
                l,
                l === defaultLocale
                  ? `${BASE_URL}/en/${category.id}/${calculator.slug}`
                  : `${BASE_URL}/${l}/${category.id}/${calculator.slug}`,
              ])
            ),
          },
        });
      });
    });
  });

  return urls;
}