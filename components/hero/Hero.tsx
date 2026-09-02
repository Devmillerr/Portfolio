"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import IconLink from "@/components/ui/IconLink";
import SystemField from "@/components/ui/SystemField";
import { hero, siteConfig } from "@/lib/constants";
import { EASE as ease } from "@/lib/motion";

import HeroStats from "./HeroStats";
import SystemStatus from "./SystemStatus";

export default function Hero() {
  const goToExperience = () => {
    document.getElementById("experience")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden border-b border-[var(--border)] bg-[var(--background)] pt-24 text-[var(--foreground)]"
    >
      <div className="absolute inset-0">
        <SystemField />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-96px)] w-full max-w-[1180px] items-center px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto w-full max-w-[1100px]">
          <SystemStatus />

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease }}
            className="mt-6 max-w-[900px] text-balance font-display text-[clamp(2.1rem,5.2vw,3.6rem)] font-semibold uppercase leading-[1.1] tracking-[0.02em] text-[var(--foreground)]"
          >
            {hero.headline}{" "}
            <span className="text-[var(--accent)]">{hero.headlineAccent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease }}
            className="mt-5 max-w-[620px] text-[15px] leading-7 text-[var(--muted)] sm:text-base"
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.42, ease }}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button variant="solid" size="lg" onClick={goToExperience} className="w-full sm:w-auto">
              Explorar experiencia
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Button>

            <div className="flex items-center gap-2.5">
              <IconLink href={siteConfig.github} label="GitHub">
                <FaGithub size={17} />
              </IconLink>
              <IconLink href={siteConfig.linkedin} label="LinkedIn">
                <FaLinkedin size={17} />
              </IconLink>
              <IconLink href={siteConfig.whatsapp} label="WhatsApp" emphasize>
                <FaWhatsapp size={18} />
              </IconLink>
            </div>
          </motion.div>

          <HeroStats />
        </div>
      </div>
    </section>
  );
}
