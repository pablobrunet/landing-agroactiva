"use client";

import { useState, useTransition } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Funnel, X } from "lucide-react";
import { guiaCategories, herramientasIds, type Guia, type GuiaCategoria, type HerramientaId } from "@/types";
import { formatCategory } from "@/lib/utils";
import { GuiaCard } from "@/components/guias/GuiaCard";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

interface Filters {
  herramienta: HerramientaId | "all";
  encuentro: "all" | "1" | "2";
  categoria: GuiaCategoria | "all";
  nivel: "all" | "basico" | "intermedio";
}

interface GuiasGridProps {
  guides: Guia[];
  initialFilters: Filters;
}

export function GuiasGrid({ guides, initialFilters }: GuiasGridProps) {
  const [filters, setFilters] = useState(initialFilters);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  const filteredGuides = guides.filter((guide) => {
    if (filters.herramienta !== "all" && guide.herramienta !== filters.herramienta) {
      return false;
    }

    if (
      filters.encuentro !== "all" &&
      guide.encuentro !== Number(filters.encuentro) &&
      guide.encuentro !== "ambos"
    ) {
      return false;
    }

    if (filters.categoria !== "all" && guide.categoria !== filters.categoria) {
      return false;
    }

    if (filters.nivel !== "all" && guide.nivel !== filters.nivel) {
      return false;
    }

    return true;
  });

  function updateFilters(next: Partial<Filters>) {
    const merged = { ...filters, ...next };
    setFilters(merged);

    startTransition(() => {
      const params = new URLSearchParams();

      if (merged.herramienta !== "all") {
        params.set("herramienta", merged.herramienta);
      }
      if (merged.encuentro !== "all") {
        params.set("encuentro", merged.encuentro);
      }
      if (merged.categoria !== "all") {
        params.set("categoria", merged.categoria);
      }
      if (merged.nivel !== "all") {
        params.set("nivel", merged.nivel);
      }

      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    });
  }

  function resetFilters() {
    updateFilters({
      herramienta: "all",
      encuentro: "all",
      categoria: "all",
      nivel: "all"
    });
  }

  const inactiveFilterClass =
    "border border-border text-text-secondary hover:bg-bg-surface hover:text-text-primary";

  const filtersPanel = (
    <div className="space-y-5 rounded-[28px] border border-border bg-white p-5 shadow-card">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-muted">
          Herramienta
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => updateFilters({ herramienta: "all" })}
            className={`rounded-full px-4 py-2 text-sm transition ${
              filters.herramienta === "all"
                ? "bg-accent-primary text-white"
                : inactiveFilterClass
            }`}
          >
            Todas
          </button>
          {herramientasIds.map((tool) => (
            <button
              key={tool}
              type="button"
              onClick={() => updateFilters({ herramienta: tool })}
              className={`rounded-full px-4 py-2 text-sm capitalize transition ${
                filters.herramienta === tool
                  ? "bg-accent-primary text-white"
                  : inactiveFilterClass
              }`}
            >
              {tool}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-muted">
          Encuentro
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            { value: "all", label: "Todos" },
            { value: "1", label: "Encuentro 1" },
            { value: "2", label: "Encuentro 2" }
          ].map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() =>
                updateFilters({ encuentro: option.value as Filters["encuentro"] })
              }
              className={`rounded-full px-4 py-2 text-sm transition ${
                filters.encuentro === option.value
                  ? "bg-accent-primary text-white"
                  : inactiveFilterClass
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        <div className="space-y-3">
          <label
            htmlFor="categoria"
            className="block text-xs font-semibold uppercase tracking-[0.22em] text-text-muted"
          >
            Categoría
          </label>
          <select
            id="categoria"
            className="w-full rounded-2xl border border-border bg-bg-surface px-4 py-3 text-sm text-text-primary"
            value={filters.categoria}
            onChange={(event) =>
              updateFilters({
                categoria: event.target.value as Filters["categoria"]
              })
            }
          >
            <option value="all">Todas las categorías</option>
            {guiaCategories.map((category) => (
              <option key={category} value={category}>
                {formatCategory(category)}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-3">
          <label
            htmlFor="nivel"
            className="block text-xs font-semibold uppercase tracking-[0.22em] text-text-muted"
          >
            Nivel
          </label>
          <select
            id="nivel"
            className="w-full rounded-2xl border border-border bg-bg-surface px-4 py-3 text-sm text-text-primary"
            value={filters.nivel}
            onChange={(event) =>
              updateFilters({ nivel: event.target.value as Filters["nivel"] })
            }
          >
            <option value="all">Todos los niveles</option>
            <option value="basico">Básico</option>
            <option value="intermedio">Intermedio</option>
          </select>
        </div>
      </div>

      <Button type="button" variant="secondary" className="w-full" onClick={resetFilters}>
        Limpiar filtros
      </Button>
    </div>
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)]">
      <div className="space-y-4">
        <div className="lg:hidden">
          <Button
            type="button"
            variant="secondary"
            className="w-full justify-between"
            onClick={() => setMobileOpen((value) => !value)}
          >
            <span className="inline-flex items-center gap-2">
              <Funnel className="h-4 w-4" />
              Filtros
            </span>
            <span>{mobileOpen ? <X className="h-4 w-4" /> : null}</span>
          </Button>
        </div>
        <div className="hidden lg:block lg:sticky lg:top-28">{filtersPanel}</div>
        {mobileOpen ? <div className="lg:hidden">{filtersPanel}</div> : null}
      </div>

      <div className="space-y-6">
        <p className="text-sm text-text-secondary">
          Mostrando <span className="font-semibold text-text-primary">{filteredGuides.length}</span>{" "}
          de <span className="font-semibold text-text-primary">{guides.length}</span> guías
        </p>

        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredGuides.map((guide) => (
              <motion.div
                key={guide.slug}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.25 }}
              >
                <GuiaCard guia={guide} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {!filteredGuides.length ? (
          <div className="rounded-[28px] border border-dashed border-border bg-white p-8 text-center text-sm text-text-secondary">
            No encontramos guías con esa combinación. Probá limpiar filtros o elegir otra
            herramienta.
          </div>
        ) : null}
      </div>
    </div>
  );
}
