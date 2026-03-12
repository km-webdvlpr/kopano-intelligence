import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { insights } from "@/lib/site-content";

export const metadata = {
  title: "Journal",
  description:
    "Short ideas on reporting, KPI clarity, and operational visibility.",
};

export default function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Short ideas on reporting, KPI clarity, and operational visibility."
        description="The journal supports the public signal: practical analytics thinking, structured communication, and business-facing clarity."
        primaryCta={{ href: "/contact", label: "Discuss an idea" }}
        secondaryCta={{ href: "/services", label: "See work areas" }}
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
                Continue the conversation <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <CTASection
        title="Useful writing should strengthen the same core signal as the rest of the site."
        description="Clear thinking, practical analytics, and reporting that makes business sense."
        primary={{ href: "/contact", label: "Reach out" }}
        secondary={{ href: "/about", label: "Read the positioning" }}
      />
    </>
  );
}
