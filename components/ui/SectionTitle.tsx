"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-20 text-center"
    >
      <p className="font-medium uppercase tracking-[0.3em] text-blue-400">
        {subtitle}
      </p>

      <h2 className="mt-4 text-5xl font-black tracking-tight">
        {title}
      </h2>
    </motion.div>
  );
}