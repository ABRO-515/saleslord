import Link from "next/link";
import type React from "react";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2, Lead } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { SparkIcon, TargetIcon, WorkflowIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

function Outcome({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 text-sm leading-6 text-muted">
      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent/85" />
      <span>{children}</span>
    </li>
  );
}

function ServiceCard({
  title,
  description,
  icon,
  outcomes,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  outcomes: string[];
}) {
  return (
    <Card className="group p-7 transition-all duration-200 hover:-translate-y-1 hover:bg-bg-2/45 hover:shadow-[0_24px_70px_rgba(0,0,0,0.36)]">
      <div className="flex items-start justify-between gap-6">
        <div>
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-bg-2/40 text-accent">
            {icon}
          </div>
          <h3 className="mt-5 text-xl font-semibold tracking-tight text-text">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
        </div>
      </div>

      <ul className="mt-6 grid gap-2">
        {outcomes.map((o) => (
          <Outcome key={o}>{o}</Outcome>
        ))}
      </ul>

      <div className="mt-7">
        <Link
          href="/services#designed"
          className={cn(
            "inline-flex items-center gap-2 text-sm font-medium text-text/85 transition-colors group-hover:text-text",
          )}
        >
          Learn more
          <span className="text-muted group-hover:text-text">→</span>
        </Link>
      </div>

      <div className="pointer-events-none mt-8 h-px w-full bg-border" />
      <p className="mt-4 text-xs tracking-[0.14em] uppercase text-muted">
        Designed for consistency
      </p>
    </Card>
  );
}

export function ServicesGrid() {
  return (
    <Section id="what-we-do" className="bg-bg-2/25">
      <div className="grid gap-10">
        <div className="max-w-2xl">
          <Eyebrow>What we do</Eyebrow>
          <H2 className="mt-3">What we do</H2>
          <Lead className="mt-4">
            Three integrated offers that cover sourcing, outreach, qualification,
            and lifecycle automation.
          </Lead>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <ServiceCard
            title="Lead Generation"
            description="Build a consistent flow of qualified opportunities through targeted outbound campaigns and clear prospect positioning."
            icon={<TargetIcon className="h-5 w-5" />}
            outcomes={[
              "Higher reply rates from ICP-aligned targeting",
              "Qualified meetings booked directly into your calendar",
              "Consistent pipeline creation week over week",
            ]}
          />
          <ServiceCard
            title="Sales Outsourcing"
            description="Extend your sales capacity with structured outreach, pipeline support, and repeatable processes that move deals forward."
            icon={<SparkIcon className="h-5 w-5" />}
            outcomes={[
              "More coverage across accounts without hiring",
              "Follow-up systems that prevent deal leakage",
              "Reliable SDR execution with clear reporting",
            ]}
          />
          <ServiceCard
            title="Marketing Automation"
            description="Reduce manual work and improve conversion with better CRM workflows, automated sequences, and lifecycle automation."
            icon={<WorkflowIcon className="h-5 w-5" />}
            outcomes={[
              "Cleaner handoffs between marketing and sales",
              "Nurture sequences that lift conversion",
              "Reporting that makes pipeline performance clear",
            ]}
          />
        </div>
      </div>
    </Section>
  );
}
