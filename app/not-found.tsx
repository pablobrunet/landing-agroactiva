import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container flex min-h-[60vh] items-center justify-center py-20">
      <div className="max-w-xl rounded-[32px] border border-border bg-white p-10 text-center shadow-card">
        <p className="text-sm uppercase tracking-[0.22em] text-accent-secondary">
          Página no encontrada
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-text-primary">
          No encontramos esa guía
        </h1>
        <p className="mt-4 text-base leading-8 text-text-secondary">
          Puede que el enlace esté roto o que la guía haya cambiado de ubicación.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild>
            <Link href="/guias">Volver a las guías</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
