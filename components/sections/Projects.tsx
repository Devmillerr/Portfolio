"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/projects/projectCard";

const projects = [
  {
    title: "Digitalización Camposol",
    category: "Caso de Éxito",
    description:
      "Implementación de aproximadamente 40 cartillas digitales para Producción, Calidad y Operaciones. Se eliminaron registros manuales, reduciendo errores y tiempos de captura mediante Digiproy y dispositivos PDA.",
    technologies: [
      "Digiproy",
      "QA",
      "PDA",
      "Implementación",
      "Procesos",
    ],
    private: true,
  },
  {
    title: "API Finanzas",
    category: "Backend",
    description:
      "API REST desarrollada con NestJS, TypeScript y PostgreSQL. Incluye autenticación JWT, arquitectura modular, Prisma ORM y generación de reportes PDF.",
    technologies: [
      "NestJS",
      "TypeScript",
      "Prisma",
      "JWT",
      "PostgreSQL",
    ],
    github: "https://github.com/TUUSUARIO",
  },
  {
    title: "Mega Red",
    category: "Backend",
    description:
      "Sistema backend para administración de clientes y pagos con control de acceso mediante roles (RBAC) y arquitectura escalable.",
    technologies: [
      "NestJS",
      "RBAC",
      "TypeScript",
      "PostgreSQL",
    ],
    github: "https://github.com/TUUSUARIO",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-zinc-950 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          subtitle="PORTAFOLIO"
          title="Proyectos Destacados"
        />

        <div className="grid gap-8 lg:grid-cols-3">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}

        </div>

      </div>
    </section>
  );
}