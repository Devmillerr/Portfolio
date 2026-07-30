"use client";

import { useId, useRef, useState, type MouseEvent } from "react";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

import { Braces, ClipboardCheck, Layers3, Workflow } from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Análisis funcional",
    description:
      "Comprendo necesidades y las convierto en requerimientos claros.",
    icon: Workflow,
  },
  {
    number: "02",
    title: "Diseño de soluciones",
    description:
      "Defino reglas, validaciones y flujos para construir soluciones funcionales.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "QA y despliegue",
    description: "Valido el software y acompaño su puesta en producción.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Desarrollo de software",
    description: "Construyo aplicaciones, APIs REST y soluciones backend.",
    icon: Braces,
  },
];

const workSteps = [
  "Necesidad",
  "Diseño técnico",
  "Desarrollo e implementación",
  "Validación y mejora",
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
    y: 22,
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

type CapabilityCardProps = {
  capability: (typeof capabilities)[number];
};

function CapabilityCard({ capability }: CapabilityCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState(false);
  const glowId = useId().replace(/:/g, "");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 180,
    damping: 24,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 180,
    damping: 24,
  });

  const spotlight = useMotionTemplate`
    radial-gradient(
      170px circle at ${smoothX}px ${smoothY}px,
      rgba(59, 130, 246, 0.15),
      transparent 72%
    )
  `;

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();

    if (!rect) return;

    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  const Icon = capability.icon;

  return (
    <motion.article
      ref={cardRef}
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{
        y: -6,
        scale: 1.01,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 22,
      }}
      className="
        group
        relative
        min-h-[200px]
        overflow-hidden
        rounded-2xl
        bg-[#0b0f16]/95
        p-px
      "
    >
      {/* Borde base */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/[0.075]" />

      {/* Línea azul animada */}
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <defs>
          <filter id={glowId}>
            <feGaussianBlur stdDeviation="1.5" result="blur" />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect
          x="0.7"
          y="0.7"
          width="98.6"
          height="98.6"
          rx="7"
          ry="7"
          fill="none"
          stroke="rgba(59,130,246,0.08)"
          strokeWidth="0.7"
          vectorEffect="non-scaling-stroke"
        />

        {hovered && (
          <motion.rect
            x="0.7"
            y="0.7"
            width="98.6"
            height="98.6"
            rx="7"
            ry="7"
            fill="none"
            stroke="rgba(96,165,250,0.95)"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeDasharray="14 386"
            vectorEffect="non-scaling-stroke"
            filter={`url(#${glowId})`}
            initial={{
              opacity: 0,
              strokeDashoffset: 0,
            }}
            animate={{
              opacity: 1,
              strokeDashoffset: -400,
            }}
            transition={{
              opacity: {
                duration: 0.18,
              },
              strokeDashoffset: {
                duration: 5.5,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          />
        )}
      </svg>

      {/* Gradiente interior */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/[0.025] via-transparent to-cyan-400/[0.012]" />

      {/* Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background: spotlight,
        }}
        animate={{
          opacity: hovered ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
      />

      {/* Glow superior */}
      <div className="pointer-events-none absolute left-1/2 top-[-90px] h-48 w-48 -translate-x-1/2 rounded-full bg-blue-500/[0.13] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Contenido */}
      <div className="relative z-10 flex min-h-[198px] flex-col rounded-[15px] bg-[#0b0f16]/90 p-6 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <motion.div
            animate={{
              rotate: hovered ? -5 : 0,
              scale: hovered ? 1.08 : 1,
              y: hovered ? -2 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 20,
            }}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-white/[0.08]
              bg-white/[0.025]
              text-blue-400
              shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
              transition-colors
              duration-300
              group-hover:border-blue-400/35
              group-hover:bg-blue-500/[0.09]
              group-hover:text-blue-300
            "
          >
            <Icon size={20} />
          </motion.div>

          <motion.span
            animate={{
              color: hovered ? "rgba(96,165,250,0.72)" : "rgba(63,63,70,1)",
            }}
            className="text-[10px] font-semibold tracking-[0.2em]"
          >
            {capability.number}
          </motion.span>
        </div>

        <h3 className="mt-5 text-lg font-bold tracking-[-0.025em] text-white transition-colors duration-300 group-hover:text-blue-200 sm:text-xl">
          {capability.title}
        </h3>

        <p className="mt-2.5 text-[13px] leading-[1.65] text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400">
          {capability.description}
        </p>

        {/* Línea inferior */}
        <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-400 via-cyan-300 to-transparent transition-all duration-500 group-hover:w-full" />
      </div>

      {/* Destello */}
      <div className="pointer-events-none absolute -left-24 top-0 z-20 h-full w-12 -skew-x-12 bg-gradient-to-r from-transparent via-blue-300/10 to-transparent opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100" />
    </motion.article>
  );
}

export default function Profile() {
  return (
    <section
      id="profile"
      className="
        relative
        overflow-hidden
        border-b
        border-white/[0.07]
        bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_34%),linear-gradient(180deg,#0b0e13_0%,#090b0f_100%)]
        py-14
        text-white
        sm:py-16
        lg:flex
        lg:min-h-[calc(100svh-76px)]
        lg:items-center
        lg:py-12
      "
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
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-[900px]"
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
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-px w-8 origin-left bg-blue-400"
            />

            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-300 sm:text-[11px]">
              Mi enfoque
            </p>
          </div>

          <h2 className="mt-5 text-[1.95rem] font-extrabold leading-[1.06] tracking-[-0.04em] sm:text-[2.35rem] lg:whitespace-nowrap lg:text-[2.65rem]">
            Cómo convierto necesidades en soluciones.
          </h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 14,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: 0.55,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-4 max-w-[760px] text-sm leading-6 text-zinc-400 sm:text-[15px]"
          >
            Analizo, diseño, desarrollo e implemento soluciones de software
            orientadas a resolver necesidades reales.
          </motion.p>
        </motion.div>

        {/* Capacidades principales */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="relative mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Línea conectora */}
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-[22px] hidden h-px bg-gradient-to-r from-transparent via-blue-400/10 to-transparent lg:block" />

          {capabilities.map((capability) => (
            <CapabilityCard key={capability.title} capability={capability} />
          ))}
        </motion.div>

        {/* Ciclo de solución */}
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
          className="mt-8 border-t border-white/[0.055] pt-6"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.22em] text-blue-300/70 sm:text-[10px]">
              Ciclo de solución
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-3 sm:gap-x-5">
              {workSteps.map((step, index) => (
                <div key={step} className="flex items-center gap-4 sm:gap-5">
                  <motion.span
                    whileHover={{
                      color: "#bfdbfe",
                      y: -1,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="cursor-default text-xs font-medium text-zinc-500 sm:text-[13px]"
                  >
                    {step}
                  </motion.span>

                  {index < workSteps.length - 1 && (
                    <span className="text-xs text-blue-400/45">→</span>
                  )}
                </div>
              ))}
            </div>

            <p className="hidden text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-600 xl:block">
              Software con propósito
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
