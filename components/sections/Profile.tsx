"use client";

import { motion } from "framer-motion";
import {
  Braces,
  ClipboardCheck,
  Layers3,
  Workflow,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Análisis",
    description:
      "Identifico necesidades, restricciones y oportunidades de mejora junto con los usuarios del proceso.",
    icon: Workflow,
  },
  {
    number: "02",
    title: "Implementación",
    description:
      "Convierto los requerimientos en formularios, reglas de negocio, validaciones y flujos digitales.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "QA y despliegue",
    description:
      "Valido el funcionamiento, documento incidencias y acompaño el pase a producción.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Backend",
    description:
      "Desarrollo APIs, lógica de negocio y persistencia de datos con NestJS, TypeScript y PostgreSQL.",
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
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut" as const,
    },
  },
};

export default function Profile() {
  return (
    <section
      id="profile"
      className="relative flex min-h-[calc(100vh-76px)] items-center overflow-hidden border-b border-white/[0.07] bg-[#0d0f14] py-12 text-white"
    >
      {/* Fondo animado sutil */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-180px] top-[-160px] h-[380px] w-[380px] rounded-full bg-blue-500/[0.04] blur-[140px]"
        />

        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, -18, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-220px] left-[-160px] h-[360px] w-[360px] rounded-full bg-cyan-400/[0.025] blur-[150px]"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1100px] px-6 lg:px-0">
        {/* Encabezado */}
        <div className="grid items-end gap-6 pb-8 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
          >
            <motion.p
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-300"
            >
              Mi enfoque profesional
            </motion.p>

            <h2 className="mt-4 max-w-md text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-4xl">
              Tecnología conectada con la operación.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base"
          >
            Mi trabajo comienza entendiendo el proceso y las necesidades del
            usuario. Luego convierto esa información en una solución funcional,
            validada y lista para producción.
          </motion.p>
        </div>

        {/* Línea animada superior */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="h-px origin-left bg-gradient-to-r from-blue-500/60 via-white/[0.08] to-transparent"
        />

        {/* Capacidades */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4"
        >
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <motion.article
                key={capability.title}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  backgroundColor: "rgba(255,255,255,0.025)",
                }}
                transition={{
                  duration: 0.25,
                }}
                className={`
                  group relative min-h-[210px] overflow-hidden p-6
                  ${
                    index !== capabilities.length - 1
                      ? "border-b border-white/[0.08] md:border-b-0 md:border-r"
                      : ""
                  }
                `}
              >
                {/* Resplandor al pasar el mouse */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-3xl" />
                </div>

                <div className="relative z-10 flex items-start justify-between">
                  <motion.div
                    whileHover={{
                      rotate: -5,
                      scale: 1.08,
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-blue-400 transition duration-300 group-hover:border-blue-400/30 group-hover:bg-blue-500/10"
                  >
                    <Icon size={20} />
                  </motion.div>

                  <span className="text-xs font-semibold tracking-[0.18em] text-zinc-700 transition duration-300 group-hover:text-blue-400/50">
                    {capability.number}
                  </span>
                </div>

                <div className="relative z-10">
                  <h3 className="mt-6 text-xl font-bold tracking-tight transition duration-300 group-hover:text-blue-300">
                    {capability.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-500 transition duration-300 group-hover:text-zinc-400">
                    {capability.description}
                  </p>
                </div>

                {/* Línea inferior animada */}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-blue-400 transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </motion.div>

        {/* Línea animada inferior */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.25,
            ease: "easeOut",
          }}
          className="h-px origin-left bg-gradient-to-r from-transparent via-white/[0.08] to-blue-500/40"
        />

        {/* Fortalezas */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="grid items-center gap-5 pt-7 lg:grid-cols-[0.35fr_1.65fr]"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
              Fortalezas
            </p>

            <h3 className="mt-2 text-xl font-bold">
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
                variants={cardVariants}
                whileHover={{
                  y: -3,
                  scale: 1.02,
                }}
                className="cursor-default rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-2 text-xs text-zinc-400 transition duration-300 hover:border-blue-400/35 hover:bg-blue-500/[0.06] hover:text-blue-200"
              >
                {strength}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}