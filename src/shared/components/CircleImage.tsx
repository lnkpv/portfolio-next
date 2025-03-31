import Image from "next/image";
import { NeonGradientCard } from "./magicui/neon-gradient-card";

function CircleImage({ type = "hero" }: { type?: "hero" | "contacts" }) {
  const style =
    type === "hero"
      ? "absolute -left-[5vw] sm:left-[0vw] md:left-[5vw] -top-[15vh] sm:-top-[14vh] md:-top-[20vh] lg:-top-[15vh] xl:-top-[150px] size-[155px] scale-60 sm:scale-75 md:scale-100 rounded-full z-[999]"
      : "size-[175px] p-6 scale-60 sm:scale-75 md:scale-100";

  return (
    <div className={style}>
      <NeonGradientCard
        type="quote"
        borderRadius={100}
        borderSize={1}
        neonColors={{
          firstColor: "rgba(70, 3, 139, 0.5)",
          secondColor: "rgba(172, 144, 11, 0.5)",
        }}
      >
        <div className="w-full h-full rounded-full overflow-clip">
          <Image
            className="object-center object-none"
            src="/me.webp"
            width={192}
            height={192}
            alt="lnkpv's photo"
          ></Image>
        </div>
      </NeonGradientCard>
    </div>
  );
}

export default CircleImage;
