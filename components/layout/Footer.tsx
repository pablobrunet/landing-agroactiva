import Link from "next/link";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { socialLinks } from "@/lib/data";

const footerLinks = [
  { href: "#verticales", label: "Verticales" },
  { href: "/prompts", label: "Prompts" },
  { href: "#pablo", label: "Pablo" }
];

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

export function Footer() {
  return (
    <footer className="border-t border-[#12345a] bg-[#041B4D]">
      <div className="container grid gap-8 py-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
        <div className="space-y-3">
          <p className="font-display text-xl font-bold tracking-tight text-white">
            Pablo Brunet
          </p>
          <p className="max-w-lg text-sm leading-7 text-[#D9F7EA]">
            Recurso preliminar para Agroactiva. Prompts de IA para pensar problemas
            concretos del negocio agropecuario y llevarte ideas accionables.
          </p>
          <div className="flex flex-wrap gap-3">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 py-1.5 pl-1.5 pr-4 text-sm font-semibold text-white transition hover:border-[#00BF72]"
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

        <div className="flex flex-wrap items-center gap-4 md:justify-end">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#EDEEF5] transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
