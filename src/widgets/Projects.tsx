"use client";
import { MainMenusGradientCard } from "@/shared/components/ui/gradient-card";
import Header from "@/shared/components/ui/header";
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
  const testimonials = [
    {
      name: "me",
      src: "/me.webp",
    },
    {
      name: "me",
      src: "/me.webp",
    },
    {
      name: "me",
      src: "/me.webp",
    },
  ];
  return (
    <div id="projects">
      <div className="mx-[15vw]">
        <Header text={"Projects"} />
        {`
      Below are some of the recent projects I've had the pleasure of working on.
      Each one represents a unique challenge and demonstrates my ability to
      craft engaging, functional designs while ensuring a seamless user
      experience.`}
      </div>
      <div className="w-full max-w-[50vw] mx-auto grid relative p-2 grid-cols-1 gap-2 ">
        <MainMenusGradientCard
          className="p-4 h-[35vh]"
          description="This is the best library for creating dynamic cards"
          title="CuiCui"
        >
          <div className="  z-50 absolute transform h-full w-full bottom-6">
            <AnimatedTestimonials testimonials={testimonials} />
          </div>
        </MainMenusGradientCard>
        <MainMenusGradientCard
          className="p-4"
          description="How fast is it now to create cards"
          title="Just crazy"
        >
          If leave the card empty, it will still look good
        </MainMenusGradientCard>
        <MainMenusGradientCard
          description="I just have to copy paste the code and it instantly works"
          title="Amazing"
        />
        <MainMenusGradientCard
          description="I can't believe how easy it is to use"
          title="Unbelievable"
        />
      </div>
    </div>
  );
}

export default Projects;
