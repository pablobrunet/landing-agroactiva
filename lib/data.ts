import type {
  Encuentro,
  GuiaCategoria,
  Herramienta,
  HerramientaId,
  Vertical
} from "@/types";

export const siteConfig = {
  name: "IA para el agro en Agroactiva",
  description:
    "Recurso práctico de Pablo Brunet para explorar prompts de IA aplicados al negocio agropecuario: producción, maquinaria, ganadería, costos, comercialización y gestión.",
  url: "https://agroactiva-innerflow.vercel.app"
};

export const socialLinks = {
  youtube: "https://www.youtube.com/channel/UCin3S41RclnrBrqMYPEYlrA",
  linkedin: "https://ar.linkedin.com/in/pablobrunet",
  instagram: "https://www.instagram.com/soypablobrunet/"
};

export const herramientas: Record<HerramientaId, Herramienta> = {
  chatgpt: {
    id: "chatgpt",
    nombre: "ChatGPT",
    descripcion: "Análisis, borradores y decisiones operativas del campo.",
    color: "#00BF72",
    logo: "/herramientas/chatgpt.svg",
    url: "https://chatgpt.com"
  },
  gemini: {
    id: "gemini",
    nombre: "Gemini",
    descripcion: "Investigación de contexto, mercados y alternativas técnicas.",
    color: "#4285F4",
    logo: "/herramientas/gemini.svg",
    url: "https://gemini.google.com"
  },
  claude: {
    id: "claude",
    nombre: "Claude",
    descripcion: "Documentos largos, reportes y razonamiento con mucho contexto.",
    color: "#D97757",
    logo: "/herramientas/claude.svg",
    url: "https://claude.ai"
  },
  notebooklm: {
    id: "notebooklm",
    nombre: "NotebookLM",
    descripcion: "Bases de conocimiento propias, manuales y documentos del negocio.",
    color: "#F9AB00",
    logo: "/herramientas/notebooklm.svg",
    url: "https://notebooklm.google.com"
  }
};

export const verticales: Record<GuiaCategoria, Vertical> = {
  "produccion-cultivos": {
    id: "produccion-cultivos",
    titulo: "Producción y cultivos",
    subtitulo: "Lotes, labores y campaña",
    descripcion:
      "Prompts para ordenar información de campo, preparar decisiones técnicas y transformar observaciones en tareas concretas.",
    accion: "Ordená datos de lote y convertí recorridas en próximos pasos."
  },
  "maquinaria-contratistas": {
    id: "maquinaria-contratistas",
    titulo: "Maquinaria y contratistas",
    subtitulo: "Uso, disponibilidad y mantenimiento",
    descripcion:
      "Prompts para priorizar mantenimiento, coordinar labores y conversar mejor con contratistas o equipos operativos.",
    accion: "Prepará decisiones de maquinaria antes de que la ventana de trabajo se cierre."
  },
  ganaderia: {
    id: "ganaderia",
    titulo: "Ganadería",
    subtitulo: "Rodeo, sanidad y manejo",
    descripcion:
      "Prompts para convertir registros, recorridas y alertas en prioridades operativas sin reemplazar criterio profesional.",
    accion: "Pasá de notas de recorrida a un plan de acción claro."
  },
  "costos-margen": {
    id: "costos-margen",
    titulo: "Costos y margen",
    subtitulo: "Escenarios y sensibilidad",
    descripcion:
      "Prompts para revisar supuestos, detectar desvíos y comparar escenarios antes de comprometer gasto.",
    accion: "Mirá números con preguntas mejores antes de decidir."
  },
  comercializacion: {
    id: "comercializacion",
    titulo: "Comercialización",
    subtitulo: "Oportunidades, negociación y venta",
    descripcion:
      "Prompts para analizar oportunidades, preparar conversaciones y sostener seguimientos comerciales con más contexto.",
    accion: "Convertí una oportunidad en criterios de avance."
  },
  "clima-riesgo": {
    id: "clima-riesgo",
    titulo: "Clima y riesgo",
    subtitulo: "Alertas, prioridades y contingencias",
    descripcion:
      "Prompts para transformar pronósticos, ventanas operativas y riesgos en checklists accionables.",
    accion: "Anticipate a riesgos antes de que se vuelvan urgencias."
  },
  "equipo-procesos": {
    id: "equipo-procesos",
    titulo: "Equipo y procesos",
    subtitulo: "Gestión, conocimiento y tareas repetidas",
    descripcion:
      "Prompts para documentar procesos, detectar tareas asistibles con IA y mejorar la coordinación interna.",
    accion: "Sacá procesos de la cabeza de una persona y dejalos claros para el equipo."
  },
  "clientes-proveedores": {
    id: "clientes-proveedores",
    titulo: "Clientes y proveedores",
    subtitulo: "Mensajes, reclamos y conversaciones",
    descripcion:
      "Prompts para mejorar consultas, respuestas, reclamos, negociaciones y comunicaciones clave.",
    accion: "Prepará mensajes más claros sin perder tono humano."
  }
};

export const encuentros: Encuentro[] = [
  {
    id: 1,
    titulo: "Decisiones de campo, costos y riesgo",
    subtitulo: "Bloque 1",
    descripcion:
      "Prompts para pasar de datos dispersos a decisiones más claras: cultivos, insumos, clima, maquinaria, presupuestos y prioridades de campaña.",
    objetivos: [
      "Ordenar información de lotes, cultivos y tareas pendientes.",
      "Comparar alternativas de insumos, labores y decisiones técnicas.",
      "Detectar riesgos operativos antes de que se vuelvan urgentes.",
      "Convertir datos de costos en criterios prácticos de decisión."
    ],
    contenidos: [
      {
        titulo: "Campo, campaña y riesgo",
        items: [
          "Brief de lote y cultivo antes de decidir una labor.",
          "Checklist de riesgo climático, sanitario y operativo.",
          "Resumen de decisiones pendientes por campaña."
        ]
      },
      {
        titulo: "Costos, maquinaria y productividad",
        items: [
          "Comparación simple de escenarios de margen.",
          "Preguntas para revisar desvíos de costos.",
          "Priorización de maquinaria, contratistas y tareas asistibles con IA."
        ]
      }
    ]
  },
  {
    id: 2,
    titulo: "Comercialización, equipo y conocimiento interno",
    subtitulo: "Bloque 2",
    descripcion:
      "Prompts para ordenar conversaciones comerciales, proveedores, clientes, documentación, equipo y conocimiento operativo.",
    objetivos: [
      "Preparar negociaciones con más contexto y menos improvisación.",
      "Mejorar mensajes a clientes, proveedores y equipos.",
      "Documentar procesos repetidos para que no dependan de una sola persona.",
      "Priorizar oportunidades comerciales con criterios simples."
    ],
    contenidos: [
      {
        titulo: "Comercialización y vínculos",
        items: [
          "Preparación de reuniones con acopios, proveedores o clientes.",
          "Mensajes para presupuestos, consultas y seguimiento.",
          "Análisis de oportunidades y objeciones frecuentes."
        ]
      },
      {
        titulo: "Gestión y conocimiento interno",
        items: [
          "Banco de respuestas y procedimientos.",
          "Resumen de manuales, normativas o documentos.",
          "Mapa de procesos y tareas repetitivas."
        ]
      }
    ]
  }
];
