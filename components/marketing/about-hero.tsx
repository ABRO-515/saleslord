import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Eyebrow } from "@/components/ui/text";

function VisualCard({
  title,
  value,
  sub,
}: {
  title: string;
  value: string;
  sub: string;
}) {
  return (
    <Card className="p-6">
      <p className="text-xs font-medium tracking-[0.14em] uppercase text-muted">
        {title}
      </p>
      <p className="mt-3 text-2xl font-semibold tracking-tight text-text">
        {value}
      </p>
      <p className="mt-2 text-sm leading-6 text-muted">{sub}</p>
    </Card>
  );
}

export function AboutHero() {
  return (
    <Section
      className="pt-36 sm:pt-40"
      containerClassName="grid items-center gap-14 lg:grid-cols-12"
    >
      <div className="lg:col-span-6">
        <Eyebrow>About</Eyebrow>
        <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-text sm:text-5xl lg:text-6xl">
          A focused team helping B2B companies grow revenue
        </h1>
        <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted sm:text-lg">
          SalesLord works with ambitious B2B companies to build predictable sales
          pipelines, improve conversion systems, and create scalable growth
          strategies.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink href="/contact" size="lg">
            Book a Strategy Call
          </ButtonLink>
          <ButtonLink href="/services" variant="secondary" size="lg">
            Explore Services
          </ButtonLink>
        </div>
      </div>

      <div className="relative lg:col-span-6">
        <div className="grid gap-4">
          <Card className="p-6">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-muted">
              Team snapshot
            </p>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {["Strategy", "Outreach", "Automation"].map((k) => (
                <div
                  key={k}
                  className="rounded-2xl border border-border bg-bg-2/35 px-4 py-4"
                >
                  <p className="text-sm font-semibold tracking-tight text-text">
                    {k}
                  </p>
                  <p className="mt-1 text-xs text-muted">Senior-led</p>
                </div>
              ))}
            </div>
            <div className="mt-5 h-px w-full bg-border" />
            <p className="mt-4 text-sm leading-6 text-muted">
              Direct collaboration with specialists — no handoffs, no noise.
            </p>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            <VisualCard
              title="Engagement"
              value="Weekly cadence"
              sub="Clear scope, clear execution, clear reporting."
            />
            <VisualCard
              title="Focus"
              value="Pipeline systems"
              sub="Designed around the revenue journey."
            />
          </div>
        </div>

        <div className="pointer-events-none absolute -right-24 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-text/5 blur-3xl" />
      </div>
    </Section>
  );
}
