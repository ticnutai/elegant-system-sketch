import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium tracking-wide uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-[color:var(--emerald-brand)] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[color:var(--emerald-deep)] text-[color:var(--primary-foreground)]",
        emerald:
          "border-[color:var(--emerald-brand)]/30 bg-[color:var(--emerald-brand)]/10 emerald-text",
        gold:
          "border-[color:var(--gold)]/40 bg-[color:var(--gold)]/12 gold-text",
        secondary:
          "border-transparent bg-[color:var(--surface-2)] text-[color:var(--foreground)]",
        outline:
          "border-[color:var(--border)] text-[color:var(--foreground)] bg-transparent",
        success:
          "border-transparent bg-[color:var(--success)]/12 text-[color:var(--success)]",
        destructive:
          "border-transparent bg-[color:var(--danger)]/12 text-[color:var(--danger)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
