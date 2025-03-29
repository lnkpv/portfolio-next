"use client";
import { TagType } from "@/shared/data";
import { useMouse } from "@/shared/hooks/use-mouse";
import { cn } from "@/shared/lib/utils";
import type { ReactNode } from "react";
import { TerminalIcon } from "./icons/terminal";
import Noise from "./noise";
import Tag from "./tag";

export const MainMenusGradientCard = ({
  title,
  description,
  type = "default",
  status,
  tags,
  circleSize = 400,
  className,
  children,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  size = "md",
}: {
  title?: string;
  description?: string;
  type?: "default" | "large" | "mobile" | "button";
  status?: string;
  tags?: TagType[];
  withArrow?: boolean;
  circleSize?: number;
  children?: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}) => {
  const [mouse, parentRef] = useMouse();

  if (type === "button") {
    return (
      <div
        className={cn(
          "group relative transform-gpu rounded-lg bg-white/10 transition-transform hover:scale-[1.01]",
          className
        )}
        ref={parentRef}
      >
        <Noise className="overflow-clip rounded-lg" type={"projects"} />
        <div className="absolute h-full w-full overflow-hidden rounded-lg -z-[1]">
          <div
            className={cn(
              "-translate-x-1/2 -translate-y-1/2 absolute transform-gpu h-full rounded-full transition-transform duration-500 group-hover:scale-[3]",
              mouse.elementX === null || mouse.elementY === null
                ? "opacity-0"
                : "opacity-100"
            )}
            style={{
              maskImage: `radial-gradient(${
                circleSize / 2
              }px circle at center, white, transparent)`,
              width: `${circleSize}px`,
              height: `${circleSize}px`,
              left: `${mouse.elementX}px`,
              top: `${mouse.elementY}px`,
              background:
                "linear-gradient(135deg, #7A69F9, #5304a2, #e0ba2c, #992857)",
            }}
          />
          <div className="absolute inset-px rounded-lg bg-background/90" />
        </div>
        {children}
      </div>
    );
  }

  return (
    <div
      className="group relative transform-gpu rounded-[20px] max-h-[37vh] bg-white/10 transition-transform hover:scale-[1.01]"
      ref={parentRef}
    >
      <Noise className="overflow-clip rounded-[20px]" type={"projects"} />
      <div className="absolute h-full w-full overflow-hidden rounded-[20px] -z-[1]">
        <div
          className={cn(
            "-translate-x-1/2 -translate-y-1/2 absolute transform-gpu h-full rounded-full transition-transform duration-500 group-hover:scale-[3]",
            mouse.elementX === null || mouse.elementY === null
              ? "opacity-0"
              : "opacity-100"
          )}
          style={{
            maskImage: `radial-gradient(${
              circleSize / 2
            }px circle at center, white, transparent)`,
            width: `${circleSize}px`,
            height: `${circleSize}px`,
            left: `${mouse.elementX}px`,
            top: `${mouse.elementY}px`,
            background:
              "linear-gradient(135deg, #7A69F9, #5304a2, #e0ba2c, #992857)",
          }}
        />
        <div className="absolute inset-px rounded-[19px] bg-background/90 " />
      </div>
      <div className="flex justify-between w-full p-2 h-full gap-4">
        <div
          className={cn(
            "relative p-4 flex flex-col",
            type === "large" ? "w-1/2" : type === "mobile" ? "w-4/7" : "w-1/2"
          )}
        >
          <h3 className="font-semibold text-lg text-foreground leading-tight">
            {title}
          </h3>
          {description && (
            <div className="mt-4 text-[0.8rem] text-foreground/80 leading-tight grow-1 whitespace-pre-wrap">
              {description}
            </div>
          )}
          {status && (
            <code className="my-4 py-0.5 px-2 text-[0.7rem] text-accent-yellow tracking-tighter font-medium bg-accent-yellow/10 rounded-sm w-fit border-accent-yellow/20 border-[1px]">
              <TerminalIcon size={16}>{status}</TerminalIcon>
            </code>
          )}
          {tags && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Tag
                  color={tag.color}
                  key={index}
                  rounded={tag.rounded}
                  size={tag.size}
                  border={tag.border}
                  icon={tag.icon}
                >
                  {tag.children}
                </Tag>
              ))}
            </div>
          )}
        </div>
        {children && (
          <div
            className={cn(
              "flex relative h-max",
              className,
              type === "large"
                ? "w-1/2 min-h-[30vh]"
                : type === "mobile"
                ? "w-2/10 min-h-[43vh] mx-auto"
                : "w-1/2 min-h-[35vh]"
            )}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
