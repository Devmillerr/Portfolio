"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Check,
  Code2,
  Rocket,
} from "lucide-react";

const experiences = [
  {
    company: "Camposol S.A.",
    role: "Software Implementation Analyst · QA Tester",
    period: "Septiembre 2024 — Actualidad",
    description:
      "Implementación y validación de soluciones digitales para procesos de Producción, Calidad y Operaciones.",
    results: [
      "40+ procesos y cartillas operativas digitalizadas.",
      "Soluciones utilizadas por más de 50 usuarios.",
      "Pruebas QA en ambiente de validación y dispositivos PDA.",
    ],
    technologies: [
      "DigiProy",
      "QA Testing",
      "PDA",
      "Análisis funcional",
      "Implementación",
    ],
    icon: Rocket,
    current: true,
  },
  {
    company: "I.E. Inmaculada de la Merced",
    role: "Backend Developer · Prácticas",
    period: "Julio 2022 — Enero 2024",
    description:
      "Desarrollo Backend para la gestión de información institucional mediante una arquitectura modular.",
    results: [
      "Desarrollo de una API REST con NestJS y PostgreSQL.",
      "Autenticación y autorización mediante JWT.",
      "Validación de datos y organización de lógica de negocio.",
    ],
    technologies: [
      "NestJS",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "JWT",
      "Postman",
    ],
    icon: Code2,
    current: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function ExperiencePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08090c] px-5 py-9 text-white sm:px-8 sm:py-11">
      {/* Fondo */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 32, 0],
            y: [0, 18, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-220px] top-[-150px] h-[420px] w-[420px] rounded-full bg-blue-500/[0.04] blur-[150px]"
        />

        <motion.div
          animate={{
            x: [0, -28, 0],
            y: [0, -16, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-220px] right-[-180px] h-[390px] w-[390px] rounded-full bg-cyan-400/[0.018] blur-[150px]"
        />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1100px]">
        {/* Volver */}
        <motion.div
          initial={{
            opacity: 0,
            x: -14,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.45,
          }}
        >
          <Link
            href="/#experience"
            className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors duration-300 hover:text-white"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            Volver al portafolio
          </Link>
        </motion.div>

        {/* Encabezado */}
        <header className="mt-10 grid gap-6 border-b border-white/[0.08] pb-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.58,
              delay: 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue-400" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-blue-300 sm:text-[11px]">
                Trayectoria profesional
              </p>
            </div>

            <h1 className="mt-4 max-w-[520px] text-[2.3rem] font-extrabold leading-[1.02] tracking-[-0.05em] sm:text-[3rem]">
              Experiencia
              <span className="block text-zinc-500">profesional.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.58,
              delay: 0.14,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[620px] text-sm leading-7 text-zinc-400 sm:text-base"
          >
            Experiencia en implementación de software, pruebas funcionales y
            desarrollo Backend, desde el análisis hasta la validación y puesta
            en producción.
          </motion.p>
        </header>

        {/* Línea de tiempo */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative mt-8"
        >
          {/* Línea vertical */}
          <div className="absolute bottom-8 left-[23px] top-8 hidden w-px bg-gradient-to-b from-blue-400/50 via-white/[0.08] to-transparent md:block" />

          <div className="space-y-5">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <motion.article
                  key={experience.company}
                  variants={itemVariants}
                  className="relative md:pl-16"
                >
                  {/* Punto de la línea */}
                  <div className="absolute left-0 top-7 hidden h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-[#0d1118] text-blue-400 shadow-[0_0_35px_rgba(59,130,246,0.08)] md:flex">
                    <Icon size={20} />
                  </div>

                  <motion.div
                    whileHover={{
                      y: -4,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 22,
                    }}
                    className={`group relative overflow-hidden rounded-[22px] border p-5 sm:p-6 ${
                      experience.current
                        ? "border-blue-400/20 bg-blue-500/[0.03]"
                        : "border-white/[0.08] bg-white/[0.018]"
                    }`}
                  >
                    {/* Fondo */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-cyan-400/[0.01]" />

                    <div className="pointer-events-none absolute -right-20 -top-24 h-52 w-52 rounded-full bg-blue-500/[0.07] blur-3xl opacity-25 transition-opacity duration-500 group-hover:opacity-60" />

                    <div className="relative z-10">
                      {/* Cabecera */}
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex items-start gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-blue-400 md:hidden">
                            <Icon size={19} />
                          </div>

                          <div>
                            <div className="flex flex-wrap items-center gap-3">
                              <h2 className="text-lg font-semibold tracking-[-0.02em] text-blue-400 sm:text-xl">
                                {experience.company}
                              </h2>

                              {experience.current && (
                                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.05] px-3 py-1 text-[10px] font-medium text-emerald-400">
                                  <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-35" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                                  </span>

                                  Actual
                                </span>
                              )}
                            </div>

                            <h3 className="mt-3 max-w-[620px] text-[1.4rem] font-bold leading-tight tracking-[-0.035em] text-white sm:text-[1.65rem]">
                              {experience.role}
                            </h3>
                          </div>
                        </div>

                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.08] bg-black/20 px-3 py-1.5 text-xs text-zinc-500">
                          <CalendarDays size={14} />
                          {experience.period}
                        </div>
                      </div>

                      {/* Contenido */}
                      <div className="mt-5 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
                        <div>
                          <p className="text-sm leading-6 text-zinc-400">
                            {experience.description}
                          </p>

                          <div className="mt-5">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                              Tecnologías y competencias
                            </p>

                            <div className="mt-3 flex flex-wrap gap-2">
                              {experience.technologies.map((technology) => (
                                <motion.span
                                  key={technology}
                                  whileHover={{
                                    y: -2,
                                  }}
                                  className="cursor-default rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-[11px] text-zinc-400 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/[0.05] hover:text-blue-200"
                                >
                                  {technology}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="rounded-2xl border border-white/[0.07] bg-black/[0.12] p-4">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                            Principales resultados
                          </p>

                          <div className="mt-3 space-y-2.5">
                            {experience.results.map((result) => (
                              <motion.div
                                key={result}
                                whileHover={{
                                  x: 4,
                                }}
                                className="group/result flex items-start gap-3"
                              >
                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/[0.09] text-blue-400 transition-colors duration-300 group-hover/result:bg-blue-500/[0.16]">
                                  <Check size={11} strokeWidth={3} />
                                </span>

                                <p className="text-sm leading-6 text-zinc-400 transition-colors duration-300 group-hover/result:text-zinc-300">
                                  {result}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Línea inferior */}
                    <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-500 group-hover:w-full" />

                    {/* Número */}
                    <span className="absolute right-5 top-5 text-[10px] font-semibold tracking-[0.2em] text-zinc-800">
                      0{index + 1}
                    </span>
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </motion.section>

        {/* Cierre */}
        <motion.div
          initial={{
            opacity: 0,
            y: 14,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.38,
          }}
          className="mt-8 flex flex-col gap-5 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
              Perfil profesional
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              Implementación · QA funcional · Backend · Soporte
            </p>
          </div>

          <Link
            href="/#contact"
            className="group inline-flex h-11 w-fit items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.025] px-5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-blue-500/[0.07] hover:text-blue-200"
          >
            Contactar

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}