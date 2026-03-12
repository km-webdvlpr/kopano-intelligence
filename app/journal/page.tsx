import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { insights } from "@/lib/site-content";

export const metadata = {
  title: "Journal",
  description:
    "Short writing on bespoke systems, workflow design, and practical software for operators.",
};

export default function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Short thinking on bespoke systems, workflow design, and practical software."
        description="The writing supports the same Tec4th signal: serious systems for real operators, explained in a clear and grounded way."
        primaryCta={{ href: "/contact", label: "Discuss an idea" }}
        secondaryCta={{ href: "/services", label: "See system types" }}
      />

      <AnimatedSection className="section-space">
        <div className="container-shell grid gap-6 lg:grid-cols-3">
          {insights.map((article) => (
            <article key={article.title} className="panel p-8">
              <p className="eyebrow">{article.category}</p>
              <h2 className="mt-3 text-3xl font-semibold font-[var(--font-display)]">
                {article.title}
              </h2>
              <p className="mt-4 text-dusk">{article.summary}</p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink"
              >
                Start a conversation <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <CTASection
        title="The writing should reinforce the build signal, not distract from it."
        description="Clear software thinking, grounded business language, and a practical point of view."
        primary={{ href: "/contact", label: "Reach out" }}
        secondary={{ href: "/about", label: "Read the positioning" }}
      />
    </>
  );
}
