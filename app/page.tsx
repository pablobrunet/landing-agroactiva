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

      <section id="metodo-mapa" className="container py-20">
        <div className="overflow-hidden rounded-[32px] border border-[#12345a] bg-[#041B4D] p-6 text-white shadow-glow sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
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
              {mapaSteps.map((step) => (
                <article
                  key={`${step.letter}-${step.title}`}
                  className="rounded-[22px] border border-white/10 bg-white/[0.07] p-5"
                >
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00BF72] font-display text-xl font-extrabold text-[#041B4D]">
                    {step.letter}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#D9F7EA]">{step.text}</p>
                </article>
              ))}
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
