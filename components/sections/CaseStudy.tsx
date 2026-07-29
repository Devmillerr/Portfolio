"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  Check,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Layers3,
  MonitorSmartphone,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

type Accent = "red" | "blue" | "emerald";

type Stage = {
  number: string;
  label: string;
  title: string;
  description: string;
  accent: Accent;
  items: string[];
};

const stages: Stage[] = [
  {
    number: "01",
    label: "Antes",
    title: "Procesos manuales",
    description:
      "Los registros operativos se completaban en formatos físicos.",
    accent: "red",
    items: [
      "Información dispersa",
      "Errores y duplicidad",
      "Baja trazabilidad",
    ],
  },
  {
    number: "02",
    label: "Implementación",
    title: "Solución digital",
    description:
      "Diseñé e implementé cartillas digitales adaptadas a cada proceso.",
    accent: "blue",
    items: [
      "Reglas y validaciones",
      "Pruebas funcionales en PDA",
      "Despliegue y capacitación",
    ],
  },
  {
    number: "03",
    label: "Resultado",
    title: "Operación optimizada",
    description:
      "La información quedó organizada, disponible y lista para seguimiento.",
    accent: "emerald",
    items: [
      "Menos retrabajo",
      "Mayor calidad de datos",
      "Mejor control operativo",
    ],
  },
];

