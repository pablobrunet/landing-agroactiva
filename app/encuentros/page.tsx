import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { encuentros, verticales } from "@/lib/data";

export const metadata: Metadata = {
  title: "Bloques de trabajo",
  description:
    "Estructura preliminar de bloques para aplicar IA en decisiones del negocio agropecuario."
};

export default function EncuentrosPage() {
  const verticalList = Object.values(verticales);

  return (
    <section className="container py-16">
      <div className="max-w-3xl space-y-4">
        <p className="text-sm uppercase tracking-[0.22em] text-accent-secondary">
          Estructura
        </p>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl">
          Dos bloques para encontrar rápido el prompt que necesitás
        </h1>
        <p className="text-lg leading-8 text-text-secondary">
          La biblioteca se organiza por decisiones de campo, riesgo, costos,
          comercialización, equipo y vínculos. Entrá por el bloque o por la vertical.
        </p>
      </div>

      <div className="mt-12 space-y-6">
        {encuentros.map((encuentro, index) => (
          <section
            key={encuentro.id}
            id={`encuentro-${encuentro.id}`}
            className="rounded-[32px] border border-border bg-white p-6 shadow-card sm:p-8"
          >
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.22em] text-accent-secondary">
                    {encuentro.subtitulo}
                  </p>
                  <h2 className="font-display text-3xl font-bold tracking-tight text-text-primary">
                    {encuentro.titulo}
                  </h2>
                  <p className="text-sm leading-7 text-text-secondary">
                    {encuentro.descripcion}
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-display text-xl font-bold text-text-primary">
                    Para que lo uses
                  </h3>
                  <ul className="space-y-3">
                    {encuentro.objetivos.map((goal) => (
                      <li key={goal} className="flex gap-3 text-sm text-text-secondary">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-secondary" />
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-5">
                <h3 className="font-display text-xl font-bold text-text-primary">
                  Contenidos
                </h3>
                <div className="space-y-4">
                  {encuentro.contenidos.map((contentSection) => (
                    <details
                      key={contentSection.titulo}
                      open={index === 0}
                      className="group rounded-[24px] border border-border bg-bg-surface p-5"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-display text-lg font-bold text-text-primary">
                        {contentSection.titulo}
                        <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
                      </summary>
                      <ul className="mt-4 space-y-3">
                        {contentSection.items.map((item) => (
                          <li key={item} className="text-sm leading-7 text-text-secondary">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="mt-12">
        <div className="mb-6 space-y-2">
          <p className="text-sm uppercase tracking-[0.22em] text-accent-secondary">
            Verticales
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-text-primary">
            Accesos directos por categoría
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {verticalList.map((vertical) => (
            <Link
              key={vertical.id}
              href={`/verticales/${vertical.id}`}
              className="rounded-[24px] border border-border bg-white p-5 shadow-card transition hover:-translate-y-1 hover:border-border-hover"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-accent-secondary">
                {vertical.subtitulo}
              </p>
              <h3 className="mt-3 font-display text-xl font-bold text-text-primary">
                {vertical.titulo}
              </h3>
              <p className="mt-3 text-sm leading-7 text-text-secondary">
                {vertical.accion}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
}
