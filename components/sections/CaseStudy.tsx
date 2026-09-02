"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  Check,
  FileCheck2,
  MonitorSmartphone,
} from "lucide-react";

import { EASE } from "@/lib/motion";

import { FlowDiagram } from "./case-study/FlowDiagram";
import { metrics, stages } from "./case-study/data";
import { EditorialJourney } from "./case-study/EditorialJourney";
import { containerVariants, itemVariants } from "./case-study/motion-variants";
import { getStageStyles, StageVisual } from "./case-study/stage-visuals";

export default function CaseStudy() {
  return (
    <section
      id="case-study"
      className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--background)] py-16 text-[var(--foreground)] sm:py-20 lg:py-24"
    >
      {/* Fondo decorativo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-150px] top-[-180px] h-[360px] w-[360px] rounded-full bg-[var(--accent)]/[0.05] blur-[120px]" />

        <div className="absolute bottom-[-190px] left-[-170px] h-[340px] w-[340px] rounded-full bg-[var(--accent)]/[0.03] blur-[120px]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/25 to-transparent" />

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
            ease: EASE,
          }}
          className="grid items-end gap-5 lg:grid-cols-[1fr_auto]"
        >
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">
              03 · Caso de estudio
            </p>

            <h2 className="mt-3 max-w-[900px] font-display text-[1.8rem] font-semibold uppercase leading-[1.14] tracking-[0.015em] sm:text-[2.2rem] lg:text-[2.5rem]">
              60+ procesos digitalizados.
            </h2>

            <p className="mt-3 max-w-[690px] text-[15px] leading-6 text-[var(--muted)]">
              Transformé registros manuales en soluciones digitales utilizadas
              diariamente en planta.
            </p>
          </div>

          {/* Empresa */}
          <motion.div
            whileHover={{ y: -2 }}
            className="inline-flex w-fit items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--border-strong)] bg-white/[0.015] px-3.5 py-2.5 shadow-[0_15px_40px_rgba(0,0,0,0.14)] transition-colors duration-200 hover:border-[var(--accent)]/30"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--accent-dim)] text-[var(--accent)]">
              <Building2 size={18} />
            </span>

            <div>
              <p className="text-sm font-semibold text-[var(--foreground)]">Camposol S.A.</p>

              <p className="mt-0.5 text-[11px] text-[var(--muted)]">
                Producción · Calidad · Operaciones
              </p>
            </div>
          </motion.div>
        </motion.div>

        <FlowDiagram />

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
                        {stage.accent === "red" && <AlertTriangle size={15} />}

                        {stage.accent === "blue" && (
                          <MonitorSmartphone size={15} />
                        )}

                        {stage.accent === "emerald" && <FileCheck2 size={15} />}
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-bold tracking-[-0.03em] text-[var(--foreground)]">
                      {stage.title}
                    </h3>

                    <p className="mt-2 min-h-[42px] max-w-[310px] text-[12px] leading-[1.65] text-[var(--muted)]">
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

                          <p className="text-[12px] text-[var(--muted)] transition-colors duration-300 group-hover:text-[var(--foreground)]/80">
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
                      className="flex h-7 w-7 rotate-90 items-center justify-center rounded-full border border-[var(--accent)]/20 bg-[var(--accent-dim)] text-[var(--accent)]"
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
            ease: EASE,
          }}
          className="mt-4 grid overflow-hidden rounded-[16px] border border-[var(--border-strong)] bg-white/[0.015] shadow-[0_14px_40px_rgba(0,0,0,0.12)] sm:grid-cols-3"
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon;

            return (
              <motion.div
                key={metric.label}
                whileHover={{
                  backgroundColor: "rgba(178, 102, 255, 0.035)",
                }}
                className={`group flex min-h-[54px] items-center gap-3 px-4 py-2 ${
                  index !== metrics.length - 1
                    ? "border-b border-[var(--border)] sm:border-b-0 sm:border-r"
                    : ""
                }`}
              >
                <motion.span
                  whileHover={{
                    scale: 1.08,
                    rotate: 3,
                  }}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[var(--accent-dim)] text-[var(--accent)] transition-colors duration-300 group-hover:bg-[var(--accent-dim)]"
                >
                  <Icon size={16} />
                </motion.span>

                <div className="min-w-0">
                  <p className="text-[1.2rem] font-bold leading-none tracking-[-0.04em] text-[var(--foreground)]">
                    {metric.value}
                  </p>

                  <p className="mt-1 truncate text-[10px] leading-none text-[var(--muted)]">
                    {metric.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <EditorialJourney />
      </div>
    </section>
  );
}
