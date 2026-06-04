import { cache } from "react";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import type { Guia, GuiaDocument } from "@/types";
import { slugify } from "@/lib/utils";

const guiasDirectory = path.join(process.cwd(), "content", "guias");

function sortGuias(guias: Guia[]) {
  return guias.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

function extractHeadings(content: string) {
  const headings: GuiaDocument["headings"] = [];
  const regex = /^(##|###)\s+(.+)$/gm;

  for (const match of content.matchAll(regex)) {
    headings.push({
      id: slugify(match[2]),
      text: match[2].trim(),
      level: match[1].length
    });
  }

  return headings;
}

export const getGuias = cache(async () => {
  const files = await fs.readdir(guiasDirectory);
  const guias = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const source = await fs.readFile(path.join(guiasDirectory, file), "utf8");
        const { data } = matter(source);

        return {
          slug: file.replace(/\.mdx$/, ""),
          ...(data as Omit<Guia, "slug">)
        } satisfies Guia;
      })
  );

  return sortGuias(guias);
});

export const getGuia = cache(async (slug: string) => {
  if (!/^[a-z0-9-]+$/.test(slug)) {
    throw new Error("Invalid guide slug");
  }

  const filePath = path.resolve(guiasDirectory, `${slug}.mdx`);
  const relativePath = path.relative(guiasDirectory, filePath);

  if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
    throw new Error("Invalid guide path");
  }

  const source = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(source);

  return {
    slug,
    ...(data as Omit<Guia, "slug">),
    content,
    headings: extractHeadings(content)
  } satisfies GuiaDocument;
});

export async function getFeaturedGuias() {
  const guias = await getGuias();

  return guias
    .filter((guia) => guia.nivel === "basico")
    .slice()
    .sort((a, b) => a.duracion - b.duracion)
    .slice(0, 3);
}

export async function getRelatedGuias(slug: string) {
  const [guia, guias] = await Promise.all([getGuia(slug), getGuias()]);

  return guias
    .filter((candidate) => candidate.slug !== slug)
    .sort((a, b) => {
      const scoreA =
        Number(a.herramienta === guia.herramienta) * 2 +
        Number(a.categoria === guia.categoria);
      const scoreB =
        Number(b.herramienta === guia.herramienta) * 2 +
        Number(b.categoria === guia.categoria);

      return scoreB - scoreA;
    })
    .slice(0, 3);
}

export async function getGuiaNeighbors(slug: string) {
  const [guia, guias] = await Promise.all([getGuia(slug), getGuias()]);

  const collection = guias.filter(
    (item) =>
      item.encuentro === guia.encuentro ||
      item.encuentro === "ambos" ||
      guia.encuentro === "ambos"
  );
  const index = collection.findIndex((item) => item.slug === slug);

  return {
    previous: index > 0 ? collection[index - 1] : null,
    next: index < collection.length - 1 ? collection[index + 1] : null
  };
}
