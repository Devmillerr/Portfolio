// ==============================
// IDENTIDAD
// ==============================

export const siteConfig = {
  name: "Miler Castro Martínez",
  url: "https://portfolio-delta-fawn-41.vercel.app",
  handle: "Devmillerr",
  role: "Backend Developer",
  roleLong: "Backend Developer | Software Engineer",
  subtitle: "Software Implementation · QA Funcional",
  location: "Chimbote, Perú",
  timezone: "America/Lima",
  company: "Camposol S.A.",
  available: true,

  email: "castrojordy378@gmail.com",
  whatsapp: "https://wa.me/51937195838",
  whatsappLabel: "+51 937 195 838",
  github: "https://github.com/Devmillerr",
  githubHandle: "Devmillerr",
  linkedin: "https://www.linkedin.com/in/devmillerr/",
};

// ==============================
// HERO
// ==============================

export const hero = {
  headline: "Construyo e implemento",
  headlineAccent: "software.",
  description:
    "Analizo necesidades, desarrollo soluciones backend, valido funcionalidades y acompaño su puesta en producción.",
};

// ==============================
// IMPACTO
// ==============================

export const stats = [
  { value: "60+", label: "Procesos digitalizados" },
  { value: "50+", label: "Usuarios capacitados" },
  { value: "3+", label: "Áreas impactadas" },
  { value: "3+", label: "Años en software" },
];

// ==============================
// TECNOLOGÍAS
// ==============================

export const technologies = [
  "NestJS",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Prisma ORM",
  "API REST",
  "JWT",
  "Postman",
  "Git",
  "GitHub",
];

// ==============================
// EXPERIENCIA
// ==============================

export const experiences = [
  {
    number: "02",
    period: "Sept. 2024 — Actualidad",
    company: "Camposol S.A.",
    context: "Agroindustria · Perú",
    position: "Software Implementation Analyst",
    secondaryPosition: "QA Tester",
    description:
      "Analizo procesos e implemento soluciones digitales que conectan las necesidades operativas con software funcional y validado.",
    highlights: [
      "Análisis funcional",
      "Implementación de software",
      "QA en dispositivos PDA",
      "Despliegue y soporte",
    ],
    note: "Producción · Calidad · Operaciones",
    status: "Actual",
    current: true,
  },
  {
    number: "01",
    period: "Jul. 2022 — Ene. 2024",
    company: "I.E. Inmaculada de la Merced",
    context: "Chimbote · Perú",
    position: "Backend Developer",
    secondaryPosition: "Desarrollo de APIs y servicios",
    description:
      "Desarrollé servicios backend, autenticación y generación de documentos para una solución construida con una arquitectura modular.",
    highlights: [
      "NestJS y TypeScript",
      "PostgreSQL",
      "API REST y JWT",
      "Pruebas con Postman",
    ],
    note: "Backend · Base de datos · Integraciones",
    status: "Base técnica",
    current: false,
  },
];

// ==============================
// PROYECTOS
// ==============================

export const primaryProject = {
  title: "Digitalización de procesos operativos",
  eyebrow: "Proyecto principal · Camposol",
  description:
    "Implementación de cartillas digitales para Producción, Calidad y Operaciones, con validaciones funcionales, soporte a usuarios y despliegue en dispositivos PDA.",
  technologies: ["DigiProy", "QA funcional", "PDA", "Análisis funcional"],
};

export type SecondaryProject = {
  title: string;
  eyebrow: string;
  description: string;
  technologies: string[];
  repo: string; // owner/name, para consultar la API pública de GitHub
};

export const secondaryProjects: SecondaryProject[] = [
  {
    title: "API Finanzas",
    eyebrow: "Backend · API REST",
    description:
      "API modular para gestionar operaciones financieras, autenticación y control de acceso.",
    technologies: ["NestJS", "TypeScript", "Prisma", "JWT"],
    repo: "Devmillerr/nestjs-finance-api",
  },
  {
    title: "Mega Red",
    eyebrow: "Backend · Gestión",
    description:
      "Backend orientado a la gestión de usuarios, permisos y recursos mediante roles.",
    technologies: ["NestJS", "RBAC", "PostgreSQL"],
    repo: "Devmillerr/mega-red",
  },
];
