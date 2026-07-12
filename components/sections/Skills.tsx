"use client";

import { motion } from "framer-motion";
import {
  SiTypescript,
  SiJavascript,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";

const skills = [
  { name: "TypeScript", icon: SiTypescript, level: 95 },
  { name: "JavaScript", icon: SiJavascript, level: 95 },
  { name: "NestJS", icon: SiNestjs, level: 90 },
  { name: "Node.js", icon: SiNodedotjs, level: 90 },
  { name: "PostgreSQL", icon: SiPostgresql, level: 90 },
  { name: "MongoDB", icon: SiMongodb, level: 75 },
  { name: "Docker", icon: SiDocker, level: 65 },
  { name: "Git", icon: SiGit, level: 90 },
  { name: "GitHub", icon: SiGithub, level: 90 },
  { name: "Postman", icon: SiPostman, level: 95 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-zinc-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-5xl font-bold"
        >
          Tecnologías
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">

          {skills.map((skill, index) => {

            const Icon = skill.icon;

            return (

              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * .08 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
              >

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <Icon
                      size={30}
                      className="text-blue-400"
                    />

                    <h3 className="text-xl font-semibold">
                      {skill.name}
                    </h3>

                  </div>

                  <span className="text-blue-400">
                    {skill.level}%
                  </span>

                </div>

                <div className="mt-5 h-3 rounded-full bg-zinc-700">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${skill.level}%`,
                    }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="h-3 rounded-full bg-blue-500"
                  />

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}