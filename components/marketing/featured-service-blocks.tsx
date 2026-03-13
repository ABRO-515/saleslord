import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/cn";

function Feature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 text-sm leading-6 text-muted">
      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent/85" />
      <span>{children}</span>
    </li>
  );
}

function Visual({
  title,
  rows,
}: {
  title: string;
  rows: Array<{ label: string; value: string }>;
}) {
  return (
    <Card className="p-6">
      <p className="text-xs font-medium tracking-[0.14em] uppercase text-muted">
        {title}
      </p>
      <div className="mt-4 grid gap-3">
        {rows.map((r) => (
          <div
            key={r.label}
            className="flex items-center justify-between rounded-xl border border-border bg-bg-2/35 px-4 py-3"
          >
            <p className="text-sm text-muted">{r.label}</p>
            <p className="text-sm font-semibold tracking-tight text-text">
              {r.value}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}

function DetailBlock({
  id,
  title,
  description,
  features,
  cta,
  visual,
  reversed,
}: {
  id: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  visual: React.ReactNode;
  reversed?: boolean;
}) {
  return (
    <div
      id={id}
      className={cn(
        "grid items-center gap-10 lg:grid-cols-12",
        reversed && "lg:[&>*:first-child]:order-2",
      )}
    >
      <div className="lg:col-span-6">
        <h3 className="text-2xl font-semibold tracking-tight text-text sm:text-3xl">
          {title}
        </h3>
        <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
          {description}
        </p>
        <ul className="mt-6 grid gap-2">
          {features.map((f) => (
            <Feature key={f}>{f}</Feature>
          ))}
        </ul>
        <div className="mt-7">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-text/85 hover:text-text"
          >
            {cta}
            <span className="text-muted">→</span>
          </Link>
        </div>
      </div>
      <div className="lg:col-span-6">
        <div className="relative">
          {visual}
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-text/5 blur-3xl" />
        </div>
      </div>
    </div>
  );
}

export function FeaturedServiceBlocks() {
  return (
    <Section className="bg-bg-2/25">
      <div className="grid gap-16">
        <DetailBlock
          id="lead-generation"
          title="Lead Generation"
          description="Outbound that feels precise and on-brand — built around your ICP, clear positioning, and a meeting booking system you can trust."
          features={[
            "ICP targeting",
            "Outbound messaging",
            "Email + LinkedIn workflows",
            "Meeting booking systems",
          ]}
          cta="Book a lead gen strategy call"
          visual={
            <Visual
              title="Outbound dashboard"
              rows={[
                { label: "ICP segments", value: "4" },
                { label: "Sequences", value: "7" },
                { label: "Meetings booked", value: "32" },
                { label: "Reply rate", value: "11.8%" },
              ]}
            />
          }
        />

        <DetailBlock
          id="sales-outsourcing"
          title="Sales Outsourcing"
          description="A structured extension of your team — with disciplined follow-up and pipeline support that helps deals progress consistently."
          features={[
            "SDR support",
            "Outreach execution",
            "Follow-up workflows",
            "Pipeline consistency",
          ]}
          cta="Explore sales outsourcing"
          reversed
          visual={
            <Visual
              title="Pipeline support"
              rows={[
                { label: "Accounts covered", value: "120" },
                { label: "Follow-ups", value: "Automated" },
                { label: "Stages", value: "5" },
                { label: "Weekly review", value: "Yes" },
              ]}
            />
          }
        />

        <DetailBlock
          id="marketing-automation"
          title="Marketing Automation"
          description="Clean lifecycle workflows that reduce manual work and improve conversion — with better routing, reporting, and nurture."
          features={[
            "CRM workflows",
            "Nurture sequences",
            "Lead routing",
            "Reporting automation",
          ]}
          cta="See automation capabilities"
          visual={
            <Visual
              title="Lifecycle automation"
              rows={[
                { label: "Routing", value: "Rules" },
                { label: "Nurture", value: "Sequences" },
                { label: "Attribution", value: "Clean" },
                { label: "Reporting", value: "Weekly" },
              ]}
            />
          }
        />
      </div>
    </Section>
  );
}
