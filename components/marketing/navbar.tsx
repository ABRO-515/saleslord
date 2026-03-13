"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import Image from "next/image";

const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-x-0 top-0 z-50",
        scrolled && "backdrop-blur supports-[backdrop-filter]:bg-bg/65",
      )}
    >
      <Container>
        <div
          className={cn(
            "pointer-events-auto mt-4 flex h-14 items-center justify-between rounded-2xl border border-transparent px-4",
            scrolled && "border-border bg-bg/55 shadow-[0_18px_50px_rgba(0,0,0,0.28)]",
          )}
        >
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-text"
          >
            <Image
              src="/logo.png"
              width={500}
              height={500}
              alt="Logo of the brand"
              className="h-12 w-36 object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-text"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink
              href="#contact"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Book a Strategy Call
            </ButtonLink>
            <ButtonLink
              href="#contact"
              variant="secondary"
              size="sm"
              className="sm:hidden"
            >
              Book
            </ButtonLink>
          </div>
        </div>
      </Container>
    </div>
  );
}
