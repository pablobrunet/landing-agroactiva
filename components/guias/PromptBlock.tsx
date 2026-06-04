import { isValidElement, type ReactNode } from "react";
import { CopyButton } from "@/components/prompts/CopyButton";
import { ToolLink } from "@/components/guias/ToolLink";
import type { HerramientaId } from "@/types";

function childrenToText(children: ReactNode): string {
  if (typeof children === "string" || typeof children === "number") {
    return String(children);
  }

  if (Array.isArray(children)) {
    return children.map((child) => childrenToText(child)).join("");
  }

  if (isValidElement<{ children?: ReactNode }>(children)) {
    return childrenToText(children.props.children);
  }

  return "";
}

function renderPromptText(text: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, index) =>
    /^\[[^\]]+\]$/.test(part) ? (
      <span
        key={`${part}-${index}`}
        className="rounded bg-accent-primary/20 px-1.5 py-0.5 text-accent-secondary"
      >
        {part}
      </span>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    )
  );
}

interface PromptBlockProps {
  title: string;
  copyable?: boolean;
  tool?: HerramientaId;
  children: ReactNode;
}

export function PromptBlock({
  title,
  copyable = true,
  tool,
  children
}: PromptBlockProps) {
  const text = childrenToText(children).trim();

  return (
    <div className="my-8 overflow-hidden rounded-[28px] border border-[#10245f] bg-[#041B4D] shadow-card">
      <div className="flex flex-col gap-3 border-b border-white/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-xl font-bold text-white">{title}</p>
        <div className="flex flex-wrap items-center gap-2">
          {tool ? <ToolLink tool={tool} /> : null}
          {copyable ? <CopyButton text={text} /> : null}
        </div>
      </div>
      <div className="px-5 py-5 font-mono text-sm leading-7 text-[#EDEEF5]">
        <pre className="whitespace-pre-wrap break-words">{renderPromptText(text)}</pre>
      </div>
    </div>
  );
}
