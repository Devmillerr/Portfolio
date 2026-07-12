"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const certifications = [
  {
    title: "Prisma ORM",
    institution: "Zeew Space",
    year: "2024",
    description:
      "Modelado de datos, relaciones, consultas y trabajo con Prisma ORM en aplicaciones Backend.",
    credentialUrl: "#",
  },
  {
    title: "Git y GitHub Professional",
    institution: "Zeew Space",
    year: "2024",
    description:
      "Control de versiones, gestión de repositorios, ramas, colaboración y flujo de trabajo con GitHub.",
    credentialUrl: "#",
  },
  {
    title: "Artificial Intelligence with Machine Learning in Java",
    institution: "Oracle Academy",
    year: "2023",
    description:
      "Fundamentos de inteligencia artificial, machine learning y desarrollo de soluciones con Java.",
    credentialUrl: "#",
  },
  {
    title: "SQL Avanzado",
    institution: "Kaggle",
    year: "2023",
    description:
      "Consultas avanzadas, joins, funciones, subconsultas y análisis de datos con SQL.",
    credentialUrl: "#",
  },
  {
    title: "Desarrollo de Aplicaciones Móviles",
    institution: "Google Actívate",
    year: "2023",
    description:
      "Fundamentos de diseño y desarrollo de aplicaciones móviles.",
    credentialUrl: "#",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-[#0c0f14] py-28 text-white"
    >
      <div className="pointer-events-none absolute left-[-180px] top-24 h-[420px] w-[420px] rounded-full bg-blue-500/[0.05] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionTitle
          subtitle="FORMACIÓN CONTINUA"
          title="Certificaciones y cursos"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((certification, index) => (
            <motion.article
              key={`${certification.title}-${certification.institution}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/35"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Award size={24} />
                </div>

                <span className="rounded-full border border-white/10 bg-zinc-950 px-3 py-1 text-xs font-semibold text-zinc-400">
                  {certification.year}
                </span>
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
                {certification.institution}
              </p>

              <h3 className="mt-3 text-2xl font-bold leading-tight text-white">
                {certification.title}
              </h3>

              <p className="mt-5 flex-1 leading-7 text-zinc-400">
                {certification.description}
              </p>

              {certification.credentialUrl !== "#" ? (
                <a
                  href={certification.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-400 transition hover:text-blue-300"
                >
                  Ver certificado
                  <ExternalLink size={17} />
                </a>
              ) : (
                <p className="mt-7 text-sm text-zinc-600">
                  Enlace de certificado pendiente
                </p>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}