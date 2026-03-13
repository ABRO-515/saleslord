import type React from "react";
import { cn } from "@/lib/cn";

export function Eyebrow({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p">) {
  return (
    <p
      className={cn(
        "text-xs font-medium tracking-[0.18em] uppercase text-muted",
        className,
      )}
      {...props}
    />
  );
}

export function H2({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"h2">) {
  return (
    <h2
      className={cn(
        "text-balance text-3xl font-semibold tracking-tight text-text sm:text-4xl",
        className,
      )}
      {...props}
    />
  );
}

export function Lead({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p">) {
  return (
    <p
      className={cn(
        "text-pretty text-base leading-7 text-muted sm:text-lg",
        className,
      )}
      {...props}
    />
  );
}
