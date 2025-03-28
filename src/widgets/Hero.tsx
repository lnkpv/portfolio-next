"use client";

import DecryptedText from "@/shared/components/ui/decrypted-text";
import LiquidChrome from "@/shared/components/ui/liquid-chrome";
import Noise from "@/shared/components/ui/noise";
import Image from "next/image";

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

  return (
    <div id="home" className={className}>
      <div className="h-[90vh] w-full relative flex items-center">
        <Noise
          className="h-[55vh] top-1/2 -translate-y-1/2 z-[20]"
          type="hero"
        />
        <div className="absolute shadow-[0_0_10px_1px_rgba(30,0,59,0.8)] left-[20vw] top-[6vh] size-[155px] rounded-full overflow-clip z-[100]">
          <Image
            className="object-center object-none"
            src="/me.webp"
            width={192}
            height={192}
            alt="lnkpv's photo"
          ></Image>
        </div>
        <div className="absolute h-[55vh] w-full top-1/2 -translate-y-1/2 opacity-60 z-0">
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
        <div className="pointer-events-none relative backdrop-blur-2xl bg-background/20 rounded-2xl px-20 pt-20 pb-12 m-auto max-w-[70vw] w-full flex flex-col gap-3 justify-center text-md md:text-xl z-1">
          <div className="mb-4 text-md md:text-4xl font-semibold">
            <DecryptedText
              text="Hi! I'm Alina!"
              speed={60}
              maxIterations={10}
              revealDirection="center"
              sequential
            />
          </div>
          <div className="mb-4 text-md md:text-3xl max-w-3/4">
            <span>
              <DecryptedText
                text="I'm a "
                speed={60}
                maxIterations={10}
                revealDirection="center"
                sequential
              />
              <span className="text-accent-yellow font-semibold">
                <DecryptedText
                  text="frontend developer"
                  speed={60}
                  maxIterations={10}
                  revealDirection="center"
                  sequential
                />
              </span>
            </span>
            <br />
            <span>
              <DecryptedText
                text="and "
                speed={60}
                maxIterations={10}
                revealDirection="center"
                sequential
              />
              <span className="text-accent-yellow font-semibold">
                <DecryptedText
                  text="web designer "
                  speed={60}
                  maxIterations={10}
                  revealDirection="center"
                  sequential
                />
              </span>
              <DecryptedText
                text="based in Moscow."
                speed={60}
                maxIterations={10}
                revealDirection="center"
                sequential
              />
            </span>
          </div>
          <div className="h-0.5 w-full max-w-2/3 bg-accent-yellow/20 mb-2"></div>
          <DecryptedText
            text="And this is my portfolio."
            speed={60}
            maxIterations={10}
            revealDirection="center"
            sequential
          />
        </div>
        {/* <div className="absolute h-[55vh] w-full top-1/2 -translate-y-1/2 bg-accent-purple/80 z-0 mix-blend-exclusion"></div> */}

        {/* <Noise className="h-[55vh] top-1/2 -translate-y-1/2" /> */}
      </div>
    </div>
  );
};

export default Hero;
