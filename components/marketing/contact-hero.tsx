import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/text";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function ExpectItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="mt-1.5 h-2 w-2 flex-none rounded-full bg-accent/85" />
      <div>
        <p className="text-sm font-semibold tracking-tight text-text">
          {title}
        </p>
        <p className="mt-1 text-sm leading-6 text-muted">{description}</p>
      </div>
    </div>
  );
}

export function ContactHero() {
  return (
    <Section
      className="pt-36 sm:pt-40"
      containerClassName="grid items-start gap-14 lg:grid-cols-12"
    >
      <div className="lg:col-span-6">
        <Eyebrow>Strategy session</Eyebrow>
        <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-text sm:text-5xl lg:text-6xl">
          Book a strategy call
        </h1>
        <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted sm:text-lg">
          Tell us a bit about your business, current pipeline challenges, and
          growth goals. We’ll review your situation and discuss how SalesLord can
          help build a more predictable revenue system.
        </p>
        <p className="mt-4 max-w-xl text-sm leading-6 text-muted">
          Ideal for B2B companies looking to improve pipeline consistency,
          outbound performance, and sales execution.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink href="#form" size="lg">
            Book a Strategy Call
          </ButtonLink>
          <ButtonLink href="/services" variant="secondary" size="lg">
            Explore Services
          </ButtonLink>
        </div>
      </div>

      <div className="relative lg:col-span-6">
        <Card className="p-7">
          <p className="text-xs font-medium tracking-[0.14em] uppercase text-muted">
            What to expect
          </p>
          <div className="mt-5 grid gap-5">
            <ExpectItem
              title="A focused conversation about your current sales process"
              description="We’ll map what’s working, what’s missing, and where pipeline gets stuck."
            />
            <ExpectItem
              title="Clear recommendations based on your goals"
              description="Practical guidance on targeting, messaging, outreach, and systems."
            />
            <ExpectItem
              title="A practical next-step plan if there’s a fit"
              description="If we can help, you’ll leave with an actionable path forward."
            />
          </div>
        </Card>

        <div className="pointer-events-none absolute -right-24 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-text/5 blur-3xl" />
      </div>
    </Section>
  );
}
