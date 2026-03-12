import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { audiences } from "@/lib/site-content";

export const metadata = {
  title: "Clients",
  description:
    "Client fit across salons, service operators, learning businesses, and owner-led teams that need bespoke systems.",
};

export default function WhoItsForPage() {
  return (
    <>
      <PageHero
        eyebrow="Clients"
        title="Built for operators who need custom systems, not software theatre."
        description="Tec4th is most useful where the business is clearly real, the workflow is clearly messy, and the off-the-shelf options do not properly fit."
        primaryCta={{ href: "/contact", label: "Discuss your operation" }}
        secondaryCta={{ href: "/services", label: "See system types" }}
      />

      <AnimatedSection className="section-space">
        <div className="container-shell grid gap-6">
          {audiences.map((audience) => (
            <div key={audience.slug} className="panel p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="eyebrow">{audience.label}</p>
                  <h2 className="mt-3 text-4xl font-semibold font-[var(--font-display)]">
                    {audience.title}
                  </h2>
                  <p className="mt-4 text-dusk">{audience.summary}</p>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="soft-panel p-6">
                    <h3 className="text-lg font-semibold font-[var(--font-display)]">
                      Typical pain points
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm text-dusk">
                      {audience.painPoints.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="soft-panel p-6">
                    <h3 className="text-lg font-semibold font-[var(--font-display)]">
                      What the build improves
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm text-dusk">
                      {audience.analyticsHelps.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <CTASection
        title="The best early clients are the ones already feeling the cost of manual operations."
        description="If the current workflow is clearly straining the business, the system value is easier to see and easier to justify."
        primary={{ href: "/contact", label: "Start a conversation" }}
        secondary={{ href: "/case-studies", label: "See proof" }}
      />
    </>
  );
}
