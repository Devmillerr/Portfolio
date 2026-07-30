"use client";

import { motion } from "framer-motion";
import StatCard from "./StatCard";

export default function HeroStats() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 18,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        delay: 0.65,
        ease: "easeOut",
      }}
      className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4"
    >
      {/* Experiencia principal */}
      <StatCard
        featured
        icon="💻"
        value="3+"
        title="Años de experiencia"
        subtitle="Backend, implementación y QA"
      />

      {/* Procesos */}
      <StatCard
        icon="📋"
        value="60+"
        title="Procesos digitalizados"
        subtitle="Soluciones implementadas en operación"
      />

      {/* Usuarios */}
      <StatCard
        icon="👥"
        value="50+"
        title="Usuarios capacitados"
        subtitle="Soporte y acompañamiento operativo"
      />

      {/* Áreas */}
      <StatCard
        icon="🏭"
        value="3+"
        title="Áreas impactadas"
        subtitle="Producción, Calidad y Operaciones"
      />
    </motion.div>
  );
}