const metrics = [
  {
    value: "40+",
    label: "Procesos digitalizados",
    icon: TrendingUp,
  },
  {
    value: "50+",
    label: "Usuarios capacitados",
    icon: Users,
  },
  {
    value: "3",
    label: "Áreas impactadas",
    icon: Layers3,
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

function getStageStyles(accent: Accent) {
  if (accent === "red") {
    return {
      border: "border-red-500/25 hover:border-red-400/45",
      badge: "border-red-400/25 bg-red-500/[0.09] text-red-400",
      text: "text-red-400",
      icon: "bg-red-500/[0.1] text-red-400",
      glow: "bg-red-500/[0.08]",
      line: "from-red-400 to-orange-400",
      connector:
        "border-red-400/25 bg-red-500/[0.08] text-red-400",
    };
  }

  if (accent === "emerald") {
    return {
      border: "border-emerald-500/25 hover:border-emerald-400/45",
      badge:
        "border-emerald-400/25 bg-emerald-500/[0.09] text-emerald-400",
      text: "text-emerald-400",
      icon: "bg-emerald-500/[0.1] text-emerald-400",
      glow: "bg-emerald-500/[0.08]",
      line: "from-emerald-400 to-cyan-400",
      connector:
        "border-emerald-400/25 bg-emerald-500/[0.08] text-emerald-400",
    };
  }

  return {
    border: "border-blue-500/25 hover:border-blue-400/45",
    badge: "border-blue-400/25 bg-blue-500/[0.09] text-blue-400",
    text: "text-blue-400",
    icon: "bg-blue-500/[0.1] text-blue-400",
    glow: "bg-blue-500/[0.08]",
    line: "from-blue-400 to-cyan-400",
    connector:
      "border-blue-400/25 bg-blue-500/[0.08] text-blue-400",
  };
}

function ManualProcessVisual() {
  return (
    <div className="relative h-[106px] overflow-hidden rounded-2xl border border-red-500/15 bg-gradient-to-br from-red-500/[0.055] via-white/[0.012] to-transparent px-4 py-3">
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-red-500/[0.1] blur-3xl" />

      <div className="absolute inset-x-5 bottom-3 h-px bg-gradient-to-r from-transparent via-red-400/15 to-transparent" />

      <motion.div
        animate={{
          y: [0, -2, 0],
          rotate: [-0.5, 0.5, -0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative mx-auto h-full max-w-[230px]"
      >
        <div className="absolute left-6 top-2 h-[69px] w-[112px] -rotate-[6deg] rounded-xl border border-white/[0.08] bg-[#101319] shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
          <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-3 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
            <span className="h-1.5 w-8 rounded-full bg-white/[0.1]" />
          </div>

          <div className="space-y-2 px-3 py-2.5">
            <span className="block h-1.5 w-full rounded-full bg-white/[0.07]" />
            <span className="block h-1.5 w-[78%] rounded-full bg-white/[0.07]" />
            <span className="block h-1.5 w-[58%] rounded-full bg-white/[0.07]" />
          </div>
        </div>

        <div className="absolute right-6 top-3 h-[72px] w-[116px] rotate-[5deg] rounded-xl border border-red-400/20 bg-[#161116] shadow-[0_20px_45px_rgba(0,0,0,0.4)]">
          <div className="flex items-center justify-between border-b border-white/[0.06] px-3 py-2">
            <span className="h-1.5 w-9 rounded-full bg-white/[0.12]" />

            <span className="flex h-4 w-4 items-center justify-center rounded-md bg-red-500/15 text-red-400">
              <AlertTriangle size={9} />
            </span>
          </div>

          <div className="space-y-2 px-3 py-2.5">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full border border-red-400/40" />
              <span className="h-1.5 flex-1 rounded-full bg-white/[0.07]" />
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full border border-red-400/40" />
              <span className="h-1.5 w-[70%] rounded-full bg-white/[0.07]" />
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full border border-red-400/40" />
              <span className="h-1.5 w-[48%] rounded-full bg-white/[0.07]" />
            </div>
          </div>
        </div>

        <motion.span
          animate={{
            scale: [1, 1.08, 1],
            boxShadow: [
              "0 0 0 rgba(248,113,113,0)",
              "0 0 24px rgba(248,113,113,0.18)",
              "0 0 0 rgba(248,113,113,0)",
            ],
          }}
          transition={{
            duration: 2.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-1 flex h-8 w-8 items-center justify-center rounded-xl border border-red-400/25 bg-[#1a1014] text-red-400"
        >
          <AlertTriangle size={14} />
        </motion.span>
      </motion.div>
    </div>
  );
}

function DigitalSolutionVisual() {
  return (
    <div className="relative h-[106px] overflow-hidden rounded-2xl border border-blue-500/15 bg-gradient-to-br from-blue-500/[0.06] via-white/[0.012] to-transparent px-4 py-3">
      <div className="pointer-events-none absolute -left-5 -top-10 h-28 w-28 rounded-full bg-blue-500/[0.11] blur-3xl" />

      <div className="relative mx-auto flex h-full max-w-[240px] items-center justify-center gap-8">
        <motion.div
          animate={{
            y: [0, -2, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10"
        >
          <div className="h-[72px] w-[118px] rounded-xl border border-blue-400/25 bg-[#0d1522] p-2 shadow-[0_20px_50px_rgba(14,87,171,0.2)]">
            <div className="flex h-full flex-col rounded-lg border border-white/[0.06] bg-[#0b1018]">
              <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-2 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                <span className="h-1.5 w-7 rounded-full bg-white/[0.1]" />
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
              </div>

              <div className="flex flex-1 gap-2 px-2 py-2">
                <div className="w-5 space-y-1">
                  <span className="block h-4 rounded bg-blue-500/15" />
                  <span className="block h-4 rounded bg-white/[0.04]" />
                </div>

                <div className="flex-1 space-y-1.5">
                  <span className="block h-1.5 w-full rounded-full bg-white/[0.08]" />
                  <span className="block h-1.5 w-[72%] rounded-full bg-white/[0.08]" />

                  <div className="flex items-center gap-1.5 pt-1">
                    <span className="block h-3 w-8 rounded bg-blue-500/20" />
                    <span className="block h-3 w-5 rounded bg-white/[0.05]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto h-2 w-7 rounded-b bg-blue-400/30" />
        </motion.div>

        <div className="pointer-events-none absolute left-[114px] top-1/2 h-px w-[46px] overflow-hidden bg-blue-400/15">
          <motion.span
            animate={{
              x: [-20, 52],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="block h-full w-5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
          />
        </div>

        <motion.div
          animate={{
            y: [0, 3, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10 h-[80px] w-[43px] rounded-[13px] border border-blue-400/30 bg-[#0c1420] p-1.5 shadow-[0_15px_35px_rgba(14,87,171,0.24)]"
        >
          <div className="flex h-full flex-col rounded-[9px] border border-white/[0.07] bg-[#091019]">
            <div className="mx-auto mt-1 h-1 w-2.5 rounded-full bg-white/[0.12]" />

            <div className="flex flex-1 items-center justify-center">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400">
                <ClipboardCheck size={15} />
              </span>
            </div>

            <span className="mx-auto mb-1 h-1.5 w-1.5 rounded-full border border-blue-400/30" />
          </div>

          <motion.span
            animate={{
              opacity: [0.35, 1, 0.35],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="absolute -right-1 top-3 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]"
          />
        </motion.div>
      </div>
    </div>
  );
}

function ResultVisual() {
  const bars = [13, 21, 29, 38, 47];

  return (
    <div className="relative h-[106px] overflow-hidden rounded-2xl border border-emerald-500/15 bg-gradient-to-br from-emerald-500/[0.06] via-white/[0.012] to-transparent px-4 py-3">
      <div className="pointer-events-none absolute -right-5 -top-10 h-28 w-28 rounded-full bg-emerald-500/[0.11] blur-3xl" />

      <div className="relative mx-auto flex h-full max-w-[240px] items-center justify-center">
        <div className="relative flex h-[78px] w-[190px] flex-col rounded-xl border border-emerald-400/20 bg-[#0b1513] p-3 shadow-[0_20px_45px_rgba(5,150,105,0.14)]">
          <div className="flex items-center justify-between">
            <div>
              <span className="block h-1.5 w-10 rounded-full bg-white/[0.12]" />
              <span className="mt-1.5 block h-1 w-16 rounded-full bg-white/[0.05]" />
            </div>

            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
              <TrendingUp size={12} />
            </span>
          </div>

          <div className="relative mt-auto flex h-[40px] items-end gap-2">
            {bars.map((height, index) => (
              <motion.span
                key={height}
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                whileInView={{
                  height,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.09,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex-1 rounded-t-[4px] bg-gradient-to-t from-emerald-600/55 to-emerald-400"
              >
                <span className="absolute inset-x-0 top-0 h-px bg-white/30" />
              </motion.span>
            ))}

            <svg
              viewBox="0 0 160 42"
              className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M3 36 C24 32, 43 30, 63 24 S103 19, 157 4"
                fill="none"
                stroke="rgb(52 211 153)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{
                  pathLength: 0,
                  opacity: 0,
                }}
                whileInView={{
                  pathLength: 1,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.25,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </svg>
          </div>
        </div>

        <motion.span
          animate={{
            scale: [1, 1.08, 1],
            boxShadow: [
              "0 0 0 rgba(52,211,153,0)",
              "0 0 25px rgba(52,211,153,0.16)",
              "0 0 0 rgba(52,211,153,0)",
            ],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-1 top-0 flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-400/25 bg-[#0d1c18] text-emerald-400"
        >
          <Check size={17} strokeWidth={3} />
        </motion.span>
      </div>
    </div>
  );
}

function StageVisual({ accent }: { accent: Accent }) {
  if (accent === "red") {
    return <ManualProcessVisual />;
  }

  if (accent === "blue") {
    return <DigitalSolutionVisual />;
  }

  return <ResultVisual />;
}

export default function CaseStudy() {
  return (
    <section
      id="case-study"
      className="relative overflow-hidden border-b border-white/[0.07] bg-[#0b0e13] py-14 text-white sm:py-16 lg:flex lg:min-h-[calc(100svh-84px)] lg:items-center lg:py-8"
    >
      {/* Fondo decorativo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-150px] top-[-180px] h-[360px] w-[360px] rounded-full bg-blue-500/[0.045] blur-[120px]" />

        <div className="absolute bottom-[-190px] left-[-170px] h-[340px] w-[340px] rounded-full bg-emerald-500/[0.025] blur-[120px]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/25 to-transparent" />

        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-10">
        {/* Encabezado */}
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
          className="grid items-end gap-5 lg:grid-cols-[1fr_auto]"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue-400" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-blue-300 sm:text-[11px]">
                Caso de éxito
              </p>
            </div>

            <h2 className="mt-2 max-w-[760px] text-[2rem] font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-[2.35rem] lg:text-[2.55rem]">
              Digitalización de procesos operativos
            </h2>

            <p className="mt-3 max-w-[690px] text-sm leading-6 text-zinc-400 sm:text-[15px]">
              Transformé registros manuales en soluciones digitales utilizadas
              diariamente en planta.
            </p>
          </div>

          {/* Empresa */}
          <motion.div
            whileHover={{
              y: -2,
              borderColor: "rgba(96,165,250,0.22)",
            }}
            className="inline-flex w-fit items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.018] px-3.5 py-2.5 shadow-[0_15px_40px_rgba(0,0,0,0.14)]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/[0.09] text-blue-400">
              <Building2 size={18} />
            </span>

            <div>
              <p className="text-sm font-semibold text-white">
                Camposol S.A.
              </p>

              <p className="mt-0.5 text-[11px] text-zinc-500">
                Producción · Calidad · Operaciones
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Flujo principal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="relative mt-6 grid gap-5 lg:grid-cols-3 lg:gap-8"
        >
          {stages.map((stage, index) => {
            const styles = getStageStyles(stage.accent);

            return (
              <div key={stage.number} className="relative">
                <motion.article
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 22,
                  }}
                  className={`group relative h-full overflow-hidden rounded-[24px] border bg-gradient-to-b from-white/[0.025] to-black/[0.12] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.16)] transition-all duration-300 ${styles.border}`}
                >
                  <div
                    className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl opacity-25 transition-opacity duration-500 group-hover:opacity-60 ${styles.glow}`}
                  />

                  <div className="relative z-10">
                    {/* Cabecera */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span
                          className={`rounded-lg border px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] ${styles.badge}`}
                        >
                          {stage.number}
                        </span>

                        <p
                          className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${styles.text}`}
                        >
                          {stage.label}
                        </p>
                      </div>

                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-xl ${styles.icon}`}
                      >
                        {stage.accent === "red" && (
                          <AlertTriangle size={15} />
                        )}

                        {stage.accent === "blue" && (
                          <MonitorSmartphone size={15} />
                        )}

                        {stage.accent === "emerald" && (
                          <FileCheck2 size={15} />
                        )}
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-bold tracking-[-0.03em] text-white">
                      {stage.title}
                    </h3>

                    <p className="mt-2 min-h-[42px] max-w-[310px] text-[12px] leading-[1.65] text-zinc-500">
                      {stage.description}
                    </p>

                    {/* Gráfico */}
                    <div className="mt-3.5">
                      <StageVisual accent={stage.accent} />
                    </div>

                    {/* Lista */}
                    <div className="mt-4 grid gap-2">
                      {stage.items.map((item) => (
                        <motion.div
                          key={item}
                          whileHover={{
                            x: 3,
                          }}
                          className="flex items-center gap-2.5"
                        >
                          <span
                            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${styles.icon}`}
                          >
                            {stage.accent === "red" ? (
                              <AlertTriangle size={10} />
                            ) : (
                              <Check size={10} strokeWidth={3} />
                            )}
                          </span>

                          <p className="text-[12px] text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                            {item}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <span
                    className={`absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r transition-all duration-500 group-hover:w-full ${styles.line}`}
                  />
                </motion.article>

                {/* Flechas en escritorio */}
                {index < stages.length - 1 && (
                  <div
                    className={`absolute -right-[24px] top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border shadow-[0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl lg:flex ${styles.connector}`}
                  >
                    <motion.div
                      animate={{
                        x: [0, 3, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowRight size={14} strokeWidth={2.2} />
                    </motion.div>
                  </div>
                )}

                {/* Flecha vertical en móvil */}
                {index < stages.length - 1 && (
                  <div className="flex h-8 items-center justify-center lg:hidden">
                    <motion.div
                      animate={{
                        y: [0, 3, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex h-7 w-7 rotate-90 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/[0.07] text-blue-400"
                    >
                      <ArrowRight size={12} />
                    </motion.div>
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>

        {/* Métricas */}
<motion.div
  initial={{
    opacity: 0,
    y: 18,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: true,
    amount: 0.25,
  }}
  transition={{
    duration: 0.6,
    delay: 0.12,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="mt-4 grid overflow-hidden rounded-[16px] border border-white/[0.08] bg-white/[0.018] shadow-[0_14px_40px_rgba(0,0,0,0.12)] sm:grid-cols-3"
>
  {metrics.map((metric, index) => {
    const Icon = metric.icon;

    return (
      <motion.div
        key={metric.label}
        whileHover={{
          backgroundColor: "rgba(59, 130, 246, 0.035)",
        }}
        className={`group flex min-h-[54px] items-center gap-3 px-4 py-2 ${
          index !== metrics.length - 1
            ? "border-b border-white/[0.07] sm:border-b-0 sm:border-r"
            : ""
        }`}
      >
        <motion.span
          whileHover={{
            scale: 1.08,
            rotate: 3,
          }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-blue-500/[0.09] text-blue-400 transition-colors duration-300 group-hover:bg-blue-500/[0.14]"
        >
          <Icon size={16} />
        </motion.span>

        <div className="min-w-0">
          <p className="text-[1.2rem] font-bold leading-none tracking-[-0.04em] text-white">
            {metric.value}
          </p>

          <p className="mt-1 truncate text-[10px] leading-none text-zinc-500">
            {metric.label}
          </p>
        </div>
      </motion.div>
    );
  })}
</motion.div>

{/* Beneficios */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="mt-3 flex w-full items-center justify-between gap-4"
>
  {[
    {
      icon: ShieldCheck,
      text: "Menos retrabajo",
    },
    {
      icon: ClipboardCheck,
      text: "Mayor calidad de datos",
    },
    {
      icon: TrendingUp,
      text: "Mejor trazabilidad",
    },
    {
      icon: FileText,
      text: "Información centralizada",
    },
  ].map((item) => {
    const Icon = item.icon;

    return (
      <motion.div
        key={item.text}
        whileHover={{
          y: -2,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 22,
        }}
        className="group flex flex-1 items-center justify-center gap-2 cursor-default"
      >
        {/* Punto */}
        <span className="relative flex h-2.5 w-2.5 items-center justify-center">
          <span className="absolute h-2 w-2 rounded-full bg-blue-400/25 opacity-0 blur-sm transition-all duration-300 group-hover:scale-[2.5] group-hover:opacity-100" />

          <span className="relative h-1.5 w-1.5 rounded-full bg-blue-400 transition-all duration-300 group-hover:scale-150" />
        </span>

        {/* Icono */}
        <Icon
          size={12}
          className="text-blue-400 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,.8)]"
        />

        {/* Texto */}
        <span className="text-[11px] whitespace-nowrap text-zinc-500 transition-all duration-300 group-hover:text-white">
          {item.text}
        </span>
      </motion.div>
    );
  })}
</motion.div>
      </div>
    </section>
  );
}