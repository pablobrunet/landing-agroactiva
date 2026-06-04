"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/types";

interface TableOfContentsProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState(headings[0]?.id ?? "");

  useEffect(() => {
    const observed = headings
      .map((heading) => document.getElementById(heading.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "0px 0px -70% 0px",
        threshold: [0.1, 0.5, 1]
      }
    );

    observed.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [headings]);

  if (!headings.length) {
    return null;
  }

  return (
    <>
      <div className="rounded-[24px] border border-border bg-white p-4 lg:hidden">
        <label
          htmlFor="toc"
          className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-text-muted"
        >
          Índice rápido
        </label>
        <select
          id="toc"
          className="w-full rounded-2xl border border-border bg-bg-surface px-4 py-3 text-sm text-text-primary"
          value={activeId}
          onChange={(event) => {
            const target = document.getElementById(event.target.value);
            target?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          {headings.map((heading) => (
            <option key={heading.id} value={heading.id}>
              {heading.text}
            </option>
          ))}
        </select>
      </div>

      <aside className="sticky top-28 hidden self-start rounded-[26px] border border-border bg-white p-5 shadow-card lg:block">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
          Índice
        </p>
        <nav className="space-y-2">
          {headings.map((heading) => (
            <button
              key={heading.id}
              type="button"
              onClick={() =>
                document
                  .getElementById(heading.id)
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className={`block w-full rounded-2xl px-3 py-2 text-left text-sm transition ${
                activeId === heading.id
                  ? "bg-accent-primary/10 text-accent-primary"
                  : "text-text-secondary hover:bg-bg-surface hover:text-text-primary"
              } ${heading.level === 3 ? "pl-6" : ""}`}
            >
              {heading.text}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}
