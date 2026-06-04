import { cache } from "react";
import fs from "node:fs/promises";
import path from "node:path";
import type { Prompt } from "@/types";

const promptsPath = path.join(process.cwd(), "content", "prompts", "prompts.json");

export const getPrompts = cache(async () => {
  const raw = await fs.readFile(promptsPath, "utf8");
  const prompts = JSON.parse(raw) as Prompt[];

  return prompts;
});

export const getPromptById = cache(async (id: string) => {
  const prompts = await getPrompts();

  return prompts.find((prompt) => prompt.id === id);
});

export const getRelatedPrompts = cache(async (id: string) => {
  const prompts = await getPrompts();
  const current = prompts.find((prompt) => prompt.id === id);

  if (!current) {
    return [];
  }

  const explicit = current.sugeridos
    ? current.sugeridos
        .map((suggestedId) => prompts.find((prompt) => prompt.id === suggestedId))
        .filter((prompt): prompt is Prompt => Boolean(prompt))
    : [];

  const sameCategory = prompts.filter(
    (prompt) => prompt.id !== id && prompt.categoria === current.categoria
  );

  return [...explicit, ...sameCategory]
    .filter((prompt, index, items) => items.findIndex((item) => item.id === prompt.id) === index)
    .slice(0, 4);
});
