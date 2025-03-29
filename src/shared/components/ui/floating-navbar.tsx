/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { cn } from "@/shared/lib/utils";
import { SquareArrowOutUpRight } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import Link from "next/link";
import { JSX, useState } from "react";
import MyButton from "./my-button";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-[60vw] fixed top-1 inset-x-0 mx-auto border border-foreground/10 rounded-full bg-background/30 backdrop-blur-2xl z-[5000] px-6 py-1.5 items-center justify-between",
          className
        )}
      >
        <div className="px-4 font-semibold">lnkpv</div>
        <div className="flex max-w-fit grow-1 items-center justify-center">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative items-center flex space-x-1 text-foreground/60 hover:text-foreground"
              )}
            >
              <MyButton
                text={navItem.name}
                background={false}
                size="small"
                type="simple"
              />
              {/* <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span> */}
            </Link>
          ))}
        </div>
        <Link href="/" className={cn("relative items-center flex")}>
          <MyButton
            text="Back to terminal"
            background={false}
            size="small"
            iconRight={<SquareArrowOutUpRight size={16} />}
          />
          {/* <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span> */}
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
