"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Check, ClipboardCheck, TrendingUp } from "lucide-react";

import { EASE } from "@/lib/motion";

import type { Accent } from "./types";

export function getStageStyles(accent: Accent) {
  if (accent === "red") {
    return {
      border: "border-[var(--warn)]/25 hover:border-[var(--warn)]/45",
      badge: "border-[var(--warn)]/25 bg-[var(--warn-dim)] text-[var(--warn)]",
      text: "text-[var(--warn)]",
      icon: "bg-[var(--warn-dim)] text-[var(--warn)]",
      glow: "bg-[var(--warn-dim)]",
      line: "from-[var(--warn)] to-[var(--warn)]",
      connector: "border-[var(--warn)]/25 bg-[var(--warn-dim)] text-[var(--warn)]",
    };
  }

  if (accent === "emerald") {
    return {
      border: "border-[var(--accent)]/35 hover:border-[var(--accent)]/60",
      badge: "border-[var(--accent)]/40 bg-[var(--accent)] text-[var(--accent-foreground)]",
      text: "text-[var(--accent)]",
      icon: "bg-[var(--accent)] text-[var(--accent-foreground)]",
      glow: "bg-[var(--accent)]/[0.16]",
      line: "from-[var(--accent)] to-[var(--accent)]",
      connector: "border-[var(--accent)]/40 bg-[var(--accent)] text-[var(--accent-foreground)]",
    };
  }

  return {
    border: "border-[var(--accent)]/25 hover:border-[var(--accent)]/45",
    badge: "border-[var(--accent)]/25 bg-[var(--accent-dim)] text-[var(--accent)]",
    text: "text-[var(--accent)]",
    icon: "bg-[var(--accent-dim)] text-[var(--accent)]",
    glow: "bg-[var(--accent-dim)]",
    line: "from-[var(--accent)] to-[var(--accent)]",
    connector: "border-[var(--accent)]/25 bg-[var(--accent-dim)] text-[var(--accent)]",
  };
}

