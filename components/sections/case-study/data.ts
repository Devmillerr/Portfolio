import {
  BarChart3,
  ClipboardCheck,
  Code2,
  FileCheck2,
  FileText,
  GitBranch,
  Layers3,
  MonitorSmartphone,
  Rocket,
  Search,
  Smartphone,
  TrendingUp,
  Users,
} from "lucide-react";

import type { Stage } from "./types";

export const stages: Stage[] = [
  {
    number: "01",
    label: "Antes",
    title: "Procesos manuales",
    description: "Los registros operativos se completaban en formatos físicos.",
    accent: "red",
    items: [
      "Información dispersa",
      "Errores y duplicidad",
      "Baja trazabilidad",
    ],
  },
  {
    number: "02",
    label: "Solución",
    title: "Análisis e implementación",
    description:
      "Convertí los procesos en cartillas digitales con reglas, validaciones y flujos operativos.",
    accent: "blue",
    items: [
      "Análisis de requerimientos",
      "Pruebas funcionales en PDA",
      "Despliegue y capacitación",
    ],
  },
  {
    number: "03",
    label: "Resultado",
    title: "Operación optimizada",
    description:
      "La información quedó organizada, disponible y lista para seguimiento.",
    accent: "emerald",
    items: [
      "Menos retrabajo",
      "Mayor calidad de datos",
      "Mejor control operativo",
    ],
  },
];


export const metrics = [
  {
    value: "60+",
    label: "Procesos digitalizados",
    icon: TrendingUp,
  },
  {
    value: "50+",
    label: "Usuarios capacitados",
    icon: Users,
  },
  {
    value: "3+",
    label: "Áreas impactadas",
    icon: Layers3,
  },
];


export const editorialSteps = [
  {
    number: "01",
    label: "Problema",
    title: "Registros físicos y procesos manuales.",
    description:
      "Información dispersa, duplicidad, baja trazabilidad y mayor tiempo de revisión.",
    icon: FileCheck2,
  },
  {
    number: "02",
    label: "Análisis",
    title: "Necesidades convertidas en requerimientos.",
    description:
      "Usuarios, campos, responsables, reglas de negocio y puntos críticos.",
    icon: Search,
  },
  {
    number: "03",
    label: "Diseño",
    title: "Estructura digital adaptable.",
    description:
      "Cartillas por proceso, listas, validaciones, cálculos y flujos operativos.",
    icon: GitBranch,
  },
  {
    number: "04",
    label: "Implementación",
    title: "Solución construida en DigiProy.",
    description:
      "Formularios digitales, reglas, accesos, sincronización y funcionamiento en PDA.",
    icon: Code2,
  },
  {
    number: "05",
    label: "QA",
    title: "Validación en condiciones reales.",
    description:
      "Pruebas funcionales, cálculos, incidencias, correcciones y nuevas validaciones.",
    icon: ClipboardCheck,
  },
  {
    number: "06",
    label: "Producción",
    title: "Despliegue y adopción.",
    description: "Pase a producción, capacitación, soporte y mejora continua.",
    icon: Rocket,
  },
  {
    number: "07",
    label: "Impacto",
    title: "Operación digital y centralizada.",
    description:
      "60+ procesos, 50+ usuarios, 3+ áreas, mayor trazabilidad y menos retrabajo.",
    icon: TrendingUp,
  },
];

// ==============================
// Flujo: Formato físico → PDA → Sistema Digital → Reportes SIG
// ==============================


export const flowStages = [
  {
    id: "manual",
    label: "Formato físico",
    detail: "Cartilla en papel, llenado a mano",
    icon: FileText,
  },
  {
    id: "pda",
    label: "PDA",
    detail: "Captura digital en planta",
    icon: Smartphone,
  },
  {
    id: "digiproy",
    label: "Sistema digital",
    detail: "Reglas y validaciones en DigiProy",
    icon: MonitorSmartphone,
  },
  {
    id: "sig",
    label: "Reportes SIG",
    detail: "Trazabilidad y seguimiento gerencial",
    icon: BarChart3,
  },
] as const;
