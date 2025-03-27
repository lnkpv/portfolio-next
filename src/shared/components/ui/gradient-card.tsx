"use client";
import { useMouse } from "@/shared/hooks/use-mouse";
import { cn } from "@/shared/lib/utils";
import type { ReactNode } from "react";
import Noise from "./noise";

export const MainMenusGradientCard = ({
  title,
  description,
  circleSize = 400,
  className,
  children,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  size = "md",
}: {
  title: string;
  description?: string;
  withArrow?: boolean;
  circleSize?: number;
  children?: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}) => {
  const [mouse, parentRef] = useMouse();

  return (
    <div
      className="group relative transform-gpu rounded-[20px] bg-white/10 transition-transform hover:scale-[1.01]"
      ref={parentRef}
    >
      <Noise className="overflow-clip rounded-[20px]" type={"hero"} />
      <div className="absolute h-full  w-full overflow-hidden rounded-[20px] -z-[1]">
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
        <div className="relative px-4 pt-4 pb-2">
          <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-300">
            {title}
          </h3>
          {description && (
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              {description}
            </p>
          )}
        </div>
        {children && (
          <div
            className={cn("flex relative w-1/2 max-h-[60vh] h-max", className)}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
