import About from "@/widgets/About";
import Contacts from "@/widgets/Contacts";
import Hero from "@/widgets/Hero";
import Marquee from "@/widgets/Marquee";
import { NavBar } from "@/widgets/NavBar";
import Projects from "@/widgets/Projects";
import Quote from "@/widgets/Quote";
import Skills from "@/widgets/Skills";

export default function Home() {
  return (
    <div className="bg-background">
      <NavBar />
      <div className="flex w-full flex-col gap-48">
        <Hero className="-mb-[10vh]" />
        <About className="max-w-[80vw] mx-auto" />
        <Marquee />
        <Skills className="mx-[10vw]" />
        <Projects className="max-w-[80vw] mx-auto" />
        <Quote />
        <Contacts className="max-w-[80vw] mx-auto" />
      </div>
    </div>
  );
}
