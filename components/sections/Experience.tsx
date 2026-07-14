"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Rocket,
} from "lucide-react";

const currentExperience = {
  company: "Camposol S.A.",
  position: "Software Implementation Analyst · QA Tester",
  period: "Septiembre 2024 — Actualidad",
  description:
    "Implementación y validación de soluciones digitales para procesos de Producción, Calidad y Operaciones.",
  achievements: [
    "Digitalización de aproximadamente 40 cartillas operativas.",
    "Soluciones utilizadas por más de 50 colaboradores.",
    "Pruebas funcionales en ambiente QA y equipos PDA.",
  ],
  technologies: [
    "Digiproy",
    "QA Testing",
    "PDA",
    "Análisis funcional",
    "Implementación",
    "Soporte",
  ],
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative flex min-h-[calc(100vh-76px)] items-center overflow-hidden border-b border-white/[0.07] bg-[#090b0f] py-12 text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 28, 0],
            y: [0, 16, 0],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-180px] top-12 h-[350px] w-[350px] rounded-full bg-blue-500/[0.035] blur-[140px]"
        />

        <motion.div
          animate={{
            x: [0, -22, 0],
            y: [0, -14, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-220px] right-[-160px] h-[360px] w-[360px] rounded-full bg-cyan-400/[0.018] blur-[150px]"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1100px] px-6 lg:px-0">
        <div className="grid items-end gap-6 pb-8 lg:grid-cols-[0.72fr_1.28fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-300">
              Experiencia destacada
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-4xl">
              Posición actual
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base"
          >
            Actualmente participo en iniciativas de implementación, validación
            y soporte de soluciones digitales para procesos operativos.
          </motion.p>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="h-px origin-left bg-gradient-to-r from-blue-500/60 via-white/[0.08] to-transparent"
        />

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          whileHover={{
            backgroundColor: "rgba(255,255,255,0.018)",
          }}
          className="group relative overflow-hidden py-10"
        >
          <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
            <div className="absolute left-[18%] top-[-100px] h-60 w-60 rounded-full bg-blue-500/[0.06] blur-3xl" />
          </div>

          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{
                    rotate: -6,
                    scale: 1.08,
                  }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-blue-400 transition group-hover:border-blue-400/30 group-hover:bg-blue-500/10"
                >
                  <Rocket size={21} />
                </motion.div>

                <div>
                  <p className="text-lg font-semibold text-blue-400">
                    {currentExperience.company}
                  </p>

                  <span className="mt-1 inline-flex items-center gap-2 text-xs text-emerald-400">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    Posición actual
                  </span>
                </div>
              </div>

              <h3 className="mt-6 max-w-xl text-2xl font-bold leading-tight tracking-[-0.025em] text-white sm:text-3xl">
                {currentExperience.position}
              </h3>

              <div className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-500">
                <CalendarDays size={15} />
                {currentExperience.period}
              </div>

              <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                {currentExperience.description}
              </p>
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600">
                Principales resultados
              </p>

              <div className="mt-5 space-y-4">
                {currentExperience.achievements.map((achievement) => (
                  <div
                    key={achievement}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-1 shrink-0 text-blue-400"
                    />

                    <p className="text-sm leading-7 text-zinc-300">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 border-t border-white/[0.07] pt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600">
                  Tecnologías y competencias
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {currentExperience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-[11px] text-zinc-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="flex items-center justify-between gap-4 border-t border-white/[0.08] pt-7"
        >
          <p className="text-sm text-zinc-500">
            También cuento con experiencia previa en desarrollo Backend.
          </p>

          <Link
            href="/experiencia"
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.025] px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-blue-500/[0.07] hover:text-blue-200"
          >
            Ver trayectoria completa
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}