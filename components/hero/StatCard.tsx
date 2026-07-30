"use client";

import { useId, useRef, useState, type MouseEvent } from "react";

import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

import Counter from "./Counter";

type Props = {
  icon: string;
  value: string;
  title: string;
  subtitle: string;
  featured?: boolean;
};

export default function StatCard({
  icon,
  value,
  title,
  subtitle,
  featured = false,
}: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const glowId = useId().replace(/:/g, "");

  const numericValue = Number.parseInt(value.replace(/\D/g, ""), 10);

  const hasNumericValue = !Number.isNaN(numericValue);

  const suffix = hasNumericValue ? value.replace(String(numericValue), "") : "";

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 180,
    damping: 22,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 180,
    damping: 22,
  });

  const spotlight = useMotionTemplate`
    radial-gradient(
      150px circle at ${smoothX}px ${smoothY}px,
      rgba(59, 130, 246, 0.14),
      transparent 72%
    )
  `;

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();

    if (!rect) return;

    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{
        y: -4,
        scale: 1.01,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 22,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-xl
        p-px
        ${
          featured
            ? "bg-blue-400/25 shadow-[0_14px_40px_rgba(59,130,246,0.12)]"
            : "bg-[#0a0e16]/95"
        }
      `}
    >
      {/* Borde base */}
      <div
        className={`
          pointer-events-none
          absolute
          inset-0
          rounded-xl
          border
          ${featured ? "border-blue-400/30" : "border-white/[0.08]"}
        `}
      />

      {/* Glow permanente para la tarjeta destacada */}
      {featured && (
        <>
          <div className="pointer-events-none absolute -left-8 -top-10 h-28 w-28 rounded-full bg-blue-500/[0.14] blur-3xl" />

          <motion.div
            animate={{
              opacity: [0.35, 0.7, 0.35],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-10 bottom-[-60px] h-28 w-28 rounded-full bg-cyan-400/[0.08] blur-3xl"
          />
        </>
      )}

      {/* Línea animada en hover */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <filter id={glowId}>
            <feGaussianBlur stdDeviation="1.6" result="blur" />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect
          x="0.7"
          y="0.7"
          width="98.6"
          height="98.6"
          rx="7"
          ry="7"
          fill="none"
          stroke={featured ? "rgba(96,165,250,0.22)" : "rgba(59,130,246,0.10)"}
          strokeWidth={featured ? "0.85" : "0.7"}
          vectorEffect="non-scaling-stroke"
        />

        <AnimatePresence>
          {hovered && (
            <motion.rect
              x="0.7"
              y="0.7"
              width="98.6"
              height="98.6"
              rx="7"
              ry="7"
              fill="none"
              stroke="rgba(96,165,250,0.95)"
              strokeWidth="1.1"
              strokeLinecap="round"
              strokeDasharray="13 387"
              vectorEffect="non-scaling-stroke"
              filter={`url(#${glowId})`}
              initial={{
                opacity: 0,
                strokeDashoffset: 0,
              }}
              animate={{
                opacity: 1,
                strokeDashoffset: -400,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                opacity: {
                  duration: 0.18,
                },
                strokeDashoffset: {
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            />
          )}
        </AnimatePresence>
      </svg>

      {/* Gradiente general */}
      <div
        className={`
          pointer-events-none
          absolute
          inset-0
          rounded-xl
          bg-gradient-to-br
          via-transparent
          transition-opacity
          duration-300
          ${
            featured
              ? "from-blue-500/[0.09] to-cyan-400/[0.035]"
              : "from-blue-500/[0.025] to-cyan-400/[0.01] group-hover:from-blue-500/[0.055] group-hover:to-cyan-400/[0.025]"
          }
        `}
      />

      {/* Luz superior izquierda */}
      <div
        className={`
          pointer-events-none
          absolute
          left-0
          top-0
          h-9
          w-9
          rounded-tl-xl
          bg-blue-400/[0.08]
          blur-xl
          transition-opacity
          duration-300
          ${featured ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
        `}
      />

      {/* Luz inferior derecha */}
      <div
        className={`
          pointer-events-none
          absolute
          bottom-0
          right-0
          h-9
          w-9
          rounded-br-xl
          bg-cyan-400/[0.07]
          blur-xl
          transition-opacity
          duration-300
          ${featured ? "opacity-70" : "opacity-0 group-hover:opacity-100"}
        `}
      />

      {/* Spotlight que sigue al mouse */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl"
        style={{
          background: spotlight,
        }}
        animate={{
          opacity: hovered ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
      />

      {/* Contenido */}
      <div
        className={`
  relative
  z-10
  flex
  h-full
  min-h-[84px]
  items-center
  gap-3
  rounded-[11px]
  px-3.5
  py-3
  backdrop-blur-xl
  ${
    featured
      ? "bg-[linear-gradient(135deg,rgba(17,31,52,0.96),rgba(10,14,22,0.94))]"
      : "bg-[#0a0e16]/90"
  }
`}
      >
        {/* Icono */}
        <motion.div
          animate={{
            rotate: hovered ? -4 : 0,
            scale: hovered ? 1.06 : 1,
            y: hovered ? -1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 280,
            damping: 20,
          }}
          className={`
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-lg
            border
            text-base
            shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
            ${
              featured
                ? "border-blue-400/25 bg-blue-500/[0.11]"
                : "border-white/[0.07] bg-white/[0.035]"
            }
          `}
        >
          {icon}
        </motion.div>

        {/* Información */}
        <div className="min-w-0">
          <h3
            className={`
              font-bold
              leading-none
              ${featured ? "text-blue-300" : "text-blue-400"}
              ${
                value.length > 12
                  ? "text-[12px] sm:text-[13px]"
                  : "text-lg sm:text-xl"
              }
            `}
          >
            {hasNumericValue ? (
              <Counter value={numericValue} suffix={suffix} />
            ) : (
              value
            )}
          </h3>

          <p
            className={`
              mt-1
              text-[12px]
              font-semibold
              leading-4
              ${featured ? "text-blue-50" : "text-white"}
            `}
          >
            {title}
          </p>

          <p
            className={`
              mt-0.5
              line-clamp-2
              text-[10px]
              leading-[14px]
              ${featured ? "text-zinc-400" : "text-zinc-500"}
            `}
          >
            {subtitle}
          </p>
        </div>
      </div>

      {/* Destello horizontal */}
      <div className="pointer-events-none absolute -left-24 top-0 z-20 h-full w-12 -skew-x-12 bg-gradient-to-r from-transparent via-blue-300/15 to-transparent opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100" />
    </motion.div>
  );
}
