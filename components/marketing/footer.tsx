import Link from "next/link";
import { Container } from "@/components/ui/container";
import { LinkedInIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg/70 py-14">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm font-semibold tracking-tight text-text">
              Company
            </p>
            <div className="mt-4 grid gap-3 text-sm">
              <a href="#about" className="text-muted hover:text-text">
                About
              </a>
              <Link href="#" className="text-muted hover:text-text">
                Careers
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-tight text-text">
              Services
            </p>
            <div className="mt-4 grid gap-3 text-sm">
              <a href="#services" className="text-muted hover:text-text">
                Lead Generation
              </a>
              <a href="#services" className="text-muted hover:text-text">
                Sales Outsourcing
              </a>
              <a href="#services" className="text-muted hover:text-text">
                Marketing Automation
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-tight text-text">
              Resources
            </p>
            <div className="mt-4 grid gap-3 text-sm">
              <Link href="#" className="text-muted hover:text-text">
                Blog
              </Link>
              <Link href="#" className="text-muted hover:text-text">
                Guides
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-tight text-text">
              Contact
            </p>
            <div className="mt-4 grid gap-3 text-sm">
              <a
                href="mailto:hello@saleslord.com"
                className="text-muted hover:text-text"
              >
                hello@saleslord.com
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-muted hover:text-text"
                aria-label="SalesLord on LinkedIn"
              >
                <LinkedInIcon className="h-5 w-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© SalesLord</p>
          <p className="text-muted/80">Build a predictable B2B sales pipeline.</p>
        </div>
      </Container>
    </footer>
  );
}
