"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Building2, Code2, Layers3, LockKeyhole, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

import DigiProyDemo from "@/components/projects/DigiProyDemo";
import RepoStats from "@/components/projects/RepoStats";
import { primaryProject, secondaryProjects } from "@/lib/constants";
import { EASE } from "@/lib/motion";

const projectMetrics = [
  { value: "60+", label: "Procesos", icon: TrendingUp },
  { value: "50+", label: "Usuarios", icon: Users },
  { value: "3+", label: "Áreas", icon: Layers3 },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--background)] py-16 text-[var(--foreground)] sm:py-20 lg:py-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">
              04 · Portafolio
            </p>
            <h2 className="mt-3 font-display text-[1.55rem] font-semibold uppercase leading-[1.15] tracking-[0.015em] sm:text-[1.9rem]">
              Soluciones que he construido.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-[380px] text-[13px] leading-6 text-[var(--muted)] lg:text-right"
          >
            Soluciones para optimizar procesos industriales y desarrollar aplicaciones backend.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-8 grid items-stretch gap-4 lg:grid-cols-[1.35fr_0.65fr]"
        >
          {/* Proyecto principal: Camposol */}
          <motion.article
            variants={itemVariants}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
            className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--accent)]/20 bg-[var(--panel)] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.25)] transition-colors duration-500 hover:border-[var(--accent)]/40 sm:p-5"
          >
            <div className="relative">
              <DigiProyDemo />
            </div>

            <div className="relative flex flex-1 flex-col px-1 pb-1 pt-4">
              <div>
                <div className="flex items-center gap-2 font-mono text-[9.5px] uppercase tracking-[0.16em] text-[var(--accent)]">
                  <Building2 size={13} />
                  {primaryProject.eyebrow}
                </div>

                <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] sm:text-2xl">
                  {primaryProject.title}
                </h3>

                <p className="mt-2 max-w-3xl text-[13px] leading-6 text-[var(--muted)] sm:text-sm">
                  {primaryProject.description}
                </p>
              </div>

              <div className="mt-auto pt-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                      {projectMetrics.map((metric) => {
                        const Icon = metric.icon;
                        return (
                          <div key={metric.label} className="flex items-center gap-2">
                            <span className="flex h-7 w-7 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--accent-dim)] text-[var(--accent)]">
                              <Icon size={13} />
                            </span>
                            <div>
                              <p className="font-mono text-[13px] font-medium leading-none text-[var(--foreground)]">
                                {metric.value}
                              </p>
                              <p className="mt-1 text-[9px] leading-none text-[var(--muted-2)]">
                                {metric.label}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {primaryProject.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-[var(--border)] bg-white/[0.015] px-2.5 py-1 text-[9px] text-[var(--muted)]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="#case-study"
                    className="group/button inline-flex h-9 w-fit shrink-0 items-center justify-center gap-2 rounded-[var(--radius-sm)] border border-[var(--border-strong)] bg-white/[0.02] px-3.5 text-[11px] font-semibold text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]/40"
                  >
                    Ver implementación
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                    />
                  </Link>
                </div>

                <div className="mt-4 flex items-center gap-2 border-t border-[var(--border)] pt-3 font-mono text-[9px] text-[var(--muted-2)]">
                  <LockKeyhole size={11} className="text-[var(--accent)]/70" />
                  <span className="font-medium text-[var(--muted)]">Proyecto corporativo:</span>
                  <span>información sensible omitida.</span>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Proyectos secundarios — con estadísticas reales de GitHub */}
          <div className="grid h-full gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2">
            {secondaryProjects.map((project, index) => (
              <motion.article
                key={project.title}
                variants={itemVariants}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--panel)] p-4 shadow-[0_20px_55px_rgba(0,0,0,0.2)] transition-colors duration-300 hover:border-[var(--accent)]/30"
              >
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--accent)]">
                    {project.eyebrow}
                  </p>
                  <Code2 size={14} className="text-[var(--muted-2)]" />
                </div>

                <h3 className="mt-2.5 text-lg font-semibold tracking-[-0.015em]">{project.title}</h3>

                <p className="mt-2 text-[13px] leading-6 text-[var(--muted)]">
                  {project.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-[var(--border)] bg-white/[0.015] px-2 py-1 text-[9px] text-[var(--muted)]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-4">
                  <RepoStats repo={project.repo} />

                  <a
                    href={`https://github.com/${project.repo}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link mt-3 flex items-center justify-between border-t border-[var(--border)] pt-3 transition-colors duration-300 hover:border-[var(--accent)]/25"
                  >
                    <span className="text-xs font-semibold text-[var(--foreground)]/90">
                      Ver repositorio
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-[var(--muted-2)] transition-all duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-hover/link:text-[var(--accent)]"
                    />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