function ManualProcessVisual() {
  return (
    <div className="relative h-[106px] overflow-hidden rounded-2xl border border-[var(--warn)]/15 bg-gradient-to-br from-[var(--warn)]/[0.06] via-white/[0.012] to-transparent px-4 py-3">
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[var(--warn-dim)] blur-3xl" />

      <div className="absolute inset-x-5 bottom-3 h-px bg-gradient-to-r from-transparent via-[var(--warn)]/15 to-transparent" />

      <motion.div
        animate={{
          y: [0, -2, 0],
          rotate: [-0.5, 0.5, -0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative mx-auto h-full max-w-[230px]"
      >
        <div className="absolute left-6 top-2 h-[69px] w-[112px] -rotate-[6deg] rounded-xl border border-[var(--border-strong)] bg-[var(--panel)] shadow-[0_18px_45px_rgba(0,0,0,0.35)]">
          <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-3 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--warn)]/70" />
            <span className="h-1.5 w-8 rounded-full bg-white/[0.1]" />
          </div>

          <div className="space-y-2 px-3 py-2.5">
            <span className="block h-1.5 w-full rounded-full bg-white/[0.07]" />
            <span className="block h-1.5 w-[78%] rounded-full bg-white/[0.07]" />
            <span className="block h-1.5 w-[58%] rounded-full bg-white/[0.07]" />
          </div>
        </div>

        <div className="absolute right-6 top-3 h-[72px] w-[116px] rotate-[5deg] rounded-xl border border-[var(--warn)]/20 bg-[var(--panel)] shadow-[0_20px_45px_rgba(0,0,0,0.4)]">
          <div className="flex items-center justify-between border-b border-white/[0.06] px-3 py-2">
            <span className="h-1.5 w-9 rounded-full bg-white/[0.12]" />

            <span className="flex h-4 w-4 items-center justify-center rounded-md bg-[var(--warn)]/15 text-[var(--warn)]">
              <AlertTriangle size={9} />
            </span>
          </div>

          <div className="space-y-2 px-3 py-2.5">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full border border-[var(--warn)]/40" />
              <span className="h-1.5 flex-1 rounded-full bg-white/[0.07]" />
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full border border-[var(--warn)]/40" />
              <span className="h-1.5 w-[70%] rounded-full bg-white/[0.07]" />
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full border border-[var(--warn)]/40" />
              <span className="h-1.5 w-[48%] rounded-full bg-white/[0.07]" />
            </div>
          </div>
        </div>

        <motion.span
          animate={{
            scale: [1, 1.08, 1],
            boxShadow: [
              "0 0 0 rgba(217,162,115,0)",
              "0 0 24px rgba(217,162,115,0.18)",
              "0 0 0 rgba(217,162,115,0)",
            ],
          }}
          transition={{
            duration: 2.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-1 flex h-8 w-8 items-center justify-center rounded-xl border border-[var(--warn)]/25 bg-[var(--panel)] text-[var(--warn)]"
        >
          <AlertTriangle size={14} />
        </motion.span>
      </motion.div>
    </div>
  );
}

function DigitalSolutionVisual() {
  return (
    <div className="relative h-[106px] overflow-hidden rounded-2xl border border-[var(--accent-dim)] bg-gradient-to-br from-[var(--accent-dim)] via-white/[0.012] to-transparent px-4 py-3">
      <div className="pointer-events-none absolute -left-5 -top-10 h-28 w-28 rounded-full bg-[var(--accent)]/[0.1] blur-3xl" />

      <div className="relative mx-auto flex h-full max-w-[240px] items-center justify-center gap-8">
        <motion.div
          animate={{
            y: [0, -2, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10"
        >
          <div className="h-[72px] w-[118px] rounded-xl border border-[var(--accent)]/25 bg-[var(--panel)] p-2 shadow-[0_20px_50px_rgba(178,102,255,0.2)]">
            <div className="flex h-full flex-col rounded-lg border border-white/[0.06] bg-[var(--panel)]">
              <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-2 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <span className="h-1.5 w-7 rounded-full bg-white/[0.1]" />
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[var(--accent)]/70" />
              </div>

              <div className="flex flex-1 gap-2 px-2 py-2">
                <div className="w-5 space-y-1">
                  <span className="block h-4 rounded bg-[var(--accent-dim)]" />
                  <span className="block h-4 rounded bg-white/[0.04]" />
                </div>

                <div className="flex-1 space-y-1.5">
                  <span className="block h-1.5 w-full rounded-full bg-white/[0.08]" />
                  <span className="block h-1.5 w-[72%] rounded-full bg-white/[0.08]" />

                  <div className="flex items-center gap-1.5 pt-1">
                    <span className="block h-3 w-8 rounded bg-[var(--accent-dim)]" />
                    <span className="block h-3 w-5 rounded bg-white/[0.05]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto h-2 w-7 rounded-b bg-[var(--accent)]/30" />
        </motion.div>

        <div className="pointer-events-none absolute left-[114px] top-1/2 h-px w-[46px] overflow-hidden bg-[var(--accent)]/15">
          <motion.span
            animate={{
              x: [-20, 52],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="block h-full w-5 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent"
          />
        </div>

        <motion.div
          animate={{
            y: [0, 3, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10 h-[80px] w-[43px] rounded-[13px] border border-[var(--accent)]/30 bg-[var(--panel)] p-1.5 shadow-[0_15px_35px_rgba(178,102,255,0.24)]"
        >
          <div className="flex h-full flex-col rounded-[9px] border border-[var(--border)] bg-[var(--panel)]">
            <div className="mx-auto mt-1 h-1 w-2.5 rounded-full bg-white/[0.12]" />

            <div className="flex flex-1 items-center justify-center">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--accent-dim)] text-[var(--accent)]">
                <ClipboardCheck size={15} />
              </span>
            </div>

            <span className="mx-auto mb-1 h-1.5 w-1.5 rounded-full border border-[var(--accent)]/30" />
          </div>

          <motion.span
            animate={{
              opacity: [0.35, 1, 0.35],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="absolute -right-1 top-3 h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_12px_rgba(178,102,255,0.8)]"
          />
        </motion.div>
      </div>
    </div>
  );
}

function ResultVisual() {
  const bars = [13, 21, 29, 38, 47];

  return (
    <div className="relative h-[106px] overflow-hidden rounded-2xl border border-[var(--accent-dim)] bg-gradient-to-br from-[var(--accent)]/[0.06] via-white/[0.012] to-transparent px-4 py-3">
      <div className="pointer-events-none absolute -right-5 -top-10 h-28 w-28 rounded-full bg-[var(--accent)]/[0.1] blur-3xl" />

      <div className="relative mx-auto flex h-full max-w-[240px] items-center justify-center">
        <div className="relative flex h-[78px] w-[190px] flex-col rounded-xl border border-[var(--accent)]/20 bg-[var(--panel)] p-3 shadow-[0_20px_45px_rgba(5,150,105,0.14)]">
          <div className="flex items-center justify-between">
            <div>
              <span className="block h-1.5 w-10 rounded-full bg-white/[0.12]" />
              <span className="mt-1.5 block h-1 w-16 rounded-full bg-white/[0.05]" />
            </div>

            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[var(--accent-dim)] text-[var(--accent)]">
              <TrendingUp size={12} />
            </span>
          </div>

          <div className="relative mt-auto flex h-[40px] items-end gap-2">
            {bars.map((height, index) => (
              <motion.span
                key={height}
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                whileInView={{
                  height,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.09,
                  ease: EASE,
                }}
                className="relative flex-1 rounded-t-[4px] bg-gradient-to-t from-[var(--accent)]/55 to-[var(--accent)]"
              >
                <span className="absolute inset-x-0 top-0 h-px bg-white/30" />
              </motion.span>
            ))}

            <svg
              viewBox="0 0 160 42"
              className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M3 36 C24 32, 43 30, 63 24 S103 19, 157 4"
                fill="none"
                stroke="rgb(178 102 255)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{
                  pathLength: 0,
                  opacity: 0,
                }}
                whileInView={{
                  pathLength: 1,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.25,
                  delay: 0.3,
                  ease: EASE,
                }}
              />
            </svg>
          </div>
        </div>

        <motion.span
          animate={{
            scale: [1, 1.08, 1],
            boxShadow: [
              "0 0 0 rgba(178,102,255,0)",
              "0 0 25px rgba(178,102,255,0.16)",
              "0 0 0 rgba(178,102,255,0)",
            ],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-1 top-0 flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--accent)]/25 bg-[var(--panel)] text-[var(--accent)]"
        >
          <Check size={17} strokeWidth={3} />
        </motion.span>
      </div>
    </div>
  );
}

export function StageVisual({ accent }: { accent: Accent }) {
  if (accent === "red") {
    return <ManualProcessVisual />;
  }

  if (accent === "blue") {
    return <DigitalSolutionVisual />;
  }

  return <ResultVisual />;
}
