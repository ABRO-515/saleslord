import { Section } from "@/components/ui/section";
import { Eyebrow, H2, Lead } from "@/components/ui/text";
import { Card } from "@/components/ui/card";

function ProfileCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="p-7 transition-transform duration-200 hover:-translate-y-1 hover:bg-bg-2/45">
      <h3 className="text-base font-semibold tracking-tight text-text">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
    </Card>
  );
}

export function WhoThisIsFor() {
  return (
    <Section>
      <div className="grid gap-10">
        <div className="max-w-2xl">
          <Eyebrow>Fit</Eyebrow>
          <H2 className="mt-3">Who this call is for</H2>
          <Lead className="mt-4">
            A short filter that keeps the conversation focused and productive.
          </Lead>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <ProfileCard
            title="B2B teams needing more qualified pipeline"
            description="For companies that want more consistent top-of-funnel growth."
          />
          <ProfileCard
            title="Founders building a repeatable sales process"
            description="For small teams that need structure, messaging, and outreach systems."
          />
          <ProfileCard
            title="Companies ready to improve automation and conversion"
            description="For businesses looking to reduce manual work and create scalable workflows."
          />
        </div>
      </div>
    </Section>
  );
}
