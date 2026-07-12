import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/hero/Hero";

import Companies from "@/components/sections/Companies";
import CaseStudy from "@/components/sections/CaseStudy";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Stats from "@/components/sections/Stats";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Companies />
        <CaseStudy />
        <Process />
        <About />
        <Experience />
        <Stats />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}