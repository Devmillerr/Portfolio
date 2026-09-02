"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type IconLinkProps = {
  href: string;
  label: string;
  children: ReactNode;
  external?: boolean;
  emphasize?: boolean;
  className?: string;
};

export default function IconLink({
  href,
  label,
  children,
  external = true,
  emphasize = false,
  className,
}: IconLinkProps) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={label}
      title={label}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className={cn(
        "focus-ring group relative flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] border transition-colors duration-200",
        emphasize
          ? "border-[var(--accent)]/30 bg-[var(--accent-dim)] text-[var(--accent)] hover:border-[var(--accent)]/60"
          : "border-[var(--border-strong)] bg-white/[0.02] text-[var(--muted)] hover:border-[var(--accent)]/35 hover:text-[var(--foreground)]",
        className,
      )}
    >
      {children}
    </motion.a>
  );
}
