import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { LinkedInIcon } from "@/components/icons";

export function DirectContact() {
  return (
    <Section className="py-14 sm:py-16">
      <Card className="p-7 sm:p-8">
        <h3 className="text-xl font-semibold tracking-tight text-text">
          Prefer to reach out directly?
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted">
          Email works best. If you prefer LinkedIn, send a short note with context.
        </p>

        <div className="mt-6 grid gap-3 sm:flex sm:items-center sm:justify-between">
          <a
            href="mailto:hello@saleslord.com"
            className="text-sm font-medium text-text/90 hover:text-text"
          >
            hello@saleslord.com
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-text"
            aria-label="SalesLord on LinkedIn"
          >
            <LinkedInIcon className="h-5 w-5" />
            LinkedIn
          </a>
        </div>
      </Card>
    </Section>
  );
}
