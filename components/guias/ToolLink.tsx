import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { herramientas } from "@/lib/data";
import type { HerramientaId } from "@/types";

interface ToolLinkProps {
  tool: HerramientaId;
}

export function ToolLink({ tool }: ToolLinkProps) {
  const item = herramientas[tool];

  return (
    <Link
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-2 text-sm text-text-secondary transition hover:border-border-hover hover:text-text-primary"
    >
      <Image src={item.logo} alt={item.nombre} width={16} height={16} />
      Abrir {item.nombre}
      <ArrowUpRight className="h-4 w-4" />
    </Link>
  );
}
