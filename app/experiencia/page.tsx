"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Code2,
  ExternalLink,
  Rocket,
} from "lucide-react";

const experiences = [
  {
    company: "Camposol S.A.",
    position: "Software Implementation Analyst · QA Tester",
    period: "Septiembre 2024 — Actualidad",
    description:
      "Implementación y validación de soluciones digitales para procesos de Producción, Calidad y Operaciones.",
    achievements: [
      "Digitalización de aproximadamente 40 cartillas operativas.",
      "Soluciones utilizadas por más de 50 colaboradores.",
      "Pruebas funcionales en ambiente QA y dispositivos PDA.",
    ],
    technologies: [
      "Digiproy",
      "QA Testing",
      "PDA",
      "Análisis funcional",
      "Implementación",
      "Soporte",
    ],
    icon: Rocket,
    current: true,
  },
  {
    company: "I.E. Inmaculada de la Merced",
    position: "Backend Developer · Prácticas",
    period: "Julio 2022 — Enero 2024",
    description:
      "Desarrollo Backend para la gestión de información institucional mediante una arquitectura modular.",
    achievements: [
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
      staggerChildren: 0.14,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 34,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

export default function ExperiencePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08090c] px-6 py-14 text-white">
      {/* Fondo decorativo */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(255,255,255,.08) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(255,255,255,.08) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "88px 88px",
          }}
        />

        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-200px] top-[-120px] h-[420px] w-[420px] rounded-full bg-blue-500/[0.05] blur-[150px]"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-220px] right-[-180px] h-[400px] w-[400px] rounded-full bg-cyan-400/[0.025] blur-[150px]"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1100px]">
        {/* Volver */}
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
        >
          <Link
            href="/#experience"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Volver al portafolio
          </Link>
        </motion.div>

        {/* Encabezado */}
        <header className="mt-12 grid gap-8 border-b border-white/[0.08] pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.08,
            }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-300">
              Trayectoria profesional
            </p>

            <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.045em] text-white sm:text-5xl">
              Experiencia completa
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.16,
            }}
            className="max-w-2xl text-base leading-8 text-zinc-400"
          >
            Experiencia en implementación de software, pruebas funcionales y
            desarrollo Backend, participando desde el análisis de requerimientos
            hasta la validación y puesta en producción.
          </motion.p>
        </header>

        {/* Tarjetas */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-10 grid gap-6 lg:grid-cols-2"
        >
          {experiences.map((experience) => {
            const Icon = experience.icon;

            return (
              <motion.article
                key={experience.company}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.01,
                }}
                transition={{
                  duration: 0.28,
                }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] p-7 shadow-[0_25px_80px_rgba(0,0,0,0.22)] md:p-8"
              >
                {/* Brillo al pasar el mouse */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute left-1/2 top-[-100px] h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/[0.09] blur-3xl" />
                </div>

                <div className="relative z-10 flex h-full flex-col">
                  {/* Empresa y estado */}
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{
                          rotate: -7,
                          scale: 1.1,
                        }}
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.09] bg-white/[0.03] text-blue-400 transition duration-300 group-hover:border-blue-400/35 group-hover:bg-blue-500/10"
                      >
                        <Icon size={22} />
                      </motion.div>

                      <div>
                        <p className="font-semibold text-blue-400">
                          {experience.company}
                        </p>

                        {experience.current && (
                          <span className="mt-2 inline-flex items-center gap-2 text-xs text-emerald-400">
                            <span className="relative flex h-2 w-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                            </span>

                            Posición actual
                          </span>
                        )}
                      </div>
                    </div>

                    <ExternalLink
                      size={17}
                      className="text-zinc-700 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
                    />
                  </div>

                  {/* Cargo */}
                  <h2 className="mt-7 text-2xl font-bold leading-tight tracking-[-0.03em] text-white">
                    {experience.position}
                  </h2>

                  {/* Fecha */}
                  <div className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.08] bg-black/20 px-3 py-1.5 text-xs text-zinc-500">
                    <CalendarDays size={14} />
                    {experience.period}
                  </div>

                  {/* Descripción */}
                  <p className="mt-5 text-sm leading-7 text-zinc-400">
                    {experience.description}
                  </p>

                  {/* Logros */}
                  <div className="mt-7">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                      Principales resultados
                    </p>

                    <div className="mt-4 space-y-4">
                      {experience.achievements.map((achievement) => (
                        <motion.div
                          key={achievement}
                          whileHover={{
                            x: 4,
                          }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-1 shrink-0 text-blue-400"
                          />

                          <p className="text-sm leading-6 text-zinc-300">
                            {achievement}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Tecnologías */}
                  <div className="mt-auto border-t border-white/[0.07] pt-7">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                      Tecnologías y competencias
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <motion.span
                          key={technology}
                          whileHover={{
                            y: -3,
                            scale: 1.03,
                          }}
                          className="cursor-default rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-[11px] text-zinc-400 transition duration-300 hover:border-blue-400/35 hover:bg-blue-500/[0.06] hover:text-blue-200"
                        >
                          {technology}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Línea animada inferior */}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-700 group-hover:w-full" />
              </motion.article>
            );
          })}
        </motion.section>

        {/* Cierre */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.42,
          }}
          className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-white/[0.08] pt-7"
        >
          <p className="text-sm text-zinc-500">
            Implementación · QA funcional · Backend · Soporte
          </p>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
          >
            Contactar
            <ExternalLink size={15} />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}