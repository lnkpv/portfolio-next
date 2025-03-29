import CircleImage from "@/shared/components/CircleImage";
import Greeting from "@/shared/components/greeting";
import LiquidChrome from "@/shared/components/ui/liquid-chrome";
import Noise from "@/shared/components/ui/noise";
import PillToggleTheme from "@/shared/components/ui/pill-toggle-theme";
import { TextGenerateEffect } from "@/shared/components/ui/text-generate-effect";

const Hero = ({ className }: { className: string }) => {
  const config = {
    baseColor: {
      r: 24,
      g: 0,
      b: 44,
      a: 1,
    },
    speed: 0.08,
    amplitude: 0.4,
  };

  const line5 = [
    {
      text: "My",
      className: "",
    },
    {
      text: "name",
      className: "",
    },
    {
      text: "is",
      className: "",
    },
    {
      text: "Alina.",
      className: "",
    },
    {
      text: "I'm",
      className: "",
    },
    {
      text: "a",
      className: "",
    },
    {
      text: "frontend",
      className: "text-accent-yellow font-semibold",
    },
    {
      text: "developer",
      className: "text-accent-yellow font-semibold",
    },
  ];
  const line3 = [
    {
      text: "and",
      className: "",
    },
    {
      text: "web",
      className: "text-accent-yellow font-semibold",
    },
    {
      text: "designer",
      className: "text-accent-yellow font-semibold",
    },
    {
      text: "based",
      className: "",
    },
    {
      text: "in",
      className: "",
    },
    {
      text: "Moscow.",
      className: "",
    },
  ];

  return (
    <div id="home" className={className}>
      <div className="h-[90vh] w-full relative flex items-center">
        <div className="absolute top-16 right-25 z-[999]">
          <PillToggleTheme />
        </div>
        <Noise
          className="h-[55vh] top-1/2 -translate-y-1/2 z-[10]"
          type="hero"
        />
        <CircleImage />
        <div className="absolute h-[55vh] w-full top-1/2 -translate-y-1/2 z-0">
          <LiquidChrome
            baseColor={[
              Number((config.baseColor.r / 255).toFixed(1)),
              Number((config.baseColor.g / 255).toFixed(1)),
              Number((config.baseColor.b / 255).toFixed(1)),
            ]}
            speed={config.speed}
            amplitude={config.amplitude}
            interactive={true}
          />
        </div>
        <div className="pointer-events-none relative backdrop-blur-2xl bg-foreground/20 dark:bg-background/20 rounded-2xl gap-4 px-20 py-16 m-auto max-w-[70vw] w-full flex flex-col justify-center text-md md:text-xl z-1">
          <Greeting></Greeting>
          <div className="w-4/5 border-accent-yellow/40 border-t-2 border-dotted"></div>
          <TextGenerateEffect
            className="text-3xl font-light -mb-3"
            words={line5}
            delay={0.1}
          />
          <TextGenerateEffect
            className="text-3xl font-light mb-2"
            words={line3}
            delay={2}
          />

          {/* <div className="w-2/5 border-accent-yellow/40 border-t-2 border-dotted"></div> */}
        </div>
        {/* <div className="absolute h-[55vh] w-full top-1/2 -translate-y-1/2 bg-accent-purple/80 z-0 mix-blend-exclusion"></div> */}

        {/* <Noise className="h-[55vh] top-1/2 -translate-y-1/2" /> */}
      </div>
    </div>
  );
};

export default Hero;
