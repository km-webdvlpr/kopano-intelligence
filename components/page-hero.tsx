import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Cta = {
  href: string;
  label: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: Cta;
  secondaryCta: Cta;
  children?: ReactNode;
}) {
  return (
    <section className="section-space section-divider">
      <div className="container-shell">
        <div className="panel retro-grid overflow-hidden p-8 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <p className="eyebrow">{eyebrow}</p>
              <h1 className="mt-4 max-w-4xl text-balance font-[var(--font-display)] text-5xl font-semibold leading-tight text-ink sm:text-6xl lg:text-7xl">
                {title}
              </h1>
              <p className="mt-6 max-w-2xl text-base text-dusk sm:text-lg">
                {description}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href={primaryCta.href} className="primary-button">
                  {primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href={secondaryCta.href} className="secondary-button">
                  {secondaryCta.label}
                </Link>
              </div>
            </div>
            <div className="soft-panel p-6 lg:p-8">
              {children ?? (
                <div className="space-y-4">
                  <p className="eyebrow">Why Tec4th</p>
                  <div className="grid gap-3 text-sm text-dusk">
                    <div className="rounded-2xl border border-olive/10 bg-white px-4 py-4">
                      Bespoke systems designed around the real workflow
                    </div>
                    <div className="rounded-2xl border border-olive/10 bg-white px-4 py-4">
                      Frontend and backend shipped together as one practical platform
                    </div>
                    <div className="rounded-2xl border border-olive/10 bg-white px-4 py-4">
                      Serious software without enterprise overhead or startup theatre
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
