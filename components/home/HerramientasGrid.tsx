import Link from "next/link";
import {
  BarChart3,
  Beef,
  CloudSun,
  MessageSquareText,
  Sprout,
  Tractor,
  UsersRound,
  Warehouse
} from "lucide-react";
import { verticales } from "@/lib/data";
import type { GuiaCategoria } from "@/types";

const cards: Array<{ id: GuiaCategoria; icon: typeof Sprout }> = [
  { id: "produccion-cultivos", icon: Sprout },
  { id: "maquinaria-contratistas", icon: Tractor },
  { id: "ganaderia", icon: Beef },
  { id: "costos-margen", icon: BarChart3 },
  { id: "comercializacion", icon: Warehouse },
  { id: "clima-riesgo", icon: CloudSun },
  { id: "equipo-procesos", icon: UsersRound },
  { id: "clientes-proveedores", icon: MessageSquareText }
];

export function HerramientasGrid() {
  return (
    <section id="verticales" className="container py-20">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.22em] text-accent-secondary">
            Verticales iniciales
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Categorías para entrar por el problema que querés resolver
          </h2>
        </div>
        <p className="max-w-lg text-sm leading-7 text-text-secondary">
          Cada vertical abre su propia página con prompts, accionables y conexiones a
          otros recursos de la misma categoría.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;
          const vertical = verticales[card.id];

          return (
            <Link
              key={card.id}
              href={`/verticales/${card.id}`}
              className="group rounded-[24px] border border-border bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-border-hover hover:shadow-glow"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-[#00BF72]/10">
                <Icon className="h-6 w-6 text-[#041B4D]" />
              </div>
              <div className="space-y-3">
                <h3 className="font-display text-xl font-bold text-text-primary">
                  {vertical.titulo}
                </h3>
                <p className="text-sm leading-7 text-text-secondary">
                  {vertical.descripcion}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
