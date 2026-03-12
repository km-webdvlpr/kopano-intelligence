import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { caseStudies } from "@/lib/site-content";

export const metadata = {
  title: "Proof",
  description:
    "Bontle-led proof for bespoke business systems, workflow logic, and operational visibility.",
};

export default function CaseStudiesPage() {
  const [flagship, ...futureStudies] = caseStudies;

  return (
    <>
      <PageHero
        eyebrow="Proof"
        title="The strongest proof is a shipped system with real operational logic."
        description="Bontle matters because it demonstrates the thing Tec4th wants to be trusted for: bespoke system delivery that combines workflow control, reporting structure, and modern full-stack execution."
        primaryCta={{ href: "/contact", label: "Discuss a similar build" }}
        secondaryCta={{ href: "/services", label: "See system types" }}
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
              <p className="eyebrow">Future Proof</p>
              <h2 className="mt-3 text-4xl font-semibold font-[var(--font-display)]">
                More operator-focused case studies can follow from this same model.
              </h2>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-ink">
              Start with your workflow <ArrowRight className="h-4 w-4" />
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
        title="The proof is strongest when the client can feel the business logic inside the system."
        description="That is the standard: workflow fit, visibility, and practical usefulness."
        primary={{ href: "/contact", label: "Discuss a bespoke build" }}
        secondary={{ href: "/about", label: "Read the positioning" }}
      />
    </>
  );
}
