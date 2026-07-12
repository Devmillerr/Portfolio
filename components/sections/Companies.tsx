"use client";

import { motion } from "framer-motion";
import { Building2, Factory, ShieldCheck, Settings } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const areas = [
  {
    name: "Producción",
    icon: Factory,
  },
  {
    name: "Calidad",
    icon: ShieldCheck,
  },
  {
    name: "Operaciones",
    icon: Settings,
  },
];

export default function Companies() {
  return (
    <section
      id="companies"
      className="border-y border-zinc-900 bg-zinc-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          subtitle="EXPERIENCIA EMPRESARIAL"
          title="Soluciones implementadas en entornos reales"
        />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl rounded-[2rem] border border-zinc-800 bg-zinc-900/50 p-8 md:p-12"
        >
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-950">
                <Building2 size={38} className="text-blue-400" />
              </div>

              <h3 className="mt-6 text-3xl font-black">Camposol S.A.</h3>

              <p className="mt-2 text-zinc-500">
                Septiembre 2024 — Actualidad
              </p>
            </div>

            <div>
              <p className="text-lg leading-8 text-zinc-300">
                Participo en el análisis, configuración, validación e
                implementación de soluciones digitales para procesos
                operativos. Mi trabajo comprende desde el levantamiento de
                requerimientos hasta las pruebas, el despliegue y el soporte a
                usuarios.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {areas.map((area) => {
                  const Icon = area.icon;

                  return (
                    <div
                      key={area.name}
                      className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-950 p-4"
                    >
                      <Icon size={22} className="text-blue-400" />

                      <span className="font-medium text-zinc-200">
                        {area.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}