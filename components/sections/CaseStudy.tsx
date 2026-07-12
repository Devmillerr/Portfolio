"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const results = [
  "Aproximadamente 40 cartillas operativas digitalizadas.",
  "Más de 50 colaboradores utilizando las soluciones.",
  "Procesos implementados en Producción, Calidad y Operaciones.",
  "Reducción del tiempo empleado en el llenado manual.",
  "Edición inmediata de registros sin reemplazar formatos físicos.",
  "Mayor trazabilidad y disponibilidad de la información.",
];

export default function CaseStudy() {
  return (
    <section
      id="case-study"
      className="bg-[#0c0f14] py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          subtitle="CASO DE ÉXITO"
          title="Digitalización de procesos operativos"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Problema */}

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-3xl border border-red-500/15 bg-zinc-950/60 p-8"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
              <AlertTriangle size={24} />
            </div>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-red-400">
              El reto
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Registros físicos lentos y difíciles de controlar
            </h3>

            <p className="mt-5 leading-8 text-zinc-400">
              Los colaboradores llenaban formatos manualmente. Cuando un
              documento se deterioraba o contenía errores, debía descartarse y
              completarse nuevamente, generando retrasos y menor trazabilidad.
            </p>
          </motion.article>

          {/* Solución */}

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl border border-blue-500/20 bg-zinc-950/60 p-8"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
              <Lightbulb size={24} />
            </div>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
              La solución
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Implementación de cartillas digitales
            </h3>

            <p className="mt-5 leading-8 text-zinc-400">
              Analicé los procesos, levanté requerimientos y configuré
              formularios en Digiproy con validaciones, reglas de negocio y
              cálculos. También realicé pruebas QA en PDA, coordiné los pases a
              producción y brindé soporte a los usuarios.
            </p>
          </motion.article>

          {/* Impacto */}

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl border border-emerald-500/20 bg-zinc-950/60 p-8"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
              <TrendingUp size={24} />
            </div>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">
              El impacto
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Mayor eficiencia y calidad de información
            </h3>

            <p className="mt-5 leading-8 text-zinc-400">
              La captura digital permitió editar registros, reducir tareas
              repetitivas y disponer de información más organizada para el
              seguimiento operativo.
            </p>
          </motion.article>
        </div>

        {/* Resultados */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 rounded-3xl border border-white/10 bg-white/[0.025] p-8 md:p-10"
        >
          <h3 className="text-2xl font-bold">
            Resultados principales
          </h3>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {results.map((result) => (
              <div
                key={result}
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  size={20}
                  className="mt-1 shrink-0 text-emerald-400"
                />

                <p className="leading-7 text-zinc-300">
                  {result}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}