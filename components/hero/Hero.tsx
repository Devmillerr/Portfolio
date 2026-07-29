"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  MapPin,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import ParticleNetwork from "@/components/ui/ParticleNetwork";
import { siteConfig } from "@/lib/constants";

import HeroStats from "./HeroStats";
import SocialLink from "./SocialLink";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const goToExperience = () => {
    document.getElementById("experience")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden border-b border-white/[0.07] bg-[#08090c] pt-[76px] text-white"
    >
      {/* Fondo */}
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0">
          <div className="editorial-grid absolute inset-0 opacity-20" />

          <motion.div
            animate={{
              x: [0, 30, -18, 0],
              y: [0, 18, -10, 0],
              scale: [1, 1.05, 0.98, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-[-340px] h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/[0.06] blur-[180px]"
          />

          <motion.div
            animate={{
              x: [0, -32, 18, 0],
              y: [0, -18, 12, 0],
              scale: [1, 1.04, 0.99, 1],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[-280px] right-[-160px] h-[430px] w-[430px] rounded-full bg-cyan-400/[0.025] blur-[160px]"
          />

          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#08090c] via-[#08090c]/70 to-transparent" />
        </div>

        <ParticleNetwork
          particleCount={135}
          connectionDistance={145}
          mouseDistance={190}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#08090c]/35 via-transparent to-[#08090c]/35" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-76px)] w-full max-w-[1180px] items-center px-5 py-6 sm:px-8 sm:py-7 lg:px-10 lg:py-5">
        <div className="mx-auto w-full max-w-[1100px] lg:-translate-y-3">
          {/* Cargo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease,
            }}
            className="flex items-center gap-3"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease,
              }}
              className="h-px w-8 origin-left bg-blue-400"
            />

            <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-blue-300 sm:text-[9px] sm:tracking-[0.24em]">
              {siteConfig.role}
            </p>
          </motion.div>

          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.08,
              ease,
            }}
            className="mt-5 max-w-[980px] text-balance text-[clamp(2.6rem,7vw,5.25rem)] font-extrabold leading-[0.96] tracking-[-0.055em] text-white"
          >
            Digitalizo procesos{" "}
            <motion.span
              animate={{
                backgroundPosition: [
                  "0% 50%",
                  "100% 50%",
                  "0% 50%",
                ],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "linear",
              }}
              className="mt-1 block bg-[linear-gradient(110deg,#60a5fa_10%,#bfdbfe_45%,#38bdf8_70%,#60a5fa_90%)] bg-[length:220%_100%] bg-clip-text text-transparent"
            >
              industriales.
            </motion.span>
          </motion.h1>

          {/* Línea luminosa */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1,
              delay: 0.35,
              ease,
            }}
            className="mt-4 h-px max-w-[650px] origin-left overflow-hidden bg-white/[0.06]"
          >
            <motion.div
              animate={{
                x: ["-120%", "130%"],
              }}
              transition={{
                duration: 2.4,
                delay: 1,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut",
              }}
              className="h-full w-52 bg-gradient-to-r from-transparent via-blue-400/80 to-transparent"
            />
          </motion.div>

          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease,
            }}
            className="mt-5 max-w-[760px] text-sm leading-6 text-zinc-400 sm:text-[16px] sm:leading-7"
          >
            Analizo, implemento y valido soluciones de software para mejorar
            operaciones, reducir errores y facilitar el trabajo de los
            usuarios.
          </motion.p>

          {/* Información */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.38,
              ease,
            }}
            className="mt-5 flex flex-col items-start gap-2 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4"
          >
            <motion.span
              whileHover={{
                y: -2,
                color: "#e4e4e7",
              }}
              className="inline-flex items-center gap-2 text-zinc-500"
            >
              <MapPin size={15} />
              {siteConfig.location}
            </motion.span>

            <span className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:block" />

            <motion.span
              whileHover={{
                y: -2,
                color: "#e4e4e7",
              }}
              className="inline-flex items-center gap-2 text-zinc-500"
            >
              <BriefcaseBusiness size={15} />
              {siteConfig.company}
            </motion.span>

            <span className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:block" />

            <span className="inline-flex items-center gap-2 text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-35" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              Disponible para oportunidades
            </span>
          </motion.div>

          {/* Botones */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.5,
              ease,
            }}
            className="mt-4 flex flex-wrap items-center gap-3"
          >
            <motion.button
  type="button"
  onClick={goToExperience}
  onHoverStart={() => setHovered(true)}
  onHoverEnd={() => setHovered(false)}
  whileHover={{
    y: -3,
    scale: 1.015,
  }}
  whileTap={{
    scale: 0.98,
  }}
  transition={{
    type: "spring",
    stiffness: 300,
    damping: 22,
  }}
  className="
    focus-ring
    group
    relative
    isolate
    inline-flex
    h-11
    items-center
    overflow-hidden
    rounded-xl
    border
    border-blue-400/20
    bg-blue-500/[0.08]
    px-5
    text-sm
    font-semibold
    text-white
    shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_12px_35px_rgba(59,130,246,0.08)]
    backdrop-blur-xl
    transition-colors
    duration-300
    hover:border-blue-400/40
    hover:bg-blue-500/[0.14]
    hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_16px_42px_rgba(59,130,246,0.16)]
  "
>
  {/* Glow */}
  <span
    aria-hidden
    className="
      pointer-events-none
      absolute
      -left-10
      top-1/2
      h-20
      w-20
      -translate-y-1/2
      rounded-full
      bg-blue-400/0
      blur-2xl
      transition-all
      duration-500
      group-hover:bg-blue-400/25
    "
  />

  {/* Shine */}
  <span
    aria-hidden
    className="
      pointer-events-none
      absolute
      inset-y-0
      left-[-35%]
      w-14
      -skew-x-12
      bg-gradient-to-r
      from-transparent
      via-white/15
      to-transparent
      transition-all
      duration-700
      group-hover:left-[120%]
    "
  />

  <span className="relative z-10 flex items-center gap-2.5">
    <span className="transition-transform duration-300 group-hover:-translate-y-px">
      Explorar experiencia
    </span>

    <span className="relative flex h-4 w-4 items-center justify-center overflow-hidden">
      <motion.span
  key={hovered ? "hover" : "rest"}
  initial={
    hovered
      ? {
          x: -16,
          opacity: 0,
        }
      : false
  }
  animate={{
    x: 0,
    opacity: 1,
  }}
  transition={{
    duration: hovered ? 0.35 : 0,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="absolute flex items-center justify-center"
>
  <ArrowRight
    size={16}
    strokeWidth={2}
    className="text-blue-300"
  />
</motion.span>
    </span>
  </span>
</motion.button>

            <SocialLink
              href={siteConfig.github}
              label="GitHub"
              variant="default"
            >
              <FaGithub size={19} />
            </SocialLink>

            <SocialLink
              href={siteConfig.linkedin}
              label="LinkedIn"
              variant="linkedin"
            >
              <FaLinkedin size={19} />
            </SocialLink>

            <SocialLink
              href={siteConfig.whatsapp}
              label="WhatsApp"
              variant="whatsapp"
            >
              <FaWhatsapp size={20} />
            </SocialLink>
          </motion.div>

          <HeroStats />
        </div>
      </div>
    </section>
  );
}