import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MobileNav } from "@/components/layout/MobileNav";
import { Button } from "@/components/ui/button";

const profilePhoto = "/presentador/profile-pic%20(1).png";

const links = [
  { href: "#metodo-mapa", label: "MAPA" },
  { href: "#verticales", label: "Verticales" },
  { href: "/prompts", label: "Prompts" },
  { href: "#pablo", label: "Pablo" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-xl">
      <div className="container relative flex h-18 items-center justify-between gap-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-border bg-bg-surface shadow-sm">
            <Image
              src={profilePhoto}
              alt="Pablo Brunet"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </span>
          <div>
            <p className="font-display text-lg font-bold tracking-tight text-text-primary">
              Pablo Brunet
            </p>
            <p className="text-xs text-text-muted">Speaker Agroactiva 2026</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-text-secondary transition hover:bg-bg-surface hover:text-text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="secondary" size="sm">
            <Link href="/prompts">
              Ver biblioteca
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
