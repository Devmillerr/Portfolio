import Link from "next/link";
import { Download, Menu, X } from "lucide-react";

const links = [
  {
    label: "Inicio",
    href: "/#hero",
  },
  {
    label: "Perfil",
    href: "/#profile",
  },
  {
    label: "Experiencia",
    href: "/#experience",
  },
  {
    label: "Caso de estudio",
    href: "/#case-study",
  },
  {
    label: "Proyectos",
    href: "/#projects",
  },
  {
    label: "Contacto",
    href: "/#contact",
  },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-[9999] border-b border-white/[0.08] bg-[#08090c] text-white">
      <div className="mx-auto flex h-[76px] w-full max-w-[1100px] items-center justify-between px-5 lg:px-0">
        {/* Identidad */}
        <Link
          href="/#hero"
          className="flex min-w-0 items-center gap-3"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm font-black">
            MC
          </span>

          <span className="min-w-0">
            <span className="block truncate text-base font-bold">
              Miler Castro
            </span>

            <span className="hidden truncate text-xs text-zinc-500 sm:block">
              Software Implementation Analyst
            </span>
          </span>
        </Link>

        {/* Navegación de escritorio */}
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-zinc-400 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Descargar CV en escritorio */}
        <a
          href="/cv-miler-castro.pdf"
          download
          className="hidden h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.07] lg:inline-flex"
        >
          <Download size={16} />
          Descargar CV
        </a>

        {/* Botón hamburguesa móvil */}
        <a
          href="#mobile-menu"
          aria-label="Abrir menú"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition active:scale-95 lg:hidden"
        >
          <Menu size={23} />
        </a>
      </div>

      {/* Menú móvil controlado con :target */}
      <div
        id="mobile-menu"
        className="fixed inset-0 z-[10000] hidden overflow-y-auto bg-[#08090c] target:block lg:!hidden"
      >
        {/* Encabezado del menú */}
        <div className="mx-auto flex h-[76px] w-full max-w-[1100px] items-center justify-between border-b border-white/[0.08] px-5">
          <Link
            href="/#hero"
            className="flex min-w-0 items-center gap-3"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm font-black">
              MC
            </span>

            <span className="block truncate text-base font-bold text-white">
              Miler Castro
            </span>
          </Link>

          <a
            href="#hero"
            aria-label="Cerrar menú"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition active:scale-95"
          >
            <X size={23} />
          </a>
        </div>

        {/* Contenido del menú */}
        <div className="mx-auto flex min-h-[calc(100dvh-76px)] w-full max-w-[1100px] flex-col px-5 py-5">
          <nav className="flex flex-col">
            {links.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center justify-between border-b border-white/[0.08] py-5 text-lg font-semibold text-zinc-200 transition active:bg-white/[0.03]"
              >
                <span>{item.label}</span>

                <span className="text-xs font-normal text-zinc-700">
                  0{index + 1}
                </span>
              </Link>
            ))}
          </nav>

          <a
            href="/cv-miler-castro.pdf"
            download
            className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-bold text-zinc-950"
          >
            <Download size={17} />
            Descargar CV
          </a>

          <div className="mt-auto border-t border-white/[0.08] pt-5">
            <p className="text-xs text-zinc-600">
              Software Implementation Analyst
            </p>

            <p className="mt-1 text-sm text-zinc-400">
              Chimbote, Perú
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}