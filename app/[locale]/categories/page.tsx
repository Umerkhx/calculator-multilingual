import { CategoriesPage } from "@/components/CategoriesPage";
import { Locale } from "@/lib/i18n";

interface PageProps {
  params: Promise<{ locale: Locale }>
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params

  return <CategoriesPage locale={locale} />
}
