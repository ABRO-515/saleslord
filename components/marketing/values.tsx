import { Section } from "@/components/ui/section";
import { Eyebrow, H2, Lead } from "@/components/ui/text";
import { Card } from "@/components/ui/card";

function Value({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="p-7">
      <h3 className="text-base font-semibold tracking-tight text-text">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
    </Card>
  );
}

export function Values() {
  return (
    <Section className="bg-bg-2/25">
      <div className="grid gap-10">
        <div className="max-w-2xl">
          <Eyebrow>Values</Eyebrow>
          <H2 className="mt-3">What we believe</H2>
          <Lead className="mt-4">
            Principles we use to keep growth work clean, measurable, and grounded.
          </Lead>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Value
            title="Clarity over complexity"
            description="Simple systems outperform complicated strategies."
          />
          <Value
            title="Execution matters"
            description="Ideas are valuable only when implemented well."
          />
          <Value
            title="Measurable outcomes"
            description="Everything should connect to revenue impact."
          />
          <Value
            title="Long-term partnerships"
            description="We work closely with teams we believe we can help."
          />
        </div>
      </div>
    </Section>
  );
}
