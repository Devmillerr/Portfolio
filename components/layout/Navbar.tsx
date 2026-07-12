"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

const links = [
  { name: "Inicio", href: "hero" },
  { name: "Sobre mí", href: "about" },
  { name: "Experiencia", href: "experience" },
  { name: "Proyectos", href: "projects" },
  { name: "Contacto", href: "contact" },
];

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id: string) => {
    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scroll
          ? "border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <button
          onClick={() => goTo("hero")}
          className="text-3xl font-black tracking-tight text-white"
        >
          Miler<span className="text-blue-400">.</span>
        </button>

        {/* Desktop */}

        <nav className="hidden items-center gap-10 md:flex">

          {links.map((item) => (
            <button
              key={item.name}
              onClick={() => goTo(item.href)}
              className="text-zinc-300 transition hover:text-white"
            >
              {item.name}
            </button>
          ))}

        </nav>

        {/* Desktop Button */}

        <div className="hidden md:block">
          <Button>
            Descargar CV
          </Button>
        </div>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (

        <div className="border-t border-zinc-800 bg-zinc-950 md:hidden">

          <div className="flex flex-col p-6">

            {links.map((item) => (

              <button
                key={item.name}
                onClick={() => goTo(item.href)}
                className="py-4 text-left text-lg text-zinc-300 transition hover:text-white"
              >
                {item.name}
              </button>

            ))}

            <div className="mt-6">

              <Button className="w-full">
                Descargar CV
              </Button>

            </div>

          </div>

        </div>

      )}

    </header>
  );
}