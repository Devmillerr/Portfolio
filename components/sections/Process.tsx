"use client";

import { motion } from "framer-motion";
import {
  Search,
  PanelsTopLeft,
  Code2,
  TestTube2,
  Rocket,
  Headphones,
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const steps = [
  {
    number: "01",
    title: "Análisis",
    description:
      "Reviso el proceso actual, identifico dificultades y levanto requerimientos con los usuarios.",
    icon: Search,
  },
  {
    number: "02",
    title: "Diseño",
    description:
      "Transformo las necesidades del negocio en una estructura digital clara y funcional.",
    icon: PanelsTopLeft,
  },
  {
    number: "03",
    title: "Configuración",
    description:
      "Creo formularios, reglas de negocio, validaciones, cálculos y controles de captura.",
    icon: Code2,
  },
  {
    number: "04",
    title: "QA",
    description:
      "Realizo pruebas funcionales, validaciones en PDA y corrección de incidencias.",
    icon: TestTube2,
  },
  {
    number: "05",
    title: "Implementación",
    description:
      "Coordino el pase a producción, accesos, versiones y sincronización de datos.",
    icon: Rocket,
  },
  {
    number: "06",
    title: "Soporte",
    description:
      "Capacito usuarios y doy seguimiento al funcionamiento de la solución implementada.",
    icon: Headphones,
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-zinc-950 py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          subtitle="METODOLOGÍA"
          title="Cómo llevo una solución a producción"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.08 }}
                className="group relative rounded-3xl border border-zinc-800 bg-zinc-900/50 p-7 transition duration-300 hover:-translate-y-1 hover:border-zinc-600"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-950">
                    <Icon size={23} className="text-blue-400" />
                  </div>

                  <span className="text-sm font-bold tracking-widest text-zinc-600">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-bold">{step.title}</h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {step.description}
                </p>

                <div className="mt-7 h-px w-12 bg-zinc-700 transition-all duration-300 group-hover:w-24 group-hover:bg-blue-500" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}