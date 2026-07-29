"use client";

import Link from "next/link";
import {
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  animate,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  Factory,
  Rocket,
} from "lucide-react";

const experience = {
  company: "Camposol S.A.",
  sector: "Agroindustria · Perú",
  position: "Software Implementation Analyst",
  secondaryPosition: "QA Tester",
  period: "Septiembre 2024 — Actualidad",
  description:
    "Implemento y valido soluciones digitales para procesos de Producción, Calidad y Operaciones.",
  metrics: [
    {
      value: 40,
      suffix: "+",
      label: "procesos digitalizados",
    },
    {
      value: 50,
      suffix: "+",
      label: "usuarios",
    },
    {
      value: 3,
      suffix: "+",
      label: "áreas impactadas",
    },
  ],
  responsibilities: [
    "Análisis funcional y reglas de negocio.",
    "Pruebas QA en dispositivos PDA.",
    "Coordinación del pase a producción.",
  ],
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
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

type CounterProps = {
  value: number;
  suffix?: string;
};

function Counter({ value, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.7,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 1.35,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setCount(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Experience() {
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const smoothMouseX = useSpring(mouseX, {
    stiffness: 150,
    damping: 22,
    mass: 0.25,
  });

  const smoothMouseY = useSpring(mouseY, {
    stiffness: 150,
    damping: 22,
    mass: 0.25,
  });

  const spotlight = useMotionTemplate`
    radial-gradient(
      260px circle at ${smoothMouseX}px ${smoothMouseY}px,
      rgba(59, 130, 246, 0.08),
      transparent 72%
    )
  `;

  function handleCardMouseMove(
    event: MouseEvent<HTMLElement>,
  ) {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  }

  function handleCardMouseLeave() {
    mouseX.set(50);
    mouseY.set(50);
  }

  return (
    <section
      id="experience"
      className="relative overflow-hidden border-b border-white/[0.07] bg-[#090b0f] py-12 text-white lg:flex lg:min-h-[calc(100svh-76px)] lg:items-center"
    >
      {/* Fondo */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 26, 0],
            y: [0, 14, 0],
            opacity: [0.65, 1, 0.65],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-170px] top-10 h-[330px] w-[330px] rounded-full bg-blue-500/[0.035] blur-[140px]"
        />

        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, -12, 0],
            opacity: [0.5, 0.85, 0.5],
          }}
          transition={{
            duration: 21,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-220px] right-[-150px] h-[340px] w-[340px] rounded-full bg-cyan-400/[0.018] blur-[150px]"
        />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/15 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-10">
        {/* Encabezado */}
        <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:gap-12">
          <motion.div
            initial={{
              opacity: 0,
              y: 22,
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
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-3">
              <motion.span
                initial={{
                  scaleX: 0,
                }}
                whileInView={{
                  scaleX: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-px w-8 origin-left bg-blue-400"
              />

              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-300 sm:text-[11px]">
                Experiencia destacada
              </p>
            </div>

            <h2 className="mt-4 text-[2.15rem] font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-[2.7rem] lg:text-[2.9rem]">
              Experiencia actual.
            </h2>
          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
              y: 22,
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
              duration: 0.65,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[610px] text-sm leading-7 text-zinc-400 sm:text-base"
          >
            Implemento soluciones digitales que optimizan procesos operativos y
            llegan hasta producción.
          </motion.p>
        </div>

        {/* Línea del encabezado */}
        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.95,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-6 h-px origin-left bg-gradient-to-r from-blue-500/60 via-white/[0.08] to-transparent"
        />

        {/* Contenido */}
        <div className="mt-7 grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:gap-8">
          {/* Tarjeta principal */}
          <motion.article
            initial={{
              opacity: 0,
              x: -32,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.72,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -5,
            }}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            className="group relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.018] p-6 sm:p-7"
          >
            {/* Gradiente base */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/[0.045] via-transparent to-cyan-400/[0.015]" />

            {/* Spotlight dinámico */}
            <motion.div
              style={{
                background: spotlight,
              }}
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-70"
            />

            {/* Glow respirando */}
            <motion.div
              animate={{
                opacity: [0.25, 0.55, 0.25],
                scale: [0.96, 1.05, 0.96],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -right-24 -top-24 h-60 w-60 rounded-full bg-blue-500/[0.1] blur-3xl"
            />

            <div className="relative z-10 flex h-full flex-col">
              {/* Empresa */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{
                      rotate: -6,
                      scale: 1.08,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 18,
                    }}
                    className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/[0.08] text-blue-400 shadow-[0_0_35px_rgba(59,130,246,0.08)]"
                  >
                    <Rocket size={22} />
                  </motion.div>

                  <div>
                    <p className="text-xl font-semibold tracking-[-0.02em] text-blue-400">
                      {experience.company}
                    </p>

                    <div className="mt-1 flex items-center gap-2 text-xs text-zinc-500">
                      <Factory size={13} />
                      <span>{experience.sector}</span>
                    </div>
                  </div>
                </div>

                <motion.span
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(16,185,129,0)",
                      "0 0 18px rgba(16,185,129,0.15)",
                      "0 0 0 rgba(16,185,129,0)",
                    ],
                  }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.05] px-3 py-1.5 text-[10px] font-medium text-emerald-400"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-35" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>

                  Actual
                </motion.span>
              </div>

              {/* Cargo */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                className="mt-7"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                  Rol
                </p>

                <h3 className="mt-3 max-w-[520px] text-[1.7rem] font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-[1.95rem]">
                  {experience.position}
                </h3>

                <p className="mt-1 text-lg font-semibold tracking-[-0.025em] text-zinc-500">
                  {experience.secondaryPosition}
                </p>
              </motion.div>

              {/* Fecha */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                className="mt-5 inline-flex items-center gap-2 text-sm text-zinc-500"
              >
                <CalendarDays size={15} />
                {experience.period}
              </motion.div>

              {/* Descripción */}
              <motion.p
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                className="mt-5 max-w-[520px] text-sm leading-6 text-zinc-400"
              >
                {experience.description}
              </motion.p>

              {/* Pie */}
              <div className="mt-6 border-t border-white/[0.07] pt-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-zinc-600">
                    Producción · Calidad · Operaciones
                  </p>

                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-400/70">
                    Implementación digital
                  </span>
                </div>
              </div>
            </div>

            {/* Línea luminosa */}
            <span className="absolute bottom-0 left-0 h-px w-full overflow-hidden">
              <motion.span
                initial={{
                  x: "-120%",
                }}
                whileHover={{
                  x: "220%",
                }}
                transition={{
                  duration: 0.9,
                  ease: "easeInOut",
                }}
                className="block h-full w-1/3 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
              />
            </span>
          </motion.article>

          {/* Impacto y responsabilidades */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="flex flex-col"
          >
            {/* Impacto */}
            <motion.div variants={itemVariants}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                Impacto
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {experience.metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    variants={itemVariants}
                    whileHover={{
                      y: -5,
                    }}
                    animate={{
                      y: [0, -2, 0],
                    }}
                    transition={{
                      y: {
                        duration: 4.5 + index * 0.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      },
                    }}
                    className="group/stat relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.018] px-5 py-5 transition-colors duration-300 hover:border-blue-400/25 hover:bg-blue-500/[0.035]"
                  >
                    <div className="pointer-events-none absolute -right-8 -top-10 h-24 w-24 rounded-full bg-blue-500/[0.09] blur-2xl opacity-0 transition-opacity duration-300 group-hover/stat:opacity-100" />

                    <p className="relative z-10 text-[2.15rem] font-bold leading-none tracking-[-0.05em] text-blue-400">
                      <Counter
                        value={metric.value}
                        suffix={metric.suffix}
                      />
                    </p>

                    <p className="relative z-10 mt-3 text-xs leading-5 text-zinc-500">
                      {metric.label}
                    </p>

                    <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-400 to-transparent transition-all duration-500 group-hover/stat:w-full" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Responsabilidades */}
            <motion.div
              variants={itemVariants}
              className="mt-5 rounded-2xl border border-white/[0.07] bg-white/[0.012] p-5"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                Responsabilidades clave
              </p>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                className="mt-4 space-y-3"
              >
                {experience.responsibilities.map(
                  (responsibility) => (
                    <motion.div
                      key={responsibility}
                      variants={itemVariants}
                      whileHover={{
                        x: 4,
                      }}
                      className="group/item flex items-start gap-3"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/[0.09] text-blue-400 transition-colors duration-300 group-hover/item:bg-blue-500/[0.16]">
                        <Check
                          size={11}
                          strokeWidth={3}
                        />
                      </span>

                      <p className="text-sm leading-6 text-zinc-400 transition-colors duration-300 group-hover/item:text-zinc-300">
                        {responsibility}
                      </p>
                    </motion.div>
                  ),
                )}
              </motion.div>
            </motion.div>

            {/* Footer */}
            <motion.div
              variants={itemVariants}
              className="mt-5 flex flex-col gap-4 border-t border-white/[0.08] pt-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="max-w-[390px] text-sm leading-6 text-zinc-500">
                Experiencia previa en desarrollo Backend.
              </p>

              <Link
                href="/experiencia"
                className="group inline-flex h-11 w-fit shrink-0 items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.025] px-5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-blue-500/[0.07] hover:text-blue-200"
              >
                Ver trayectoria

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}