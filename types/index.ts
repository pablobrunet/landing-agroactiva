export const guiaCategories = [
  "produccion-cultivos",
  "maquinaria-contratistas",
  "ganaderia",
  "costos-margen",
  "comercializacion",
  "clima-riesgo",
  "equipo-procesos",
  "clientes-proveedores"
] as const;

export const herramientasIds = [
  "chatgpt",
  "gemini",
  "claude",
  "notebooklm"
] as const;

export type GuiaCategoria = (typeof guiaCategories)[number];
export type HerramientaId = (typeof herramientasIds)[number];

export interface Guia {
  slug: string;
  titulo: string;
  descripcion: string;
  herramienta: HerramientaId;
  encuentro: 1 | 2 | "ambos";
  nivel: "basico" | "intermedio";
  categoria: GuiaCategoria;
  duracion: number;
  featuredImage?: string;
  publishedAt: string;
  tags: string[];
}

export interface Heading {
  id: string;
  text: string;
  level: number;
}

export interface GuiaDocument extends Guia {
  content: string;
  headings: Heading[];
}

export interface Prompt {
  id: string;
  titulo: string;
  descripcion: string;
  prompt: string;
  herramienta: HerramientaId[];
  categoria: GuiaCategoria;
  encuentro: 1 | 2 | "ambos";
  nivel: "basico" | "intermedio";
  accionables: string[];
  sugeridos?: string[];
  ejemplo_resultado?: string;
}

export interface Herramienta {
  id: HerramientaId;
  nombre: string;
  descripcion: string;
  color: string;
  logo: string;
  url: string;
}

export interface Vertical {
  id: GuiaCategoria;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  accion: string;
}

export interface Encuentro {
  id: 1 | 2;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  objetivos: string[];
  contenidos: {
    titulo: string;
    items: string[];
  }[];
}
