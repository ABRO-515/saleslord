import Link from "next/link";
import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";

export function ServicesPageCTA() {
  return (
    <Section id="contact" className="py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-2/45 px-8 py-12 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur sm:px-12">
        <div className="max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Need a more reliable pipeline?
          </h2>
          <p className="mt-4 text-pretty text-base leading-7 text-muted sm:text-lg">
            We help B2B teams turn fragmented sales efforts into a structured
            growth system.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="#contact" size="lg">
              Book a Strategy Call
            </ButtonLink>
            <Link
              href="#what-we-do"
              className="text-sm font-medium text-muted hover:text-text"
            >
              See service details
            </Link>
          </div>
        </div>

        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/12 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-14 h-56 w-56 rounded-full bg-text/6 blur-3xl" />
      </div>
    </Section>
  );
}
