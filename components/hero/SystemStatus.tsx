"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { siteConfig } from "@/lib/constants";

function formatTime(date: Date) {
  return new Intl.DateTimeFormat("es-PE", {
    timeZone: siteConfig.timezone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

function formatUptime(ms: number) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

export default function SystemStatus() {
  // Inicializado de forma perezosa: el primer render en servidor y cliente
  // puede diferir en un segundo, por eso el span de la hora usa
  // suppressHydrationWarning más abajo (patrón estándar para relojes en vivo).
  const [now, setNow] = useState<Date | null>(() =>
    typeof window === "undefined" ? null : new Date(),
  );
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const start = Date.now();

    const id = window.setInterval(() => {
      setNow(new Date());
      setUptime(Date.now() - start);
    }, 1000);

    return () => window.clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-[11px] text-[var(--muted)]"
    >
      <span className="inline-flex items-center gap-1.5 text-[var(--accent)]">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-40" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
        </span>
        disponible
      </span>

      <span aria-hidden className="h-1 w-1 rounded-full bg-[var(--border-strong)]" />

      <span className="font-tabular" suppressHydrationWarning>
        {now ? formatTime(now) : "--:--:--"} · {siteConfig.location}
      </span>

      <span aria-hidden className="hidden h-1 w-1 rounded-full bg-[var(--border-strong)] sm:block" />

      <span className="font-tabular hidden sm:inline">
        sesión {formatUptime(uptime)}
      </span>
    </motion.div>
  );
}
