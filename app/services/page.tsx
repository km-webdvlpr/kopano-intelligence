import { CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { services } from "@/lib/site-content";

export const metadata = {
  title: "Work",
  description:
    "Focused work areas across reporting setup, KPI reviews, and learning or programme visibility.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="A small set of offers that support both project work and analyst positioning."
        description="The emphasis is on believable scope: strong reporting, KPI clarity, and operational visibility work rather than a long service catalogue."
        primaryCta={{ href: "/contact", label: "Discuss a project" }}
        secondaryCta={{ href: "/contact", label: "Discuss a role" }}
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
                    Best fit
                  </p>
                  <p className="mt-3 text-dusk">{service.idealClient}</p>
                  <p className="mt-4 text-sm text-dusk">{service.problem}</p>
                </div>
              </div>
              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold font-[var(--font-display)]">
                    What the work includes
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
        title="The goal is not to offer everything. The goal is to offer the few things that can be landed and delivered well."
        description="That supports a stronger signal for both consulting conversations and hiring conversations."
        primary={{ href: "/contact", label: "Discuss an opportunity" }}
        secondary={{ href: "/case-studies", label: "Review proof" }}
      />
    </>
  );
}
