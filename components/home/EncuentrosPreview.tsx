import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { encuentros } from "@/lib/data";

export function EncuentrosPreview() {
  return (
    <section className="container py-20">
      <div className="mb-10 space-y-3">
        <p className="text-sm uppercase tracking-[0.22em] text-accent-secondary">
          Exploración por encuentro
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Repasá el temario según el momento del proceso comercial
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {encuentros.map((encuentro) => (
          <Link
            key={encuentro.id}
            href={`/encuentros#encuentro-${encuentro.id}`}
            className="group rounded-[28px] border border-border bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:border-border-hover"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-accent-secondary">
                  Encuentro {encuentro.id}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold text-text-primary">
                  {encuentro.titulo}
                </h3>
              </div>
              <ArrowRight className="h-5 w-5 text-text-muted transition group-hover:text-accent-secondary" />
            </div>

            <p className="mt-4 text-sm leading-7 text-text-secondary">
              {encuentro.descripcion}
            </p>

            <ul className="mt-6 space-y-3">
              {encuentro.objetivos.slice(0, 2).map((item) => (
                <li key={item} className="flex gap-3 text-sm text-text-secondary">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-secondary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </section>
  );
}
