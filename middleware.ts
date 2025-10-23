import { type NextRequest, NextResponse } from "next/server"

const locales = ["en", "ur", "es", "fr", "ar"]
const defaultLocale = "en"

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  const acceptLanguage = request.headers.get("accept-language") || ""
  let locale = defaultLocale

  for (const lang of locales) {
    if (acceptLanguage.includes(lang)) {
      locale = lang
      break
    }
  }

  if (locale !== defaultLocale) {
    return NextResponse.redirect(new URL(`/${locale}${pathname === "/" ? "" : pathname}`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|robots.txt|sitemap.xml).*)"],
}
