"use client";

import { motion } from "framer-motion";
import {
  Braces,
  Check,
  ClipboardCheck,
  Layers3,
  Workflow,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Análisis",
    description:
      "Identifico necesidades, restricciones y oportunidades de mejora.",
    icon: Workflow,
  },
  {
    number: "02",
    title: "Implementación",
    description:
      "Transformo requerimientos en reglas, formularios y flujos digitales.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "QA y despliegue",
    description:
      "Valido la solución y acompaño su pase a producción.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Desarrollo",
    description:
      "Desarrollo APIs y lógica de negocio con NestJS, TypeScript y PostgreSQL.",
    icon: Braces,
  },
];

const strengths = [
  "Análisis funcional",
  "Comunicación con usuarios",
  "QA funcional",
  "Documentación técnica",
  "Resolución de incidencias",
  "Mejora continua",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
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

export default function Profile() {
  return (
    <section
      id="profile"
      className="relative overflow-hidden border-b border-white/[0.07] bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_34%),linear-gradient(180deg,#0b0e13_0%,#090b0f_100%)] py-16 text-white sm:py-20 lg:flex lg:min-h-[calc(100svh-76px)] lg:items-center lg:py-14"
    >
      {/* Fondo decorativo */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, 18, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-160px] top-[-140px] h-[360px] w-[360px] rounded-full bg-blue-500/[0.045] blur-[145px]"
        />

        <motion.div
          animate={{
            x: [0, -24, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-200px] left-[-150px] h-[340px] w-[340px] rounded-full bg-cyan-400/[0.02] blur-[150px]"
        />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-10">
        {/* Encabezado */}
        {/* Encabezado */}
<div className="max-w-[760px]">
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.35 }}
    transition={{
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    }}
  >
    <div className="flex items-center gap-3">
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="h-px w-8 origin-left bg-blue-400"
      />

      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-300 sm:text-[11px]">
        Mi enfoque
      </p>
    </div>

    <h2 className="mt-5 text-[2.2rem] font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-[2.8rem] lg:text-[3rem]">
      Cómo trabajo.
    </h2>

    <motion.p
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.55,
        delay: 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="mt-4 max-w-[620px] text-sm leading-7 text-zinc-400 sm:text-base"
    >
      Transformo procesos operativos en soluciones digitales funcionales.
    </motion.p>
  </motion.div>
</div>

        {/* Capacidades */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {capabilities.map((capability) => {
            const Icon = capability.icon;

            return (
              <motion.article
                key={capability.title}
                variants={itemVariants}
                whileHover={{
                  y: -6,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 22,
                }}
                className="group relative min-h-[190px] overflow-hidden rounded-2xl border border-white/[0.075] bg-white/[0.018] p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/[0.035]"
              >
                {/* Glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute left-1/2 top-[-80px] h-44 w-44 -translate-x-1/2 rounded-full bg-blue-500/[0.13] blur-3xl" />
                </div>

                {/* Gradiente */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.015] via-transparent to-blue-500/[0.02]" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <motion.div
                      whileHover={{
                        rotate: -5,
                        scale: 1.08,
                      }}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-blue-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 group-hover:border-blue-400/35 group-hover:bg-blue-500/[0.09]"
                    >
                      <Icon size={20} />
                    </motion.div>

                    <span className="text-[10px] font-semibold tracking-[0.2em] text-zinc-700 transition-colors duration-300 group-hover:text-blue-400/60">
                      {capability.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold tracking-[-0.025em] text-white transition-colors duration-300 group-hover:text-blue-200 sm:text-xl">
                    {capability.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400">
                    {capability.description}
                  </p>
                </div>

                {/* Línea inferior */}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-500 group-hover:w-full" />

                {/* Destello */}
                <div className="pointer-events-none absolute -left-24 top-0 h-full w-12 -skew-x-12 bg-gradient-to-r from-transparent via-blue-300/10 to-transparent opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100" />
              </motion.article>
            );
          })}
        </motion.div>

        {/* Fortalezas */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 grid gap-6 border-t border-white/[0.07] pt-8 lg:grid-cols-[0.32fr_1.68fr] lg:items-center"
        >
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-600">
              Fortalezas
            </p>

            <h3 className="mt-2 whitespace-nowrap text-lg font-bold tracking-[-0.025em] sm:text-xl">
              Más allá del código.
            </h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {strengths.map((strength) => (
              <motion.span
                key={strength}
                variants={itemVariants}
                whileHover={{
                  y: -3,
                }}
                className="group inline-flex cursor-default items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[11px] text-zinc-400 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/[0.06] hover:text-blue-200"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-500/[0.1] text-blue-400 transition-colors duration-300 group-hover:bg-blue-500/[0.18]">
                  <Check size={10} strokeWidth={3} />
                </span>

                {strength}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}