"use client";

import type { MouseEvent } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
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

import { contact, hero } from "@/lib/constants";

const titleWords = [
  {
    text: "Digitalizo",
    accent: false,
  },
  {
    text: "procesos",
    accent: false,
  },
  {
    text: "industriales.",
    accent: true,
  },
];

const specialties = [
  "Implementación de software",
  "QA funcional",
  "Análisis de procesos",
  "Backend Development",
];

export default function Hero() {
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(30);

  const smoothX = useSpring(pointerX, {
    stiffness: 90,
    damping: 24,
    mass: 0.5,
  });

  const smoothY = useSpring(pointerY, {
    stiffness: 90,
    damping: 24,
    mass: 0.5,
  });

  const contentX = useTransform(smoothX, [0, 100], [-4, 4]);
  const contentY = useTransform(smoothY, [0, 100], [-3, 3]);

  const spotlight = useMotionTemplate`
    radial-gradient(
      520px circle at ${smoothX}% ${smoothY}%,
      rgba(59, 130, 246, 0.11),
      transparent 68%
    )
  `;

  const goToExperience = () => {
    document.getElementById("experience")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();

    const x =
      ((event.clientX - bounds.left) / bounds.width) * 100;

    const y =
      ((event.clientY - bounds.top) / bounds.height) * 100;

    pointerX.set(x);
    pointerY.set(y);
  };

  const handleMouseLeave = () => {
    pointerX.set(50);
    pointerY.set(30);
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden border-b border-white/[0.07] bg-[#08090c] pt-[76px] text-white"
    >
      {/* Fondo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="editorial-grid absolute inset-0 opacity-35" />

        {/* Spotlight que sigue el cursor */}
        <motion.div
          style={{ background: spotlight }}
          className="absolute inset-0"
        />

        {/* Luz principal */}
        <motion.div
          animate={{
            x: [0, 38, -22, 0],
            y: [0, 20, -12, 0],
            scale: [1, 1.06, 0.98, 1],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[-350px] h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/[0.045] blur-[180px]"
        />

        {/* Luz secundaria */}
        <motion.div
          animate={{
            x: [0, -38, 18, 0],
            y: [0, -18, 12, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-280px] right-[-170px] h-[420px] w-[420px] rounded-full bg-cyan-400/[0.022] blur-[160px]"
        />

        {/* Punto decorativo flotante */}
        <motion.span
          animate={{
            y: [0, -12, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[14%] top-[30%] hidden h-1.5 w-1.5 rounded-full bg-blue-300 lg:block"
        />

        <motion.span
          animate={{
            y: [0, 10, 0],
            opacity: [0.15, 0.45, 0.15],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[24%] top-[20%] hidden h-1 w-1 rounded-full bg-cyan-300 lg:block"
        />

        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#08090c] via-[#08090c]/75 to-transparent" />
      </div>

      {/* Contenido */}
      <motion.div
        style={{
          x: contentX,
          y: contentY,
        }}
        className="relative z-10 mx-auto flex min-h-[calc(100svh-76px)] w-full max-w-[1180px] items-center px-5 py-14 sm:px-8 sm:py-16 lg:px-10"
      >
        <div className="mx-auto w-full max-w-[1100px]">
          {/* Cargo */}
          <motion.div
            animate={{
              y: [10, 0],
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex items-center gap-3"
          >
            <motion.span
              animate={{
                scaleX: [0.15, 1],
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-px w-8 origin-left bg-blue-400"
            />

            <motion.p
              animate={{
                letterSpacing: [
                  "0.32em",
                  "0.24em",
                ],
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[10px] font-semibold uppercase tracking-[0.24em] text-blue-300 sm:text-[11px]"
            >
              {hero.role}
            </motion.p>
          </motion.div>

          {/* Título */}
          <h1 className="mt-8 max-w-[940px] text-balance text-[2.7rem] font-extrabold leading-[1.02] tracking-[-0.05em] text-white min-[390px]:text-5xl sm:mt-10 sm:text-6xl lg:text-[4.6rem]">
            <span className="flex flex-wrap gap-x-[0.24em] gap-y-0 [perspective:900px]">
              {titleWords.map((word, index) => (
                <motion.span
                  key={word.text}
                  animate={{
                    y: [24, 0],
                    rotateX: [18, 0],
                    scale: [0.98, 1],
                  }}
                  transition={{
                    duration: 0.85,
                    delay: 0.08 + index * 0.13,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block origin-bottom"
                >
                  {word.accent ? (
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
                      className="bg-[linear-gradient(110deg,#60a5fa_15%,#bfdbfe_45%,#38bdf8_70%,#60a5fa_90%)] bg-[length:220%_100%] bg-clip-text text-transparent"
                    >
                      {word.text}
                    </motion.span>
                  ) : (
                    word.text
                  )}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Línea luminosa debajo del título */}
          <div className="mt-5 h-px max-w-[640px] overflow-hidden bg-white/[0.05]">
            <motion.div
              animate={{
                x: ["-110%", "115%"],
              }}
              transition={{
                duration: 2.3,
                delay: 0.6,
                repeat: Infinity,
                repeatDelay: 3.5,
                ease: "easeInOut",
              }}
              className="h-full w-52 bg-gradient-to-r from-transparent via-blue-400/80 to-transparent"
            />
          </div>

          {/* Descripción */}
          <motion.p
            animate={{
              y: [16, 0],
            }}
            transition={{
              duration: 0.75,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 max-w-[760px] text-sm leading-7 text-zinc-400 sm:mt-8 sm:text-lg sm:leading-9"
          >
            Diseño e implemento soluciones digitales utilizadas por equipos de
            Producción, Calidad y Operaciones. Me especializo en implementación
            de software, análisis funcional, pruebas QA y desarrollo Backend.
          </motion.p>

          {/* Información */}
          <motion.div
            animate={{
              y: [14, 0],
            }}
            transition={{
              duration: 0.7,
              delay: 0.58,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 flex flex-col items-start gap-3 text-sm sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5"
          >
            <motion.span
              whileHover={{
                y: -3,
                color: "#e4e4e7",
              }}
              className="inline-flex items-center gap-2 text-zinc-500"
            >
              <MapPin size={15} />
              {hero.location}
            </motion.span>

            <span className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:block" />

            <motion.span
              whileHover={{
                y: -3,
                color: "#e4e4e7",
              }}
              className="inline-flex items-center gap-2 text-zinc-500"
            >
              <BriefcaseBusiness size={15} />
              {hero.company}
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

          {/* Acciones */}
          <motion.div
            animate={{
              y: [16, 0],
            }}
            transition={{
              duration: 0.75,
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-9 flex flex-wrap items-center gap-3 sm:mt-10"
          >
            <motion.button
              type="button"
              onClick={goToExperience}
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="focus-ring group relative inline-flex h-11 overflow-hidden rounded-lg bg-white px-5 text-sm font-semibold text-zinc-950 shadow-[0_14px_45px_rgba(255,255,255,0.07)] sm:h-12 sm:px-6"
            >
              <span className="absolute inset-0 -translate-x-[130%] skew-x-[-22deg] bg-gradient-to-r from-transparent via-blue-100/90 to-transparent transition-transform duration-700 group-hover:translate-x-[130%]" />

              <span className="relative z-10 flex items-center gap-2">
                Explorar experiencia

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </motion.button>

            <motion.a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir GitHub"
              whileHover={{
                y: -6,
                scale: 1.08,
                rotate: -3,
                boxShadow:
                  "0 16px 40px rgba(255,255,255,0.08)",
              }}
              whileTap={{
                scale: 0.92,
              }}
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.025] text-zinc-300 transition-colors hover:border-white/25 hover:bg-white/[0.07] hover:text-white sm:h-12 sm:w-12"
            >
              <FaGithub size={19} />
            </motion.a>

            <motion.a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir LinkedIn"
              whileHover={{
                y: -6,
                scale: 1.08,
                rotate: 3,
                boxShadow:
                  "0 16px 40px rgba(59,130,246,0.12)",
              }}
              whileTap={{
                scale: 0.92,
              }}
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.025] text-zinc-300 transition-colors hover:border-blue-400/40 hover:bg-blue-500/[0.1] hover:text-blue-300 sm:h-12 sm:w-12"
            >
              <FaLinkedin size={19} />
            </motion.a>

            <motion.a
              href="https://wa.me/51937195838"
              target="_blank"
              rel="noreferrer"
              aria-label="Contactar por WhatsApp"
              whileHover={{
                y: -6,
                scale: 1.08,
                rotate: -3,
                boxShadow:
                  "0 16px 40px rgba(16,185,129,0.12)",
              }}
              whileTap={{
                scale: 0.92,
              }}
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/[0.04] text-emerald-400 transition-colors hover:border-emerald-400/50 hover:bg-emerald-500 hover:text-white sm:h-12 sm:w-12"
            >
              <FaWhatsapp size={20} />
            </motion.a>
          </motion.div>

          {/* Especialidades */}
          <motion.div
            animate={{
              y: [14, 0],
            }}
            transition={{
              duration: 0.7,
              delay: 0.82,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-11 max-w-[900px] border-t border-white/[0.08] pt-6 sm:mt-14"
          >
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {specialties.map((specialty, index) => (
                <motion.span
                  key={specialty}
                  animate={{
                    y: [8, 0],
                  }}
                  transition={{
                    duration: 0.55,
                    delay: 0.9 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -3,
                    color: "#d4d4d8",
                  }}
                  className="cursor-default text-[10px] font-semibold uppercase tracking-[0.13em] text-zinc-600 sm:text-[11px] sm:tracking-[0.15em]"
                >
                  {specialty}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}