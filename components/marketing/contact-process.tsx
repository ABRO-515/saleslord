import { Section } from "@/components/ui/section";
import { Eyebrow, H2, Lead } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { SparkIcon, TargetIcon, WorkflowIcon } from "@/components/icons";

function Step({
  number,
  title,
  description,
  icon,
}: {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <Card className="p-7">
      <div className="flex items-start gap-4">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-bg-2/40 text-accent">
          {icon}
        </div>
        <div>
          <p className="text-xs font-medium tracking-[0.14em] uppercase text-muted">
            Step {number}
          </p>
          <h3 className="mt-2 text-base font-semibold tracking-tight text-text">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
        </div>
      </div>
    </Card>
  );
}

export function ContactProcess() {
  return (
    <Section className="bg-bg-2/25">
      <div className="grid gap-10">
        <div className="max-w-2xl">
          <Eyebrow>Process</Eyebrow>
          <H2 className="mt-3">What happens next</H2>
          <Lead className="mt-4">
            A simple flow — optimized for clarity and momentum.
          </Lead>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <Step
            number="1"
            title="Share your goals"
            description="Complete the form and tell us about your growth priorities."
            icon={<TargetIcon className="h-5 w-5" />}
          />
          <Step
            number="2"
            title="We review your current situation"
            description="We assess your sales motion, positioning, and operational gaps."
            icon={<WorkflowIcon className="h-5 w-5" />}
          />
          <Step
            number="3"
            title="Strategy call"
            description="We discuss practical ways to improve pipeline consistency and revenue performance."
            icon={<SparkIcon className="h-5 w-5" />}
          />
        </div>
      </div>
    </Section>
  );
}
