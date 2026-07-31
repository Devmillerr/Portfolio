"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Code2,
  Layers3,
  LockKeyhole,
  Network,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";

import DigiProyDemo from "@/components/projects/DigiProyDemo";

type ProjectType = "api" | "network";

type SecondaryProject = {
  title: string;
  eyebrow: string;
  description: string;
  technologies: string[];
  github: string;
  type: ProjectType;
};

const secondaryProjects: SecondaryProject[] = [
  {
    title: "API Finanzas",
    eyebrow: "Backend · API REST",
    description:
      "API modular para gestionar operaciones financieras, autenticación y control de acceso.",
    technologies: ["NestJS", "TypeScript", "Prisma", "JWT"],
    github: "https://github.com/Devmillerr/nestjs-finance-api",
    type: "api",
  },
  {
    title: "Mega Red",
    eyebrow: "Backend · Gestión",
    description:
      "Backend orientado a la gestión de usuarios, permisos y recursos mediante roles.",
    technologies: ["NestJS", "RBAC", "PostgreSQL"],
    github: "https://github.com/Devmillerr/mega-red",
    type: "network",
  },
];

const projectMetrics = [
  {
    value: "60+",
    label: "Procesos",
    icon: TrendingUp,
  },
  {
    value: "50+",
    label: "Usuarios",
    icon: Users,
  },
  {
    value: "3+",
    label: "Áreas",
    icon: Layers3,
  },
];

