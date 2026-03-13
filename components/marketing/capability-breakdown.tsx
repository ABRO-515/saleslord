import { Section } from "@/components/ui/section";
import { Eyebrow, H2, Lead } from "@/components/ui/text";
import { Card } from "@/components/ui/card";

const stages = [
  "Awareness",
  "Outreach",
  "Qualification",
  "Conversion",
  "Nurture",
  "Scale",
];

const services = [
  {
    name: "Lead Generation",
    map: [true, true, true, false, false, false],
  },
  {
    name: "Sales Outsourcing",
    map: [false, true, true, true, true, false],
  },
  {
    name: "Marketing Automation",
    map: [true, false, false, true, true, true],
  },
];

function Cell({ active }: { active: boolean }) {
  return (
    <div
      className={
        active
          ? "h-9 rounded-xl border border-accent/30 bg-accent/12"
          : "h-9 rounded-xl border border-border bg-bg-2/25"
      }
    />
  );
}

export function CapabilityBreakdown() {
  return (
    <Section id="designed">
      <div className="grid gap-10">
        <div className="max-w-2xl">
          <Eyebrow>System</Eyebrow>
          <H2 className="mt-3">Designed to support the full revenue journey</H2>
          <Lead className="mt-4">
            A structured service system that maps cleanly to how revenue teams
            actually operate.
          </Lead>
        </div>

        <Card className="overflow-hidden">
          <div className="grid grid-cols-7 gap-0 border-b border-border bg-bg-2/30 px-6 py-4">
            <div className="col-span-1" />
            {stages.map((s) => (
              <div
                key={s}
                className="text-xs font-medium tracking-[0.14em] uppercase text-muted"
              >
                {s}
              </div>
            ))}
          </div>

          <div className="divide-y divide-border">
            {services.map((row) => (
              <div
                key={row.name}
                className="grid grid-cols-1 gap-4 px-6 py-5 lg:grid-cols-7 lg:items-center"
              >
                <div className="text-sm font-semibold tracking-tight text-text lg:col-span-1">
                  {row.name}
                </div>
                <div className="grid grid-cols-6 gap-3 lg:col-span-6">
                  {row.map.map((active, idx) => (
                    <Cell key={`${row.name}-${stages[idx]}`} active={active} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <p className="max-w-3xl text-sm leading-6 text-muted">
          Each engagement is scoped to your current constraint — sourcing,
          capacity, conversion, or workflow debt — and designed to connect to the
          next stage.
        </p>
      </div>
    </Section>
  );
}
