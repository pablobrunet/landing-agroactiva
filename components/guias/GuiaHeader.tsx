import { Clock3, FolderKanban, Layers3 } from "lucide-react";
import { ToolBadge } from "@/components/guias/ToolBadge";
import { formatCategory, formatEncounter, formatLevel } from "@/lib/utils";
import type { Guia } from "@/types";

interface GuiaHeaderProps {
  guia: Guia;
}

export function GuiaHeader({ guia }: GuiaHeaderProps) {
  return (
    <header className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <ToolBadge tool={guia.herramienta} />
        <span className="rounded-full border border-border bg-bg-surface px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted">
          {formatLevel(guia.nivel)}
        </span>
      </div>
      <div className="space-y-4">
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl">
          {guia.titulo}
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-text-secondary">
          {guia.descripcion}
        </p>
      </div>
      <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-surface px-3 py-2">
          <Clock3 className="h-4 w-4" />
          {guia.duracion} min estimados
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-surface px-3 py-2">
          <FolderKanban className="h-4 w-4" />
          {formatCategory(guia.categoria)}
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-surface px-3 py-2">
          <Layers3 className="h-4 w-4" />
          {formatEncounter(guia.encuentro)}
        </span>
      </div>
    </header>
  );
}
