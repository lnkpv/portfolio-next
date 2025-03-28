import { SparklesText } from "@/shared/components/magicui/sparkles-text";
import { cn } from "@/shared/lib/utils";

function Quote({ className }: { className?: string }) {
  return (
    <div className={cn("max-w-[30vw] mx-auto", className)}>
      <SparklesText
        text="Code that performs, designs that inspire."
        className="text-4xl font-light text-center w-fit flex"
        colors={{ first: "#6123b4", second: "#e5bf00" }}
      />
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
