import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-tight cursor-pointer transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-[color:var(--emerald-brand)] disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[color:var(--emerald-deep)] text-[color:var(--primary-foreground)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] hover:bg-[color:var(--emerald-brand)]",
        emerald:
          "grad-emerald text-[color:var(--primary-foreground)] shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] hover:brightness-110",
        gold:
          "grad-gold text-[color:var(--emerald-deep)] shadow-[var(--shadow-gold)] hover:brightness-105",
        outline:
          "border border-[color:var(--border)] bg-transparent text-[color:var(--foreground)] hover:bg-[color:var(--surface-2)] hover:border-[color:var(--emerald-brand)]",
        outlineGold:
          "border border-[color:var(--gold)] bg-transparent gold-text hover:bg-[color:var(--gold)]/10",
        secondary:
          "bg-[color:var(--surface-2)] text-[color:var(--foreground)] hover:bg-[color:var(--muted)]",
        ghost:
          "hover:bg-[color:var(--surface-2)] text-[color:var(--foreground)]",
        ghostGold:
          "gold-text hover:bg-[color:var(--gold)]/10",
        link:
          "text-[color:var(--emerald-brand)] underline-offset-4 hover:underline rounded-none",
        destructive:
          "bg-[color:var(--danger)] text-white hover:brightness-95 shadow-[var(--shadow-sm)]",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-base",
        icon: "h-10 w-10",
        iconSm: "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
