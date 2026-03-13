import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";

export function AboutFinalCTA() {
  return (
    <Section id="contact" className="py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-2/45 px-8 py-12 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur sm:px-12">
        <div className="max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Ready to build a stronger pipeline?
          </h2>
          <p className="mt-4 text-pretty text-base leading-7 text-muted sm:text-lg">
            Let’s discuss how SalesLord can help structure and scale your revenue
            engine.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact" size="lg">
              Book a Strategy Call
            </ButtonLink>
          </div>
        </div>

        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/12 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-14 h-56 w-56 rounded-full bg-text/6 blur-3xl" />
      </div>
    </Section>
  );
}
