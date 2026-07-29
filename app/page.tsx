import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/hero/Hero";

import Profile from "@/components/sections/Profile";
import CaseStudy from "@/components/sections/CaseStudy";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Profile />
        <CaseStudy />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}