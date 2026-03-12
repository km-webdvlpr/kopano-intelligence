import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Computer,
  LayoutPanelTop,
  ScrollText,
  Workflow,
} from "lucide-react";
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
        primaryCta={{ href: "/contact", label: "Discuss a system" }}
        secondaryCta={{ href: "/case-studies", label: "See Bontle proof" }}
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
            eyebrow="Core Offer"
            title="Focused custom software for operators who need the system to actually fit the work."
            description="Tec4th is not selling a generic SaaS dream. It builds bespoke systems that help real businesses run bookings, records, workflows, reporting, and admin with more structure and less friction."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: Workflow,
                title: "Workflow systems",
                text: "Turn informal business movement into visible, trackable workflow logic that teams can actually use.",
              },
              {
                icon: LayoutPanelTop,
                title: "Admin and portal tools",
                text: "Build focused interfaces for staff, records, requests, approvals, bookings, and day-to-day control.",
              },
              {
                icon: ScrollText,
                title: "Reporting and oversight",
                text: "Add management visibility so the owner or team can see what is happening without manual reporting chaos.",
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
            eyebrow="Why Businesses Buy"
            title="Most smaller operators do not need enterprise software. They need a better system than the one they are patching together now."
            description="That middle ground is where Tec4th sits: more serious than spreadsheets, more tailored than generic tools, and more practical than a heavyweight software vendor process."
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
            eyebrow="Systems"
            title="Three focused build categories."
            description="The offer stays disciplined: a few strong system types delivered well instead of a broad agency menu."
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
              Explore system types <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-space section-divider">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Positioning"
              title="African-grounded, commercially serious, and built for practical operators."
              description="The brand direction is intentionally calm and bold at the same time: more distinct than a generic software house, but still credible to businesses that need real systems and real delivery."
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
                <p className="eyebrow">Flagship Proof</p>
                <h2 className="mt-3 text-4xl font-semibold font-[var(--font-display)] sm:text-5xl">
                  Bontle proves the core Tec4th claim: a bespoke platform can be scoped, built, and shipped with real operational intelligence.
                </h2>
                <p className="mt-5 max-w-2xl text-dusk">
                  It is the clearest proof that workflow logic, reporting visibility,
                  and modern full-stack execution can come together inside one focused product.
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
                <p className="eyebrow">What It Shows</p>
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
            title="One impression matters most: this is someone who can actually build the system."
            description="That signal should feel bold enough to be memorable and grounded enough to be trusted."
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
        title="If the business has outgrown spreadsheets, scattered tools, or manual admin, that is the place to start."
        description="Bring the workflow problem, the admin pain, or the reporting gap. Tec4th can scope the system from there."
        primary={{ href: "/contact", label: "Start a build conversation" }}
        secondary={{ href: "/about", label: "See the thinking" }}
      />
    </>
  );
}
