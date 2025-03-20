import About from "@/widgets/About";
import Contacts from "@/widgets/Contacts";
import Hero from "@/widgets/Hero";
import { NavBar } from "@/widgets/NavBar";
import Projects from "@/widgets/Projects";
import Quote from "@/widgets/Quote";
import Skills from "@/widgets/Skills";

export default function Home() {
  return (
    <div className="">
      <svg
        className="noise fixed pointer-events-none h-full w-full opacity-5 -z-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="5"
            numOctaves="16"
            stitchTiles="stitch"
          />
        </filter>

        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Quote />
      <Contacts />
    </div>
  );
}
