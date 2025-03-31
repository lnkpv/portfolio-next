import { NeonGradientCard } from "@/shared/components/magicui/neon-gradient-card";
import { Safari } from "@/shared/components/magicui/safari";
import { SparklesText } from "@/shared/components/magicui/sparkles-text";
import { cn } from "@/shared/lib/utils";

function Quote({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "max-w-[70vw] sm:max-w-[50vw] lg:max-w-[550px] mx-auto relative w-full",
        className
      )}
    >
      <SparklesText
        text="Code&nbsp;that&nbsp;performs, designs&nbsp;that&nbsp;inspire."
        className="absolute text-lg sm:text-xl md:text-3xl lg:text-4xl font-light text-center h-fit w-fit flex top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 max-w-[60vw] sm:max-w-[35vw] lg:max-w-[400px] z-50"
        colors={{ first: "#6123b4", second: "#e5bf00" }}
      />
      <NeonGradientCard
        type="quote"
        borderRadius={7}
        borderSize={1}
        neonColors={{
          firstColor: "rgba(70, 3, 139, 0.5)",
          secondColor: "rgba(172, 144, 11, 0.5)",
        }}
      >
        <Safari
          url="lnkpv"
          className="w-full h-full z-50 bg-background rounded-[5.5]"
          imageSrc="/noise.svg"
        ></Safari>
      </NeonGradientCard>
      {/* Code that
      <LineShadowText shadowColor="white">performs,</LineShadowText>
      designs that
      <LineShadowText shadowColor="yellow">inspire.</LineShadowText> */}
      {/* <BlockQuote
        author="Jane Marczewski (Nightbirde)"
        quote="You can't wait until life isn't hard anymore, before you decide to be happy."
      /> */}
    </div>
  );
}

export default Quote;
