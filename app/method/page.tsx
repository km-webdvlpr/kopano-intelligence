import { CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { processSteps } from "@/lib/site-content";

export const metadata = {
  title: "Method",
  description:
    "A simple method for clarifying business questions, defining KPIs, and building decision-ready reporting.",
};

export default function MethodPage() {
  return (
    <>
      <PageHero
        eyebrow="Method"
        title="Simple enough to explain. Strong enough to deliver with."
        description="The method is intentionally lean. It keeps the work grounded in business questions, KPI logic, and outputs that leaders can actually use."
        primaryCta={{ href: "/contact", label: "Discuss a project" }}
        secondaryCta={{ href: "/case-studies", label: "Review proof" }}
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
        title="Clear work usually comes from clear framing, not from bigger words."
        description="That is the standard here: understand the problem, define the logic, structure the reporting, and make it useful."
        primary={{ href: "/contact", label: "Discuss the problem" }}
        secondary={{ href: "/about", label: "See the positioning" }}
      />
    </>
  );
}
