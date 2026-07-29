"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
};

export default function Counter({
  value,
  suffix = "",
  duration = 1.4,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate(latest) {
        setCount(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [duration, isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}