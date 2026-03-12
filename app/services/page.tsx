import { CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { services } from "@/lib/site-content";

export const metadata = {
  title: "Systems",
  description:
    "Focused bespoke system types across internal business systems, reporting tools, and portals.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Systems"
        title="A focused build menu for practical businesses."
        description="Tec4th is strongest when the scope is clear and the system solves a real operating problem. These are the three main build categories."
        primaryCta={{ href: "/contact", label: "Discuss a build" }}
        secondaryCta={{ href: "/case-studies", label: "See proof" }}
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
                    What gets built
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
                    What improves
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
        title="The strongest bespoke systems start with a clean problem definition."
        description="The aim is not to build everything. It is to build the system that the business actually needs next."
        primary={{ href: "/contact", label: "Discuss scope" }}
        secondary={{ href: "/method", label: "See the process" }}
      />
    </>
  );
}
