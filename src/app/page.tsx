import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Plate } from "@/components/Plate";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";
import { Background } from "@/components/Background";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top" className="flex-1">
        <Hero />
        <Plate />
        <Skills />
        <Work />
        <Background />
      </main>
      <Contact />
      <Footer />
    </>
  );
}
