import { AlertTriangle, Info, Lightbulb } from "lucide-react";
import type { ReactNode } from "react";

interface TipBlockProps {
  type: "tip" | "warning" | "info";
  title?: string;
  children: ReactNode;
}

const styles = {
  tip: {
    icon: Lightbulb,
    title: "Tip",
    className: "border-accent-secondary/20 bg-accent-secondary/10",
    iconClassName: "bg-accent-secondary/15 text-accent-secondary"
  },
  warning: {
    icon: AlertTriangle,
    title: "Ojo",
    className: "border-amber-400/30 bg-amber-400/10",
    iconClassName: "bg-amber-400/15 text-amber-700"
  },
  info: {
    icon: Info,
    title: "Info",
    className: "border-sky-400/30 bg-sky-400/10",
    iconClassName: "bg-sky-400/15 text-sky-700"
  }
} as const;

export function TipBlock({ type, title, children }: TipBlockProps) {
  const config = styles[type];
  const Icon = config.icon;

  return (
    <div className={`my-8 rounded-[26px] border p-5 ${config.className}`}>
      <div className="mb-3 flex items-center gap-3">
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-2xl ${config.iconClassName}`}
        >
          <Icon className="h-5 w-5" />
        </span>
        <p className="font-display text-xl font-bold text-text-primary">
          {title ?? config.title}
        </p>
      </div>
      <div className="space-y-3 text-base leading-8 text-text-secondary">{children}</div>
    </div>
  );
}
