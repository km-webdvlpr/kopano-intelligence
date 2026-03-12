import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { audiences } from "@/lib/site-content";

export const metadata = {
  title: "Who It's For",
  description:
    "Focused client fit for training academies, skills programmes, NGOs, education operations teams, and private learning providers.",
};

export default function WhoItsForPage() {
  return (
    <>
      <PageHero
        eyebrow="Who It's For"
        title="Built for organisations running learning, training, and programme delivery."
        description="This practice is not positioned for every sector. It is designed for environments where leaders need clearer reporting on learners, cohorts, attendance, completion, interventions, and programme performance."
        primaryCta={{ href: "/contact", label: "Discuss your reporting environment" }}
        secondaryCta={{ href: "/services", label: "View services" }}
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
                      Common reporting problems
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm text-dusk">
                      {audience.painPoints.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="soft-panel p-6">
                    <h3 className="text-lg font-semibold font-[var(--font-display)]">
                      How analytics improves management
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
        title="If your team is still managing delivery through exported spreadsheets and administrative summaries, the reporting layer probably needs redesign."
        description="The goal is to help programme and operations leaders see what is happening early enough to intervene, not just report after the fact."
        primary={{ href: "/contact", label: "Discuss a reporting problem" }}
        secondary={{ href: "/about", label: "Learn about the practice" }}
      />
    </>
  );
}
