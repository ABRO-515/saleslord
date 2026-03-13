import type React from "react";
import { cn } from "@/lib/cn";

type IconProps = {
  className?: string;
};

function Svg({
  className,
  children,
  viewBox = "0 0 24 24",
}: {
  className?: string;
  children: React.ReactNode;
  viewBox?: string;
}) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-5 w-5", className)}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function SparkIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M12 2l1.2 4.2L17.4 7.4l-4.2 1.2L12 12.8l-1.2-4.2L6.6 7.4l4.2-1.2L12 2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M19 12l.7 2.3L22 15l-2.3.7L19 18l-.7-2.3L16 15l2.3-.7L19 12z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function TargetIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M12 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
        fill="currentColor"
      />
    </Svg>
  );
}

export function WorkflowIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M7 7h10M7 12h7M7 17h10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M5 5.5A2.5 2.5 0 0 1 7.5 3h9A2.5 2.5 0 0 1 19 5.5v13A2.5 2.5 0 0 1 16.5 21h-9A2.5 2.5 0 0 1 5 18.5v-13Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </Svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <Svg className={className} viewBox="0 0 24 24">
      <path
        d="M6.9 6.9A2.1 2.1 0 1 1 6.9 2.7a2.1 2.1 0 0 1 0 4.2ZM4.8 21.3V9h4.2v12.3H4.8ZM13.2 9h4v1.7h.1c.6-1.1 2-2 4-2 4.3 0 5.1 2.8 5.1 6.5v6.1H22V16c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1v5.4h-4.5V9Z"
        fill="currentColor"
      />
    </Svg>
  );
}
