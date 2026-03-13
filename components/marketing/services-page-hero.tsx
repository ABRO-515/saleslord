import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/text";

function StackCard({
  title,
  items,
}: {
  title: string;
  items: Array<{ label: string; value: string }>;
}) {
  return (
    <Card className="p-6">
      <p className="text-xs font-medium tracking-[0.14em] uppercase text-muted">
        {title}
      </p>
      <div className="mt-4 grid gap-3">
        {items.map((it) => (
          <div
            key={it.label}
            className="flex items-center justify-between rounded-xl border border-border bg-bg-2/35 px-4 py-3"
          >
            <p className="text-sm text-muted">{it.label}</p>
            <p className="text-sm font-semibold tracking-tight text-text">
              {it.value}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function ServicesPageHero() {
  return (
    <Section
      className="pt-36 sm:pt-40"
      containerClassName="grid items-center gap-14 lg:grid-cols-12"
    >
      <div className="lg:col-span-6">
        <Eyebrow>Services</Eyebrow>
        <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-text sm:text-5xl lg:text-6xl">
          Revenue growth services built for B2B companies
        </h1>
        <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted sm:text-lg">
          SalesLord helps companies generate pipeline, improve conversion, and
          build scalable sales systems through focused execution and smart
          automation.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink href="#contact" size="lg">
            Book a Strategy Call
          </ButtonLink>
          <ButtonLink href="#what-we-do" variant="secondary" size="lg">
            Explore Services
          </ButtonLink>
        </div>
      </div>

      <div className="relative lg:col-span-6">
        <div className="grid gap-4">
          <StackCard
            title="Service architecture"
            items={[
              { label: "Lead Generation", value: "Outreach + Meetings" },
              { label: "Sales Outsourcing", value: "Pipeline Coverage" },
              { label: "Marketing Automation", value: "Lifecycle Systems" },
            ]}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="p-6">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-muted">
                Primary KPI
              </p>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-text">
                Qualified meetings
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Measured weekly with a clean handoff into opportunities.
              </p>
            </Card>
            <Card className="p-6">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-muted">
                Secondary KPI
              </p>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-text">
                Sales velocity
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Improve follow-up and conversion across the journey.
              </p>
            </Card>
          </div>
        </div>

        <div className="pointer-events-none absolute -right-24 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-text/5 blur-3xl" />
      </div>
    </Section>
  );
}
