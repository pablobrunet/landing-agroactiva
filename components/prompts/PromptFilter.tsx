"use client";

import type { GuiaCategoria, HerramientaId } from "@/types";
import { formatCategory } from "@/lib/utils";

interface PromptFilters {
  herramienta: HerramientaId | "all";
  categoria: GuiaCategoria | "all";
  search: string;
}

interface PromptFilterProps {
  filters: PromptFilters;
  onChange: (filters: Partial<PromptFilters>) => void;
  categories: GuiaCategoria[];
}

export function PromptFilter({
  filters,
  onChange,
  categories
}: PromptFilterProps) {
  const tools: Array<{ id: HerramientaId | "all"; label: string }> = [
    { id: "all", label: "Todas" },
    { id: "chatgpt", label: "ChatGPT" },
    { id: "gemini", label: "Gemini" },
    { id: "claude", label: "Claude" },
    { id: "notebooklm", label: "NotebookLM" }
  ];

  return (
    <div className="space-y-5 rounded-[24px] border border-border bg-white p-5 shadow-card">
      <div className="space-y-3">
        <label
          htmlFor="prompt-search"
          className="block text-xs font-semibold uppercase tracking-[0.22em] text-text-muted"
        >
          Buscar prompt
        </label>
        <input
          id="prompt-search"
          type="search"
          value={filters.search}
          onChange={(event) => onChange({ search: event.target.value })}
          placeholder="Costos, lote, maquinaria..."
          className="w-full rounded-2xl border border-border bg-bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-muted"
        />
      </div>

      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-muted">
          Herramienta
        </p>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <button
              key={tool.id}
              type="button"
              onClick={() => onChange({ herramienta: tool.id })}
              className={`rounded-full px-4 py-2 text-sm transition ${
                filters.herramienta === tool.id
                  ? "bg-accent-primary text-white"
                  : "border border-border text-text-secondary hover:bg-bg-surface hover:text-text-primary"
              }`}
            >
              {tool.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-muted">
          Categorías
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => onChange({ categoria: "all" })}
            className={`rounded-full px-4 py-2 text-sm transition ${
              filters.categoria === "all"
                ? "bg-accent-primary text-white"
                : "border border-border text-text-secondary hover:bg-bg-surface hover:text-text-primary"
            }`}
          >
            Todas
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => onChange({ categoria: category })}
              className={`rounded-full px-4 py-2 text-sm transition ${
                filters.categoria === category
                  ? "bg-accent-primary text-white"
                  : "border border-border text-text-secondary hover:bg-bg-surface hover:text-text-primary"
              }`}
            >
              {formatCategory(category)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
