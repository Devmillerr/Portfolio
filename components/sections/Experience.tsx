"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  CalendarDays,
  Code2,
  GraduationCap,
  Layers3,
} from "lucide-react";
import { useRef, useState, type MouseEvent } from "react";

const experiences = [
  {
    number: "02",
    period: "Sept. 2024 — Actualidad",
    company: "Camposol S.A.",
    context: "Agroindustria · Perú",
    position: "Software Implementation Analyst",
    secondaryPosition: "QA Tester",
    description:
      "Analizo procesos e implemento soluciones digitales que conectan las necesidades operativas con software funcional y validado.",
    highlights: [
      "Análisis funcional",
      "Implementación de software",
      "QA en dispositivos PDA",
      "Despliegue y soporte",
    ],
    note: "Producción · Calidad · Operaciones",
    status: "Actual",
    icon: Building2,
    current: true,
  },
  {
    number: "01",
    period: "Jul. 2022 — Ene. 2024",
    company: "I.E. Inmaculada de la Merced",
    context: "Chimbote · Perú",
    position: "Backend Developer",
    secondaryPosition: "Desarrollo de APIs y servicios",
    description:
      "Desarrollé servicios backend, autenticación y generación de documentos para una solución construida con una arquitectura modular.",
    highlights: [
      "NestJS y TypeScript",
      "PostgreSQL",
      "API REST y JWT",
      "Pruebas con Postman",
    ],
    note: "Backend · Base de datos · Integraciones",
    status: "Base técnica",
    icon: GraduationCap,
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
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

type ExperienceRowProps = {
  experience: (typeof experiences)[number];
};

function ExperienceRow({ experience }: ExperienceRowProps) {
  const rowRef = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 170,
    damping: 24,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 170,
    damping: 24,
  });

  const spotlight = useMotionTemplate`
    radial-gradient(
      280px circle at ${smoothX}px ${smoothY}px,
      rgba(59, 130, 246, 0.09),
      transparent 72%
    )
  `;

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = rowRef.current?.getBoundingClientRect();

    if (!rect) return;

    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  const Icon = experience.icon;

  return (
    <motion.article
      ref={rowRef}
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="
        group
  relative
  overflow-hidden
  border-t
  border-white/[0.07]
  py-6
  first:border-t-0
  sm:py-7
      "
    >
      <motion.div
        aria-hidden="true"
        style={{ background: spotlight }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="pointer-events-none absolute inset-0"
      />

      {experience.current && (
        <motion.span
          aria-hidden="true"
          animate={{
            opacity: [0.45, 1, 0.45],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-0 top-0 h-px w-28 bg-gradient-to-r from-blue-400 to-transparent"
        />
      )}

      <div className="relative z-10 grid gap-7 lg:grid-cols-[180px_minmax(0,1fr)_270px] lg:gap-10">
        {/* Periodo */}
        <div>
          <div className="flex items-center gap-3">
            <motion.span
              animate={{
                borderColor: hovered
                  ? "rgba(96,165,250,0.4)"
                  : "rgba(255,255,255,0.08)",
                backgroundColor: hovered
                  ? "rgba(59,130,246,0.08)"
                  : "rgba(255,255,255,0.018)",
              }}
              className="flex h-10 w-10 items-center justify-center rounded-xl border text-blue-400"
            >
              <Icon size={17} />
            </motion.span>

            <span className="text-[10px] font-semibold tracking-[0.2em] text-blue-400/65">
              {experience.number}
            </span>
          </div>

          <div className="mt-5 flex items-center gap-2 text-[12px] text-zinc-500">
            <CalendarDays size={13} />
            <span>{experience.period}</span>
          </div>

          <div className="mt-3 flex items-center gap-2">
            {experience.current && (
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-30" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
            )}

            <span
              className={`text-[9px] font-semibold uppercase tracking-[0.18em] ${
                experience.current ? "text-emerald-400" : "text-zinc-600"
              }`}
            >
              {experience.status}
            </span>
          </div>
        </div>

        {/* Experiencia */}
        <div>
          <p className="text-sm font-semibold text-blue-400">
            {experience.company}
          </p>

          <p className="mt-1 text-[11px] text-zinc-600">{experience.context}</p>

          <h3 className="mt-4 text-[1.55rem] font-bold leading-[1.08] tracking-[-0.04em] text-white transition-colors duration-300 group-hover:text-blue-100 sm:text-[1.8rem]">
            {experience.position}
          </h3>

          <p className="mt-1.5 text-sm font-medium text-zinc-500">
            {experience.secondaryPosition}
          </p>

          <p className="mt-4 max-w-[610px] text-[13px] leading-6 text-zinc-400">
            {experience.description}
          </p>

          <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.18em] text-zinc-600">
            {experience.note}
          </p>
        </div>

        {/* Áreas de trabajo */}
        <div className="lg:border-l lg:border-white/[0.06] lg:pl-8">
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-blue-300/65">
            Enfoque
          </p>

          <div className="mt-4 space-y-3">
            {experience.highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ x: 4 }}
                className="flex cursor-default items-center gap-3"
              >
                <span className="h-px w-4 bg-blue-400/45 transition-all duration-300 group-hover:w-5" />

                <span className="text-[12px] text-zinc-500 transition-colors duration-300 hover:text-zinc-300">
                  {highlight}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        border-b
        border-white/[0.07]
        bg-[#090b0f]

        text-white

        lg:flex
        lg:min-h-[calc(100svh-76px)]
        lg:items-center



        py-12
sm:py-14
lg:py-8
      "
    >
      {/* Fondo */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 28, 0],
            y: [0, 16, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-180px] top-[-80px] h-[350px] w-[350px] rounded-full bg-blue-500/[0.035] blur-[145px]"
        />

        <motion.div
          animate={{
            x: [0, -22, 0],
            y: [0, -14, 0],
          }}
          transition={{
            duration: 23,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-210px] right-[-160px] h-[340px] w-[340px] rounded-full bg-cyan-400/[0.018] blur-[150px]"
        />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/15 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-10">
        {/* Encabezado */}
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-3">
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-px w-8 origin-left bg-blue-400"
              />

              <p className="whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.2em] text-blue-300 sm:text-[10px]">
                Trayectoria profesional
              </p>
            </div>

            <h2 className="mt-4 text-[1.8rem] font-extrabold leading-none tracking-[-0.04em] sm:text-[2rem] lg:whitespace-nowrap lg:text-[2.15rem]">
              Entre código y operación.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.65,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[650px] text-sm leading-7 text-zinc-400 sm:text-[15px]"
          >
            Del desarrollo backend al análisis, implementación y QA de software.
          </motion.p>
        </div>

        {/* Dirección de la trayectoria */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-5 flex origin-left items-center"
        >
          <span className="h-px flex-1 bg-gradient-to-r from-blue-500/55 via-white/[0.08] to-transparent" />

          <div className="hidden items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-600 sm:flex">
            <Code2 size={12} className="text-blue-400/60" />
            Desarrollo
            <ArrowUpRight size={11} className="text-blue-400/45" />
            <Layers3 size={12} className="text-blue-400/60" />
            Implementación
          </div>
        </motion.div>

        {/* Experiencias */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-1"
        >
          {experiences.map((experience) => (
            <ExperienceRow
              key={`${experience.company}-${experience.position}`}
              experience={experience}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
