import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Tooling } from "@/components/Tooling";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

// Evidence first: what was built and where, then the skills it shows
export default function Home() {
  return (
    <>
      <Nav />
      <main id="top" className="flex-1">
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <Tooling />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
