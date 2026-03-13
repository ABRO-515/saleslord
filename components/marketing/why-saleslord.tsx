import { Section } from "@/components/ui/section";
import { Eyebrow, H2, Lead } from "@/components/ui/text";
import { Card } from "@/components/ui/card";

function ValuePoint({
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

export function WhySalesLord() {
  return (
    <Section>
      <div className="grid gap-10">
        <div className="max-w-2xl">
          <Eyebrow>Trust</Eyebrow>
          <H2 className="mt-3">Why teams choose SalesLord</H2>
          <Lead className="mt-4">
            Senior execution, clear systems, and delivery you can scale without
            adding chaos.
          </Lead>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <ValuePoint
            title="Focused execution"
            description="We ship work weekly. Every activity ties back to pipeline creation and conversion." 
          />
          <ValuePoint
            title="Clear systems"
            description="Messaging, targeting, and workflows are documented, measurable, and repeatable." 
          />
          <ValuePoint
            title="Scalable delivery"
            description="A reliable cadence, reporting, and process that can grow as your GTM grows." 
          />
        </div>
      </div>
    </Section>
  );
}
