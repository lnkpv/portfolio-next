import About from "@/widgets/About";
import Contacts from "@/widgets/Contacts";
import Hero from "@/widgets/Hero";
import { NavBar } from "@/widgets/NavBar";
import Projects from "@/widgets/Projects";
import Quote from "@/widgets/Quote";
import Skills from "@/widgets/Skills";

export default function Home() {
  return (
    <div className="bg-background">
      <NavBar />
      <div className="flex w-full flex-col gap-48 max-w-[80vw] mx-auto">
        <Hero className="-mx-[10vw] -mb-[10vh]" />
        <About />
        <Skills />
        <Projects />
        <Quote />
        <Contacts />
      </div>
    </div>
  );
}
