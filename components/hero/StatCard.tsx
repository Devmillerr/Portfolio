"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import Counter from "./Counter";

type Props = {
  icon: LucideIcon;
  value: string;
  title: string;
  subtitle: string;
  featured?: boolean;
};

export default function StatCard({ icon: Icon, value, title, subtitle, featured = false }: Props) {
  const numericValue = Number.parseInt(value.replace(/\D/g, ""), 10);
  const hasNumericValue = !Number.isNaN(numericValue);
  const suffix = hasNumericValue ? value.replace(String(numericValue), "") : "";

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[var(--radius-md)] border p-4",
        featured
          ? "border-[var(--accent)]/25 bg-[var(--accent-dim)]"
          : "border-[var(--border)] bg-white/[0.015] hover:border-[var(--border-strong)]",
      )}
    >
      <div className="flex items-center gap-2 text-[var(--muted)]">
        <Icon size={14} className={featured ? "text-[var(--accent)]" : ""} />
        <span className="font-mono text-[10px] uppercase tracking-[0.14em]">{title}</span>
      </div>

      <p className="font-tabular mt-2.5 font-mono text-[1.6rem] font-medium leading-none text-[var(--foreground)]">
        {hasNumericValue ? <Counter value={numericValue} suffix={suffix} /> : value}
      </p>

      <p className="mt-1.5 text-[11.5px] leading-snug text-[var(--muted)]">{subtitle}</p>

      {featured && (
        <motion.span
          aria-hidden
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
        />
      )}
    </div>
  );
}
