import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { herramientas } from "@/lib/data";
import type { HerramientaId } from "@/types";

interface ToolBadgeProps {
  tool: HerramientaId;
}

export function ToolBadge({ tool }: ToolBadgeProps) {
  const item = herramientas[tool];

  return (
    <Badge
      className="gap-2 border-border bg-bg-surface px-3 py-1 text-[10px] text-text-primary"
      style={{
        borderColor: `${item.color}40`,
        backgroundColor: `${item.color}18`
      }}
    >
      <Image src={item.logo} alt={item.nombre} width={14} height={14} />
      {item.nombre}
    </Badge>
  );
}
