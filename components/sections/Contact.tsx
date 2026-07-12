"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import SectionTitle from "@/components/ui/SectionTitle";

const contactLinks = [
  {
    label: "Correo",
    value: "castrojordy378@gmail.com",
    href: "mailto:castrojordy378@gmail.com",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: "+51 937 195 838",
    href: "https://wa.me/51937195838",
    icon: MessageCircle,
  },
  {
    label: "Ubicación",
    value: "Chimbote, Perú",
    href: "#",
    icon: MapPin,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#090b0f] py-28 text-white"
    >
      <div className="absolute right-[-200px] top-20 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          subtitle="CONTACTO"
          title="Trabajemos juntos"
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* Información */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-10 backdrop-blur-xl"
          >
            <h3 className="text-3xl font-bold">
              ¿Tienes un proyecto o una oportunidad?
            </h3>

            <p className="mt-6 leading-8 text-zinc-400">
              Estoy interesado en oportunidades relacionadas con
              implementación de software, transformación digital,
              desarrollo Backend y QA.
              Si crees que puedo aportar valor a tu equipo,
              será un gusto conversar.
            </p>

            <div className="mt-10 space-y-5">

              {contactLinks.map((item) => {

                const Icon = item.icon;

                return (

                  <a
                    key={item.label}
                    href={item.href}
                    target={
                      item.href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-zinc-800 p-5 transition hover:border-blue-500"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">

                      <Icon
                        size={22}
                        className="text-blue-400"
                      />

                    </div>

                    <div>

                      <p className="text-sm text-zinc-500">
                        {item.label}
                      </p>

                      <p className="font-medium">
                        {item.value}
                      </p>

                    </div>

                  </a>

                );

              })}

            </div>

            <div className="mt-10 flex gap-4">

              <a
                href="https://github.com/TU-USUARIO"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-700 transition hover:border-white"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://linkedin.com/in/TU-USUARIO"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-700 transition hover:border-blue-500"
              >
                <FaLinkedin size={22} />
              </a>

            </div>

          </motion.div>

          {/* Formulario */}

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            action="mailto:castrojordy378@gmail.com"
            method="post"
            encType="text/plain"
            className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-10 backdrop-blur-xl"
          >

            <div>

              <label className="mb-2 block text-sm text-zinc-400">
                Nombre
              </label>

              <input
                type="text"
                name="Nombre"
                required
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-4 outline-none transition focus:border-blue-500"
              />

            </div>

            <div className="mt-6">

              <label className="mb-2 block text-sm text-zinc-400">
                Correo
              </label>

              <input
                type="email"
                name="Correo"
                required
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-4 outline-none transition focus:border-blue-500"
              />

            </div>

            <div className="mt-6">

              <label className="mb-2 block text-sm text-zinc-400">
                Asunto
              </label>

              <input
                type="text"
                name="Asunto"
                required
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-4 outline-none transition focus:border-blue-500"
              />

            </div>

            <div className="mt-6">

              <label className="mb-2 block text-sm text-zinc-400">
                Mensaje
              </label>

              <textarea
                rows={6}
                name="Mensaje"
                required
                className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-950 p-4 outline-none transition focus:border-blue-500"
              />

            </div>

            <button
              type="submit"
              className="mt-8 flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-500"
            >

              <Send size={18} />

              Enviar mensaje

            </button>

          </motion.form>

        </div>

      </div>

    </section>
  );
}