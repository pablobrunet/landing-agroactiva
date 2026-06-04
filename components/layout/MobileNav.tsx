"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Inicio" },
  { href: "#metodo-mapa", label: "MAPA" },
  { href: "#verticales", label: "Verticales" },
  { href: "#prompts", label: "Prompts" },
  { href: "#pablo", label: "Pablo" },
  { href: "/prompts", label: "Biblioteca completa" }
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        aria-expanded={open}
        aria-label="Abrir navegación"
        variant="secondary"
        size="sm"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-4 top-[calc(100%+0.75rem)] rounded-[28px] border border-border bg-white/95 p-5 shadow-card backdrop-blur-xl"
          >
            <nav className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm text-text-secondary transition hover:bg-bg-surface hover:text-text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
