import { cn } from "@/shared/lib/utils";
import Image from "next/image";

const Noise = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={cn(
        `absolute top-1/2 -translate-y-1/2 pointer-events-none h-full w-full opacity-[0.08] z-[1] overflow-clip`,
        className
      )}
    >
      <Image
        src="/noise.svg"
        alt="noise"
        width={300}
        height={300}
        className="w-full h-auto"
      ></Image>
    </div>
    // <svg
    //   className="absolute pointer-events-none h-full w-full opacity-[0.05] z-[0]"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <filter id="noiseFilter">
    //     <feTurbulence
    //       type="fractalNoise"
    //       baseFrequency="0.2"
    //       numOctaves="4"
    //       seed="15"
    //       stitchTiles="stitch"
    //     />
    //   </filter>

    //   <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    // </svg>
  );
};

export default Noise;
