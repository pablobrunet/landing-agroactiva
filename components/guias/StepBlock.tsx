import type { ReactNode } from "react";

interface StepBlockProps {
  number: number;
  title: string;
  children: ReactNode;
}

export function StepBlock({ number, title, children }: StepBlockProps) {
  return (
    <div className="my-8 rounded-[30px] border border-border bg-white p-6 shadow-card">
      <div className="mb-4 flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-primary/15 font-display text-xl font-extrabold text-accent-primary">
          {number}
        </div>
        <div className="pt-1">
          <h3 className="font-display text-2xl font-bold tracking-tight text-text-primary">
            {title}
          </h3>
        </div>
      </div>
      <div className="space-y-4 text-base leading-8 text-text-secondary">{children}</div>
    </div>
  );
}
