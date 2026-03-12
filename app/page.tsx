import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Eye,
  GraduationCap,
  Layers3,
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import {
  brand,
  caseStudies,
  focusAreas,
  reasons,
  services,
  testimonials,
} from "@/lib/site-content";

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow={brand.strapline}
        title="Make programme performance visible."
        description="Kopano Learning Intelligence helps training providers, academies, NGOs, and learning operations teams turn learner reporting into decision support. The focus is on cohort visibility, KPI clarity, interventions, and management-ready reporting rather than on replacing your LMS."
        primaryCta={{ href: "/contact", label: "Discuss a reporting problem" }}
        secondaryCta={{ href: "/services", label: "Explore services" }}
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            "See where cohorts are progressing, stalling, or dropping off",
            "Move beyond spreadsheet-heavy reporting and admin summaries",
            "Build KPI clarity for learning and training operations",
          ].map((item) => (
            <div key={item} className="soft-panel p-4 text-sm text-dusk">
              <CheckCircle2 className="mb-3 h-5 w-5 text-olive" />
              {item}
            </div>
          ))}
        </div>
      </PageHero>

      <AnimatedSection className="section-space section-divider">
        <div className="container-shell">
          <SectionHeading
            eyebrow="What This Means"
            title="Learning operations intelligence is a reporting layer for people who run programmes, cohorts, and delivery teams."
            description="It connects learner and programme data to the management questions that matter: who is progressing, where completion is slipping, which cohorts need intervention, and how delivery performance is trending."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: Eye,
                title: "Visibility across the learner journey",
                text: "Replace isolated admin exports with a clearer view of attendance, progress, completion, and support needs.",
              },
              {
                icon: Layers3,
                title: "KPI logic leaders can trust",
                text: "Define the metrics, thresholds, and reporting views that make recurring management reviews more credible.",
              },
              {
                icon: BarChart3,
                title: "Decision support for programme teams",
                text: "Design reporting around real operational conversations, not just what the system can export by default.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="panel p-8">
                <Icon className="h-8 w-8 text-olive" />
                <h3 className="mt-5 text-2xl font-semibold font-[var(--font-display)]">
                  {title}
                </h3>
                <p className="mt-3 text-dusk">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space section-divider">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Key Problems Solved"
            title="The work is designed for learning organisations that already have data but still lack operational visibility."
            description="The consultancy stays deliberately focused on reporting, KPI design, and visibility for learning and programme delivery environments."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {focusAreas.map((item) => (
              <div key={item.title} className="soft-panel p-6">
                <h3 className="text-2xl font-semibold font-[var(--font-display)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-dusk">{item.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space section-divider">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Services"
            title="Focused offers for learning analytics, programme visibility, and reporting maturity."
            description="The offer is intentionally narrow so early clients can see a clear fit: this is specialist work for training and learning operations, not broad analytics for every industry."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {services.slice(0, 4).map((service) => (
              <div key={service.slug} className="panel p-8">
                <p className="eyebrow">{service.outcome}</p>
                <h3 className="mt-3 text-3xl font-semibold font-[var(--font-display)]">
                  {service.title}
                </h3>
                <p className="mt-3 text-dusk">{service.summary}</p>
                <ul className="mt-5 space-y-3 text-sm text-dusk">
                  {service.deliverables.slice(0, 3).map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink"
            >
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space section-divider">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Why This Matters"
              title="Learning organisations do not need more admin reporting. They need a clearer operating picture."
              description="When reporting improves, managers can spot completion risk earlier, compare cohort performance more intelligently, and bring more discipline to interventions and programme reviews."
            />
          </div>
          <div className="grid gap-5">
            {reasons.map((reason) => (
              <div key={reason.title} className="panel p-6">
                <h3 className="text-2xl font-semibold font-[var(--font-display)]">
                  {reason.title}
                </h3>
                <p className="mt-2 text-dusk">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space section-divider">
        <div className="container-shell">
          <div className="panel overflow-hidden">
            <div className="grid gap-8 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
              <div>
                <p className="eyebrow">Featured Proof Point</p>
                <h2 className="mt-3 text-4xl font-semibold font-[var(--font-display)] sm:text-5xl">
                  Bontle shows the founder&apos;s strength in operational intelligence, KPI design, and management reporting logic.
                </h2>
                <p className="mt-5 max-w-2xl text-dusk">
                  It is not presented as a learning-sector case study. It is presented as
                  honest evidence of how workflow visibility, measurable states, and
                  management-ready reporting can be designed and shipped with rigor.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-sm text-dusk">
                  {caseStudies[0].tags.map((tag) => (
                    <span key={tag} className="badge">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/case-studies"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink"
                >
                  Read the case study <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="soft-panel p-7">
                <p className="eyebrow">What It Demonstrates</p>
                <ul className="mt-5 space-y-4 text-sm text-dusk">
                  {caseStudies[0].results.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-olive" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="Niche Fit"
              title="Built for training providers, programme teams, and education operators who need clarity without a platform rebuild."
              description="The practice is positioned as a premium analytics and reporting layer. It is not an LMS replacement, not a generic software studio, and not a broad agency."
            />
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-olive/15 bg-sage/45 px-4 py-2 text-sm text-dusk">
              <GraduationCap className="h-4 w-4 text-olive" />
              Reporting and KPI visibility designed around learning delivery
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              "Learner performance visibility by cohort, module, or facilitator",
              "Completion, attendance, and intervention reporting for management meetings",
              "Monthly decision-support packs for programme leads and executives",
              "Bespoke reporting structures aligned to how delivery teams actually work",
            ].map((item) => (
              <div key={item} className="panel p-6 text-dusk">
                {item}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Positioning Check"
            title="The site is designed to feel focused, credible, and properly scoped for a solo specialist."
            description="These are positioning signals rather than inflated social proof. They reinforce the intended market impression for early-stage outreach."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="panel p-8">
                <p className="text-dusk">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-6">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-dusk">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <CTASection
        title="If learner reporting is still slow, manual, or too administrative, fix the reporting layer first."
        description="Start with a programme analytics review, a dashboard project, or a scoped conversation about where visibility is breaking down."
        primary={{ href: "/contact", label: "Request a programme analytics review" }}
        secondary={{ href: "/method", label: "See the method" }}
      />
    </>
  );
}
