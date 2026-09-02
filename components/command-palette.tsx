"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Command } from "cmdk";
import {
  ArrowUpRight,
  Check,
  Command as CommandIcon,
  Compass,
  Copy,
  Download,
  Layers3,
  Mail,
  MessageCircle,
  Radio,
  Sparkles,
  User,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { useCommandPalette } from "@/lib/command-palette-context";
import { siteConfig } from "@/lib/constants";

type PaletteItem = {
  id: string;
  label: string;
  hint?: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  perform: () => void;
  keepOpen?: boolean;
};

type PaletteGroup = {
  heading: string;
  items: PaletteItem[];
};

function go(hash: string) {
  document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function CommandPalette() {
  const { open, setOpen } = useCommandPalette();
  const [copied, setCopied] = useState(false);

  const close = useCallback(() => setOpen(false), [setOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const isCombo =
        (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
      if (isCombo) {
        event.preventDefault();
        setOpen(!open);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, setOpen]);

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 1600);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${siteConfig.email}`;
    }
  }, []);

  const groups: PaletteGroup[] = [
    {
      heading: "Navegar",
      items: [
        { id: "nav-hero", label: "Inicio", icon: Compass, perform: () => go("#hero") },
        { id: "nav-profile", label: "Enfoque", icon: User, perform: () => go("#profile") },
        {
          id: "nav-case-study",
          label: "Caso de estudio · Camposol",
          icon: Sparkles,
          perform: () => go("#case-study"),
        },
        {
          id: "nav-experience",
          label: "Experiencia",
          icon: Layers3,
          perform: () => go("#experience"),
        },
        { id: "nav-projects", label: "Proyectos", icon: Radio, perform: () => go("#projects") },
        { id: "nav-contact", label: "Contacto", icon: Mail, perform: () => go("#contact") },
      ],
    },
    {
      heading: "Acciones",
      items: [
        {
          id: "action-copy-email",
          label: copied ? "Correo copiado" : "Copiar correo",
          hint: siteConfig.email,
          icon: copied ? Check : Copy,
          perform: copyEmail,
          keepOpen: true,
        },
        {
          id: "action-cv",
          label: "Descargar CV",
          icon: Download,
          perform: () => {
            const link = document.createElement("a");
            link.href = "/cv-miler-castro.pdf";
            link.download = "cv-miler-castro.pdf";
            link.click();
          },
        },
        {
          id: "action-whatsapp",
          label: "Escribir por WhatsApp",
          icon: MessageCircle,
          perform: () => window.open(siteConfig.whatsapp, "_blank", "noreferrer"),
        },
      ],
    },
    {
      heading: "Enlaces",
      items: [
        {
          id: "link-github",
          label: "Abrir GitHub",
          hint: `@${siteConfig.githubHandle}`,
          icon: FaGithub,
          perform: () => window.open(siteConfig.github, "_blank", "noreferrer"),
        },
        {
          id: "link-linkedin",
          label: "Abrir LinkedIn",
          icon: FaLinkedin,
          perform: () => window.open(siteConfig.linkedin, "_blank", "noreferrer"),
        },
      ],
    },
  ];

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[10010] bg-[#050507]/70 backdrop-blur-sm" />

        <Dialog.Content
          onOpenAutoFocus={(event) => event.preventDefault()}
          className="fixed left-1/2 top-[14vh] z-[10011] w-[92vw] max-w-[560px] -translate-x-1/2 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-strong)] bg-[var(--panel)] shadow-[0_30px_90px_rgba(0,0,0,0.55)]"
        >
          <Dialog.Title className="sr-only">Buscador de comandos</Dialog.Title>
          <Dialog.Description className="sr-only">
            Navega por el portafolio o ejecuta una acción rápida.
          </Dialog.Description>

          <Command
            className="flex flex-col"
            filter={(value, search) =>
              value.toLowerCase().includes(search.toLowerCase()) ? 1 : 0
            }
          >
            <div className="flex items-center gap-2.5 border-b border-[var(--border)] px-4 py-3.5">
              <CommandIcon size={15} className="shrink-0 text-[var(--accent)]" />
              <Command.Input
                autoFocus
                placeholder="Escribe un comando o busca una sección…"
                className="w-full bg-transparent font-mono text-[13.5px] text-[var(--foreground)] outline-none placeholder:text-[var(--muted-2)]"
              />
              <kbd className="shrink-0 rounded border border-[var(--border)] px-1.5 py-0.5 text-[10px] text-[var(--muted-2)]">
                esc
              </kbd>
            </div>

            <Command.List className="max-h-[52vh] overflow-y-auto p-2">
              <Command.Empty className="px-3 py-8 text-center font-mono text-[12.5px] text-[var(--muted)]">
                Sin resultados.
              </Command.Empty>

              {groups.map((group) => (
                <Command.Group
                  key={group.heading}
                  heading={group.heading}
                  className="px-1 py-2 normal-case [&_[cmdk-group-heading]]:mb-1.5 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.16em] [&_[cmdk-group-heading]]:text-[var(--muted-2)]"
                >
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Command.Item
                        key={item.id}
                        value={`${group.heading} ${item.label} ${item.hint ?? ""}`}
                        onSelect={() => {
                          item.perform();
                          if (!item.keepOpen) close();
                        }}
                        className="group flex cursor-pointer items-center justify-between gap-3 rounded-[var(--radius-sm)] px-2.5 py-2.5 text-[13px] text-[var(--foreground)] data-[selected=true]:bg-[var(--accent-dim)] data-[selected=true]:text-[var(--foreground)]"
                      >
                        <span className="flex items-center gap-2.5">
                          <Icon
                            size={15}
                            className="text-[var(--muted)] transition-colors group-data-[selected=true]:text-[var(--accent)]"
                          />
                          {item.label}
                        </span>

                        {item.hint && (
                          <span className="font-mono text-[11px] text-[var(--muted-2)]">
                            {item.hint}
                          </span>
                        )}

                        <ArrowUpRight
                          size={13}
                          className="shrink-0 text-[var(--muted-2)] opacity-0 transition-opacity group-data-[selected=true]:opacity-100"
                        />
                      </Command.Item>
                    );
                  })}
                </Command.Group>
              ))}
            </Command.List>

            <div className="flex items-center justify-between border-t border-[var(--border)] px-4 py-2.5 font-mono text-[10.5px] text-[var(--muted-2)]">
              <span>miler.os</span>
              <span className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="rounded border border-[var(--border)] px-1 py-0.5">↑↓</kbd>
                  navegar
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="rounded border border-[var(--border)] px-1 py-0.5">↵</kbd>
                  seleccionar
                </span>
              </span>
            </div>
          </Command>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
