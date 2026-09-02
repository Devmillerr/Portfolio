import { Mail } from "lucide-react";
import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

import IconLink from "@/components/ui/IconLink";
import { siteConfig } from "@/lib/constants";

const socialLinks = [
  {
    label: "Correo",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    external: false,
  },
  { label: "GitHub", href: siteConfig.github, icon: FaGithub, external: true },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    icon: FaLinkedinIn,
    external: true,
  },
  {
    label: "WhatsApp",
    href: siteConfig.whatsapp,
    icon: FaWhatsapp,
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <a
          href="#hero"
          aria-label="Volver al inicio"
          className="group inline-flex w-fit items-center gap-3"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[var(--border-strong)] bg-[var(--panel)] transition-colors duration-200 group-hover:border-[var(--accent)]/45">
            <Image
              src="/icon.png"
              alt=""
              width={26}
              height={26}
              className="h-[24px] w-[24px] object-contain"
            />
          </span>
          <span className="font-mono text-[13px] text-[var(--muted)] transition-colors duration-200 group-hover:text-[var(--foreground)]">
            {siteConfig.handle}
          </span>
        </a>

        <div className="flex items-center gap-2">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <IconLink
                key={item.label}
                href={item.href}
                label={item.label}
                external={item.external}
                className="h-10 w-10"
              >
                <Icon size={15} />
              </IconLink>
            );
          })}
        </div>

        <p className="font-mono text-[11px] text-[var(--muted-2)] md:text-right">
          © {new Date().getFullYear()} {siteConfig.name}
          <span className="mx-2 text-[var(--border-strong)]">·</span>
          {siteConfig.location}
        </p>
      </div>
    </footer>
  );
}
