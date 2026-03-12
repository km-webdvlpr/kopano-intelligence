import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { audiences } from "@/lib/site-content";

export const metadata = {
  title: "Fit",
  description:
    "Where the positioning is strongest: hiring teams, operators, and learning or programme environments.",
};

export default function WhoItsForPage() {
  return (
    <>
      <PageHero
        eyebrow="Fit"
        title="Built to make sense to both hiring teams and potential clients."
        description="The site works best when the viewer needs the same core capability: someone who can improve reporting, clarify KPIs, and turn complex operating data into something more useful."
        primaryCta={{ href: "/contact", label: "Discuss fit" }}
        secondaryCta={{ href: "/about", label: "Read the positioning" }}
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
                      Typical gaps
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm text-dusk">
                      {audience.painPoints.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="soft-panel p-6">
                    <h3 className="text-lg font-semibold font-[var(--font-display)]">
                      What the signal shows
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
        title="The same strength should be legible from multiple angles."
        description="Whether the viewer is hiring, buying a project, or exploring contract support, the site should still read as one person with one strong capability."
        primary={{ href: "/contact", label: "Start a conversation" }}
        secondary={{ href: "/services", label: "See work areas" }}
      />
    </>
  );
}
