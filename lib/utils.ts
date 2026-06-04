import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { GuiaCategoria } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export function formatDate(value: string) {
  return new Intl.DateTimeFormat("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date(value));
}

export function formatLevel(level: "basico" | "intermedio") {
  return level === "basico" ? "Básico" : "Intermedio";
}

export function formatEncounter(encuentro: 1 | 2 | "ambos") {
  if (encuentro === "ambos") {
    return "Ambos bloques";
  }

  return `Bloque ${encuentro}`;
}

export function formatCategory(category: GuiaCategoria) {
  const labels: Record<GuiaCategoria, string> = {
    "produccion-cultivos": "Producción y cultivos",
    "maquinaria-contratistas": "Maquinaria y contratistas",
    ganaderia: "Ganadería",
    "costos-margen": "Costos y margen",
    comercializacion: "Comercialización",
    "clima-riesgo": "Clima y riesgo",
    "equipo-procesos": "Equipo y procesos",
    "clientes-proveedores": "Clientes y proveedores"
  };

  return labels[category];
}

export function getExcerpt(text: string, maxLength = 160) {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength).trimEnd()}...`;
}
