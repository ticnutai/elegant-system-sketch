import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 text-base transition-all duration-200",
          "placeholder:text-[color:var(--muted-foreground)] placeholder:font-light",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
          "hover:border-[color:var(--emerald-brand)]/40",
          "focus-visible:outline-none focus-visible:border-[color:var(--emerald-brand)] focus-visible:ring-4 focus-visible:ring-[color:var(--emerald-brand)]/10",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[color:var(--muted)]",
          "md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
