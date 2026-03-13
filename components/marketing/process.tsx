import type React from "react";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2, Lead } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { SparkIcon, TargetIcon, WorkflowIcon } from "@/components/icons";

function Step({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <Card className="p-6">
      <div className="flex items-start gap-4">
        <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-bg-2/40 text-accent">
          {icon}
        </div>
        <div>
          <h3 className="text-base font-semibold tracking-tight text-text">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
        </div>
      </div>
    </Card>
  );
}

export function Process() {
  return (
    <Section id="about">
      <div className="grid gap-10">
        <div className="max-w-2xl">
          <Eyebrow>Framework</Eyebrow>
          <H2 className="mt-3">Our revenue growth framework</H2>
          <Lead className="mt-4">
            Built for B2B teams that want repeatable pipeline, not one-off
            campaigns.
          </Lead>
        </div>

        <div className="grid gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="relative">
            <Step
              title="Strategy"
              description="Define ICP, messaging, and pipeline strategy."
              icon={<TargetIcon className="h-5 w-5" />}
            />
            <div className="pointer-events-none absolute -right-2 top-1/2 hidden h-px w-6 bg-border lg:block" />
          </div>
          <div className="relative">
            <Step
              title="Execution"
              description="Launch targeted outreach campaigns."
              icon={<WorkflowIcon className="h-5 w-5" />}
            />
            <div className="pointer-events-none absolute -right-2 top-1/2 hidden h-px w-6 bg-border lg:block" />
          </div>
          <Step
            title="Scale"
            description="Optimize and scale your revenue engine."
            icon={<SparkIcon className="h-5 w-5" />}
          />
        </div>
      </div>
    </Section>
  );
}
