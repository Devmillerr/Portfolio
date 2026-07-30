import { Mail } from "lucide-react";
import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  {
    label: "Correo",
    href: "mailto:castrojordy378@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "GitHub",
    href: "https://github.com/TU-USUARIO",
    icon: FaGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/TU-USUARIO",
    icon: FaLinkedinIn,
    external: true,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/51937195838",
    icon: FaWhatsapp,
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] bg-[#08090c] text-white">
      {/* Línea superior */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />

      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1180px]
          flex-col
          gap-6
          px-5
          py-8
          sm:px-8
          md:flex-row
          md:items-center
          md:justify-between
          lg:px-10
        "
      >
        {/* Marca */}
        <a
          href="#hero"
          aria-label="Volver al inicio"
          className="
            group
            inline-flex
            w-fit
            items-center
            gap-3
          "
        >
          <span
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-xl
              border
              border-white/[0.08]
              bg-white/[0.025]
              text-xs
              font-black
              text-white
              transition-all
              duration-300
              group-hover:border-blue-400/30
              group-hover:bg-blue-500/[0.07]
              group-hover:text-blue-300
            "
          >
            <Image
              src="/favicon-mc.png"
              alt=""
              width={34}
              height={34}
              priority
              className="relative z-10 h-[34px] w-[34px] object-contain"
            />
          </span>

          <span className="text-sm font-bold tracking-[-0.02em] text-zinc-200 transition-colors duration-300 group-hover:text-white">
            Devmillerr
          </span>
        </a>

        {/* Redes */}
        <div className="flex items-center gap-2">
          {socialLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                aria-label={item.label}
                title={item.label}
                className="
                  group
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-white/[0.018]
                  text-zinc-500
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-400/30
                  hover:bg-blue-500/[0.065]
                  hover:text-blue-300
                  hover:shadow-[0_8px_25px_rgba(59,130,246,0.1)]
                "
              >
                <Icon
                  size={16}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="text-[11px] text-zinc-600 md:text-right">
          © {new Date().getFullYear()} Miler Castro
          <span className="mx-2 text-zinc-800">·</span>
          Chimbote, Perú
        </p>
      </div>
    </footer>
  );
}
