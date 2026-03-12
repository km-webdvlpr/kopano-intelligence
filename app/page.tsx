import Link from "next/link";
import { ArrowRight, CheckCircle2, Compass, GraduationCap, LineChart, Target } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import {
  brand,
  caseStudies,
  focusAreas,
  identity,
  reasons,
  services,
  testimonials,
} from "@/lib/site-content";

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow={brand.strapline}
        title={identity.title}
        description={identity.summary}
        primaryCta={{ href: "/contact", label: "Discuss work or roles" }}
        secondaryCta={{ href: "/case-studies", label: "See proof" }}
      >
        <div className="grid gap-4">
          {identity.proofPoints.map((item) => (
            <div key={item} className="rounded-2xl border border-olive/10 bg-white px-4 py-4 text-sm text-dusk">
              <CheckCircle2 className="mb-3 h-5 w-5 text-olive" />
              {item}
            </div>
          ))}
        </div>
      </PageHero>

      <AnimatedSection className="section-space section-divider">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Core Strength"
            title="One sharp through-line: turn messy data into clear business direction."
            description="The site is not trying to present a big agency or a generic portfolio. It is built to show a focused operator who can improve reporting, clarify KPIs, and make performance more visible."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: Compass,
                title: "Business-first framing",
                text: "The work starts with management questions, operating pressure, and what leaders actually need to see.",
              },
              {
                icon: LineChart,
                title: "Reporting and dashboard craft",
                text: "Strongest fit where reporting exists, but still feels too manual, unclear, or disconnected from decisions.",
              },
              {
                icon: Target,
                title: "Useful signal, not analytics theatre",
                text: "The goal is not more charts. The goal is better visibility, cleaner communication, and stronger judgment.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="panel p-8">
                <Icon className="h-8 w-8 text-oliveDeep" />
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
            eyebrow="Where I Add Value"
            title="A clear fit for reporting work, KPI clarity, and operational visibility."
            description="The consulting signal stays, but the scope is tighter and more believable: a few strong areas executed well rather than too many broad promises."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {focusAreas.map((item) => (
              <div key={item.title} className="soft-panel p-6">
                <h3 className="text-2xl font-semibold font-[var(--font-display)] text-ink">
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
            eyebrow="Work"
            title="Three credible ways to work together."
            description="This is enough to support project conversations and role conversations at the same time without making the site feel split or confused."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
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
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-ink">
              See work detail <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space section-divider">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Differentiation"
              title="The learning-platform and programme angle remains a specialist edge, not the whole identity."
              description="It gives the site a clear niche strength for future work while still keeping the broader signal useful for analyst, BI, reporting, and operations-facing roles."
            />
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-olive/15 bg-[#f0f7ed] px-4 py-2 text-sm text-dusk">
              <GraduationCap className="h-4 w-4 text-oliveDeep" />
              Strong fit for learning platforms, services, and programme visibility work
            </div>
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
                <p className="eyebrow">Featured Proof</p>
                <h2 className="mt-3 text-4xl font-semibold font-[var(--font-display)] sm:text-5xl">
                  Bontle is still the cleanest example of operational thinking, KPI logic, and reporting design.
                </h2>
                <p className="mt-5 max-w-2xl text-dusk">
                  It works here because it shows the quality of thinking: measurable flow,
                  trusted KPIs, and reporting built for management use. That signal matters
                  whether the next opportunity is a project, a contract, or a role.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-sm text-dusk">
                  {caseStudies[0].tags.map((tag) => (
                    <span key={tag} className="badge">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="soft-panel p-7">
                <p className="eyebrow">What It Signals</p>
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
        <div className="container-shell">
          <SectionHeading
            eyebrow="Signal"
            title="The site should make one impression quickly: this person can help us see clearly."
            description="That applies whether the viewer is a recruiter, hiring manager, founder, or operator."
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
        title="Open to reporting projects, contract work, and the right role."
        description="If you need clearer reporting, stronger KPI logic, or a business-facing analyst who can work with messy reality, start the conversation there."
        primary={{ href: "/contact", label: "Start a conversation" }}
        secondary={{ href: "/about", label: "Read the positioning" }}
      />
    </>
  );
}
