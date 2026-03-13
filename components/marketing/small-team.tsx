import { Section } from "@/components/ui/section";
import { Eyebrow, H2, Lead } from "@/components/ui/text";
import { Card } from "@/components/ui/card";

function Profile({
  name,
  role,
  description,
}: {
  name: string;
  role: string;
  description: string;
}) {
  return (
    <Card className="p-7">
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 flex-none rounded-full border border-border bg-bg-2/35" />
        <div>
          <p className="text-sm font-semibold tracking-tight text-text">{name}</p>
          <p className="mt-1 text-xs font-medium tracking-[0.14em] uppercase text-muted">
            {role}
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-muted">{description}</p>
    </Card>
  );
}

export function SmallTeam() {
  return (
    <Section>
      <div className="grid gap-10">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <Eyebrow>Team</Eyebrow>
            <H2 className="mt-3">A small team with focused expertise</H2>
            <Lead className="mt-4">
              SalesLord is intentionally small and specialized — designed for
              direct collaboration, faster execution, and deeper involvement in
              each project.
            </Lead>
          </div>
          <div className="lg:col-span-6">
            <div className="grid gap-3 rounded-2xl border border-border bg-bg-2/25 p-6">
              <p className="text-sm font-semibold tracking-tight text-text">
                Why this matters
              </p>
              <ul className="grid gap-2 text-sm leading-6 text-muted">
                <li>Direct collaboration with senior specialists</li>
                <li>Short feedback loops and weekly delivery</li>
                <li>Systems that remain simple and maintainable</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Profile
            name="Elias"
            role="Founder — Revenue Strategy"
            description="Defines positioning, ICP, and a pipeline strategy that aligns teams and targets." 
          />
          <Profile
            name="Mira"
            role="Outbound Specialist"
            description="Builds lists, sequences, and outreach workflows that earn replies and book meetings." 
          />
          <Profile
            name="Jonas"
            role="Marketing Automation Lead"
            description="Designs lifecycle automation and CRM workflows that reduce manual work and increase conversion." 
          />
          <Profile
            name="Sofia"
            role="Sales Operations"
            description="Ensures clean handoffs, reporting, and pipeline hygiene — so performance is visible." 
          />
        </div>
      </div>
    </Section>
  );
}
