"use client";

import { motion } from "framer-motion";
import { FileText, Users, Building2, CalendarDays } from "lucide-react";

const stats = [
  {
    value: "40+",
    label: "Cartillas digitalizadas",
    icon: FileText,
  },
  {
    value: "50+",
    label: "Usuarios impactados",
    icon: Users,
  },
  {
    value: "3",
    label: "Áreas involucradas",
    icon: Building2,
  },
  {
    value: "2+",
    label: "Años de experiencia",
    icon: CalendarDays,
  },
];

export default function HeroStats() {
  return (
    <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 + index * 0.08 }}
            className="flex items-center gap-4 border-b border-white/10 p-6 last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
              <Icon size={21} />
            </div>

            <div>
              <p className="text-3xl font-black tracking-tight text-white">
                {stat.value}
              </p>

              <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}