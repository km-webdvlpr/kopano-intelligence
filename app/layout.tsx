import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
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

const body = Manrope({
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
    "Johannesburg-based business-facing data analyst focused on reporting, dashboards, KPI clarity, and operational visibility. Available for projects, contract work, and the right role.",
  metadataBase: new URL(brand.siteUrl),
  openGraph: {
    title: brand.name,
    description:
      "Business-facing analytics for reporting, KPI clarity, and operational visibility.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: brand.name,
    description:
      "A business-facing data analyst open to projects, contract work, and the right role.",
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
