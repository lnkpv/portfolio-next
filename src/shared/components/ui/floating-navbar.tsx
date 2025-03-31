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
          "flex gap-4 max-w-[90vw] fixed top-1 inset-x-0 mx-auto border border-foreground/10 rounded-2xl bg-background/30 backdrop-blur-2xl z-[5000] px-6 py-1.5 items-center justify-between",
          className
        )}
      >
        <div className="px-4 font-semibold text-lg grow-1 lg:grow-0">lnkpv</div>
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild={true}>
            <button
              type="button"
              className="themeButton lg:hidden p-1 w-fit opacity-80"
            >
              <Menu className="text-foreground size-8" strokeWidth={1.2} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="lg:hidden bg-background backdrop-blur-2xl border-foreground/10 border rounded-xl flex flex-col p-4 items-center gap-4 z-[999] text-sm">
            {navItems.map((navItem: any, idx: number) => (
              <DropdownMenuItem key={`link=${idx}`}>
                <Link key={`link=${idx}`} href={navItem.link}>
                  {navItem.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu> */}
        <div className="hidden lg:flex max-w-fit grow-1 items-center justify-center">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative items-center flex text-foreground/60 hover:text-foreground text-sm"
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
            iconRight={<SquareArrowOutUpRight size={16} />}
          />
          {/* <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span> */}
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
