"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Perfil", href: "/#profile" },
  { label: "Caso de estudio", href: "/#case-study" },
  { label: "Experiencia", href: "/#experience" },
  { label: "Proyectos", href: "/#projects" },
  { label: "Contacto", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cvHovered, setCvHovered] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-[9999] text-white">
      <motion.div
        aria-hidden
        animate={{ opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 border-b border-white/[0.07] bg-[#08090c]/88 backdrop-blur-2xl"
      />

      <motion.div
        aria-hidden
        animate={{ opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/25 to-transparent"
      />

      <div className="relative mx-auto flex h-[76px] w-full max-w-[1180px] items-center px-5 sm:px-8 lg:px-10">
        <Link
          href="/#hero"
          aria-label="Ir al inicio"
          className="group flex min-w-0 items-center gap-3.5"
        >
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#0d1016]/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md transition duration-300 group-hover:-translate-y-0.5 group-hover:border-blue-400/35 group-hover:shadow-[0_8px_24px_rgba(96,165,250,0.12)]">
            <span className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-cyan-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <Image
              src="/favicon-mc.png"
              alt=""
              width={34}
              height={34}
              priority
              className="relative z-10 h-[34px] w-[34px] object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </span>

          <span className="min-w-0">
            <span className="block truncate text-[15px] font-bold tracking-[-0.02em] text-zinc-100">
              Devmillerr
            </span>

            <span className="mt-0.5 hidden truncate text-[11px] text-zinc-500 sm:block">
              Implementación · Backend · QA
            </span>
          </span>
        </Link>

        <div className="ml-auto hidden items-center gap-3 lg:flex">
          <nav
            className="flex items-center gap-0.5"
            aria-label="Navegación principal"
          >
            {links.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative px-2.5 py-2 text-[13px] font-medium text-zinc-500 transition-all duration-300 hover:text-white"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-[1px]">
                  {item.label}
                </span>

                <span className="absolute bottom-0 left-2 right-2 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <motion.a
            href="/cv-miler-castro.pdf"
            download
            aria-label="Descargar CV"
            onHoverStart={() => setCvHovered(true)}
            onHoverEnd={() => setCvHovered(false)}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="
              group
              relative
              isolate
              inline-flex
              h-10
              items-center
              gap-2.5
              overflow-hidden
              rounded-xl
              border
              border-white/[0.07]
              bg-white/[0.025]
              px-4
              text-[13px]
              font-semibold
              text-zinc-300
              transition-colors
              duration-300
              hover:border-blue-400/25
              hover:bg-blue-500/[0.08]
              hover:text-white
              hover:shadow-[0_10px_30px_rgba(59,130,246,0.10)]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-blue-400/40
            "
          >
            <span
              aria-hidden
              className="
                pointer-events-none
                absolute
                -left-8
                top-1/2
                h-16
                w-16
                -translate-y-1/2
                rounded-full
                bg-blue-400/0
                blur-2xl
                transition-all
                duration-500
                group-hover:bg-blue-400/20
              "
            />

            <span
              aria-hidden
              className="
                pointer-events-none
                absolute
                inset-y-0
                left-[-40%]
                w-12
                -skew-x-12
                bg-gradient-to-r
                from-transparent
                via-white/15
                to-transparent
                transition-all
                duration-700
                group-hover:left-[120%]
              "
            />

            <span className="relative z-10 tracking-[-0.01em]">CV</span>

            <span className="relative z-10 flex h-4 w-4 items-center justify-center overflow-hidden">
              <motion.span
                key={cvHovered ? "cv-hover" : "cv-rest"}
                initial={
                  cvHovered
                    ? {
                        y: -16,
                        opacity: 0,
                      }
                    : false
                }
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: cvHovered ? 0.35 : 0,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute flex items-center justify-center"
              >
                <Download size={15} strokeWidth={2} className="text-blue-300" />
              </motion.span>
            </span>
          </motion.a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={open}
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#0d1016]/80 text-zinc-200 backdrop-blur-md transition active:scale-95 lg:hidden"
        >
          <Menu size={21} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-[#08090c] lg:hidden"
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="editorial-grid absolute inset-0 opacity-15" />

              <div className="absolute left-1/2 top-[-180px] h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-[110px]" />
            </div>

            <div className="relative mx-auto flex h-[76px] w-full max-w-[1180px] items-center justify-between border-b border-white/[0.07] px-5">
              <Link
                href="/#hero"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3"
              >
                <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">
                  <span className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-cyan-400/10" />

                  <Image
                    src="/favicon-mc.png"
                    alt=""
                    width={34}
                    height={34}
                    priority
                    className="relative z-10 h-[34px] w-[34px] object-contain"
                  />
                </span>

                <span>
                  <span className="block text-[15px] font-bold">
                    Miler Castro
                  </span>

                  <span className="text-[11px] text-zinc-500">
                    Software Implementation Analyst
                  </span>
                </span>
              </Link>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-zinc-200 transition active:scale-95"
              >
                <X size={21} />
              </button>
            </div>

            <motion.div
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto flex min-h-[calc(100dvh-76px)] w-full max-w-[1180px] flex-col px-5 pb-6 pt-4"
            >
              <nav className="flex flex-col" aria-label="Navegación móvil">
                {links.map((item, index) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between border-b border-white/[0.07] py-4 text-[17px] font-semibold text-zinc-300 transition-colors hover:text-white"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-[10px] tracking-[0.16em] text-blue-400/70">
                        0{index + 1}
                      </span>

                      {item.label}
                    </span>

                    <ArrowUpRight
                      size={16}
                      className="text-zinc-700 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-300"
                    />
                  </Link>
                ))}
              </nav>

              <a
                href="/cv-miler-castro.pdf"
                download
                onClick={() => setOpen(false)}
                className="mt-6 flex h-12 items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.035] px-4 text-sm font-semibold text-zinc-200 transition hover:border-blue-400/25 hover:bg-blue-500/[0.08] hover:text-white"
              >
                <span>Descargar CV</span>

                <Download size={17} strokeWidth={2} className="text-blue-300" />
              </a>

              <div className="mt-auto border-t border-white/[0.07] pt-5">
                <div className="flex items-center gap-2 text-xs text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Disponible para oportunidades
                </div>

                <p className="mt-2 text-sm text-zinc-500">Chimbote, Perú</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
