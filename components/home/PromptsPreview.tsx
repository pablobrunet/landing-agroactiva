import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Prompt } from "@/types";
import { PromptCard } from "@/components/prompts/PromptCard";
import { Button } from "@/components/ui/button";

interface PromptsPreviewProps {
  prompts: Prompt[];
}

export function PromptsPreview({ prompts }: PromptsPreviewProps) {
  return (
    <section id="prompts" className="border-y border-border bg-bg-surface py-20">
      <div className="container">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.22em] text-accent-secondary">
              Prompts listos para usar
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Copiá, adaptá y probá sobre una situación real del agro
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-text-secondary">
              Esta versión trae {prompts.length} prompts organizados por vertical. Cada
              detalle te sugiere otros prompts cercanos para seguir trabajando.
            </p>
          </div>
          <Button asChild variant="secondary">
            <Link href="/prompts">
              Ver biblioteca completa
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {prompts.slice(0, 4).map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
      </div>
    </section>
  );
}
