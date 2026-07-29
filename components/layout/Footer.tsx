import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#08090c] text-white">
      <div className="mx-auto grid w-full max-w-[1180px] gap-8 px-5 py-8 sm:px-8 md:grid-cols-[1fr_auto_1fr] md:items-center lg:px-10">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-sm font-black">MC</span>
          <div><p className="text-sm font-bold text-zinc-100">Miler Castro</p><p className="mt-0.5 text-xs text-zinc-600">Implementación · QA · Backend</p></div>
        </div>

        <p className="text-sm text-zinc-600 md:text-center">© {new Date().getFullYear()} Miler Castro.</p>

        <div className="flex items-center gap-2 md:justify-end">
          {[{ href: "mailto:castrojordy378@gmail.com", label: "Correo", icon: <Mail size={17} /> }, { href: "https://github.com/TU-USUARIO", label: "GitHub", icon: <FaGithub size={17} /> }, { href: "https://www.linkedin.com/in/TU-USUARIO", label: "LinkedIn", icon: <FaLinkedin size={17} /> }].map((item) => (
            <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined} aria-label={item.label} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] text-zinc-500 transition hover:-translate-y-0.5 hover:border-blue-400/30 hover:text-white">{item.icon}</a>
          ))}
          <a href="#hero" aria-label="Volver al inicio" className="ml-2 flex h-10 items-center gap-2 rounded-xl border border-white/[0.08] px-3 text-xs font-semibold text-zinc-500 transition hover:border-white/20 hover:text-white"><ArrowUp size={15} />Inicio</a>
        </div>
      </div>
    </footer>
  );
}
