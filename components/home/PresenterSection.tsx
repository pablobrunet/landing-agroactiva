import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { socialLinks } from "@/lib/data";

const presenterPhoto = "/presentador/Brunet%2C%20Pablo%20-%20Foto%20perfil.png";

const socials = [
  {
    href: socialLinks.instagram,
    label: "Instagram",
    icon: Instagram,
    className: "bg-[#E4405F] text-white"
  },
  {
    href: socialLinks.linkedin,
    label: "LinkedIn",
    icon: Linkedin,
    className: "bg-[#0A66C2] text-white"
  },
  {
    href: socialLinks.youtube,
    label: "YouTube",
    icon: Youtube,
    className: "bg-[#FF0000] text-white"
  }
];

export function PresenterSection() {
  return (
    <section id="pablo" className="border-b border-border bg-white">
      <div className="container grid gap-8 py-14 md:grid-cols-[280px_minmax(0,1fr)] md:items-center lg:grid-cols-[340px_minmax(0,1fr)] lg:py-16">
        <div className="relative mx-auto w-full max-w-[280px] md:max-w-none">
          <div className="absolute inset-4 rounded-[32px] bg-[linear-gradient(135deg,rgba(0,191,114,0.20),rgba(4,27,77,0.14),rgba(22,163,168,0.16))] blur-2xl" />
          <div className="relative overflow-hidden rounded-[28px] border border-border bg-bg-surface shadow-card">
            <Image
              src={presenterPhoto}
              alt="Pablo Brunet"
              width={1024}
              height={1024}
              className="aspect-[4/5] h-full w-full object-cover object-[50%_18%]"
              sizes="(min-width: 1024px) 340px, (min-width: 768px) 280px, 80vw"
              priority
              unoptimized
            />
          </div>
        </div>

        <div className="mx-auto max-w-3xl space-y-6 text-center md:mx-0 md:text-left">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.22em] text-accent-secondary">
              Recurso de autor
            </p>
            <div className="space-y-2">
              <h2 className="font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                Pablo Brunet
              </h2>
              <p className="text-base font-semibold text-text-secondary">
                Founder de InnerFlow AI
              </p>
            </div>
          </div>

          <p className="text-lg leading-8 text-text-secondary">
            Trabajo ayudando a empresas a incorporar inteligencia artificial y
            automatización con criterio práctico: primero entender el proceso, después
            elegir la herramienta. En Agroactiva quiero dejarte un recurso simple para
            que puedas probar IA sobre problemas reales del negocio agropecuario.
          </p>

          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white py-1.5 pl-1.5 pr-4 text-sm font-semibold text-text-primary shadow-card transition hover:-translate-y-0.5 hover:border-border-hover"
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
    </section>
  );
}