const camposolTechnologies = [
  "DigiProy",
  "QA funcional",
  "PDA",
  "Análisis funcional",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function ApiVisual() {
  return (
    <div className="relative h-[132px] overflow-hidden rounded-xl border border-white/[0.07] bg-[#090c11] p-4">
      <div className="pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full bg-blue-500/[0.09] blur-3xl" />

      <motion.div
        animate={{
          y: [0, -2, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl border border-blue-400/10 bg-blue-500/10 text-blue-400"
      >
        <ShieldCheck size={18} />
      </motion.div>

      <div className="space-y-2 font-mono text-[9px] text-zinc-500 sm:text-[10px]">
        <p>
          <span className="text-blue-300">POST</span> /auth/login
        </p>

        <p>
          <span className="text-emerald-300">GET</span> /transactions
        </p>

        <p>
          <span className="text-violet-300">JWT</span> middleware
        </p>

        <p>
          <span className="text-amber-300">PDF</span> report
        </p>
      </div>

      <div className="absolute bottom-4 left-4 right-4 h-1 overflow-hidden rounded-full bg-zinc-800">
        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: "82%",
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.25,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative h-full overflow-hidden rounded-full bg-blue-400"
        >
          <motion.span
            animate={{
              x: ["-120%", "420%"],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
            className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-white/60 to-transparent"
          />
        </motion.div>
      </div>
    </div>
  );
}

function NetworkVisual() {
  const nodes = [
    {
      x: -54,
      y: 0,
      delay: 0,
      className: "bg-blue-400",
    },
    {
      x: 54,
      y: 0,
      delay: 0.15,
      className: "bg-emerald-400",
    },
    {
      x: 0,
      y: -42,
      delay: 0.3,
      className: "bg-violet-400",
    },
    {
      x: 0,
      y: 42,
      delay: 0.45,
      className: "bg-amber-400",
    },
  ];

  return (
    <div className="relative h-[132px] overflow-hidden rounded-xl border border-white/[0.07] bg-[#090c11] p-4">
      <div className="pointer-events-none absolute -left-10 -top-14 h-36 w-36 rounded-full bg-cyan-500/[0.075] blur-3xl" />

      <div className="relative flex h-full items-center justify-center">
        <div className="absolute h-px w-[108px] bg-gradient-to-r from-blue-400/10 via-blue-400/40 to-blue-400/10" />

        <div className="absolute h-[84px] w-px bg-gradient-to-b from-blue-400/10 via-blue-400/40 to-blue-400/10" />

        <motion.span
          animate={{
            x: [-52, 52],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.9)]"
        />

        <motion.span
          animate={{
            y: [-40, 40],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            delay: 0.4,
            ease: "linear",
          }}
          className="absolute h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]"
        />

        <motion.div
          animate={{
            y: [0, -2, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/25 bg-[#0d1623] text-blue-400 shadow-[0_14px_35px_rgba(59,130,246,0.15)]"
        >
          <Network size={23} />

          {nodes.map((node) => (
            <motion.span
              key={`${node.x}-${node.y}`}
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: node.delay,
                type: "spring",
                stiffness: 220,
                damping: 18,
              }}
              className="absolute left-1/2 top-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-white/[0.09] bg-[#10151d] shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
              style={{
                marginLeft: node.x,
                marginTop: node.y,
              }}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${node.className}`} />
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function SecondaryVisual({ type }: { type: ProjectType }) {
  if (type === "api") {
    return <ApiVisual />;
  }

  return <NetworkVisual />;
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-b border-white/[0.07] bg-[#0b0e13] py-14 text-white sm:py-16 lg:flex lg:min-h-[calc(100svh-76px)] lg:items-center lg:py-10"
    >
      {/* Fondo de la sección */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 bottom-[-60px] h-80 w-80 rounded-full bg-cyan-400/[0.035] blur-[110px]" />

        <div className="absolute -right-32 top-[-100px] h-96 w-96 rounded-full bg-blue-500/[0.035] blur-[130px]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-10">
        {/* Encabezado */}
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{
              opacity: 0,
              y: 16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-blue-400" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-blue-300">
                Portafolio
              </p>
            </div>

            <h2 className="mt-2 text-[1.65rem] font-extrabold leading-none tracking-[-0.04em] sm:whitespace-nowrap sm:text-[1.9rem]">
              Soluciones que he construido.
            </h2>
          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="hidden whitespace-nowrap pb-[2px] text-[11px] text-zinc-400 lg:block"
          >
            Soluciones para optimizar procesos industriales y desarrollar
            aplicaciones backend.
          </motion.p>
        </div>

        {/* Cuadrícula de proyectos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="mt-4 grid items-stretch gap-4 lg:grid-cols-[1.35fr_0.65fr]"
        >
          {/* Proyecto principal: Camposol */}
          <motion.article
            variants={itemVariants}
            whileHover={{
              y: -4,
            }}
            transition={{
              type: "spring",
              stiffness: 240,
              damping: 22,
            }}
            className="
  group
  relative
  flex
  h-full
  flex-col
  overflow-hidden
  rounded-[1.4rem]
  border
  border-blue-400/20
  bg-gradient-to-b
  from-blue-500/[0.045]
  to-white/[0.012]
  p-4
  shadow-[0_24px_70px_rgba(0,0,0,0.16)]
  transition-colors
  duration-500
  hover:border-blue-400/40
  hover:shadow-[0_28px_80px_rgba(59,130,246,0.11)]
  sm:p-5
"
          >
            <div className="pointer-events-none absolute -right-28 -top-32 h-80 w-80 rounded-full bg-blue-500/[0.06] opacity-0 blur-[100px] transition-opacity duration-500 group-hover:opacity-100" />

            {/* Demo de DigiProy */}
            <div className="relative">
              <DigiProyDemo />
            </div>

            {/* Información del proyecto */}
            <div className="relative flex flex-1 flex-col px-1 pb-1 pt-4">
              <div>
                <div className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-blue-300 sm:text-[10px]">
                  <Building2 size={13} />
                  Proyecto principal · Camposol
                </div>

                <h3 className="mt-2 text-xl font-bold tracking-[-0.035em] sm:text-2xl">
                  Digitalización de procesos operativos
                </h3>

                <p className="mt-2 max-w-3xl text-[13px] leading-6 text-zinc-400 sm:text-sm">
                  Implementación de cartillas digitales para Producción, Calidad
                  y Operaciones, con validaciones funcionales, soporte a
                  usuarios y despliegue en dispositivos PDA.
                </p>
              </div>

              <div className="mt-auto pt-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                      {projectMetrics.map((metric) => {
                        const Icon = metric.icon;

                        return (
                          <div
                            key={metric.label}
                            className="group/metric flex items-center gap-2"
                          >
                            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/[0.08] text-blue-400">
                              <Icon size={13} />
                            </span>

                            <div>
                              <p className="text-[13px] font-bold leading-none text-white">
                                {metric.value}
                              </p>

                              <p className="mt-1 text-[9px] leading-none text-zinc-600">
                                {metric.label}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {camposolTechnologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/[0.07] bg-white/[0.025] px-2.5 py-1 text-[9px] text-zinc-400"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="#case-study"
                    className="group/button inline-flex h-9 w-fit shrink-0 items-center justify-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.035] px-3.5 text-[11px] font-semibold text-zinc-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/35 hover:bg-blue-500/[0.06] hover:text-white"
                  >
                    Ver implementación
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                    />
                  </Link>
                </div>

                {/* Aviso dentro de la tarjeta */}
                <div className="mt-4 flex items-center gap-2 border-t border-white/[0.06] pt-3 text-[9px] text-zinc-600">
                  <LockKeyhole size={11} className="text-blue-400/70" />

                  <span className="font-medium text-zinc-500">
                    Proyecto corporativo:
                  </span>

                  <span>información sensible omitida.</span>
                </div>
              </div>
            </div>

            <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400 to-transparent transition-all duration-500 group-hover:w-[88%]" />
          </motion.article>

          {/* Proyectos secundarios */}
          <div className="grid h-full gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2">
            {secondaryProjects.map((project, index) => {
              return (
                <motion.article
                  key={project.title}
                  variants={itemVariants}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.075] bg-white/[0.018] p-4 shadow-[0_20px_55px_rgba(0,0,0,0.12)] transition-colors duration-300 hover:border-blue-400/30 hover:bg-white/[0.028] hover:shadow-[0_24px_65px_rgba(59,130,246,0.07)]"
                >
                  <div className="pointer-events-none absolute -right-12 -top-14 h-36 w-36 rounded-full bg-blue-500/[0.055] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative transition-transform duration-500 group-hover:scale-[1.015]">
                    <SecondaryVisual type={project.type} />
                  </div>

                  <div className="relative px-1 pb-1 pt-3.5">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-blue-300 sm:text-[10px]">
                        {project.eyebrow}
                      </p>
                    </div>

                    <h3 className="mt-2 text-lg font-bold tracking-[-0.025em]">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-6 text-zinc-500">
                      {project.description}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/[0.07] bg-white/[0.025] px-2 py-1 text-[9px] text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="
    group/link
    mt-3
    flex
    items-center
    justify-between
    border-t
    border-white/[0.07]
    pt-3
    transition-all
    duration-300
    hover:border-blue-400/25
  "
                    >
                      <div className="flex items-center gap-2">
                        <Code2
                          size={14}
                          className="text-zinc-400 transition-colors duration-300 group-hover/link:text-blue-300"
                        />

                        <span className="text-xs font-semibold text-zinc-300 transition-colors duration-300 group-hover/link:text-white">
                          Ver repositorio
                        </span>
                      </div>

                      <ArrowUpRight
                        size={16}
                        className="
      text-zinc-500
      transition-all
      duration-300
      group-hover/link:-translate-y-1
      group-hover/link:translate-x-1
      group-hover/link:text-blue-400
    "
                      />
                    </a>
                  </div>

                  <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400 to-transparent transition-all duration-500 group-hover:w-[78%]" />
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
