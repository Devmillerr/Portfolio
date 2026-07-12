"use client";

import { motion } from "framer-motion";
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export default function HeroContent() {
  return (
    <div className="max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.08] px-4 py-2"
      >
        <span className="h-2 w-2 rounded-full bg-blue-400" />

        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
          Software Implementation Analyst
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="mt-7 max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.05em] text-white sm:text-6xl xl:text-7xl"
      >
        Transformo procesos en{" "}
        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          soluciones digitales.
        </span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.22 }}
        className="mt-7"
      >
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Miler Castro
        </h2>

        <p className="mt-2 text-base text-zinc-400 sm:text-lg">
          Backend Developer · QA Tester · Transformación Digital
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.36 }}
        className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg"
      >
        Implemento soluciones digitales desde el levantamiento de
        requerimientos hasta el despliegue en producción. He liderado la
        digitalización de aproximadamente 40 cartillas utilizadas por más de
        50 colaboradores de Producción, Calidad y Operaciones.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-9 flex flex-wrap items-center gap-3"
      >
        <a
          href="/cv-miler-castro.pdf"
          download
          className="inline-flex h-12 items-center gap-2 rounded-xl bg-blue-600 px-6 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
        >
          <FaDownload />
          Descargar CV
        </a>

        <a
          href="https://github.com/TU-USUARIO"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
        >
          <FaGithub size={21} />
        </a>

        <a
          href="https://www.linkedin.com/in/TU-USUARIO"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-white/[0.06]"
        >
          <FaLinkedin size={21} />
        </a>

        <a
          href="https://wa.me/51937195838"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/[0.05] text-emerald-400 transition duration-300 hover:-translate-y-1 hover:bg-emerald-500 hover:text-white"
        >
          <FaWhatsapp size={21} />
        </a>
      </motion.div>
    </div>
  );
}