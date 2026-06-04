import type { Metadata } from "next";
import { PromptsLibrary } from "@/components/prompts/PromptsLibrary";
import { getPrompts } from "@/lib/prompts";

export const metadata: Metadata = {
  title: "Prompts agro",
  description:
    "Biblioteca preliminar de prompts para aplicar IA en producción, costos, maquinaria, ganadería, comercialización y gestión agropecuaria."
};

export default async function PromptsPage() {
  const prompts = await getPrompts();

  return (
    <section className="container py-16">
      <div className="max-w-3xl space-y-4">
        <p className="text-sm uppercase tracking-[0.22em] text-accent-secondary">
          Biblioteca preliminar
        </p>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl">
          Prompts para el negocio agropecuario
        </h1>
        <p className="text-lg leading-8 text-text-secondary">
          Situaciones de trabajo para copiar, adaptar y probar: lotes, costos,
          maquinaria, ganadería, proveedores, comercialización y procesos internos.
        </p>
      </div>

      <div className="mt-10">
        <PromptsLibrary
          prompts={prompts}
          initialFilters={{
            herramienta: "all",
            categoria: "all",
            search: ""
          }}
        />
      </div>
    </section>
  );
}
