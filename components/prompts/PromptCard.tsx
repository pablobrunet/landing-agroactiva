"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { CopyButton } from "@/components/prompts/CopyButton";
import { ToolBadge } from "@/components/guias/ToolBadge";
import type { Prompt } from "@/types";
import { formatCategory, formatEncounter, formatLevel } from "@/lib/utils";

interface PromptCardProps {
  prompt: Prompt;
}

export function PromptCard({ prompt }: PromptCardProps) {
  const preview = `${prompt.prompt.slice(0, 220).trimEnd()}${
    prompt.prompt.length > 220 ? "..." : ""
  }`;

  return (
    <article className="flex h-full flex-col rounded-[28px] border border-border bg-white p-6 shadow-card">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        {prompt.herramienta.map((tool) => (
          <ToolBadge key={tool} tool={tool} />
        ))}
        <span className="rounded-full border border-border bg-bg-surface px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-text-muted">
          {formatCategory(prompt.categoria)}
        </span>
      </div>

      <div className="flex-1">
        <h3 className="font-display text-2xl font-bold tracking-tight text-text-primary">
          {prompt.titulo}
        </h3>
        <p className="mt-3 text-sm leading-7 text-text-secondary">{prompt.descripcion}</p>

        <div className="mt-5 rounded-[24px] border border-border bg-bg-surface p-4 font-mono text-sm leading-7 text-text-primary">
          <p className="whitespace-pre-wrap break-words">{preview}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.18em] text-text-muted">
          <span>{formatEncounter(prompt.encuentro)}</span>
          <span>·</span>
          <span>{formatLevel(prompt.nivel)}</span>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <CopyButton text={prompt.prompt} label="Copiar prompt" />
        <Link
          href={`/prompts/${prompt.id}`}
          className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-accent-primary transition hover:bg-bg-surface hover:text-accent-secondary"
        >
          Ver detalle
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
