import { VelocityScroll } from "@/shared/components/magicui/scroll-based-velocity";
import { Asterisk } from "lucide-react";

function Marquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <VelocityScroll
        defaultVelocity={2}
        className="text-sm md:text-lg font-light tracking-widest lowercase"
      >
        <span className="inline-flex text-center -ml-1">
          attention to details
        </span>
        <Asterisk
          className="inline-flex text-accent-yellow size-7 px-1"
          strokeWidth={2}
        />
        <span className="inline-flex text-center px-0.5">
          pixel-perfect design
        </span>
        <Asterisk
          className="inline-flex text-accent-purple size-7 px-1"
          strokeWidth={2}
        />
        <span className="inline-flex text-center px-0.5">
          performance-driven code
        </span>
        <Asterisk
          className="inline-flex text-accent-yellow size-7 px-1"
          strokeWidth={2}
        />
        <span className="inline-flex text-center px-0.5">
          digital solutions
        </span>
        <Asterisk
          className="inline-flex text-accent-purple size-7 px-1"
          strokeWidth={2}
        />
      </VelocityScroll>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}

export default Marquee;
