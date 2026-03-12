import { Mail, MapPin, MessageSquareMore } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { brand } from "@/lib/site-content";

export const metadata = {
  title: "Contact",
  description:
    "Contact Kopano Learning Intelligence to discuss programme analytics reviews, dashboards, KPI design, and reporting systems for learning and training environments.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start with the reporting problem that is costing the most visibility."
        description="Use the form to discuss a programme analytics review, dashboard project, intervention visibility need, or structured reporting support for your learning environment."
        primaryCta={{ href: "#contact-form", label: "Send an enquiry" }}
        secondaryCta={{ href: `mailto:${brand.email}`, label: "Email directly" }}
      />

      <AnimatedSection className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-5">
            <div className="panel p-7">
              <Mail className="h-6 w-6 text-olive" />
              <h2 className="mt-4 text-3xl font-semibold font-[var(--font-display)]">
                Email
              </h2>
              <p className="mt-3 text-dusk">{brand.email}</p>
            </div>
            <div className="panel p-7">
              <MapPin className="h-6 w-6 text-olive" />
              <h2 className="mt-4 text-3xl font-semibold font-[var(--font-display)]">
                Base
              </h2>
              <p className="mt-3 text-dusk">
                {brand.location}
                <br />
                Available for remote consulting and selective on-site sessions.
              </p>
            </div>
            <div className="panel p-7">
              <MessageSquareMore className="h-6 w-6 text-olive" />
              <h2 className="mt-4 text-3xl font-semibold font-[var(--font-display)]">
                Typical enquiries
              </h2>
              <ul className="mt-3 space-y-2 text-dusk">
                <li>Programme analytics reviews</li>
                <li>Learning dashboard projects</li>
                <li>Operational reporting redesign</li>
                <li>Intervention and cohort visibility work</li>
              </ul>
            </div>
          </div>
          <ContactForm />
        </div>
      </AnimatedSection>
    </>
  );
}
