"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  href: string;
  label: string;
  variant: "default" | "linkedin" | "whatsapp";
  children: ReactNode;
};

export default function SocialLink({
  href,
  label,
  variant,
  children,
}: Props) {
  const styles = {
    default:
      "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-blue-400/30 hover:bg-blue-500/[0.06] hover:text-white",

    linkedin:
      "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-blue-400/40 hover:bg-blue-500/[0.08] hover:text-blue-300",

    whatsapp:
      "border-emerald-500/20 bg-emerald-500/[0.04] text-emerald-400 hover:border-emerald-400/60 hover:bg-emerald-500/[0.18] hover:text-emerald-300",
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      whileHover={{
        y: -3,
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className={`group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg border backdrop-blur-xl transition-all duration-300 sm:h-11 sm:w-11 ${styles[variant]}`}
    >
      <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-blue-400/10 via-transparent to-cyan-400/10" />

      <span className="relative z-10">
        {children}
      </span>
    </motion.a>
  );
}