"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  CheckCircle2,
  Briefcase,
} from "lucide-react";

export default function HeroPhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="mx-auto w-full max-w-[430px]"
    >
      <div className="overflow-hidden rounded-[28px] border border-zinc-800 bg-zinc-900 shadow-2xl">
        <div className="relative h-[500px] w-full overflow-hidden bg-zinc-800">
          <Image
            src="/camposol.jpg"
            alt="Miler Castro"
            fill
            priority
            sizes="(max-width: 1024px) 92vw, 430px"
            className="object-cover object-top transition duration-700 hover:scale-105"
          />
        </div>

        <div className="space-y-5 p-7">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Miler Castro
            </h2>

            <p className="mt-2 text-zinc-400">
              Software Implementation Analyst
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Building2
                size={18}
                className="text-blue-400"
              />

              <span className="text-zinc-300">
                Camposol S.A.
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Briefcase
                size={18}
                className="text-blue-400"
              />

              <span className="text-zinc-300">
                Backend Developer
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2
                size={18}
                className="text-emerald-400"
              />

              <span className="text-emerald-400">
                Disponible para nuevas oportunidades
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "NestJS",
              "TypeScript",
              "Node.js",
              "PostgreSQL",
              "QA Testing",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-zinc-700 bg-zinc-950 px-3 py-2 text-xs font-medium text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}