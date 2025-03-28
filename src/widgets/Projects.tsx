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
// const content = [
//   {
//     title: "Collaborative Editing",
//     description:
//       "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
//     content: (
//       <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
//         Collaborative Editing
//       </div>
//     ),
//   },
//   {
//     title: "Real time changes",
//     description:
//       "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
//     content: (
//       <div className="flex h-full w-full items-center justify-center text-white">
//         <Image
//           src="/linear.webp"
//           width={300}
//           height={300}
//           className="h-full w-full object-cover"
//           alt="linear board demo"
//         />
//       </div>
//     ),
//   },
//   {
//     title: "Version control",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
//         Version control
//       </div>
//     ),
//   },
//   {
//     title: "Running out of content",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
//         Running out of content
//       </div>
//     ),
//   },
// ];

function Projects() {
  return (
    <div id="projects">
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
