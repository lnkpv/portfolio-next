import Image from "next/image";
import { NeonGradientCard } from "./magicui/neon-gradient-card";

function CircleImage({ type = "hero" }: { type?: "hero" | "contacts" }) {
  const style =
    type === "hero"
      ? "absolute left-[20vw] top-[7vh] size-[155px] rounded-full z-[100]"
      : "size-[175px] p-6";

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
