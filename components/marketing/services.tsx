import Link from "next/link";
import type React from "react";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2, Lead } from "@/components/ui/text";
import { cn } from "@/lib/cn";
import { SparkIcon, TargetIcon, WorkflowIcon } from "@/components/icons";

function ServiceCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <Card className="group p-6 transition-transform duration-200 hover:-translate-y-1 hover:bg-bg-2/45">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-bg-2/40 text-accent">
            {icon}
          </div>
          <h3 className="mt-4 text-lg font-semibold tracking-tight text-text">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
        </div>
      </div>
      <div className="mt-6">
        <Link
          href="/services"
          className={cn(
            "inline-flex items-center gap-2 text-sm font-medium text-text/85 transition-colors group-hover:text-text",
          )}
        >
          Learn more
          <span className="text-muted group-hover:text-text">→</span>
        </Link>
      </div>
    </Card>
  );
}

export function Services() {
  return (
    <Section id="services" className="bg-bg-2/25">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-5">
          <Eyebrow>Services</Eyebrow>
          <H2 className="mt-3">Revenue growth services</H2>
          <Lead className="mt-4 max-w-lg">
            A focused set of systems that move prospects from first touch to
            qualified meetings — with the rigor of a revenue team.
          </Lead>
        </div>
        <div className="lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Lead Generation"
              description="Targeted lists, high-intent triggers, and messaging that earns replies."
              icon={<TargetIcon className="h-5 w-5" />}
            />
            <ServiceCard
              title="Sales Outsourcing"
              description="Managed outreach that books qualified meetings into your calendar."
              icon={<SparkIcon className="h-5 w-5" />}
            />
            <ServiceCard
              title="Marketing Automation"
              description="Tight handoffs, lifecycle workflows, and clean attribution across channels."
              icon={<WorkflowIcon className="h-5 w-5" />}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
