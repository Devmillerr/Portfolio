"use client";

import { motion } from "framer-motion";
import { TriangleAlert, Lightbulb, TrendingUp } from "lucide-react";

export default function CaseStudy() {
  return (
    <section
      id="case-study"
      className="bg-zinc-900 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-5xl font-bold"
        >
          Caso de Éxito
        </motion.h2>

        <div className="space-y-8">

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-3xl border border-red-500/20 bg-zinc-950 p-8"
          >
            <div className="mb-4 flex items-center gap-3">
              <TriangleAlert className="text-red-400" />
              <h3 className="text-2xl font-bold">
                Problema
              </h3>
            </div>

            <p className="text-zinc-300 leading-8">
              Los registros de producción se realizaban mediante formatos físicos.
              Esto ocasionaba tiempos muertos, errores de escritura, formatos
              deteriorados y poca trazabilidad de la información.
            </p>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-3xl border border-blue-500/20 bg-zinc-950 p-8"
          >
            <div className="mb-4 flex items-center gap-3">
              <Lightbulb className="text-blue-400" />
              <h3 className="text-2xl font-bold">
                Solución
              </h3>
            </div>

            <p className="text-zinc-300 leading-8">
              Analicé el proceso, diseñé aproximadamente 40 cartillas digitales
              en Digiproy, realicé pruebas funcionales (QA), coordiné el
              despliegue y brindé soporte durante la implementación.
            </p>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-3xl border border-green-500/20 bg-zinc-950 p-8"
          >
            <div className="mb-4 flex items-center gap-3">
              <TrendingUp className="text-green-400" />
              <h3 className="text-2xl font-bold">
                Resultado
              </h3>
            </div>

            <ul className="space-y-3 text-zinc-300">

              <li>✅ 40 cartillas digitalizadas.</li>

              <li>✅ Más de 50 colaboradores utilizando el sistema diariamente.</li>

              <li>✅ Eliminación del uso de papel.</li>

              <li>✅ Menor tiempo de registro.</li>

              <li>✅ Mejor trazabilidad de la información.</li>

              <li>✅ Reducción de errores en el llenado de registros.</li>

            </ul>

          </motion.div>

        </div>

      </div>
    </section>
  );
}