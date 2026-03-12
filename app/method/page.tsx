import { CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { processSteps } from "@/lib/site-content";

export const metadata = {
  title: "Process",
  description:
    "A practical process for scoping, designing, and shipping bespoke business systems.",
};

export default function MethodPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="The process stays simple so the build can stay real."
        description="Tec4th works best when the problem, workflow, and next system step are defined clearly. The process is intentionally practical and restrained."
        primaryCta={{ href: "/contact", label: "Discuss a build" }}
        secondaryCta={{ href: "/case-studies", label: "See Bontle proof" }}
      />

      <AnimatedSection className="section-space">
        <div className="container-shell">
          <div className="grid gap-6">
            {processSteps.map((step, index) => (
              <div key={step.title} className="panel p-8 lg:p-10">
                <div className="grid gap-6 lg:grid-cols-[120px_1fr_0.95fr] lg:items-start">
                  <div className="soft-panel flex h-20 w-20 items-center justify-center text-3xl font-semibold font-[var(--font-display)] text-oliveDeep">
                    0{index + 1}
                  </div>
                  <div>
                    <p className="eyebrow">{step.label}</p>
                    <h2 className="mt-3 text-3xl font-semibold font-[var(--font-display)]">
                      {step.title}
                    </h2>
                    <p className="mt-4 text-dusk">{step.text}</p>
                  </div>
                  <div className="soft-panel p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dusk">
                      Output
                    </p>
                    <ul className="mt-4 space-y-3 text-sm text-dusk">
                      {step.outputs.map((output) => (
                        <li key={output} className="flex gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                          <span>{output}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <CTASection
        title="A smaller, sharper build usually beats a vague big project."
        description="That is the discipline behind Tec4th: define the real operating problem, build the right system layer, and ship something the client can actually use."
        primary={{ href: "/contact", label: "Scope a system" }}
        secondary={{ href: "/services", label: "See what gets built" }}
      />
    </>
  );
}
