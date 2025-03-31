"use client";

import { cn } from "@/shared/lib/utils";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

type Testimonial = {
  quote?: string;
  name: string;
  designation?: string;
  src: string;
};
const AnimatedTestimonials = ({
  testimonials,
  type,
}: {
  testimonials: Testimonial[];
  type: "default" | "large" | "mobile";
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div className="flex flex-col gap-2 relative mx-auto w-full h-full font-sans antialiased ">
      <div className="relative grow w-full h-full">
        <AnimatePresence>
          {testimonials.map((testimonial, index) => {
            const isActiveConst = isActive(index);
            return (
              <motion.div
                key={`${testimonial.src}+${index}`}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: randomRotateY(),
                }}
                animate={{
                  opacity: isActiveConst ? 1 : 0.7,
                  scale: isActiveConst ? 1 : 0.95,
                  z: isActiveConst ? 0 : -100,
                  rotate: isActiveConst ? 0 : randomRotateY(),
                  zIndex: isActiveConst ? 40 : testimonials.length + 2 - index,
                  y: isActiveConst ? [0, -80, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: randomRotateY(),
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 origin-bottom border-foreground/10 border rounded-2xl"
              >
                <Image
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={500}
                  height={500}
                  draggable={false}
                  className={cn(
                    "h-full w-full rounded-2xl object-cover",
                    type === "mobile" ? "object-center" : "object-left-top"
                  )}
                  unoptimized={testimonial.name.toLowerCase().includes("luna")}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <div className="flex gap-4 pt-2 mx-auto">
        <button
          onClick={handlePrev}
          className="group/button arrow flex h-7 w-7 items-center justify-center rounded-full border-accent-purple border cursor-pointer"
        >
          <IconArrowLeft
            className="h-5 w-5 transition-transform duration-300 group-hover/button:rotate-[24deg] opacity-80"
            strokeWidth={1.3}
          />
        </button>
        <button
          onClick={handleNext}
          className="group/button arrow flex h-7 w-7 items-center justify-center rounded-full border-accent-purple border cursor-pointer"
        >
          <IconArrowRight
            className="h-5 w-5 transition-transform duration-300 group-hover/button:-rotate-[24deg] opacity-80"
            strokeWidth={1.3}
          />
        </button>
      </div>
    </div>
  );
};

export default AnimatedTestimonials;
