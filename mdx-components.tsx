import {
  isValidElement,
  type ComponentPropsWithoutRef,
  type ReactNode
} from "react";
import { PromptBlock } from "@/components/guias/PromptBlock";
import { StepBlock } from "@/components/guias/StepBlock";
import { TipBlock } from "@/components/guias/TipBlock";
import { ToolLink } from "@/components/guias/ToolLink";
import { cn, slugify } from "@/lib/utils";

function textFromChildren(children: ReactNode): string {
  if (typeof children === "string" || typeof children === "number") {
    return String(children);
  }

  if (Array.isArray(children)) {
    return children.map((child) => textFromChildren(child)).join("");
  }

  if (isValidElement<{ children?: ReactNode }>(children)) {
    return textFromChildren(children.props.children);
  }

  return "";
}

function H2({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"h2">) {
  const text = textFromChildren(children);
  const id = slugify(text);

  return (
    <h2
      id={id}
      className={cn(
        "scroll-mt-28 font-display font-bold tracking-tight text-text-primary",
        "mt-12 text-3xl",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

function H3({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"h3">) {
  const text = textFromChildren(children);
  const id = slugify(text);

  return (
    <h3
      id={id}
      className={cn(
        "mt-8 scroll-mt-28 font-display text-2xl font-bold tracking-tight text-text-primary",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export const mdxComponents = {
  StepBlock,
  TipBlock,
  PromptBlock,
  ToolLink,
  h2: H2,
  h3: H3,
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="mt-5 text-base leading-8 text-text-secondary" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-8 text-text-secondary" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="mt-5 list-decimal space-y-3 pl-6 text-base leading-8 text-text-secondary" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => <li className="pl-1" {...props} />,
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-text-primary" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="my-8 rounded-r-[24px] border-l-4 border-accent-primary bg-bg-surface px-5 py-4 text-base italic leading-8 text-text-secondary"
      {...props}
    />
  )
};
