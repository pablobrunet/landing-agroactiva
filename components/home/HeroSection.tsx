import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroImage = "/im%C3%A1genes/agroactiva-2026-santafe-05042026in1-1536x864.webp";

const proofPoints = [
  "Prompts por vertical agropecuaria",
  "Pensado para usarlo en Argentina",
  "Estructura lista para seguir ampliando"
];

export function HeroSection() {
  return (
    <section className="relative min-h-[620px] overflow-hidden border-b border-[#071728] bg-[#041B4D] text-white">
      <Image
        src={heroImage}
        alt="Agroactiva"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,27,77,0.92)_0%,rgba(4,27,77,0.74)_42%,rgba(4,27,77,0.44)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,191,114,0.28),transparent_30%)]" />

      <div className="container relative flex min-h-[620px] items-center py-20">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#00BF72]">
              Agroactiva 2026
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Prompts de IA para resolver problemas concretos del negocio agropecuario
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[#EDEEF5] sm:text-xl">
              Un recurso de Pablo Brunet para que puedas copiar, adaptar y probar IA
              sobre situaciones reales: campo, costos, maquinaria, ganadería,
              comercialización y gestión.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/prompts">
                Ver biblioteca
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#verticales">Explorar verticales</Link>
            </Button>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {proofPoints.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-white/15 bg-white/[0.08] p-4 text-sm leading-6 text-[#EDEEF5] backdrop-blur"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#00BF72]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
