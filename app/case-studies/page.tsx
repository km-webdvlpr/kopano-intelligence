import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { caseStudies } from "@/lib/site-content";

export const metadata = {
  title: "Proof",
  description:
    "Proof points for reporting, KPI design, and operational visibility work.",
};

export default function CaseStudiesPage() {
  const [flagship, ...futureStudies] = caseStudies;

  return (
    <>
      <PageHero
        eyebrow="Proof"
        title="The goal of the proof is simple: show strong thinking, useful structure, and credible execution."
        description="The flagship example below matters because it demonstrates how reporting, KPI logic, and operational visibility can be designed with discipline."
        primaryCta={{ href: "/contact", label: "Discuss a similar need" }}
        secondaryCta={{ href: "/services", label: "See work areas" }}
      />

      <AnimatedSection className="section-space section-divider">
        <div className="container-shell">
          <div className="panel p-8 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="eyebrow">Flagship Proof Point</p>
                <h2 className="mt-3 text-4xl font-semibold font-[var(--font-display)] sm:text-5xl">
                  {flagship.title}
                </h2>
                <p className="mt-5 text-dusk">{flagship.summary}</p>
                <div className="mt-6 flex flex-wrap gap-3 text-sm text-dusk">
                  {flagship.tags.map((tag) => (
                    <span key={tag} className="badge">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="soft-panel p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dusk">
                  What it proves
                </p>
                <ul className="mt-4 space-y-3 text-dusk">
                  {flagship.results.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {flagship.highlights.map((highlight) => (
                <div key={highlight.title} className="soft-panel p-6">
                  <h3 className="text-2xl font-semibold font-[var(--font-display)]">
                    {highlight.title}
                  </h3>
                  <p className="mt-3 text-sm text-dusk">{highlight.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space">
        <div className="container-shell">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">Next Proof</p>
              <h2 className="mt-3 text-4xl font-semibold font-[var(--font-display)]">
                Ready to support future work examples without overclaiming today.
              </h2>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-ink">
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {futureStudies.map((study) => (
              <div key={study.title} className="panel p-8">
                <p className="eyebrow">{study.status}</p>
                <h3 className="mt-3 text-3xl font-semibold font-[var(--font-display)]">
                  {study.title}
                </h3>
                <p className="mt-4 text-dusk">{study.summary}</p>
                <ul className="mt-5 space-y-3 text-sm text-dusk">
                  {study.framework.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <CTASection
        title="Proof only matters if it helps the next person trust the work."
        description="That trust can lead to a role, a project, or a contract. The standard stays the same."
        primary={{ href: "/contact", label: "Discuss an opportunity" }}
        secondary={{ href: "/about", label: "See the positioning" }}
      />
    </>
  );
}
