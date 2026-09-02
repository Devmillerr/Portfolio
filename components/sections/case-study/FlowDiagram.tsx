"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

import { flowStages } from "./data";

export function FlowDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 78%", "end 55%"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative mt-10 sm:mt-12">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--muted-2)]">
        El flujo que rediseñé
      </p>

      <div className="relative mt-5 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 sm:gap-6">
        {/* Línea conectora — se dibuja según el scroll */}
        <div className="pointer-events-none absolute left-[10%] right-[10%] top-[26px] hidden h-px bg-[var(--border)] sm:block" />
        <motion.div
          aria-hidden
          style={{ scaleX: lineScale }}
          className="pointer-events-none absolute left-[10%] right-[10%] top-[26px] hidden h-px origin-left bg-[var(--accent)] sm:block"
        />

        {flowStages.map((stage, index) => {
          const Icon = stage.icon;
          const isLast = index === flowStages.length - 1;

          return (
            <div key={stage.id} className="relative flex flex-col items-start gap-3">
              <div className="flex items-center gap-2.5">
                <span className="relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-strong)] bg-[var(--panel)] text-[var(--accent)] shadow-[0_10px_28px_rgba(0,0,0,0.28)]">
                  <Icon size={20} />
                </span>

                {!isLast && (
                  <ArrowRight size={14} className="shrink-0 text-[var(--muted-2)] sm:hidden" />
                )}
              </div>

              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--muted-2)]">
                  0{index + 1}
                </p>
                <p className="mt-1 text-[13.5px] font-semibold text-[var(--foreground)]">
                  {stage.label}
                </p>
                <p className="mt-1 max-w-[160px] text-[11.5px] leading-5 text-[var(--muted)]">
                  {stage.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
