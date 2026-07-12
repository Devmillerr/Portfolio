"use client";

import { motion } from "framer-motion";
import { Calendar, Building2 } from "lucide-react";
import Card from "@/components/ui/Card";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-zinc-900 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="mb-16 text-center text-5xl font-bold"
        >
          Experiencia
        </motion.h2>

        <Card>

          <div className="flex items-center gap-3 text-blue-400">

            <Building2 size={28} />

            <h3 className="text-2xl font-bold">
              Camposol S.A.
            </h3>

          </div>

          <div className="mt-3 flex items-center gap-2 text-zinc-400">

            <Calendar size={18} />

            Sept. 2024 — Actualidad

          </div>

          <h4 className="mt-8 text-xl font-semibold">
            Software Implementation Analyst
          </h4>

          <ul className="mt-6 space-y-4 text-lg text-zinc-300">

            <li>
              ✅ Lideré la digitalización de aproximadamente <strong>40 cartillas operativas</strong>.
            </li>

            <li>
              ✅ Soluciones utilizadas diariamente por más de <strong>50 colaboradores</strong>.
            </li>

            <li>
              ✅ Eliminé procesos manuales basados en papel.
            </li>

            <li>
              ✅ Reduje tiempos de registro y errores de captura.
            </li>

            <li>
              ✅ Realicé pruebas funcionales (QA) antes del despliegue.
            </li>

            <li>
              ✅ Coordiné implementaciones y soporte post-producción.
            </li>

            <li>
              ✅ Participé en reuniones con Producción, Calidad y Operaciones para levantar requerimientos.
            </li>

          </ul>

        </Card>

      </div>
    </section>
  );
}