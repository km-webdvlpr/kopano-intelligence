"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { brand } from "@/lib/site-content";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Systems" },
  { href: "/who-its-for", label: "Clients" },
  { href: "/case-studies", label: "Proof" },
  { href: "/method", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-olive/10 bg-[#fffef8]/95 backdrop-blur">
      <div className="container-shell py-4">
        <div className="flex min-h-[60px] items-center justify-between gap-6">
          <Link href="/" className="min-w-fit">
            <div className="text-sm uppercase tracking-[0.28em] text-dusk">
              {brand.location}
            </div>
            <div className="font-[var(--font-display)] text-4xl font-semibold leading-none text-oliveDeep">
              {brand.name}
            </div>
          </Link>
          <nav className="hidden flex-wrap items-center justify-end gap-5 lg:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition ${active ? "text-oliveDeep" : "text-dusk hover:text-oliveDeep"}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <Link href="/contact" className="secondary-button">
            Start a build
          </Link>
        </div>
        <nav className="-mx-1 mt-4 flex gap-2 overflow-x-auto pb-1 lg:hidden">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition ${
                  active
                    ? "bg-oliveDeep text-white"
                    : "border border-olive/15 bg-white text-dusk"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
