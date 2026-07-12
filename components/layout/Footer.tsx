import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090b0f] text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
        <div>
          <p className="text-xl font-black">
            Miler<span className="text-blue-400">.</span>
          </p>

          <p className="mt-2 text-sm text-zinc-500">
            Software Implementation Analyst · Backend Developer
          </p>
        </div>

        <p className="text-center text-sm text-zinc-600">
          © {new Date().getFullYear()} Miler Castro. Todos los derechos
          reservados.
        </p>

        <div className="flex gap-3">
          <a
            href="mailto:castrojordy378@gmail.com"
            aria-label="Correo"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition hover:border-white/20 hover:text-white"
          >
            <Mail size={18} />
          </a>

          <a
            href="https://github.com/TU-USUARIO"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition hover:border-white/20 hover:text-white"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/TU-USUARIO"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition hover:border-blue-500/40 hover:text-blue-400"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}