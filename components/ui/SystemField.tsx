"use client";

import { useEffect, useRef } from "react";

/**
 * Fondo de sistema: una retícula de puntos con un "spotlight" mint que seguir
 * al cursor (throttled vía rAF) y un barrido de escaneo lento. Sustituye a la
 * red de partículas anterior — ese patrón de "constellation network" es uno
 * de los fondos de hero más repetidos en portfolios de desarrollador.
 */
export default function SystemField() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    let frame = 0;
    let targetX = 50;
    let targetY = 35;
    let x = 50;
    let y = 35;

    const onPointerMove = (event: PointerEvent) => {
      const bounds = node.getBoundingClientRect();
      targetX = ((event.clientX - bounds.left) / bounds.width) * 100;
      targetY = ((event.clientY - bounds.top) / bounds.height) * 100;
    };

    const loop = () => {
      x += (targetX - x) * 0.06;
      y += (targetY - y) * 0.06;
      node.style.setProperty("--spot-x", `${x}%`);
      node.style.setProperty("--spot-y", `${y}%`);
      frame = window.requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onPointerMove);
    frame = window.requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 [--spot-x:50%] [--spot-y:35%]">
      <div className="editorial-grid absolute inset-0 opacity-60" />

      <div
        className="absolute inset-0 opacity-70 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(600px circle at var(--spot-x) var(--spot-y), color-mix(in srgb, var(--accent) 7%, transparent), transparent 65%)",
        }}
      />

      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px animate-[scanline_9s_linear_infinite] bg-gradient-to-r from-transparent via-[color-mix(in_srgb,var(--accent)_55%,transparent)] to-transparent"
      />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/70 to-transparent" />
    </div>
  );
}
