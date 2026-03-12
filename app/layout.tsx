import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Sans } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brand } from "@/lib/site-content";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${brand.name} | ${brand.strapline}`,
    template: `%s | ${brand.name}`,
  },
  description:
    "Tec4th builds bespoke business systems, workflow tools, dashboards, and admin platforms for businesses that have outgrown spreadsheets.",
  metadataBase: new URL(brand.siteUrl),
  openGraph: {
    title: brand.name,
    description:
      "Bespoke business systems without enterprise overhead.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: brand.name,
    description:
      "Custom workflow, admin, and reporting systems for practical operators.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-[var(--font-body)] text-[15px] leading-7 sm:text-base">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
