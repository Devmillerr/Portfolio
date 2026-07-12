"use client";

import { motion } from "framer-motion";
import { FileText, Users, Building2, TrendingUp } from "lucide-react";

const stats = [
  {
    value: "40+",
    title: "Cartillas Digitalizadas",
    description: "Procesos convertidos de físico a digital.",
    icon: FileText,
  },
  {
    value: "50+",
    title: "Usuarios Activos",
    description: "Colaboradores utilizan las soluciones diariamente.",
    icon: Users,
  },
  {
    value: "3",
    title: "Áreas Impactadas",
    description: "Producción, Calidad y Operaciones.",
    icon: Building2,
  },
  {
    value: "100%",
    title: "Implementaciones",
    description: "Despliegues exitosos y soporte post-producción.",
    icon: TrendingUp,
  },
];

export default function Stats() {
  return (
    <section id="stats" className="bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-5xl font-bold"
        >
          Impacto Profesional
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
              >
                <Icon className="mb-6 text-blue-500" size={40} />

                <h3 className="text-5xl font-black text-blue-400">
                  {item.value}
                </h3>

                <p className="mt-4 text-xl font-semibold">
                  {item.title}
                </p>

                <p className="mt-3 text-zinc-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}