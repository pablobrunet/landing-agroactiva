import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";
import { HeroSection } from "@/components/home/HeroSection";
import { HerramientasGrid } from "@/components/home/HerramientasGrid";
import { PresenterSection } from "@/components/home/PresenterSection";
import { ProgramaSection } from "@/components/home/ProgramaSection";
import { PromptsPreview } from "@/components/home/PromptsPreview";
import { getPrompts } from "@/lib/prompts";

const mapaSteps = [
  {
    letter: "M",
    title: "Medir madurez",
    text: "Entendé dónde está parada la empresa: información disponible, procesos críticos y preparación del equipo."
  },
  {
    letter: "A",
    title: "Atacar un para qué concreto",
    text: "Elegí un dolor real, específico y medible. Ese foco separa un experimento de una herramienta."
  },
  {
    letter: "P",
    title: "Preparar el contexto",
    text: "Armá una base mínima con historia, campañas, números y criterios para que la IA responda con tu realidad."
  },
  {
    letter: "A",
    title: "Adoptar como rutina",
    text: "Convertí la prueba en práctica: responsable, revisión, prompts guardados e impacto medido."
  }
];

const steps = [
  {
    title: "Elegir una situación real",
    text: "Un lote, una negociación, un costo que se movió, una consulta pendiente o un proceso que se repite."
  },
  {
    title: "Copiar el prompt",
    text: "Reemplazá los campos entre corchetes con datos propios y pedí una primera respuesta."
  },
  {
    title: "Ajustar con criterio",
    text: "La IA no decide sola: ayuda a ordenar información, hacer mejores preguntas y acelerar el trabajo."
  }
];

export default async function HomePage() {
  const prompts = await getPrompts();

  return (
    <>
      <HeroSection />
      <PresenterSection />
      <HerramientasGrid />
      <ProgramaSection />

      <section
        id="metodo-mapa"
        className="relative overflow-hidden py-20 before:absolute before:inset-x-0 before:top-10 before:h-[calc(100%-5rem)] before:bg-[linear-gradient(135deg,rgba(244,251,248,0)_0%,rgba(0,191,114,0.10)_34%,rgba(4,27,77,0.08)_100%)]"
      >
        <div className="container relative">
          <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-[radial-gradient(circle_at_18%_18%,rgba(0,191,114,0.26),transparent_34%),radial-gradient(circle_at_82%_12%,rgba(22,163,168,0.22),transparent_28%),linear-gradient(135deg,#03153B_0%,#06245E_54%,#041B4D_100%)] p-6 text-white shadow-[0_26px_70px_rgba(4,27,77,0.24)] sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-[#00BF72]/20 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-1/2 h-32 w-[36rem] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.13),transparent)] blur-2xl" />
            <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.22em] text-[#00BF72]">
                Método MAPA
              </p>
              <div className="space-y-3">
                <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  MAPA — El método para adoptar IA con propósito
                </h2>
                <p className="text-lg font-semibold leading-8 text-white">
                  No empieces por la herramienta. Empezá por el para qué.
                </p>
                <p className="text-sm leading-7 text-[#D9F7EA]">
                  La mayoría de las empresas prueban IA y la abandonan. No porque no
                  sirva, sino porque nadie definió para qué la querían. MAPA ordena la
                  adopción en cuatro pasos: diagnóstico, foco, contexto y rutina.
                </p>
              </div>
              <p className="rounded-2xl border border-white/12 bg-white/[0.07] p-4 text-sm font-semibold leading-7 text-[#EDEEF5]">
                Antes de automatizar, necesitás un MAPA: diagnosticá, elegí un para qué,
                cargá contexto y convertilo en rutina.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {mapaSteps.map((step, index) => (
                <article
                  key={`${step.letter}-${step.title}`}
                  className={[
                    "group relative overflow-hidden rounded-[22px] border p-5 shadow-[0_18px_42px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1",
                    index === 0 &&
                      "border-[#00BF72]/30 bg-[linear-gradient(145deg,rgba(255,255,255,0.15),rgba(0,191,114,0.10)_44%,rgba(255,255,255,0.07))]",
                    index === 1 &&
                      "border-[#16A3A8]/30 bg-[linear-gradient(145deg,rgba(255,255,255,0.13),rgba(22,163,168,0.13)_44%,rgba(255,255,255,0.06))]",
                    index === 2 &&
                      "border-white/16 bg-[linear-gradient(145deg,rgba(255,255,255,0.16),rgba(4,27,77,0.24)_46%,rgba(255,255,255,0.06))]",
                    index === 3 &&
                      "border-[#00BF72]/25 bg-[linear-gradient(145deg,rgba(217,247,234,0.17),rgba(0,191,114,0.08)_44%,rgba(255,255,255,0.07))]"
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10 blur-2xl transition group-hover:bg-[#00BF72]/20" />
                  <span className="relative mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#00BF72,#7AF0B6)] font-display text-xl font-extrabold text-[#041B4D] shadow-[0_10px_28px_rgba(0,191,114,0.22)]">
                    {step.letter}
                  </span>
                  <h3 className="relative font-display text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-7 text-[#D9F7EA]">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className="container pb-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.22em] text-accent-secondary">
              Cómo usarlo
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Una forma simple de probar IA sin transformar todo de golpe
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-text-secondary">
            La landing está pensada como punto de partida. No busca cerrar todas las
            respuestas, sino activar conversaciones y primeras pruebas con bajo riesgo.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[24px] border border-border bg-white p-6 shadow-card"
            >
              <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00BF72]/10 font-mono text-sm font-bold text-[#041B4D]">
                {index + 1}
              </span>
              <h3 className="font-display text-xl font-bold text-text-primary">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-text-secondary">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container pb-20">
        <div className="overflow-hidden rounded-[28px] border border-[#12345a] bg-[#041B4D] p-6 text-white shadow-card sm:p-8">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
            <div className="max-w-3xl space-y-3">
              <p className="text-sm uppercase tracking-[0.22em] text-[#00BF72]">
                Antes de implementar
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Diagnosticá la madurez de la empresa para adoptar IA
              </h2>
              <p className="text-sm leading-7 text-[#D9F7EA]">
                Un prompt breve para entender dónde estás parado, qué procesos conviene
                ordenar primero y qué pilotos de IA tienen más sentido para empezar.
              </p>
            </div>
            <Link
              href="/prompts/diagnostico-madurez-adopcion-ia"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00BF72] px-5 py-3 text-sm font-semibold text-[#041B4D] transition hover:bg-[#20D68A]"
            >
              Ver diagnóstico
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <PromptsPreview prompts={prompts} />
      <CTASection />
    </>
  );
}
