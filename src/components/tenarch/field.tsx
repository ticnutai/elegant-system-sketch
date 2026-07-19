import * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  htmlFor?: string;
}

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, label, hint, error, required, htmlFor, children, ...props }, ref) => (
    <div ref={ref} className={cn("space-y-2", className)} {...props}>
      {label && (
        <div className="flex items-baseline justify-between">
          <Label htmlFor={htmlFor}>
            {label}
            {required && <span className="ms-1 gold-text">*</span>}
          </Label>
          {hint && !error && (
            <span className="text-[11px] font-light text-[color:var(--muted-foreground)]">
              {hint}
            </span>
          )}
        </div>
      )}
      {children}
      {error && (
        <p className="text-xs font-light text-[color:var(--danger)]">{error}</p>
      )}
    </div>
  ),
);
Field.displayName = "Field";

export function SectionTitle({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("space-y-3", className)}>
      {eyebrow && (
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[color:var(--gold)]" />
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase gold-text">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-normal tracking-tight text-[color:var(--emerald-deep)]">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-[color:var(--muted-foreground)] font-light leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
