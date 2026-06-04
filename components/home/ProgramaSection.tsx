import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardList, LineChart, MessagesSquare } from "lucide-react";
import { encuentros } from "@/lib/data";
import { Button } from "@/components/ui/button";

const iconSets = {
  1: [ClipboardList, LineChart, CheckCircle2],
  2: [MessagesSquare, LineChart, CheckCircle2]
};

export function ProgramaSection() {
  return (
    <section className="border-y border-border bg-bg-surface py-20">
      <div className="container space-y-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.22em] text-accent-secondary">
              Estructura de trabajo
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Dos bloques para ordenar los prompts por tipo de decisión
            </h2>
          </div>
          <Button asChild variant="secondary">
            <Link href="/prompts">
              Ver prompts disponibles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {encuentros.map((encuentro) => {
            const icons = iconSets[encuentro.id];

            return (
              <article
                key={encuentro.id}
                className="rounded-[28px] border border-border bg-white p-7 shadow-card"
              >
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-accent-secondary">
                      {encuentro.subtitulo}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-text-primary">
                      {encuentro.titulo}
                    </h3>
                  </div>
                  <div className="hidden gap-2 sm:flex">
                    {icons.map((Icon, index) => (
                      <span
                        key={index}
                        className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-bg-surface"
                      >
                        <Icon className="h-5 w-5 text-text-secondary" />
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm leading-7 text-text-secondary">
                  {encuentro.descripcion}
                </p>
                <ul className="mt-6 space-y-3">
                  {encuentro.objetivos.slice(0, 3).map((objetivo) => (
                    <li key={objetivo} className="flex gap-3 text-sm text-text-secondary">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-secondary" />
                      <span>{objetivo}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
