import Link from "next/link";
import { brand } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-olive/10 py-10">
      <div className="container-shell flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-sm uppercase tracking-[0.28em] text-dusk">
            {brand.strapline}
          </div>
          <div className="mt-2 font-[var(--font-display)] text-3xl font-semibold text-ink">
            {brand.name}
          </div>
          <p className="mt-3 max-w-xl text-sm text-dusk">
            A Johannesburg-based analyst brand built to support consulting
            conversations, contract work, and strong business-facing analytics roles.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-dusk">
          <Link href="/contact">{brand.email}</Link>
          <p>{brand.location}</p>
          <p>Open to projects, contract work, and the right full-time opportunity.</p>
        </div>
      </div>
    </footer>
  );
}
