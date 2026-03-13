import { Section } from "@/components/ui/section";
import { Eyebrow, H2, Lead } from "@/components/ui/text";
import { Card } from "@/components/ui/card";

function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <Card className="p-6">
      <p className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">
        {value}
      </p>
      <p className="mt-2 text-sm leading-6 text-muted">{label}</p>
    </Card>
  );
}

export function Results() {
  return (
    <Section className="bg-bg-2/25">
      <div className="grid gap-10">
        <div className="max-w-2xl">
          <Eyebrow>Results</Eyebrow>
          <H2 className="mt-3">Real revenue impact</H2>
          <Lead className="mt-4">
            Clear targets, disciplined outreach, and feedback loops that keep the
            pipeline moving.
          </Lead>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard value="3x" label="Pipeline Growth" />
          <StatCard value="40%" label="More Qualified Meetings" />
          <StatCard value="65%" label="Faster Sales Cycles" />
        </div>
      </div>
    </Section>
  );
}
