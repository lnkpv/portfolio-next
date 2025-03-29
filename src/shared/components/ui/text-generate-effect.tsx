"use client";
import { cn } from "@/shared/lib/utils";
import { motion, stagger, useAnimate } from "motion/react";
import { useEffect } from "react";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  delay = 0,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  filter?: boolean;
  duration?: number;
  delay?: number;
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2, { startDelay: delay }),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {words.map((word, idx) => {
          return (
            <motion.span
              key={word.text + idx}
              className={cn("text-foreground opacity-0", word.className)}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word.text}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("", className)}>
      <div className="tracking-wide">{renderWords()}</div>
    </div>
  );
};
