"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { name: "Inicio", href: "#hero" },
  { name: "Sobre mí", href: "#about" },
  { name: "Experiencia", href: "#experience" },
  { name: "Proyectos", href: "#projects" },
  { name: "Contacto", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav className="mx-auto mt-4 flex w-[92%] max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-zinc-900/70 px-6 py-4 backdrop-blur-xl">
        <h1 className="text-xl font-bold text-white">
          Miler<span className="text-blue-500">.</span>
        </h1>

        <ul className="hidden gap-8 md:flex">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-zinc-300 transition hover:text-blue-400"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}