"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";

import { siteConfig } from "@/lib/constants";
import { EASE as ease } from "@/lib/motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--background)] py-16 text-[var(--foreground)] sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 editorial-grid opacity-30" />

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease }}
          className="flex items-center justify-between gap-6"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--accent)]">
            05 · Contacto
          </p>

          <div className="hidden items-center gap-2 sm:flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-30" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--muted-2)]">
              Disponible
            </span>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
          >
            <h2 className="max-w-[560px] font-display text-[1.95rem] font-semibold uppercase leading-[1.14] tracking-[0.015em] sm:text-[2.45rem] lg:text-[2.8rem]">
              Hablemos de lo que sigue.
            </h2>

            <p className="mt-5 max-w-[540px] text-[15px] leading-7 text-[var(--muted)]">
              Estoy abierto a oportunidades donde pueda aportar en desarrollo, implementación y
              QA de software.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="border-t border-[var(--border)] lg:border-l lg:border-t-0 lg:pl-12"
          >
            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex items-center justify-between gap-6 border-b border-[var(--border)] py-6"
            >
              <div className="flex min-w-0 items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-md)] border border-[var(--accent)]/25 bg-[var(--accent-dim)] text-[var(--accent)] transition-colors duration-300 group-hover:border-[var(--accent)]/50">
                  <Mail size={18} />
                </span>
                <div className="min-w-0">
                  <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted-2)]">
                    Escríbeme
                  </span>
                  <span className="mt-1.5 block truncate text-sm font-semibold text-[var(--foreground)] sm:text-base">
                    {siteConfig.email}
                  </span>
                </div>
              </div>

              <ArrowUpRight
                size={18}
                className="shrink-0 text-[var(--muted-2)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--accent)]"
              />
            </a>

            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-6 border-b border-[var(--border)] py-6"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-strong)] bg-white/[0.02] text-[var(--muted)] transition-colors duration-300 group-hover:border-[var(--accent)]/35 group-hover:text-[var(--accent)]">
                  <MessageCircle size={18} />
                </span>
                <div>
                  <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted-2)]">
                    WhatsApp
                  </span>
                  <span className="mt-1.5 block text-sm font-semibold text-[var(--foreground)]">
                    {siteConfig.whatsappLabel}
                  </span>
                </div>
              </div>

              <ArrowRight
                size={18}
                className="text-[var(--muted-2)] transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-[var(--accent)]"
              />
            </a>

            <div className="flex items-center gap-4 py-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border)] bg-white/[0.015] text-[var(--muted)]">
                <MapPin size={18} />
              </span>
              <div>
                <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--muted-2)]">
                  Ubicación
                </span>
                <span className="mt-1.5 block text-sm font-medium text-[var(--muted)]">
                  {siteConfig.location}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
