"use client";

import { useDeferredValue, useState, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { type GuiaCategoria, type HerramientaId, type Prompt } from "@/types";
import { normalizeText } from "@/lib/utils";
import { PromptCard } from "@/components/prompts/PromptCard";
import { PromptFilter } from "@/components/prompts/PromptFilter";

interface PromptFilters {
  herramienta: HerramientaId | "all";
  categoria: GuiaCategoria | "all";
  search: string;
}

interface PromptsLibraryProps {
  prompts: Prompt[];
  initialFilters: PromptFilters;
}

export function PromptsLibrary({ prompts, initialFilters }: PromptsLibraryProps) {
  const [filters, setFilters] = useState(initialFilters);
  const deferredSearch = useDeferredValue(filters.search);
  const [, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const categories = Array.from(new Set(prompts.map((prompt) => prompt.categoria)));

  const filteredPrompts = prompts.filter((prompt) => {
    if (filters.herramienta !== "all" && !prompt.herramienta.includes(filters.herramienta)) {
      return false;
    }

    if (filters.categoria !== "all" && prompt.categoria !== filters.categoria) {
      return false;
    }

    if (deferredSearch.trim()) {
      const haystack = normalizeText(
        `${prompt.titulo} ${prompt.descripcion} ${prompt.prompt} ${prompt.categoria}`
      );

      if (!haystack.includes(normalizeText(deferredSearch))) {
        return false;
      }
    }

    return true;
  });

  function updateFilters(next: Partial<PromptFilters>) {
    const merged = { ...filters, ...next };
    setFilters(merged);

    startTransition(() => {
      const params = new URLSearchParams();

      if (merged.herramienta !== "all") {
        params.set("herramienta", merged.herramienta);
      }
      if (merged.categoria !== "all") {
        params.set("categoria", merged.categoria);
      }
      if (merged.search.trim()) {
        params.set("search", merged.search.trim());
      }

      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    });
  }

  return (
    <div className="space-y-8">
      <PromptFilter filters={filters} onChange={updateFilters} categories={categories} />
      <p className="text-sm text-text-secondary">
        Mostrando <span className="font-semibold text-text-primary">{filteredPrompts.length}</span> de{" "}
        <span className="font-semibold text-text-primary">{prompts.length}</span> prompts
      </p>

      <div className="grid gap-5 xl:grid-cols-2">
        {filteredPrompts.map((prompt) => (
          <PromptCard key={prompt.id} prompt={prompt} />
        ))}
      </div>

      {!filteredPrompts.length ? (
        <div className="rounded-[28px] border border-dashed border-border bg-white p-8 text-center text-sm text-text-secondary">
          No encontramos prompts con esos filtros. Probá otra categoría o buscá con menos
          detalle.
        </div>
      ) : null}
    </div>
  );
}
