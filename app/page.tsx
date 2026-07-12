import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Stats from "@/components/sections/Stats";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import CaseStudy from "@/components/sections/CaseStudy";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Stats />
      <Projects />
      <CaseStudy />
      <Skills />
    </>
  );
}