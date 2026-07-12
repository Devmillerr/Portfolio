"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import Badge from "@/components/ui/Badge";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  private?: boolean;
}

export default function ProjectCard({
  title,
  category,
  description,
  technologies,
  github,
  demo,
  private: isPrivate,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl"
    >
      {/* Header */}
      <div className="relative h-52 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600" />

        <div className="absolute inset-0 flex items-center justify-center">

          <span className="text-6xl font-black text-white opacity-20">
            {title.substring(0, 2).toUpperCase()}
          </span>

        </div>

      </div>

      {/* Content */}

      <div className="p-8">

        <span className="text-sm uppercase tracking-[0.2em] text-blue-400">
          {category}
        </span>

        <h3 className="mt-3 text-3xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-5 leading-8 text-zinc-400">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">

          {technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}

        </div>

        <div className="mt-10 flex gap-4">

          {isPrivate ? (
            <div className="flex items-center gap-2 text-zinc-500">
              <Lock size={18} />
              Código privado
            </div>
          ) : (
            <>
              <a
                href={github}
                target="_blank"
                className="font-semibold text-blue-400 transition hover:text-blue-300"
              >
                GitHub
              </a>

              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  className="flex items-center gap-1 font-semibold text-white"
                >
                  Demo
                  <ArrowUpRight size={18} />
                </a>
              )}
            </>
          )}

        </div>

      </div>
    </motion.div>
  );
}