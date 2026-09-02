"use client";

import { motion } from "framer-motion";
import { Building2, Clock3, ListChecks, Users } from "lucide-react";

import StatCard from "./StatCard";

export default function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.65, ease: "easeOut" }}
      className="mt-5 grid grid-cols-2 gap-2.5 lg:grid-cols-4"
    >
      <StatCard
        featured
        icon={Clock3}
        value="3+"
        title="Experiencia"
        subtitle="Backend, implementación y QA"
      />
      <StatCard
        icon={ListChecks}
        value="60+"
        title="Procesos"
        subtitle="Digitalizados y en operación"
      />
      <StatCard
        icon={Users}
        value="50+"
        title="Usuarios"
        subtitle="Capacitados y con soporte"
      />
      <StatCard
        icon={Building2}
        value="3+"
        title="Áreas"
        subtitle="Producción, Calidad, Operaciones"
      />
    </motion.div>
  );
}
