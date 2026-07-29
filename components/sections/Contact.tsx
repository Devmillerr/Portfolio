"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";

const contactLinks = [
  { label: "Correo", value: "castrojordy378@gmail.com", href: "mailto:castrojordy378@gmail.com", icon: Mail },
  { label: "WhatsApp", value: "+51 937 195 838", href: "https://wa.me/51937195838", icon: MessageCircle },
  { label: "Ubicación", value: "Chimbote, Perú", href: "", icon: MapPin },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#08090c] py-16 text-white sm:py-20 lg:flex lg:min-h-[calc(100svh-76px)] lg:items-center lg:py-14">
      <div className="pointer-events-none absolute inset-0"><div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.07] blur-[150px]"/></div>
      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[linear-gradient(135deg,rgba(255,255,255,0.035),rgba(255,255,255,0.012))] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.28)] sm:p-8 lg:p-10">
          <div className="absolute right-[-90px] top-[-100px] h-72 w-72 rounded-full bg-blue-500/[0.1] blur-[100px]"/>
          <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-300 sm:text-[11px]"><span className="h-px w-8 bg-blue-400"/> Contacto</div>
              <h2 className="mt-5 max-w-xl text-[2.35rem] font-extrabold leading-[0.98] tracking-[-0.05em] sm:text-[3.4rem] lg:text-[4.2rem]">Construyamos algo que genere impacto.</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">Estoy disponible para oportunidades en implementación de software, QA funcional, transformación digital y desarrollo backend.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="mailto:castrojordy378@gmail.com" className="group inline-flex h-11 items-center gap-2 rounded-xl bg-white px-4 text-sm font-bold text-zinc-950 transition hover:-translate-y-0.5"><Mail size={16}/> Enviar correo <ArrowUpRight size={15} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/></a>
                <a href="https://wa.me/51937195838" target="_blank" rel="noreferrer" className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.03] px-4 text-sm font-semibold text-zinc-200 transition hover:-translate-y-0.5 hover:border-emerald-400/30 hover:text-white"><MessageCircle size={16} className="text-emerald-400"/> WhatsApp</a>
              </div>
            </div>

            <div className="space-y-3">
              {contactLinks.map((item, index) => {
                const Icon = item.icon;
                const content = <><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.03] text-blue-400"><Icon size={18}/></span><span className="min-w-0 flex-1"><span className="block text-[10px] uppercase tracking-[0.16em] text-zinc-600">{item.label}</span><span className="mt-1 block truncate text-sm font-medium text-zinc-200">{item.value}</span></span>{item.href && <ArrowUpRight size={15} className="text-zinc-700 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400"/>}</>;
                const classes = "group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-black/20 p-4 transition hover:border-blue-400/30 hover:bg-blue-500/[0.035]";
                return item.href ? <motion.a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} className={classes}>{content}</motion.a> : <motion.div key={item.label} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} className={classes}>{content}</motion.div>;
              })}
              <div className="flex items-center gap-3 border-t border-white/[0.07] pt-5 text-xs text-zinc-500"><span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-30"/><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"/></span>Disponible para nuevas oportunidades</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
