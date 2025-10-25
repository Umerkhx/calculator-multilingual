import { type NextRequest, NextResponse } from "next/server"

const locales = ["en", "ur", "es", "fr", "ar", "de", "pt", "ru", "it", "zh", "tr", "hi"]
const defaultLocale = "en"

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Redirect /en to / (remove default locale from URL)
  if (pathname.startsWith("/en/") || pathname === "/en") {
    const newPathname = pathname.replace(/^\/en/, "") || "/"
    return NextResponse.redirect(new URL(newPathname, request.url))
  }

  // Check if pathname has a locale prefix
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // If path already has a non-default locale, continue normally
  if (pathnameHasLocale) {
    return NextResponse.next()
  }



  // For default locale (en), rewrite the URL to include /en internally
  request.nextUrl.pathname = `/en${pathname}`
  return NextResponse.rewrite(request.nextUrl)
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|robots.txt|sitemap.xml).*)"],
}