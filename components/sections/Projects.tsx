"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Digitalización de Procesos - Camposol",
    description:
      "Implementación de aproximadamente 40 cartillas digitales para Producción, Calidad y Operaciones, eliminando procesos manuales, reduciendo tiempos de registro y mejorando la trazabilidad de la información.",
    technologies: [
      "Digiproy",
      "QA Testing",
      "Implementación",
      "PDA",
      "Procesos"
    ],
    private: true,
  },
  {
    title: "API Finanzas",
    description:
      "API REST desarrollada con NestJS para la gestión financiera personal y empresarial, incluyendo autenticación JWT, generación de reportes PDF y PostgreSQL.",
    technologies: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "JWT",
      "Prisma"
    ],
    github: "https://github.com/TU-USUARIO",
  },
  {
    title: "Mega Red",
    description:
      "Backend para administración de clientes, pagos y control de acceso mediante roles, utilizando arquitectura modular y buenas prácticas.",
    technologies: [
      "NestJS",
      "RBAC",
      "PostgreSQL",
      "TypeScript"
    ],
    github: "https://github.com/TU-USUARIO",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-zinc-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-5xl font-bold"
        >
          Proyectos
        </motion.h2>

        <div className="grid gap-8 lg:grid-cols-3">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              <h3 className="text-2xl font-bold text-blue-400">
                {project.title}
              </h3>

              <p className="mt-6 text-zinc-300">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                {project.private ? (
                  <span className="text-sm text-zinc-500">
                    Proyecto empresarial (código privado)
                  </span>
                ) : (
                  <a
                    href={project.github}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-500"
                  >
                    <FaGithub />
                    Ver Proyecto
                  </a>
                )}
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}