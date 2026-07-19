import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[96px] w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-base transition-all duration-200 resize-y",
          "placeholder:text-[color:var(--muted-foreground)] placeholder:font-light",
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
Textarea.displayName = "Textarea";

export { Textarea };
