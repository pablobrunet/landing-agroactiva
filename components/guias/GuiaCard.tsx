import Link from "next/link";
import { ArrowRight, Clock3, FolderKanban } from "lucide-react";
import { ToolBadge } from "@/components/guias/ToolBadge";
import { herramientas } from "@/lib/data";
import { cn, formatCategory, formatLevel } from "@/lib/utils";
import type { Guia } from "@/types";

interface GuiaCardProps {
  guia: Guia;
}

export function GuiaCard({ guia }: GuiaCardProps) {
  const tool = herramientas[guia.herramienta];

  return (
    <Link
      href={`/guias/${guia.slug}`}
      className={cn(
        "group flex h-full flex-col rounded-[28px] border border-border bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-border-hover hover:shadow-glow",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/60"
      )}
      style={{
        boxShadow: `0 18px 40px rgba(47, 48, 72, 0.09), 0 0 0 1px ${tool.color}12`
      }}
    >
      <div className="mb-5 flex flex-wrap items-center gap-2">
        <ToolBadge tool={guia.herramienta} />
        <span className="rounded-full border border-border bg-bg-surface px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted">
          {formatLevel(guia.nivel)}
        </span>
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="font-display text-2xl font-bold tracking-tight text-text-primary">
          {guia.titulo}
        </h3>
        <p className="mt-3 line-clamp-2 text-sm leading-7 text-text-secondary">
          {guia.descripcion}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-4 text-sm text-text-muted">
        <span className="inline-flex items-center gap-2">
          <Clock3 className="h-4 w-4" />
          {guia.duracion} min
        </span>
        <span className="inline-flex items-center gap-2">
          <FolderKanban className="h-4 w-4" />
          {formatCategory(guia.categoria)}
        </span>
      </div>

      <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-primary">
        Ver guía
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
