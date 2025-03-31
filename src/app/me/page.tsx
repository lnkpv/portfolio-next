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
      <div className="flex w-full flex-col gap-30 xl:gap-48">
        <Hero className="-mb-[10vh] text-white" />
        <About className="max-w-[95vw] xl:max-w-[80vw] w-full mx-auto" />
        <Marquee />
        <Skills className="mx-[10vw]" />
        <Projects className="max-w-[98vw] sm:max-w-[80vw] mx-auto" />
        <Quote />
        <Contacts className="w-[98vw] md:w-[90vw] xl:w-[1200px] mx-auto" />
      </div>
    </div>
  );
}
