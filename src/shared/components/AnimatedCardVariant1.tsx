import { cn } from "@/shared/lib/utils";
import { UserRound } from "lucide-react";
import { ReactNode } from "react";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import { BookTextIcon } from "./ui/icons/book-text";
import { CoffeeIcon } from "./ui/icons/coffee";
import { FigmaIcon } from "./ui/icons/figma";
import { FilePenLineIcon } from "./ui/icons/file-pen-line";
import { LayersIcon } from "./ui/icons/layers";
import { PenToolIcon } from "./ui/icons/pen-tool";
import { SettingsIcon } from "./ui/icons/settings";
import { SparklesIcon } from "./ui/icons/sparkles";
import { SquarePenIcon } from "./ui/icons/square-pen";

type CardType = {
  title: string;
  content: ReactNode;
  icon: ReactNode;
};

const data: CardType[] = [
  {
    title: "Education",
    icon: (
      <div className="transform-gpu text-xl h-full cursor-pointer transition-all group-hover:scale-50 duration-300">
        <div className="flex min-h-[15vh] h-full w-full items-center justify-center relative px-8 border-dotted rounded-xl border-2 transition-colors border-accent-purple text-accent-yellow group-hover:text-accent-yellow/90">
          <FilePenLineIcon size={48} />
          <CoffeeIcon
            size={48}
            className="text-foreground/70 group-hover:text-foreground/60"
          />
          <BookTextIcon size={48} />
        </div>
      </div>
    ),
    content: (
      <div>
        {`
        I'm a third-year student at the Russian Presidential Academy of National
        Economy and Public Administration, specializing in Web Development.`}
      </div>
    ),
  },
  {
    title: "Creativity",
    icon: (
      <div className="transform-gpu text-xl h-full cursor-pointer transition-all group-hover:scale-[0.6] duration-300">
        <div className="min-h-[15vh] flex h-full w-full items-center justify-center relative">
          <SparklesIcon
            size={36}
            className="absolute top-4 left-12 -rotate-12 text-accent-yellow group-hover:text-accent-yellow/90"
          />
          <SparklesIcon
            size={28}
            className="absolute top-11 right-8 rotate-12 text-accent-yellow group-hover:text-accent-yellow/90"
          />
          <SparklesIcon
            size={32}
            className="absolute top-4 right-12 rotate-12 text-accent-purple group-hover:text-accent-purple/90"
          />
          <SparklesIcon
            size={28}
            className="absolute top-13 left-7 rotate-6 text-accent-purple group-hover:text-accent-purple/90"
          />
          <UserRound
            size={70}
            strokeWidth={1}
            className="mt-10 text-foreground/70 group-hover:text-foreground/60"
          />
        </div>
      </div>
    ),
    content: (
      <div>
        I have a passion for turning ideas into reality through creative design
        and efficient coding.
      </div>
    ),
  },
  {
    title: "Technology",
    icon: (
      <div className="cursor-pointer transform-gpu transition-all group-hover:scale-50 duration-300 leading-none justify-center flex border-dotted rounded-xl border-2 border-accent-purple text-foreground/70 group-hover:text-foreground/60">
        <div className="text-lg font-medium flex flex-col py-2 transition-transform ">
          <div className="transform hover:scale-125 transition-transform text-foreground/70 group-hover:text-foreground/60">
            eat
            <span className="text-accent-yellow group-hover:text-accent-yellow/90">
              ();
            </span>
          </div>
          <div className="transform hover:scale-125 transition-transform">
            code
            <span className="text-accent-yellow group-hover:text-accent-yellow/90">
              ();
            </span>
          </div>
          <div className="transform hover:scale-125 transition-transform">
            sleep
            <span className="text-accent-yellow group-hover:text-accent-yellow/90">
              ();
            </span>
          </div>
          <div className="transform hover:scale-125 transition-transform">
            repeat
            <span className="text-accent-yellow group-hover:text-accent-yellow/90">
              ();
            </span>
          </div>
        </div>
      </div>
    ),
    content: (
      <div>
        I specialize in building modern, responsive websites using technologies
        like HTML, CSS, JavaScript, TypeScript, React, and Next.js.
      </div>
    ),
  },
  {
    title: "Design",
    icon: (
      <div className="transform-gpu text-xl h-full cursor-pointer transition-all group-hover:scale-[0.6] duration-300 text-accent-yellow group-hover:text-accent-yellow/90">
        <div className="min-h-[15vh] flex h-full w-full items-center justify-center relative">
          <SquarePenIcon
            size={40}
            className="absolute top-16 right-15 text-accent-purple group-hover:text-accent-purple/90"
          />
          <SettingsIcon size={40} className="absolute top-16 right-3" />
          <PenToolIcon size={40} className="absolute top-3 right-15" />
          <LayersIcon
            size={40}
            className="absolute top-3 right-3 text-accent-purple group-hover:text-accent-purple/90"
          />
          <FigmaIcon
            size={80}
            className="mr-28 text-foreground/70 group-hover:text-foreground/60"
          />
        </div>
      </div>
    ),
    content: (
      <div>
        I also enjoy working with Figma to create visually appealing interfaces
        that are both functional and beautiful.
      </div>
    ),
  },
];

export function AnimatedCardVariant1() {
  return (
    <div className="flex relative">
      {data.map((card, index) => (
        <Card
          className={cn(
            "transform-gpu hover:rotate-0 hover:scale-110",
            index % 2 === 0 ? "rotate-12" : "-rotate-12",
            `-translate-x-[${index * 30}px]`
          )}
          content={card.content}
          icon={card.icon}
          description={`0${index}`}
          key={card.title}
          title={card.title}
          id={index}
        />
      ))}
    </div>
  );
}

export default AnimatedCardVariant1;

function Card({
  title,
  description,
  icon,
  content,
  className,
  id,
}: Readonly<{
  title: string;
  description: string;
  icon: ReactNode;
  content: ReactNode;
  className: string;
  id: number;
}>) {
  return (
    <div
      className={cn(
        "group transform-gpu transition-all duration-300",
        className
      )}
    >
      <NeonGradientCard
        className="relative flex flex-col justify-between transform-gpu transition-all"
        borderSize={1}
        neonColors={{
          firstColor:
            id % 2 === 0 ? "rgba(70, 3, 139, 0.5)" : "rgba(172, 144, 11, 0.5)",
          secondColor:
            id % 2 === 0 ? "rgba(172, 144, 11, 0.5)" : "rgba(70, 3, 139, 0.5)",
        }}
      >
        <div className="px-4 py-4 bg-background h-full overflow-clip rounded-[20px]">
          <div className="pointer-events-none z-10 w-[13vw] flex transform-gpu flex-col gap-1 transition-all duration-400 group-hover:-translate-y-10">
            <div className="pointer-events-auto transform-gpu transition-all group-hover:-mb-8 min-h-[15vh] h-full text-neutral-200 tracking-tighter group-hover:text-neutral-400 dark:text-neutral-700 dark:group-hover:text-neutral-400 ">
              {icon}
            </div>
            <div className="text-accent-yellow text-xs mt-2">{description}</div>
            <div className="font-semibold text-foreground/80 text-sm -mt-1">
              {title}
            </div>
          </div>
          <div className="text-xs text-foreground/60 leading-[1.1] pointer-events-none absolute bottom-6 flex w-5/6 translate-y-7 transform-gpu flex-row items-center opacity-0 transition-all duration-200 group-hover:translate-y-2 group-hover:opacity-100">
            {content}
          </div>
        </div>
      </NeonGradientCard>
    </div>
  );
}
