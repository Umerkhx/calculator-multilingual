import type React from "react";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://calculator-multilingual.vercel.app"),
  title: {
    default: "Calyx | Multilingual Calculator Platform",
    template: "%s | Calyx",
  },
  description:
    "Calyx is a professional multilingual calculator platform offering scientific, financial, and conversion tools for global users.",
  keywords: [
    "Calyx",
    "multilingual calculator",
    "online calculator",
    "scientific calculator",
    "financial calculator",
    "unit converter",
  ],
  openGraph: {
    title: "Calyx | Multilingual Calculator Platform",
    description:
      "A modern multilingual calculator website for accurate and accessible calculations worldwide.",
    url: "https://calculator-multilingual.vercel.app",
    siteName: "Calyx",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calyx | Multilingual Calculator Platform",
    description:
      "Perform accurate calculations in any language with Calyx — your all-in-one multilingual calculator.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  generator: "Calyx App",
  authors: [{ name: "Calyx Team" }],
  alternates: {
    canonical: "https://calculator-multilingual.vercel.app",
  },
};

// ✅ Root layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </head>
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
