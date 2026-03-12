import { CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { brand } from "@/lib/site-content";

export const metadata = {
  title: "About",
  description:
    "About the analyst behind Kopano Intelligence and the positioning behind the site.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="This is a positioning site for one person with a clear analytics strength."
        description={`${brand.name} is not trying to read like a large consultancy. It is a sharper public signal for business-facing analytics work: projects, contract support, and the right role.`}
        primaryCta={{ href: "/contact", label: "Discuss an opportunity" }}
        secondaryCta={{ href: "/case-studies", label: "See proof" }}
      />

      <AnimatedSection className="section-space section-divider">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div className="panel p-8 lg:p-10">
            <h2 className="text-4xl font-semibold font-[var(--font-display)]">
              The central value is structured thinking under real-world conditions.
            </h2>
            <p className="mt-5 text-dusk">
              The strongest thread across the work is the same one already visible in
              the Data Analyst Field Manual and related public work: take raw or messy
              data, frame the business question clearly, and produce something leaders
              can actually use.
            </p>
            <p className="mt-5 text-dusk">
              That includes SQL, Power BI, Python, KPI logic, reporting discipline,
              and an ability to communicate with operators and decision-makers rather
              than only with dashboards.
            </p>
          </div>
          <div className="soft-panel p-8">
            <p className="eyebrow">What this site is for</p>
            <ul className="mt-5 space-y-4 text-dusk">
              {[
                "Signal readiness for analyst, BI, reporting, and operations-facing roles",
                "Support project and consulting conversations where reporting clarity is the need",
                "Show a specialist edge in learning platforms, services, and programme visibility",
                "Present one coherent identity rather than a broad personal portfolio",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space">
        <div className="container-shell grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Business direction",
              text: "The aim is not analysis for its own sake. It is clearer decisions, cleaner performance visibility, and better reporting language.",
            },
            {
              title: "Operational grounding",
              text: "The work respects messy systems, imperfect processes, and the pressure leaders face when the numbers are unclear.",
            },
            {
              title: "African professionalism",
              text: "The tone stays calm, serious, and regionally grounded without drifting into decorative or performative branding.",
            },
          ].map((item) => (
            <div key={item.title} className="panel p-8">
              <h3 className="text-3xl font-semibold font-[var(--font-display)]">
                {item.title}
              </h3>
              <p className="mt-4 text-dusk">{item.text}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <CTASection
        title="The purpose is simple: make it easier for the right people to say yes."
        description="That yes might be a role, a contract, or a scoped reporting project. The signal should still feel coherent."
        primary={{ href: "/contact", label: "Start the conversation" }}
        secondary={{ href: "/services", label: "Review work areas" }}
      />
    </>
  );
}
