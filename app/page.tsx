import Hero from "@/components/Hero";
import About from "@/components/About";
import Roadmap from "@/components/Roadmap";
import Contact from "@/components/Contact";
import Wave from "@/components/Wave";

export default function Home() {
  return (
    <>
      <Wave />
      <Hero />
      <About />
      <Roadmap />
      <Contact />
    </>
  );
}
