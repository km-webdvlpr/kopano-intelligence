import { Mail, MapPin, MessageSquareMore } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { brand } from "@/lib/site-content";

export const metadata = {
  title: "Contact",
  description:
    "Contact Kopano Intelligence to discuss a role, project, or contract opportunity.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Discuss a role, project, or contract opportunity."
        description="The site is meant to open practical conversations quickly. Start with the reporting problem, the role, or the context that matters most."
        primaryCta={{ href: "#contact-form", label: "Send an enquiry" }}
        secondaryCta={{ href: `mailto:${brand.email}`, label: "Email directly" }}
      />

      <AnimatedSection className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-5">
            <div className="panel p-7">
              <Mail className="h-6 w-6 text-oliveDeep" />
              <h2 className="mt-4 text-3xl font-semibold font-[var(--font-display)]">
                Email
              </h2>
              <p className="mt-3 text-dusk">{brand.email}</p>
            </div>
            <div className="panel p-7">
              <MapPin className="h-6 w-6 text-oliveDeep" />
              <h2 className="mt-4 text-3xl font-semibold font-[var(--font-display)]">
                Base
              </h2>
              <p className="mt-3 text-dusk">
                {brand.location}
                <br />
                Available for remote work, selective on-site sessions, and interviews.
              </p>
            </div>
            <div className="panel p-7">
              <MessageSquareMore className="h-6 w-6 text-oliveDeep" />
              <h2 className="mt-4 text-3xl font-semibold font-[var(--font-display)]">
                Good reasons to reach out
              </h2>
              <ul className="mt-3 space-y-2 text-dusk">
                <li>Analyst, BI, or reporting role opportunities</li>
                <li>Short-term reporting or dashboard projects</li>
                <li>Contract support for KPI and visibility work</li>
                <li>Learning or programme reporting needs</li>
              </ul>
            </div>
          </div>
          <ContactForm />
        </div>
      </AnimatedSection>
    </>
  );
}
