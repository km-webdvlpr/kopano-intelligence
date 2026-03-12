import { CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { brand } from "@/lib/site-content";

export const metadata = {
  title: "About",
  description:
    "About the founder of Kopano Learning Intelligence, a Johannesburg-based solo consultant focused on learning operations intelligence, KPI clarity, and practical reporting systems.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A solo analytics consultant focused on the reporting realities of learning and programme delivery."
        description={`${brand.name} is positioned for organisations that need clearer programme visibility, stronger KPI logic, and reporting systems that support management decisions without unnecessary software sprawl.`}
        primaryCta={{ href: "/contact", label: "Book a consultation" }}
        secondaryCta={{ href: "/journal", label: "Read insights" }}
      />

      <AnimatedSection className="section-space section-divider">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div className="panel p-8 lg:p-10">
            <h2 className="text-4xl font-semibold font-[var(--font-display)]">
              Positioned between analyst, operator, and reporting strategist.
            </h2>
            <p className="mt-5 text-dusk">
              The founder&apos;s public work consistently points to structured thinking,
              practical analytics, and clear communication. The Data Analyst Field
              Manual emphasis on turning raw data into business direction sits
              directly behind this practice.
            </p>
            <p className="mt-5 text-dusk">
              The Bontle case study contributes another important thread: measurable
              workflow logic, KPI trust, executive reporting, and operational
              visibility. This consultancy applies those strengths specifically to
              learning operations, programme delivery, and training environments.
            </p>
          </div>
          <div className="soft-panel p-8">
            <p className="eyebrow">What clients can expect</p>
            <ul className="mt-5 space-y-4 text-dusk">
              {[
                "A business-facing approach that starts with management questions rather than dashboards",
                "Structured, concise communication that helps stakeholders move quickly",
                "Grounding in South African operating realities and delivery constraints",
                "Enough technical depth to define metrics, shape data, and build reporting assets directly",
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
              title: "Learning operations focus",
              text: "The niche is deliberate: training providers, programme environments, and education operations teams that need better visibility into performance and interventions.",
            },
            {
              title: "Reporting discipline",
              text: "The practice emphasises KPI logic, reporting structure, and decision support rather than broad digital transformation language.",
            },
            {
              title: "Practical delivery",
              text: "The goal is to leave behind useful dashboards, packs, and reporting routines that can support real decisions in the same week they are used.",
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
        title="This practice is built to start serious consulting conversations with the right niche buyers."
        description="It is designed for programme managers, operations leaders, and founders who need a specialist view on reporting maturity and learning delivery visibility."
        primary={{ href: "/contact", label: "Start a conversation" }}
        secondary={{ href: "/services", label: "Review the offers" }}
      />
    </>
  );
}
