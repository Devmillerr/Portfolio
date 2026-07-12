"use client";

import { motion } from "framer-motion";
import {
  Building2,
  CalendarDays,
  Code2,
  Database,
  Rocket,
  TestTube2,
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const experiences = [
  {
    company: "Camposol S.A.",
    position: "Software Implementation Analyst | QA Tester",
    period: "Septiembre 2024 — Actualidad",
    description:
      "Implementación y validación de soluciones digitales para procesos operativos de Producción, Calidad y Operaciones.",
    achievements: [
      "Digitalización de aproximadamente 40 cartillas operativas mediante Digiproy.",
      "Soluciones utilizadas por más de 50 colaboradores.",
      "Levantamiento y análisis de requerimientos con usuarios de negocio.",
      "Configuración de reglas, validaciones, cálculos y controles de captura.",
      "Ejecución de pruebas funcionales en ambiente QA y dispositivos PDA.",
      "Coordinación de pases a producción, accesos y sincronización de información.",
      "Capacitación, soporte funcional y seguimiento de incidencias.",
    ],
    technologies: [
      "Digiproy",
      "QA Testing",
      "PDA",
      "Análisis funcional",
      "Implementación",
      "Soporte",
    ],
    icon: Rocket,
  },
  {
    company: "I.E. Inmaculada de la Merced",
    position: "Backend Developer — Prácticas",
    period: "Julio 2022 — Enero 2024",
    description:
      "Desarrollo de servicios Backend para la gestión de información institucional utilizando una arquitectura modular.",
    achievements: [
      "Desarrollo de una API REST con NestJS, TypeScript y PostgreSQL.",
      "Implementación de autenticación y autorización mediante JWT.",
      "Creación de controladores, servicios, módulos y DTOs.",
      "Validación de datos y organización de la lógica de negocio.",
      "Generación automatizada de reportes PDF con pdfMake.",
      "Modelado de base de datos y pruebas de endpoints mediante Postman.",
    ],
    technologies: [
      "NestJS",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "JWT",
      "Postman",
    ],
    icon: Code2,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#090b0f] py-28 text-white"
    >
      <div className="pointer-events-none absolute left-[-180px] top-32 h-[400px] w-[400px] rounded-full bg-blue-500/[0.05] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionTitle
          subtitle="TRAYECTORIA"
          title="Experiencia profesional"
        />

        <div className="relative mx-auto max-w-5xl">
          {/* Línea vertical */}
          <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-gradient-to-b from-blue-500 via-zinc-700 to-transparent md:block" />

          <div className="space-y-10">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <motion.article
                  key={experience.company}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.12,
                  }}
                  className="relative md:pl-16"
                >
                  {/* Punto de la línea */}
                  <div className="absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border border-blue-500/30 bg-[#090b0f] text-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.2)] md:flex">
                    <Icon size={19} />
                  </div>

                  <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:border-white/20 md:p-10">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <div className="flex items-center gap-3">
                          <Building2
                            size={21}
                            className="text-blue-400"
                          />

                          <p className="font-semibold text-blue-400">
                            {experience.company}
                          </p>
                        </div>

                        <h3 className="mt-4 text-2xl font-black tracking-tight text-white md:text-3xl">
                          {experience.position}
                        </h3>
                      </div>

                      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-zinc-950 px-4 py-2 text-sm text-zinc-400">
                        <CalendarDays size={16} />
                        {experience.period}
                      </div>
                    </div>

                    <p className="mt-7 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">
                      {experience.description}
                    </p>

                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                      {experience.achievements.map((achievement) => (
                        <div
                          key={achievement}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />

                          <p className="leading-7 text-zinc-300">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-9 border-t border-white/10 pt-7">
                      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                        Tecnologías y competencias
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/10 bg-zinc-950 px-3 py-1.5 text-xs font-medium text-zinc-300"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Resumen inferior */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3"
        >
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <TestTube2 className="text-blue-400" />

            <div>
              <p className="font-bold text-white">QA funcional</p>
              <p className="text-sm text-zinc-500">
                Validación antes del despliegue
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <Database className="text-blue-400" />

            <div>
              <p className="font-bold text-white">Backend</p>
              <p className="text-sm text-zinc-500">
                APIs, datos y lógica de negocio
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
            <Rocket className="text-blue-400" />

            <div>
              <p className="font-bold text-white">Implementación</p>
              <p className="text-sm text-zinc-500">
                Del requerimiento a producción
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}