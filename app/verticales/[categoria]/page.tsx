import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PromptCard } from "@/components/prompts/PromptCard";
import { verticales } from "@/lib/data";
import { getPrompts } from "@/lib/prompts";
import { guiaCategories, type GuiaCategoria } from "@/types";

interface VerticalPageProps {
  params: Promise<{ categoria: GuiaCategoria }>;
}

export function generateStaticParams() {
  return guiaCategories.map((categoria) => ({ categoria }));
}

export async function generateMetadata({
  params
}: VerticalPageProps): Promise<Metadata> {
  const { categoria } = await params;
  const vertical = verticales[categoria];

  if (!vertical) {
    return { title: "Vertical" };
  }

  return {
    title: vertical.titulo,
    description: vertical.descripcion
  };
}

export default async function VerticalPage({ params }: VerticalPageProps) {
  const { categoria } = await params;
  const vertical = verticales[categoria];

  if (!vertical) {
    notFound();
  }

  const prompts = (await getPrompts()).filter((prompt) => prompt.categoria === categoria);

  return (
    <section className="container py-14">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-text-secondary transition hover:text-accent-secondary"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver al inicio
      </Link>

      <div className="mb-10 max-w-3xl space-y-4">
        <p className="text-sm uppercase tracking-[0.22em] text-accent-secondary">
          {vertical.subtitulo}
        </p>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl">
          {vertical.titulo}
        </h1>
        <p className="text-lg leading-8 text-text-secondary">{vertical.descripcion}</p>
        <p className="rounded-[24px] border border-border bg-bg-surface p-5 text-sm leading-7 text-text-secondary">
          {vertical.accion}
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {prompts.map((prompt) => (
          <PromptCard key={prompt.id} prompt={prompt} />
        ))}
      </div>
    </section>
  );
}
