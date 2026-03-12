import { Mail, MapPin, MessageSquareMore } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { brand } from "@/lib/site-content";

export const metadata = {
  title: "Contact",
  description:
    "Contact Tec4th to discuss a bespoke system, workflow tool, or reporting platform.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start with the workflow problem, not the software jargon."
        description="If the business has outgrown spreadsheets, chat-based operations, or fragmented admin tools, start there. Tec4th can scope the right system from the real operating pain."
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
                Available for remote delivery and selective in-person discovery sessions.
              </p>
            </div>
            <div className="panel p-7">
              <MessageSquareMore className="h-6 w-6 text-oliveDeep" />
              <h2 className="mt-4 text-3xl font-semibold font-[var(--font-display)]">
                Good reasons to reach out
              </h2>
              <ul className="mt-3 space-y-2 text-dusk">
                <li>A business process is too manual</li>
                <li>You need a custom admin or workflow system</li>
                <li>You want reporting and oversight built into the platform</li>
                <li>You need a bespoke tool that generic software does not fit</li>
              </ul>
            </div>
          </div>
          <ContactForm />
        </div>
      </AnimatedSection>
    </>
  );
}
