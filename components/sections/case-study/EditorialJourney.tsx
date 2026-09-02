"use client";

import { motion } from "framer-motion";

import { EASE } from "@/lib/motion";

import { editorialSteps } from "./data";
import { containerVariants, itemVariants } from "./motion-variants";

export function EditorialJourney() {
  return (
    <div className="mt-16 border-t border-[var(--border)] pt-14 sm:mt-20 sm:pt-16">
      {/* Encabezado */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
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
          ease: EASE,
        }}
        className="max-w-[520px]"
      >
        <div>
          <p className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[var(--accent)]">
            El proceso detrás
          </p>

          <h3 className="mt-3 max-w-[430px] font-display text-[1.5rem] font-semibold uppercase leading-[1.18] tracking-[0.015em] text-[var(--foreground)] sm:text-[1.8rem]">
            De la necesidad a producción.
          </h3>
        </div>
      </motion.div>

      {/* Contenido */}
      <div
        className="grid
    gap-12
    lg:grid-cols-[320px_minmax(0,1fr)]
    lg:gap-20
    xl:grid-cols-[360px_minmax(0,1fr)]
    xl:gap-28"
      >
        {/* Información lateral */}
        <motion.aside
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mt-10 h-fit lg:sticky lg:top-28"
        >
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]/75 sm:text-[10px]">
            Mi participación
          </p>

          <p className="mt-2 text-[13px] font-medium leading-5 text-[var(--muted)]">
            Ciclo completo de la solución.
          </p>

          <div className="mt-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--accent)]/40" />

            <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-[var(--muted-2)]">
              De principio a fin
            </span>
          </div>

          <p className="mt-5 max-w-[210px] text-[12px] leading-6 text-[var(--muted)]">
            Análisis, diseño, implementación, QA y mejora continua aplicados a
            una operación industrial real.
          </p>
        </motion.aside>

        {/* Línea de tiempo */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="relative lg:-mt-25"
        >
          {/* Línea vertical */}
          <div className="absolute bottom-0 left-[18px] top-0 w-px bg-gradient-to-b from-[var(--accent)]/40 via-[var(--accent)]/15 to-transparent sm:left-[21px]" />

          {editorialSteps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === editorialSteps.length - 1;

            return (
              <motion.article
                key={step.number}
                variants={itemVariants}
                className="
                  group
                  relative
                  grid
                  grid-cols-[38px_1fr]
                  gap-5
                  sm:grid-cols-[44px_1fr]
                  sm:gap-6
                "
              >
                {/* Icono */}
                <motion.div
                  whileHover={{
                    scale: 1.07,
                    rotate: -3,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 20,
                  }}
                  className="
                    relative
                    z-10
                    flex
                    h-[38px]
                    w-[38px]
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[var(--border-strong)]
                    bg-[var(--panel)]
                    text-[var(--accent)]
                    shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                    transition-colors
                    duration-300
                    group-hover:border-[var(--accent)]/35
                    group-hover:bg-[var(--accent-dim)]
                    sm:h-11
                    sm:w-11
                  "
                >
                  <Icon size={16} />
                </motion.div>

                {/* Información */}
                <div
                  className={`
                    ${
                      isLast
                        ? "pb-0"
                        : "mb-7 border-b border-[var(--border)] pb-7"
                    }
                  `}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[9px] font-semibold tracking-[0.18em] text-[var(--accent)]/60">
                      {step.number}
                    </span>

                    <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)] sm:text-[10px]">
                      {step.label}
                    </span>
                  </div>

                  <h4 className="mt-2.5 max-w-[650px] text-[17px] font-bold leading-tight tracking-[-0.025em] text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--accent)] sm:text-lg">
                    {step.title}
                  </h4>

                  <p className="mt-2 max-w-[680px] text-[12px] leading-[1.7] text-[var(--muted)] transition-colors duration-300 group-hover:text-[var(--muted)] sm:text-[13px]">
                    {step.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
