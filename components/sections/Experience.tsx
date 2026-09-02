"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { Building2, CalendarDays, GraduationCap } from "lucide-react";
import { useRef, useState, type MouseEvent } from "react";

import { experiences } from "@/lib/constants";
import { EASE } from "@/lib/motion";

const icons = { "Camposol S.A.": Building2, "I.E. Inmaculada de la Merced": GraduationCap } as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

type ExperienceRowProps = {
  experience: (typeof experiences)[number];
};

function ExperienceRow({ experience }: ExperienceRowProps) {
  const rowRef = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 170, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 170, damping: 24 });

  const spotlight = useMotionTemplate`
    radial-gradient(300px circle at ${smoothX}px ${smoothY}px, color-mix(in srgb, var(--accent) 8%, transparent), transparent 72%)
  `;

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = rowRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  const Icon = icons[experience.company as keyof typeof icons] ?? Building2;

  return (
    <motion.article
      ref={rowRef}
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden border-t border-[var(--border)] py-7 first:border-t-0 sm:py-8"
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
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 top-0 h-px w-28 bg-gradient-to-r from-[var(--accent)] to-transparent"
        />
      )}

      <div className="relative z-10 grid gap-7 lg:grid-cols-[180px_minmax(0,1fr)_270px] lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--border-strong)] bg-white/[0.015] text-[var(--muted)]">
              <Icon size={17} />
            </span>
            <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--muted-2)]">
              {experience.number}
            </span>
          </div>

          <div className="mt-5 flex items-center gap-2 text-[12px] text-[var(--muted)]">
            <CalendarDays size={13} />
            <span>{experience.period}</span>
          </div>

          <div className="mt-3 flex items-center gap-2">
            {experience.current && (
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-30" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              </span>
            )}
            <span
              className={`font-mono text-[9.5px] font-semibold uppercase tracking-[0.18em] ${
                experience.current ? "text-[var(--accent)]" : "text-[var(--muted-2)]"
              }`}
            >
              {experience.status}
            </span>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-[var(--accent)]">{experience.company}</p>
          <p className="mt-1 text-[11px] text-[var(--muted-2)]">{experience.context}</p>

          <h3 className="mt-4 font-sans text-[1.3rem] font-semibold leading-[1.2] tracking-[-0.01em] text-[var(--foreground)] sm:text-[1.5rem]">
            {experience.position}
          </h3>

          <p className="mt-1.5 text-sm font-medium text-[var(--muted)]">
            {experience.secondaryPosition}
          </p>

          <p className="mt-4 max-w-[610px] text-[13.5px] leading-6 text-[var(--muted)]">
            {experience.description}
          </p>

          <p className="mt-5 font-mono text-[9.5px] uppercase tracking-[0.18em] text-[var(--muted-2)]">
            {experience.note}
          </p>
        </div>

        <div className="lg:border-l lg:border-[var(--border)] lg:pl-8">
          <p className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-[var(--muted-2)]">
            Enfoque
          </p>

          <div className="mt-4 space-y-3">
            {experience.highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: EASE }}
                whileHover={{ x: 4 }}
                className="flex cursor-default items-center gap-3"
              >
                <span className="h-px w-4 bg-[var(--accent)]/50 transition-all duration-300 group-hover:w-5" />
                <span className="text-[12px] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--foreground)]">
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
      className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--background)] py-16 text-[var(--foreground)] sm:py-20 lg:py-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: EASE }}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">
              02 · Trayectoria
            </p>

            <h2 className="mt-4 font-display text-[1.55rem] font-semibold uppercase leading-[1.15] tracking-[0.015em] sm:text-[1.9rem]">
              Entre código y operación.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
            className="max-w-[650px] text-[15px] leading-7 text-[var(--muted)]"
          >
            Del desarrollo backend al análisis, implementación y QA de software.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-8"
        >
          {experiences.map((experience) => (
            <ExperienceRow key={`${experience.company}-${experience.position}`} experience={experience} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
