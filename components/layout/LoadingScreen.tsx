"use client";

import { animate, motion, MotionConfig, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

import { EASE } from "@/lib/motion";

// El wipe diagonal recorre el logo de arriba-izquierda (la M) a abajo-derecha
// (la C), así que un único trazo continuo se lee como "primero la M, luego
// la C" sin necesitar dos máscaras independientes ni bordes duros entre letras.
const DRAW_DELAY = 0.2;
const DRAW_DURATION = 1.15;
const ACCENT_DELAY = 0.1;
const ACCENT_DURATION = 0.5;
const HOLD_DURATION = 0.65;
const EXIT_DURATION = 0.65;

const REVEAL_ANGLE = 100;
const REVEAL_START = -15;
const REVEAL_END = 78;
const REVEAL_FEATHER = 40;

const ACCENT_START = DRAW_DELAY + DRAW_DURATION + ACCENT_DELAY;
const HOLD_START = ACCENT_START + ACCENT_DURATION;
const EXIT_START = HOLD_START + HOLD_DURATION;
const FINISH_AT = EXIT_START + EXIT_DURATION;

const SESSION_KEY = "miler-os:intro-shown";

type Stage = "intro" | "accent" | "hold" | "exit";

export default function LoadingScreen() {
  const [mounted, setMounted] = useState(true);
  const [stage, setStage] = useState<Stage>("intro");
  // El arte (M+C) ocupa una franja compacta del lienzo cuadrado — medido en
  // ~27%-77% al proyectarlo sobre el eje del gradiente. El rango y el ancho
  // de la pluma (40%) están calibrados sobre esa franja real para que el
  // trazo se sienta gradual durante toda la duración, en vez de completarse
  // de golpe a mitad de la animación.
  const progress = useMotionValue(REVEAL_START);

  const maskImage = useMotionTemplate`linear-gradient(${REVEAL_ANGLE}deg, black 0%, black ${progress}%, transparent calc(${progress}% + ${REVEAL_FEATHER}%), transparent 100%)`;

  useEffect(() => {
    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      alreadyShown = false;
    }

    if (alreadyShown) {
      // sessionStorage solo existe en cliente, así que esta comprobación no
      // puede resolverse durante el render inicial (SSR): debe vivir en el
      // efecto. Es una única salida temprana en el montaje, no un ciclo de
      // sincronización, así que el render extra es intencional y barato.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMounted(false);
      return;
    }

    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const schedule = (callback: () => void, seconds: number) => {
      timeouts.push(setTimeout(callback, seconds * 1000));
    };

    const finish = () => {
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        // almacenamiento no disponible (modo privado, etc.) — no es crítico
      }
      document.body.style.overflow = previousOverflow;
      setMounted(false);
    };

    let stopDraw = () => {};

    if (reducedMotion) {
      // Se respeta la preferencia del sistema: el logo aparece formado de
      // una vez, sin el trazo ni el pop del acento, y la pantalla se retira
      // rápido en un simple fade.
      progress.set(REVEAL_END);
      setStage("hold");
      schedule(() => setStage("exit"), 0.2);
      schedule(finish, 0.2 + 0.25);
    } else {
      const controls = animate(progress, REVEAL_END, {
        duration: DRAW_DURATION,
        delay: DRAW_DELAY,
        ease: EASE,
      });
      stopDraw = controls.stop;

      schedule(() => setStage("accent"), ACCENT_START);
      schedule(() => setStage("hold"), HOLD_START);
      schedule(() => setStage("exit"), EXIT_START);
      schedule(finish, FINISH_AT);
    }

    return () => {
      stopDraw();
      timeouts.forEach(clearTimeout);
      document.body.style.overflow = previousOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mounted) return null;

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        role="status"
        aria-live="polite"
        aria-label="Cargando Miler.OS"
        animate={{ opacity: stage === "exit" ? 0 : 1 }}
        transition={{ duration: EXIT_DURATION, ease: EASE }}
        className="fixed inset-0 z-[10050] flex items-center justify-center bg-[var(--background)]"
      >
        <div className="pointer-events-none absolute inset-0 editorial-grid opacity-[0.18]" />

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: stage === "exit" ? 1.04 : 1 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="relative flex flex-col items-center gap-5"
        >
          <div className="relative aspect-square w-[clamp(76px,18vw,124px)]">
            <motion.div
              aria-hidden
              style={{ WebkitMaskImage: maskImage, maskImage }}
              className="absolute inset-0 [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:100%_100%] [mask-repeat:no-repeat] [mask-size:100%_100%]"
            >
              <Image src="/logo-mc.png" alt="" fill priority sizes="124px" className="object-contain" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                stage === "intro" ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }
              }
              transition={{ duration: ACCENT_DURATION, ease: EASE }}
              className="absolute inset-0"
            >
              <Image
                src="/logo-white.png"
                alt="Miler.OS"
                fill
                priority
                sizes="124px"
                className="object-contain"
              />
            </motion.div>
          </div>

          <motion.p
            aria-hidden
            initial={{ opacity: 0, y: 6 }}
            animate={
              stage === "hold" || stage === "exit" ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }
            }
            transition={{ duration: 0.4, ease: EASE }}
            className="font-mono text-[10px] font-medium uppercase tracking-[0.32em] text-[var(--muted-2)]"
          >
            Miler.OS
          </motion.p>
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
}
