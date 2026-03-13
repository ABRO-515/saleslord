import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/cn";

function MetricPill({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-bg/35 px-4 py-3 shadow-[0_18px_45px_rgba(0,0,0,0.25)] backdrop-blur",
        className,
      )}
    >
      <p className="text-xs font-medium tracking-tight text-muted">{label}</p>
      <p className="mt-1 text-sm font-semibold tracking-tight text-text">
        {value}
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <Section
      id="home"
      className="pt-36 sm:pt-40"
      containerClassName="grid items-center gap-14 lg:grid-cols-12"
    >
      <div className="lg:col-span-6">
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-text sm:text-5xl lg:text-6xl">
          Build a predictable B2B sales pipeline
        </h1>
        <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted sm:text-lg">
          SalesLord helps B2B companies generate qualified leads, automate
          outreach, and convert prospects into revenue.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink href="#contact" size="lg">
            Book a Strategy Call
          </ButtonLink>
          <ButtonLink href="#services" variant="secondary" size="lg">
            View Services
          </ButtonLink>
        </div>

        <div className="mt-10 flex items-center gap-3 text-xs text-muted">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-border bg-bg-2/40 text-[10px] font-semibold text-text">
            SL
          </span>
          <span>Nordic clarity. Measurable pipeline outcomes.</span>
        </div>
      </div>

      <div className="relative lg:col-span-6">
        <Card className="relative overflow-hidden p-6 sm:p-7">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-muted">
                Pipeline
              </p>
              <p className="mt-2 text-lg font-semibold tracking-tight text-text">
                Outreach → Meetings → Revenue
              </p>
            </div>
            <div className="rounded-full border border-border bg-bg-2/35 px-3 py-1 text-xs font-medium text-muted">
              Q2
            </div>
          </div>

          <div className="mt-7 grid gap-3">
            {["Lead sourcing", "Email + LinkedIn", "Meeting booked", "Opportunity", "Closed"].map(
              (s, i) => (
                <div key={s} className="grid grid-cols-12 items-center gap-3">
                  <div className="col-span-3 text-xs text-muted">{s}</div>
                  <div className="col-span-9">
                    <div className="h-2.5 w-full rounded-full bg-bg-2/55">
                      <div
                        className="h-2.5 rounded-full bg-accent"
                        style={{ width: `${92 - i * 14}%` }}
                      />
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            <div className="rounded-xl border border-border bg-bg-2/35 px-3 py-3">
              <p className="text-[11px] text-muted">Reply rate</p>
              <p className="mt-1 text-sm font-semibold tracking-tight text-text">
                11.8%
              </p>
            </div>
            <div className="rounded-xl border border-border bg-bg-2/35 px-3 py-3">
              <p className="text-[11px] text-muted">Meetings</p>
              <p className="mt-1 text-sm font-semibold tracking-tight text-text">
                32 / mo
              </p>
            </div>
            <div className="rounded-xl border border-border bg-bg-2/35 px-3 py-3">
              <p className="text-[11px] text-muted">Pipeline</p>
              <p className="mt-1 text-sm font-semibold tracking-tight text-text">
                3.4×
              </p>
            </div>
          </div>

          <div className="pointer-events-none absolute -right-20 -top-28 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-text/5 blur-3xl" />
        </Card>

        <MetricPill
          label="Qualified meetings"
          value="32 booked"
          className="absolute -left-2 -top-6 hidden sm:block"
        />
        <MetricPill
          label="Pipeline growth"
          value="3.4×"
          className="absolute -bottom-6 right-6 hidden sm:block"
        />
      </div>
    </Section>
  );
}
