"use client";
import { MainMenusGradientCard } from "@/shared/components/ui/gradient-card";
import Header from "@/shared/components/ui/header";
import { content } from "@/shared/data";
import { cn } from "@/shared/lib/utils";
import dynamic from "next/dynamic";

const AnimatedTestimonials = dynamic(
  () => import("../shared/components/ui/animated-testimonials"),
  {
    ssr: false,
  }
);

function Projects({ className }: { className: string }) {
  return (
    <div id="projects" className={cn("", className)}>
      <div className="max-w-[880px] mx-auto px-6 md:px-8">
        <Header text={"Projects"} />
      </div>
      <div className="max-w-[880px] mx-auto mb-4 px-6 md:px-8 text-[0.7rem] lg:text-[1rem]">
        {`
      These projects highlight my skills in building responsive, high-performance interfaces with 
      a focus on smooth user experience and clean, maintainable code.`}
      </div>
      <div className="w-full max-w-[880px] mx-auto grid relative p-2 grid-cols-1 gap-10 md:gap-16">
        {content.map((project, index) => (
          <MainMenusGradientCard
            key={index}
            className="p-4 h-full"
            description={project.description}
            title={project.title}
            tags={project.tags}
            type={project.type}
            status={project.status}
          >
            <div
              className={cn(
                "z-50 absolute transform h-full w-full",
                project.type === "large"
                  ? "h-[130px] xs:h-[160px] md:min-h-[200px] lg:min-h-[240px] bottom-20 xs:bottom-6"
                  : project.type === "mobile"
                  ? "h-[170px] xs:h-[230px] md:min-h-[300px] lg:min-h-[350px] right-1/2 lg:right-5/7 bottom-20 xs:bottom-3"
                  : "h-[140px] xs:h-[180px] md:min-h-[240px] lg:min-h-[300px] bottom-20 xs:bottom-6"
              )}
            >
              <AnimatedTestimonials
                testimonials={project.images}
                type={project.type}
              />
            </div>
          </MainMenusGradientCard>
        ))}
      </div>
    </div>
  );
}

export default Projects;
