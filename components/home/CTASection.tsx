import Link from "next/link";
import { ArrowRight, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/data";

const socials = [
  {
    href: socialLinks.instagram,
    label: "Instagram",
    icon: Instagram,
    className: "bg-[#E4405F]"
  },
  {
    href: socialLinks.linkedin,
    label: "LinkedIn",
    icon: Linkedin,
    className: "bg-[#0A66C2]"
  },
  {
    href: socialLinks.youtube,
    label: "YouTube",
    icon: Youtube,
    className: "bg-[#FF0000]"
  }
];

export function CTASection() {
  return (
    <section className="container py-20">
      <div className="overflow-hidden rounded-[32px] border border-[#12345a] bg-[linear-gradient(135deg,#041B4D_0%,#06335B_50%,#006C58_100%)] p-8 shadow-glow sm:p-12">
        <div className="max-w-3xl space-y-5">
          <p className="text-sm uppercase tracking-[0.22em] text-[#A7EFD3]">
            Sigamos conectados
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Si te sirve este recurso, seguí mis contenidos sobre IA aplicada a negocios
          </h2>
          <p className="text-base leading-8 text-[#EDEEF5]">
            Voy a ir reforzando los prompts y ejemplos a partir de conversaciones reales.
            La idea es que no quede como una lista linda, sino como una herramienta viva
            para que puedas usarla en decisiones del día a día.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="warm" size="lg">
              <Link href="/prompts">
                Ir a los prompts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 py-1.5 pl-1.5 pr-4 text-sm font-semibold text-white transition hover:border-[#00BF72]"
                  >
                    <span className={`flex h-8 w-8 items-center justify-center rounded-full ${social.className}`}>
                      <Icon className="h-4 w-4" />
                    </span>
                    {social.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
