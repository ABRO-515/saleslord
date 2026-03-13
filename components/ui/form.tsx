import type React from "react";
import { cn } from "@/lib/cn";

export function FieldLabel({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"label">) {
  return (
    <label
      className={cn(
        "text-xs font-medium tracking-[0.14em] uppercase text-muted",
        className,
      )}
      {...props}
    />
  );
}

const controlBase =
  "mt-2 w-full rounded-2xl border border-border bg-bg-2/30 px-4 py-3 text-sm text-text placeholder:text-muted/70 outline-none transition-colors focus:border-accent/35 focus:ring-2 focus:ring-accent/20";

export function Input({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"input">) {
  return <input className={cn(controlBase, className)} {...props} />;
}

export function Select({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"select">) {
  return (
    <select className={cn(controlBase, className)} {...props}>
      {children}
    </select>
  );
}

export function Textarea({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"textarea">) {
  return (
    <textarea
      className={cn(controlBase, "min-h-[110px] resize-y", className)}
      {...props}
    />
  );
}

export function Checkbox({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"input">) {
  return (
    <input
      type="checkbox"
      className={cn(
        "h-4 w-4 rounded border-border bg-bg-2/30 text-accent focus:ring-2 focus:ring-accent/30 focus:ring-offset-2 focus:ring-offset-bg",
        className,
      )}
      {...props}
    />
  );
}
