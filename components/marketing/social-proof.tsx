import { Section } from "@/components/ui/section";

const logos = ["Northpeak", "Caldera", "Workframe", "Helio", "Tandem"]; 

export function SocialProof() {
  return (
    <Section className="py-12 sm:py-14">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <p className="text-sm font-medium tracking-tight text-muted">
          Trusted by growing B2B companies.
        </p>
        <div className="grid grid-cols-2 gap-x-10 gap-y-4 sm:flex sm:flex-wrap sm:items-center sm:justify-end sm:gap-x-10">
          {logos.map((name) => (
            <div
              key={name}
              className="select-none text-sm font-semibold tracking-tight text-text/35"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
