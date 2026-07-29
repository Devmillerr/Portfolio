"use client";

import { motion } from "framer-motion";
import { Braces, Database, FlaskConical, Layers3, Workflow, Boxes, FileJson, GitBranch } from "lucide-react";
import {
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiTypescript,
} from "react-icons/si";

const groups = [
  {
    title: "Backend",
    description: "APIs, arquitectura modular y lógica de negocio.",
    icon: Braces,
    items: [
      { name: "NestJS", icon: SiNestjs },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "APIs REST", icon: FileJson },
    ],
  },
  {
    title: "Datos e integración",
    description: "Modelado, persistencia y validación de servicios.",
    icon: Database,
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma ORM", icon: Boxes },
      { name: "Postman", icon: SiPostman },
      { name: "Modelado", icon: Database },
    ],
  },
  {
    title: "Implementación y QA",
    description: "Validación funcional, soporte operativo y entrega controlada.",
    icon: FlaskConical,
    items: [
      { name: "DigiProy", icon: Layers3 },
      { name: "QA funcional", icon: FlaskConical },
      { name: "PDA", icon: Workflow },
      { name: "Git / GitHub", icon: GitBranch },
    ],
  },
];

const workflow = ["Análisis funcional", "Reglas de negocio", "QA en PDA", "Pase a producción"];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden border-b border-white/[0.07] bg-[#090b0f] py-16 text-white sm:py-20 lg:flex lg:min-h-[calc(100svh-76px)] lg:items-center lg:py-14">
      <div className="pointer-events-none absolute inset-0">
        <div className="editorial-grid absolute inset-0 opacity-20" />
        <div className="absolute -right-32 top-16 h-80 w-80 rounded-full bg-blue-500/[0.07] blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-300 sm:text-[11px]">
              <span className="h-px w-8 bg-blue-400" /> Tecnologías
            </div>
            <h2 className="mt-5 text-[2.2rem] font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-[2.8rem] lg:text-[3rem]">Stack técnico.</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base lg:justify-self-end">
            Herramientas que utilizo para convertir necesidades operativas en soluciones estables, probadas y listas para producción.
          </p>
        </motion.div>

        <div className="mt-9 grid gap-4 lg:grid-cols-[1.45fr_0.55fr]">
          <div className="grid gap-4 md:grid-cols-3">
            {groups.map((group, index) => {
              const GroupIcon = group.icon;
              return (
                <motion.article key={group.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="group relative overflow-hidden rounded-2xl border border-white/[0.075] bg-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.035]">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-blue-400"><GroupIcon size={19} /></div>
                    <span className="h-px w-10 bg-gradient-to-r from-blue-400/60 to-transparent" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold tracking-[-0.025em]">{group.title}</h3>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-zinc-500">{group.description}</p>
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    {group.items.map((item) => {
                      const Icon = item.icon;
                      return <div key={item.name} className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-black/20 px-3 py-2.5 text-xs font-medium text-zinc-300"><Icon className="shrink-0 text-blue-400" size={16} /><span className="truncate">{item.name}</span></div>;
                    })}
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.aside initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-2xl border border-blue-400/20 bg-blue-500/[0.045] p-5">
            <div className="absolute right-[-50px] top-[-50px] h-40 w-40 rounded-full bg-blue-400/10 blur-3xl" />
            <Layers3 className="text-blue-400" size={22} />
            <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-300">Flujo de trabajo</p>
            <h3 className="mt-2 text-xl font-bold tracking-[-0.03em]">De la operación al software.</h3>
            <div className="mt-5 space-y-3">
              {workflow.map((item, index) => <div key={item} className="flex items-center gap-3 text-sm text-zinc-300"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10 text-[10px] font-bold text-blue-300">{index + 1}</span>{item}</div>)}
            </div>
            <div className="mt-6 flex items-center gap-2 border-t border-white/[0.08] pt-5 text-xs text-zinc-500"><Workflow size={15} className="text-blue-400" /> Enfoque orientado a procesos reales</div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
