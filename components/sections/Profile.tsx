"use client";

import { useRef, useState, type MouseEvent } from "react";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

import { Braces, ClipboardCheck, Layers3, Workflow } from "lucide-react";

import { EASE } from "@/lib/motion";

const capabilities = [
  {
    number: "01",
    title: "Análisis funcional",
    description: "Comprendo necesidades y las convierto en requerimientos claros.",
    icon: Workflow,
  },
  {
    number: "02",
    title: "Diseño de soluciones",
    description: "Defino reglas, validaciones y flujos para construir soluciones funcionales.",
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

const workSteps = ["Necesidad", "Diseño técnico", "Desarrollo e implementación", "Validación y mejora"];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

type CapabilityCardProps = {
  capability: (typeof capabilities)[number];
};

function CapabilityCard({ capability }: CapabilityCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 180, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 180, damping: 24 });

  const spotlight = useMotionTemplate`
    radial-gradient(170px circle at ${smoothX}px ${smoothY}px, var(--accent-dim), transparent 72%)
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
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative min-h-[192px] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--panel)] p-5 transition-colors duration-300 hover:border-[var(--border-strong)]"
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ background: spotlight }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />

      <div className="relative z-10 flex min-h-[168px] flex-col">
        <div className="flex items-center justify-between">
          <motion.div
            animate={{ y: hovered ? -2 : 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 20 }}
            className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--border-strong)] bg-white/[0.02] text-[var(--muted)] transition-colors duration-300 group-hover:border-[var(--accent)]/35 group-hover:text-[var(--accent)]"
          >
            <Icon size={18} />
          </motion.div>

          <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--muted-2)]">
            {capability.number}
          </span>
        </div>

        <h3 className="mt-5 text-[17px] font-semibold tracking-[-0.02em] text-[var(--foreground)]">
          {capability.title}
        </h3>

        <p className="mt-2 text-[13px] leading-[1.65] text-[var(--muted)]">
          {capability.description}
        </p>

        <span className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />
      </div>
    </motion.article>
  );
}

export default function Profile() {
  return (
    <section
      id="profile"
      className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--background)] py-16 text-[var(--foreground)] sm:py-20 lg:py-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-[820px]"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">
            01 · Mi enfoque
          </p>

          <h2 className="mt-4 font-display text-[1.7rem] font-semibold uppercase leading-[1.16] tracking-[0.015em] sm:text-[2.1rem]">
            Cómo convierto necesidades en soluciones.
          </h2>

          <p className="mt-4 max-w-[620px] text-[15px] leading-7 text-[var(--muted)]">
            Analizo, diseño, desarrollo e implemento soluciones de software orientadas a resolver
            necesidades reales.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-10 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {capabilities.map((capability) => (
            <CapabilityCard key={capability.title} capability={capability} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="mt-10 border-t border-[var(--border)] pt-6"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="shrink-0 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted-2)]">
              Ciclo de solución
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-3 sm:gap-x-5">
              {workSteps.map((step, index) => (
                <div key={step} className="flex items-center gap-4 sm:gap-5">
                  <span className="cursor-default text-[13px] font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">
                    {step}
                  </span>
                  {index < workSteps.length - 1 && (
                    <span className="text-xs text-[var(--accent)]/50">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
