"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

const contactData = {
  email: "castrojordy378@gmail.com",
  whatsappLabel: "+51 937 195 838",
  whatsappUrl: "https://wa.me/51937195838",
  location: "Chimbote, Perú",
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        border-b
        border-white/[0.07]
        bg-[#08090c]
        py-14
        text-white
        sm:py-16
        lg:flex
        lg:min-h-[calc(100svh-76px)]
        lg:items-center
        lg:py-12
      "
    >
      {/* Fondo */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 32, 0],
            y: [0, 18, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-170px] top-[-130px] h-[380px] w-[380px] rounded-full bg-blue-500/[0.055] blur-[150px]"
        />

        <motion.div
          animate={{
            x: [0, -24, 0],
            y: [0, -16, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-220px] left-[-160px] h-[360px] w-[360px] rounded-full bg-cyan-400/[0.02] blur-[150px]"
        />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/18 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.65,
            ease,
          }}
          className="flex items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.75,
                ease,
              }}
              className="h-px w-8 origin-left bg-blue-400"
            />

            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-blue-300 sm:text-[11px]">
              Contacto
            </p>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-30" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-600">
              Disponible
            </span>
          </div>
        </motion.div>

        {/* Contenido principal */}
        <div className="mt-10 grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-20">
          {/* Mensaje */}
          <motion.div
            initial={{ opacity: 0, x: -26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease,
            }}
          >
            <h2 className="max-w-[560px] text-[2.25rem] font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-[2.8rem] lg:text-[3.2rem]">
              Hablemos de lo que sigue.
            </h2>

            <p className="mt-5 max-w-[540px] text-sm leading-7 text-zinc-400 sm:text-[15px]">
              Estoy abierto a oportunidades donde pueda aportar en desarrollo,
              implementación y QA de software.
            </p>

            <div className="mt-7 flex items-center gap-3 sm:hidden">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-30" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-600">
                Disponible para nuevas oportunidades
              </span>
            </div>
          </motion.div>

          {/* Acciones */}
          <motion.div
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease,
            }}
            className="border-t border-white/[0.08] lg:border-l lg:border-t-0 lg:pl-12"
          >
            {/* Correo principal */}
            <a
              href={`mailto:${contactData.email}`}
              className="
                group
                flex
                items-center
                justify-between
                gap-6
                border-b
                border-white/[0.07]
                py-6
              "
            >
              <div className="flex min-w-0 items-center gap-4">
                <motion.span
                  whileHover={{
                    rotate: -5,
                    scale: 1.06,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 20,
                  }}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/[0.08] text-blue-400 transition-colors duration-300 group-hover:border-blue-400/40 group-hover:bg-blue-500/[0.13]"
                >
                  <Mail size={18} />
                </motion.span>

                <div className="min-w-0">
                  <span className="block text-[9px] font-semibold uppercase tracking-[0.2em] text-blue-300/65">
                    Escríbeme
                  </span>

                  <span className="mt-1.5 block truncate text-sm font-semibold text-zinc-200 transition-colors duration-300 group-hover:text-white sm:text-base">
                    {contactData.email}
                  </span>
                </div>
              </div>

              <ArrowUpRight
                size={18}
                className="shrink-0 text-zinc-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
              />
            </a>

            {/* WhatsApp */}
            <a
              href={contactData.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="
                group
                flex
                items-center
                justify-between
                gap-6
                border-b
                border-white/[0.07]
                py-6
              "
            >
              <div className="flex items-center gap-4">
                <motion.span
                  whileHover={{
                    rotate: 5,
                    scale: 1.06,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 20,
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/15 bg-emerald-500/[0.06] text-emerald-400 transition-colors duration-300 group-hover:border-emerald-400/35 group-hover:bg-emerald-500/[0.1]"
                >
                  <MessageCircle size={18} />
                </motion.span>

                <div>
                  <span className="block text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                    WhatsApp
                  </span>

                  <span className="mt-1.5 block text-sm font-semibold text-zinc-300 transition-colors duration-300 group-hover:text-white">
                    {contactData.whatsappLabel}
                  </span>
                </div>
              </div>

              <ArrowRight
                size={18}
                className="text-zinc-700 transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-emerald-400"
              />
            </a>

            {/* Ubicación */}
            <div className="flex items-center gap-4 py-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.02] text-blue-400/75">
                <MapPin size={18} />
              </span>

              <div>
                <span className="block text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                  Ubicación
                </span>

                <span className="mt-1.5 block text-sm font-medium text-zinc-400">
                  {contactData.location}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
