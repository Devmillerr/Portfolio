"use client";

import Card from "@/components/ui/Card";

export default function About() {
  return (
    <section
      id="about"
      className="bg-zinc-950 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">

        <h2 className="mb-12 text-center text-5xl font-bold">
          Sobre mí
        </h2>

        <Card>

          <p className="text-lg leading-9 text-zinc-300">

            Soy Técnico en Ingeniería de Software con experiencia en
            implementación de software, QA Testing y desarrollo Backend.

            Actualmente trabajo en <strong>Camposol</strong>, donde lideré la
            digitalización de aproximadamente <strong>40 procesos
            operativos</strong> que hoy son utilizados por más de
            <strong> 50 colaboradores</strong> pertenecientes a Producción,
            Calidad y Operaciones.

          </p>

          <br />

          <p className="text-lg leading-9 text-zinc-300">

            Participé en el análisis funcional, pruebas de calidad,
            implementación y despliegue de soluciones digitales,
            eliminando procesos manuales, reduciendo tiempos de registro y
            mejorando la trazabilidad de la información.

          </p>

        </Card>

      </div>
    </section>
  );
}