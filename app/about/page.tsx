import { CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { brand } from "@/lib/site-content";

export const metadata = {
  title: "About",
  description:
    "About Tec4th and the thinking behind the bespoke systems offer.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Tec4th is built around one practical belief: smaller operators should still be able to access serious software."
        description={`${brand.name} exists to build focused systems for businesses that have outgrown manual operations but do not need an enterprise vendor story. The aim is sharp bespoke delivery with grounded commercial sense.`}
        primaryCta={{ href: "/contact", label: "Discuss a build" }}
        secondaryCta={{ href: "/case-studies", label: "See Bontle proof" }}
      />

      <AnimatedSection className="section-space section-divider">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div className="panel p-8 lg:p-10">
            <h2 className="text-4xl font-semibold font-[var(--font-display)]">
              The real edge is not hype. It is the ability to think through the workflow and ship the system.
            </h2>
            <p className="mt-5 text-dusk">
              The strongest signal behind Tec4th comes from a combination that many
              smaller operators rarely find in one place: business logic, workflow
              thinking, reporting discipline, and modern full-stack delivery.
            </p>
            <p className="mt-5 text-dusk">
              Bontle helped make that clearer. It showed that bespoke operational
              systems can be scoped and shipped with real structure. Tec4th turns that
              capability into a more direct commercial offer for practical businesses.
            </p>
          </div>
          <div className="soft-panel p-8">
            <p className="eyebrow">What the brand stands for</p>
            <ul className="mt-5 space-y-4 text-dusk">
              {[
                "Focused bespoke systems instead of vague digital promises",
                "Commercially grounded delivery for real operators",
                "An African-inspired feel that stays professional and calm",
                "Modern software built around workflow fit, not startup performance",
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
              title: "No unicorn moves",
              text: "The business is not trying to become a startup myth. It is trying to build useful systems, close practical deals, and create sustainable delivery.",
            },
            {
              title: "Local-first boldness",
              text: "The offer is designed for businesses in environments like ours: real operational pressure, real cost sensitivity, and real need for sharper systems.",
            },
            {
              title: "Agent-leveraged delivery",
              text: "Modern tooling increases speed, but the public promise remains human: thoughtful software built properly for the client's workflow.",
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
        title="The goal is to make serious custom software feel possible again for the right smaller business."
        description="That means clear scope, practical delivery, and a system the client can actually use."
        primary={{ href: "/contact", label: "Start the conversation" }}
        secondary={{ href: "/services", label: "See the offer" }}
      />
    </>
  );
}
