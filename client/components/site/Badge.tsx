import React from "react";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground ${className}`}
    >
      {children}
    </span>
  );
}
