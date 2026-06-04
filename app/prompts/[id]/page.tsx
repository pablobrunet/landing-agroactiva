import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Lightbulb, ListChecks } from "lucide-react";
import { CopyButton } from "@/components/prompts/CopyButton";
import { PromptCard } from "@/components/prompts/PromptCard";
import { ToolBadge } from "@/components/guias/ToolBadge";
import { Button } from "@/components/ui/button";
import { herramientas, verticales } from "@/lib/data";
import { getPromptById, getPrompts, getRelatedPrompts } from "@/lib/prompts";
import { formatCategory, formatEncounter, formatLevel } from "@/lib/utils";

interface PromptDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const prompts = await getPrompts();

  return prompts.map((prompt) => ({ id: prompt.id }));
}

export async function generateMetadata({
  params
}: PromptDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const prompt = await getPromptById(id);

  if (!prompt) {
    return { title: "Prompt" };
  }

  return {
    title: prompt.titulo,
    description: prompt.descripcion
  };
}

export default async function PromptDetailPage({ params }: PromptDetailPageProps) {
  const { id } = await params;
  const prompt = await getPromptById(id);

  if (!prompt) {
    notFound();
  }

  const relatedPrompts = await getRelatedPrompts(prompt.id);
  const vertical = verticales[prompt.categoria];

  return (
    <section className="container py-14">
      <Link
        href="/prompts"
        className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-text-secondary transition hover:text-accent-secondary"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver a la biblioteca
      </Link>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
        <article className="rounded-[32px] border border-border bg-white p-6 shadow-card sm:p-8">
          <div className="mb-5 flex flex-wrap items-center gap-2">
            {prompt.herramienta.map((tool) => (
              <ToolBadge key={tool} tool={tool} />
            ))}
            <Link
              href={`/verticales/${prompt.categoria}`}
              className="rounded-full border border-border bg-bg-surface px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-text-muted transition hover:border-border-hover hover:text-text-primary"
            >
              {formatCategory(prompt.categoria)}
            </Link>
          </div>

          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.22em] text-accent-secondary">
              {formatEncounter(prompt.encuentro)} · {formatLevel(prompt.nivel)}
            </p>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl">
              {prompt.titulo}
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-text-secondary">
              {prompt.descripcion}
            </p>
          </div>

          <div className="mt-8 rounded-[28px] border border-border bg-bg-surface p-5 font-mono text-sm leading-8 text-text-primary">
            <p className="whitespace-pre-wrap break-words">{prompt.prompt}</p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <CopyButton text={prompt.prompt} label="Copiar prompt completo" />
            {prompt.herramienta.slice(0, 3).map((toolId) => {
              const tool = herramientas[toolId];

              return (
                <Button key={tool.id} asChild variant="secondary" size="sm">
                  <Link href={tool.url} target="_blank" rel="noopener noreferrer">
                    Abrir {tool.nombre}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              );
            })}
          </div>
        </article>

        <aside className="space-y-5">
          <div className="rounded-[28px] border border-border bg-white p-6 shadow-card">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00BF72]/10">
                <ListChecks className="h-5 w-5 text-accent-primary" />
              </span>
              <h2 className="font-display text-xl font-bold text-text-primary">
                Accionables
              </h2>
            </div>
            <ul className="space-y-3">
              {prompt.accionables.map((item) => (
                <li key={item} className="text-sm leading-7 text-text-secondary">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[28px] border border-border bg-[#041B4D] p-6 text-white shadow-card">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
                <Lightbulb className="h-5 w-5 text-[#00BF72]" />
              </span>
              <h2 className="font-display text-xl font-bold">Misma vertical</h2>
            </div>
            <p className="text-sm leading-7 text-[#D9F7EA]">{vertical.descripcion}</p>
            <Button asChild variant="warm" size="sm" className="mt-5">
              <Link href={`/verticales/${vertical.id}`}>Ver vertical</Link>
            </Button>
          </div>
        </aside>
      </div>

      {relatedPrompts.length ? (
        <section className="mt-12">
          <div className="mb-6 space-y-2">
            <p className="text-sm uppercase tracking-[0.22em] text-accent-secondary">
              Sugeridos
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-text-primary">
              Otros prompts de esta categoría
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {relatedPrompts.map((relatedPrompt) => (
              <PromptCard key={relatedPrompt.id} prompt={relatedPrompt} />
            ))}
          </div>
        </section>
      ) : null}
    </section>
  );
}
