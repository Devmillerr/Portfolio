"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const sections = [
  { id: "hero", label: "Inicio" },
  { id: "profile", label: "Enfoque" },
  { id: "case-study", label: "Caso de estudio" },
  { id: "experience", label: "Experiencia" },
  { id: "projects", label: "Proyectos" },
  { id: "contact", label: "Contacto" },
];

export default function SectionRail() {
  const [active, setActive] = useState("hero");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Progreso de la página"
      className="fixed right-5 top-1/2 z-[9998] hidden -translate-y-1/2 xl:block"
    >
      <div className="pointer-events-none relative flex flex-col items-center gap-[18px] py-2">
        <span className="pointer-events-none absolute -left-3 top-0 h-full w-px bg-[var(--border)]" />
        <motion.span
          className="pointer-events-none absolute -left-3 top-0 w-px origin-top bg-[var(--accent)]"
          style={{ scaleY: progress, height: "100%" }}
        />

        {sections.map((section) => {
          const isActive = active === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="pointer-events-auto group relative flex items-center"
              aria-label={section.label}
              aria-current={isActive ? "true" : undefined}
            >
              <span
                className={cn(
                  "absolute right-4 whitespace-nowrap rounded-[6px] border border-[var(--border-strong)] bg-[var(--surface)] px-2 py-1 font-mono text-[10.5px] text-[var(--foreground)] opacity-0 shadow-[0_8px_20px_rgba(0,0,0,0.35)] transition-opacity duration-150 group-hover:opacity-100",
                )}
              >
                {section.label}
              </span>

              <span
                className={cn(
                  "h-[7px] w-[7px] rounded-full border transition-all duration-300",
                  isActive
                    ? "scale-125 border-[var(--accent)] bg-[var(--accent)] shadow-[0_0_0_4px_var(--accent-dim)]"
                    : "border-[var(--border-strong)] bg-transparent group-hover:border-[var(--muted)]",
                )}
              />
            </a>
          );
        })}
      </div>
    </nav>
  );
}
