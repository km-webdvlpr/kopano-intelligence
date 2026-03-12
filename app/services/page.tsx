import { CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { services } from "@/lib/site-content";

export const metadata = {
  title: "Services",
  description:
    "Learning analytics dashboards, programme performance reviews, operational reporting systems, intervention visibility, and bespoke programme intelligence support.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Focused service lines for learning and programme operations."
        description="Each engagement is built around a specific reporting problem, a defined set of deliverables, and a credible scope for a solo specialist practice."
        primaryCta={{ href: "/contact", label: "Request a programme analytics review" }}
        secondaryCta={{ href: "/case-studies", label: "Review proof points" }}
      />

      <AnimatedSection className="section-space">
        <div className="container-shell grid gap-6">
          {services.map((service) => (
            <div key={service.slug} className="panel p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="eyebrow">{service.outcome}</p>
                  <h2 className="mt-3 text-4xl font-semibold font-[var(--font-display)]">
                    {service.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-dusk">{service.summary}</p>
                </div>
                <div className="soft-panel p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dusk">
                    Ideal client and problem
                  </p>
                  <p className="mt-3 text-dusk">{service.idealClient}</p>
                  <p className="mt-4 text-sm text-dusk">{service.problem}</p>
                </div>
              </div>
              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold font-[var(--font-display)]">
                    What is delivered
                  </h3>
                  <ul className="mt-4 space-y-3 text-dusk">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-[var(--font-display)]">
                    Why it matters
                  </h3>
                  <ul className="mt-4 space-y-3 text-dusk">
                    {service.outcomes.map((item) => (
                      <li key={item} className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <CTASection
        title="Start with the smallest intervention that unlocks clearer programme visibility."
        description="Many organisations do not need a large implementation first. They need sharper KPI definitions, a cleaner reporting rhythm, or a dashboard that reflects how delivery is actually managed."
        primary={{ href: "/contact", label: "Explore a dashboard project" }}
        secondary={{ href: "/contact", label: "Book a consultation" }}
      />
    </>
  );
}
