"use client";

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
}: {
  testimonials: Testimonial[];
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
    <div className=" flex flex-col gap-2 relative mx-auto max-w-xl w-full h-full font-sans antialiased ">
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
                className="absolute inset-0 origin-bottom"
              >
                <Image
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center"
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <div className="flex gap-4 pt-2 mx-auto">
        <button
          onClick={handlePrev}
          className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
        >
          <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
        </button>
        <button
          onClick={handleNext}
          className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
        >
          <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
        </button>
      </div>
    </div>
  );
};

export default AnimatedTestimonials;
