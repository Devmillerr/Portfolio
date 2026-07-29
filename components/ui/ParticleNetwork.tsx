"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
};

type ParticleNetworkProps = {
  particleCount?: number;
  connectionDistance?: number;
  mouseDistance?: number;
};

export default function ParticleNetwork({
  particleCount = 105,
  connectionDistance = 125,
  mouseDistance = 170,
}: ParticleNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const context = canvas.getContext("2d");

    if (!context) return;

    let animationFrameId = 0;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let isPageVisible = true;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmallScreen = window.matchMedia("(max-width: 640px)").matches;

    const mouse = {
      x: 0,
      y: 0,
      active: false,
    };

    const createParticle = (): Particle => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.32,
      vy: (Math.random() - 0.5) * 0.32,
      radius: Math.random() * 1.25 + 0.45,
      opacity: Math.random() * 0.45 + 0.25,
    });

    const calculateParticleCount = () => {
      const screenArea = width * height;
      const adaptiveCount = Math.floor(screenArea / 10500);

      const minimum = isSmallScreen ? 22 : 45;
      const maximum = isSmallScreen ? Math.min(48, particleCount) : particleCount;

      return Math.min(
        maximum,
        Math.max(minimum, adaptiveCount),
      );
    };

    const createParticles = () => {
      const total = calculateParticleCount();

      particles = Array.from(
        { length: total },
        createParticle,
      );
    };

    const resizeCanvas = () => {
      const parent = canvas.parentElement;

      if (!parent) return;

      const bounds = parent.getBoundingClientRect();
      const pixelRatio = Math.min(
        window.devicePixelRatio || 1,
        2,
      );

      width = bounds.width;
      height = bounds.height;

      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(
        pixelRatio,
        0,
        0,
        pixelRatio,
        0,
        0,
      );

      createParticles();
    };

    const updateParticle = (particle: Particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x <= 0 || particle.x >= width) {
        particle.vx *= -1;
        particle.x = Math.max(
          0,
          Math.min(width, particle.x),
        );
      }

      if (particle.y <= 0 || particle.y >= height) {
        particle.vy *= -1;
        particle.y = Math.max(
          0,
          Math.min(height, particle.y),
        );
      }

      if (!mouse.active) return;

      const deltaX = mouse.x - particle.x;
      const deltaY = mouse.y - particle.y;
      const distance = Math.hypot(deltaX, deltaY);

      if (
        distance > 0 &&
        distance < mouseDistance
      ) {
        const force =
          (mouseDistance - distance) /
          mouseDistance;

        particle.vx +=
          (deltaX / distance) * force * 0.004;

        particle.vy +=
          (deltaY / distance) * force * 0.004;
      }

      const maxVelocity = 0.55;

      particle.vx = Math.max(
        -maxVelocity,
        Math.min(maxVelocity, particle.vx),
      );

      particle.vy = Math.max(
        -maxVelocity,
        Math.min(maxVelocity, particle.vy),
      );
    };

    const drawParticle = (particle: Particle) => {
      context.beginPath();

      context.arc(
        particle.x,
        particle.y,
        particle.radius,
        0,
        Math.PI * 2,
      );

      context.fillStyle = `rgba(147, 197, 253, ${particle.opacity})`;

      context.shadowBlur = 8;
      context.shadowColor = "rgba(96, 165, 250, 0.35)";

      context.fill();

      context.shadowBlur = 0;
    };

    const drawConnections = () => {
      for (
        let currentIndex = 0;
        currentIndex < particles.length;
        currentIndex += 1
      ) {
        const currentParticle =
          particles[currentIndex];

        for (
          let nextIndex = currentIndex + 1;
          nextIndex < particles.length;
          nextIndex += 1
        ) {
          const nextParticle =
            particles[nextIndex];

          const deltaX =
            currentParticle.x - nextParticle.x;

          const deltaY =
            currentParticle.y - nextParticle.y;

          const distance = Math.hypot(
            deltaX,
            deltaY,
          );

          if (distance > connectionDistance) {
            continue;
          }

          const opacity =
            (1 - distance / connectionDistance) *
            0.18;

          context.beginPath();

          context.moveTo(
            currentParticle.x,
            currentParticle.y,
          );

          context.lineTo(
            nextParticle.x,
            nextParticle.y,
          );

          context.strokeStyle = `rgba(96, 165, 250, ${opacity})`;
          context.lineWidth = 0.65;

          context.stroke();
        }
      }
    };

    const drawMouseConnections = () => {
      if (!mouse.active) return;

      particles.forEach((particle) => {
        const deltaX = particle.x - mouse.x;
        const deltaY = particle.y - mouse.y;

        const distance = Math.hypot(
          deltaX,
          deltaY,
        );

        if (distance > mouseDistance) return;

        const opacity =
          (1 - distance / mouseDistance) *
          0.22;

        context.beginPath();

        context.moveTo(mouse.x, mouse.y);
        context.lineTo(
          particle.x,
          particle.y,
        );

        context.strokeStyle = `rgba(125, 211, 252, ${opacity})`;
        context.lineWidth = 0.7;

        context.stroke();
      });
    };

    const animate = () => {
      if (!isPageVisible) return;

      context.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        updateParticle(particle);
      });

      drawConnections();
      drawMouseConnections();

      particles.forEach(drawParticle);

      animationFrameId =
        window.requestAnimationFrame(animate);
    };

    const handleMouseMove = (
      event: MouseEvent,
    ) => {
      const bounds =
        canvas.getBoundingClientRect();

      mouse.x = event.clientX - bounds.left;
      mouse.y = event.clientY - bounds.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleVisibilityChange = () => {
      isPageVisible =
        document.visibilityState === "visible";

      window.cancelAnimationFrame(
        animationFrameId,
      );

      if (isPageVisible) {
        animate();
      }
    };

    resizeCanvas();

    if (prefersReducedMotion) {
      context.clearRect(0, 0, width, height);
      drawConnections();
      particles.forEach(drawParticle);
    } else {
      animate();
    }

    window.addEventListener(
      "resize",
      resizeCanvas,
    );

    if (!isSmallScreen && !prefersReducedMotion) {
      canvas.addEventListener(
        "mousemove",
        handleMouseMove,
      );

      canvas.addEventListener(
        "mouseleave",
        handleMouseLeave,
      );
    }

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange,
    );

    return () => {
      window.cancelAnimationFrame(
        animationFrameId,
      );

      window.removeEventListener(
        "resize",
        resizeCanvas,
      );

      canvas.removeEventListener(
        "mousemove",
        handleMouseMove,
      );

      canvas.removeEventListener(
        "mouseleave",
        handleMouseLeave,
      );

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange,
      );
    };
  }, [
    connectionDistance,
    mouseDistance,
    particleCount,
  ]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}