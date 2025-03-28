import { cn } from "@/shared/lib/utils";
import Image from "next/image";

const Noise = ({
  className,
  type = "rounded",
}: {
  className?: string;
  type?: "rounded" | "hero" | "projects";
}) => {
  const imgStyle =
    type === "rounded"
      ? "h-full w-auto object-cover"
      : "h-auto w-full object-cover";
  return (
    <div
      className={cn(
        "absolute pointer-events-none h-full w-full opacity-[0.08] z-[1] overflow-clip",
        type === "projects" ? "bottom-0" : "top-1/2 -translate-y-1/2",
        className
      )}
    >
      <Image
        src="/noise.svg"
        alt="noise"
        width={300}
        height={300}
        className={imgStyle}
      ></Image>
    </div>
  );
};

export default Noise;
