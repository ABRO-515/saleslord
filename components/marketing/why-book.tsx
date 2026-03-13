import { Section } from "@/components/ui/section";
import { Eyebrow, H2, Lead } from "@/components/ui/text";
import { Card } from "@/components/ui/card";

function Point({
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

export function WhyBook() {
  return (
    <Section>
      <div className="grid gap-10">
        <div className="max-w-2xl">
          <Eyebrow>Trust</Eyebrow>
          <H2 className="mt-3">Why companies book with SalesLord</H2>
          <Lead className="mt-4">
            Senior-led conversations that stay practical and specific.
          </Lead>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <Point
            title="Strategic, not generic"
            description="We focus on your ICP, message, and motion — not recycled advice."
          />
          <Point
            title="Focused on revenue outcomes"
            description="Everything ties back to pipeline consistency and conversion."
          />
          <Point
            title="Built for B2B growth teams"
            description="Designed for long sales cycles, complex buying, and high-ACV motions."
          />
        </div>
      </div>
    </Section>
  );
}
