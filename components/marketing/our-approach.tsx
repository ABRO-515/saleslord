import { Section } from "@/components/ui/section";
import { Eyebrow, H2, Lead } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { SparkIcon, TargetIcon, WorkflowIcon } from "@/components/icons";

function Pillar({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <Card className="group p-7 transition-transform duration-200 hover:-translate-y-1 hover:bg-bg-2/45">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-bg-2/40 text-accent">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-text">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
    </Card>
  );
}

export function OurApproach() {
  return (
    <Section className="bg-bg-2/25">
      <div className="grid gap-10">
        <div className="max-w-2xl">
          <Eyebrow>Approach</Eyebrow>
          <H2 className="mt-3">How we approach revenue growth</H2>
          <Lead className="mt-4">
            Small-team clarity with a system-first approach — strategy before
            motion.
          </Lead>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <Pillar
            title="Strategy"
            description="We define the right audience, messaging, and pipeline strategy before execution begins."
            icon={<TargetIcon className="h-5 w-5" />}
          />
          <Pillar
            title="Execution"
            description="Our team launches targeted outreach campaigns and structured sales processes."
            icon={<SparkIcon className="h-5 w-5" />}
          />
          <Pillar
            title="Optimization"
            description="We continuously improve performance using real data and feedback loops."
            icon={<WorkflowIcon className="h-5 w-5" />}
          />
        </div>
      </div>
    </Section>
  );
}
