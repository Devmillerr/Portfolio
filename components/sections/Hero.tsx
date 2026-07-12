"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaWhatsapp,
} from "react-icons/fa";

const stats = [
  {
    value: "40+",
    label: "Cartillas Digitalizadas",
  },
  {
    value: "50+",
    label: "Usuarios Activos",
  },
  {
    value: "3",
    label: "Áreas Impactadas",
  },
  {
    value: "2+",
    label: "Años de Experiencia",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-zinc-950"
    >
      {/* Fondo degradado */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-zinc-950 to-cyan-500/10" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px",
        }}
      />

      {/* Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 pt-24 lg:grid-cols-2">

        {/* ===================== */}
        {/* TEXTO */}
        {/* ===================== */}

        <div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-5 text-lg text-blue-400"
          >
            👋 Hola, soy
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            className="text-6xl font-black leading-tight text-white lg:text-7xl"
          >
            Miler{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Castro
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .3 }}
            className="mt-6 text-3xl font-bold text-blue-400"
          >
            Software Implementation Analyst
          </motion.h2>

          <p className="mt-3 text-xl text-zinc-300">
            Backend Developer • QA Tester • Digital Transformation
          </p>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            Especializado en implementación de software, pruebas funcionales
            (QA) y desarrollo Backend con NestJS y TypeScript. He liderado la
            digitalización de procesos críticos utilizados diariamente por
            Producción, Calidad y Operaciones.
          </p>

          {/* Botones */}

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-500">

              <FaDownload />

              Descargar CV

            </button>

            <button className="rounded-xl border border-zinc-700 p-4 text-white transition hover:border-blue-500 hover:bg-zinc-900">

              <FaGithub size={22} />

            </button>

            <button className="rounded-xl border border-zinc-700 p-4 text-white transition hover:border-blue-500 hover:bg-zinc-900">

              <FaLinkedin size={22} />

            </button>

            <button className="rounded-xl border border-green-500 p-4 text-green-400 transition hover:bg-green-500 hover:text-white">

              <FaWhatsapp size={22} />

            </button>

          </div>

          {/* Estadísticas */}

          <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">

            {stats.map((item) => (

              <motion.div
                whileHover={{
                  y: -8,
                }}
                key={item.label}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur-xl transition"
              >

                <h3 className="text-4xl font-black text-blue-400">

                  {item.value}

                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-400">

                  {item.label}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

        {/* ===================== */}
        {/* FOTO */}
        {/* ===================== */}

        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8 }}
          className="relative flex justify-center"
        >

          <div className="absolute h-[430px] w-[430px] rounded-full bg-blue-600/20 blur-3xl animate-pulse"></div>

          <div className="absolute h-[340px] w-[340px] rounded-full bg-cyan-500/20 blur-2xl"></div>

          <div className="relative rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-emerald-400 p-1 shadow-[0_0_70px_rgba(59,130,246,.35)]">

            <div className="relative h-80 w-80 overflow-hidden rounded-full bg-zinc-900">

              <Image
                src="/Devmillerr.jpg"
                alt="Miler Castro"
                fill
                priority
                className="object-cover"
              />

            </div>

          </div>

          {/* Disponible */}

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute bottom-4 right-0 flex items-center gap-2 rounded-full border border-emerald-500/30 bg-zinc-900 px-4 py-2 shadow-xl backdrop-blur-xl"
          >

            <span className="h-3 w-3 rounded-full bg-emerald-400"></span>

            <span className="text-sm font-medium text-white">

              Disponible para trabajar

            </span>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}