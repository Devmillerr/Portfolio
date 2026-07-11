"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-6"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-zinc-950 to-emerald-500/20" />

      <div className="relative z-10 max-w-5xl text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-6xl font-black text-white md:text-8xl"
        >
          Miler Castro
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .3 }}
          className="mt-6 text-2xl font-semibold text-blue-400"
        >
          Software Implementation Analyst
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .6 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-300"
        >
          Especializado en implementación de software, QA Testing y desarrollo
          Backend con NestJS. He liderado la digitalización de más de 40
          procesos utilizados por más de 50 colaboradores, optimizando la
          operación mediante soluciones tecnológicas.
        </motion.p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500">
            <FaDownload />
            Descargar CV
          </button>

          <button className="rounded-xl border border-zinc-700 p-4 text-white hover:border-blue-500">
            <FaGithub size={22}/>
          </button>

          <button className="rounded-xl border border-zinc-700 p-4 text-white hover:border-blue-500">
            <FaLinkedin size={22}/>
          </button>

        </div>

      </div>
    </section>
  );
}