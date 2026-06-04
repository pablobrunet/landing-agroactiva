import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Guia } from "@/types";

interface GuidePagerProps {
  previous: Guia | null;
  next: Guia | null;
}

export function GuidePager({ previous, next }: GuidePagerProps) {
  return (
    <div className="grid gap-4 pt-10 md:grid-cols-2">
      {previous ? (
        <Link
          href={`/guias/${previous.slug}`}
          className="rounded-[26px] border border-border bg-white p-5 shadow-card transition hover:border-border-hover hover:bg-bg-surface"
        >
          <span className="mb-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-text-muted">
            <ArrowLeft className="h-3 w-3" />
            Anterior
          </span>
          <h3 className="font-display text-xl font-bold text-text-primary">
            {previous.titulo}
          </h3>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/guias/${next.slug}`}
          className="rounded-[26px] border border-border bg-white p-5 text-left shadow-card transition hover:border-border-hover hover:bg-bg-surface md:text-right"
        >
          <span className="mb-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-text-muted">
            Siguiente
            <ArrowRight className="h-3 w-3" />
          </span>
          <h3 className="font-display text-xl font-bold text-text-primary">{next.titulo}</h3>
        </Link>
      ) : null}
    </div>
  );
}
