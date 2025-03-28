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
      <div className="max-w-[60vw] mx-auto px-8">
        <Header text={"Projects"} />
      </div>
      <div className="max-w-[60vw] mx-auto mb-4 px-8">
        {`
      These projects highlight my skills in building responsive, high-performance interfaces with 
      a focus on smooth user experience and clean, maintainable code.`}
      </div>
      <div className="w-full max-w-[60vw] mx-auto grid relative p-2 grid-cols-1 gap-16">
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
                project.type === "mobile" ? "bottom-20" : "bottom-6"
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
