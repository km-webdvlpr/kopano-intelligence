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
          <div className="mt-2 font-[var(--font-display)] text-3xl font-semibold">
            {brand.name}
          </div>
          <p className="mt-3 max-w-xl text-sm text-dusk">
            Solo analytics consultancy for learning organisations that need clearer
            reporting on cohorts, completion, attendance, interventions, and
            programme performance.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-dusk">
          <Link href="/contact">{brand.email}</Link>
          <p>{brand.location}</p>
          <p>Available for remote consulting and selective on-site workshops.</p>
        </div>
      </div>
    </footer>
  );
}
