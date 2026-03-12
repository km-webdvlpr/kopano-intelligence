import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

export function CTASection({
  title,
  description,
  primary,
  secondary,
}: {
  title: string;
  description: string;
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
}) {
  return (
    <AnimatedSection className="section-space">
      <div className="container-shell">
        <div className="relative panel overflow-hidden p-8 lg:p-12">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-olive/30 to-transparent" />
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="eyebrow">Next Step</p>
              <h2 className="mt-3 text-balance font-[var(--font-display)] text-4xl font-semibold sm:text-5xl">
                {title}
              </h2>
              <p className="mt-4 max-w-2xl text-dusk">{description}</p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link href={primary.href} className="primary-button">
                {primary.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={secondary.href} className="secondary-button">
                {secondary.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
