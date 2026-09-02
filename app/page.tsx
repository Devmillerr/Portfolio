import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import SectionRail from "@/components/layout/SectionRail";

import Hero from "@/components/hero/Hero";

import CaseStudy from "@/components/sections/CaseStudy";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Profile from "@/components/sections/Profile";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <SectionRail />

      <main id="main">
        <Hero />
        <Profile />
        <CaseStudy />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
