import AnimatedCardVariant1 from "@/shared/components/AnimatedCardVariant1";
import Header from "@/shared/components/ui/header";
import { cn } from "@/shared/lib/utils";

function About({ className }: { className: string }) {
  return (
    <div id="about" className={cn("flex gap-16 flex-col", className)}>
      <Header text={"About me"} align={"center"} />
      <div className="flex justify-center xl:h-[28vh] pt-4 w-full">
        <AnimatedCardVariant1 />
      </div>
    </div>
  );
}

export default About;
