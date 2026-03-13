import { Section } from "@/components/ui/section";
import { Eyebrow, H2, Lead } from "@/components/ui/text";

export function OurMission() {
  return (
    <Section>
      <div className="max-w-3xl">
        <Eyebrow>Mission</Eyebrow>
        <H2 className="mt-3">Our mission</H2>
        <p className="mt-5 text-pretty text-lg font-medium leading-8 text-text">
          SalesLord exists to help B2B companies replace unpredictable sales
          results with structured, scalable revenue systems.
        </p>
        <Lead className="mt-4">
          Many B2B companies struggle with inconsistent pipelines, scattered
          marketing, and outreach that wastes time without moving deals forward.
          We solve that with focused execution and clear strategy — designed to
          compound over time.
        </Lead>
      </div>
    </Section>
  );
}
