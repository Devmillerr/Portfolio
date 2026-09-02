"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ArrowUpRight, Download, Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { useCommandPalette } from "@/lib/command-palette-context";
import { siteConfig } from "@/lib/constants";
import { EASE } from "@/lib/motion";

const links = [
  { label: "Enfoque", href: "/#profile" },
  { label: "Caso de estudio", href: "/#case-study" },
  { label: "Experiencia", href: "/#experience" },
  { label: "Proyectos", href: "/#projects" },
  { label: "Contacto", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { toggle: toggleCommandPalette } = useCommandPalette();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-[9999] text-[var(--foreground)]">
      <motion.div
        aria-hidden
        animate={{ opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur-2xl"
      />

      <div className="relative mx-auto flex h-[var(--shell-height,44px)] min-h-[64px] w-full max-w-[1180px] items-center px-5 sm:px-8 lg:px-10">
        <Link
          href="/#hero"
          aria-label="Ir al inicio"
          className="group flex min-w-0 items-center gap-3"
        >
          <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-[10px] border border-[var(--border-strong)] bg-[var(--panel)] transition-colors duration-200 group-hover:border-[var(--accent)]/45">
            <Image
              src="/icon.png"
              alt=""
              width={30}
              height={30}
              priority
              className="relative z-10 h-[26px] w-[26px] object-contain"
            />
          </span>

          <span className="min-w-0 leading-tight">
            <span className="block truncate font-mono text-[13px] font-medium tracking-[-0.01em] text-[var(--foreground)]">
              {siteConfig.handle}
            </span>
            <span className="mt-0.5 hidden truncate text-[11px] text-[var(--muted)] sm:block">
              {siteConfig.role}
            </span>
          </span>
        </Link>

        <div className="ml-auto hidden items-center gap-1.5 lg:flex">
          <nav
            className="flex items-center gap-0.5"
            aria-label="Navegación principal"
          >
            {links.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="focus-ring group relative px-2.5 py-2 text-[13px] font-medium text-[var(--muted)] transition-colors duration-200 hover:text-[var(--foreground)]"
              >
                {item.label}
                <span className="absolute bottom-0 left-2.5 right-2.5 h-px origin-center scale-x-0 bg-[var(--accent)] transition-transform duration-200 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <span className="mx-1.5 h-5 w-px bg-[var(--border)]" />

          <button
            type="button"
            onClick={toggleCommandPalette}
            className="focus-ring group inline-flex h-9 items-center gap-2 rounded-[var(--radius-sm)] border border-[var(--border-strong)] bg-white/[0.02] px-3 font-mono text-[11.5px] text-[var(--muted)] transition-colors duration-200 hover:border-[var(--accent)]/40 hover:text-[var(--foreground)]"
            aria-label="Abrir el buscador de comandos"
          >
            <Search size={13} strokeWidth={2} />
            <span className="hidden xl:inline">Buscar</span>
          </button>

          <Button asChild size="sm" variant="outline" className="ml-1">
            <a href="/cv-miler-castro.pdf" download aria-label="Descargar CV">
              CV
              <Download size={13} className="text-[var(--accent)]" />
            </a>
          </Button>
        </div>

        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleCommandPalette}
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-[10px] border border-[var(--border-strong)] bg-[var(--panel)] text-[var(--muted)]"
            aria-label="Abrir el buscador de comandos"
          >
            <Search size={16} strokeWidth={2} />
          </button>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={open}
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-[10px] border border-[var(--border-strong)] bg-[var(--panel)] text-[var(--foreground)] transition active:scale-95"
          >
            <Menu size={19} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-[var(--background)] lg:hidden"
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="editorial-grid absolute inset-0 opacity-40" />
            </div>

            <div className="relative mx-auto flex h-16 w-full max-w-[1180px] items-center justify-between border-b border-[var(--border)] px-5">
              <Link
                href="/#hero"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3"
              >
                <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-[10px] border border-[var(--border-strong)] bg-[var(--panel)]">
                  <Image
                    src="/icon.png"
                    alt=""
                    width={30}
                    height={30}
                    priority
                    className="relative z-10 h-[26px] w-[26px] object-contain"
                  />
                </span>
                <span>
                  <span className="block text-[15px] font-semibold">
                    {siteConfig.name}
                  </span>
                  <span className="text-[11px] text-[var(--muted)]">
                    {siteConfig.role}
                  </span>
                </span>
              </Link>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-[10px] border border-[var(--border-strong)] bg-[var(--panel)] text-[var(--foreground)] transition active:scale-95"
              >
                <X size={19} />
              </button>
            </div>

            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="relative mx-auto flex min-h-[calc(100dvh-64px)] w-full max-w-[1180px] flex-col px-5 pb-6 pt-2"
            >
              <nav className="flex flex-col" aria-label="Navegación móvil">
                {links.map((item, index) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between border-b border-[var(--border)] py-4 text-[17px] font-medium text-[var(--foreground)]/90 transition-colors hover:text-[var(--foreground)]"
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-[10px] tracking-[0.16em] text-[var(--accent)]/80">
                        0{index + 1}
                      </span>
                      {item.label}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-[var(--muted-2)] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]"
                    />
                  </Link>
                ))}
              </nav>

              <a
                href="/cv-miler-castro.pdf"
                download
                onClick={() => setOpen(false)}
                className="focus-ring mt-6 flex h-12 items-center justify-between rounded-[var(--radius-md)] border border-[var(--border-strong)] bg-white/[0.03] px-4 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--accent)]/40"
              >
                <span>Descargar CV</span>
                <Download size={16} className="text-[var(--accent)]" />
              </a>

              <div className="mt-auto border-t border-[var(--border)] pt-5">
                <div className="flex items-center gap-2 font-mono text-[11px] text-[var(--accent)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  Disponible para oportunidades
                </div>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {siteConfig.location}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
