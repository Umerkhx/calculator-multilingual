import { type NextRequest, NextResponse } from "next/server"

const locales = ["en", "ur", "es"]
const defaultLocale = "en"

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // Get locale from Accept-Language header or use default
  const acceptLanguage = request.headers.get("accept-language") || ""
  let locale = defaultLocale

  for (const lang of locales) {
    if (acceptLanguage.includes(lang)) {
      locale = lang
      break
    }
  }

  // Redirect to locale-prefixed path
  return NextResponse.redirect(new URL(`/${locale}${pathname === "/" ? "" : pathname}`, request.url))
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|robots.txt|sitemap.xml).*)"],
}
