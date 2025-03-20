"use client";

import { TerminalDemo } from "@/shared/components/TerminalDemo";
import DecryptedText from "@/shared/components/ui/decrypted-text";
import LiquidChrome from "@/shared/components/ui/liquid-chrome";
import Image from "next/image";
import { useRef } from "react";

function Hero() {
  const start = useRef<null | HTMLDivElement>(null);

  // useLayoutEffect(() => {
  //   setTimeout(() => {
  //     start.current?.scrollIntoView();
  //   }, 8500);
  // }, []);

  const config = {
    baseColor: {
      r: 26,
      g: 0,
      b: 43,
      a: 1,
    },
    speed: 0.08,
    amplitude: 0.4,
  };

  return (
    <div id="home" className="">
      <div className="terminal h-screen flex justify-center items-center">
        <TerminalDemo />
      </div>

      <div ref={start} className="h-screen w-full relative flex items-center">
        <div className="absolute shadow-[0_0_10px_1px_rgba(30,0,59,0.8)] left-[20vw] top-[14vh] size-[155px] rounded-full overflow-clip z-[100]">
          <Image
            className="object-center object-none"
            src="/me.webp"
            width={192}
            height={192}
            alt="lnkpv's photo"
          ></Image>
        </div>
        <div className="pointer-events-none relative backdrop-blur-2xl rounded-2xl px-20 pt-20 pb-12 m-auto max-w-[70vw] w-full flex flex-col gap-3 justify-center text-md md:text-xl z-50">
          <div className="mb-4 text-md md:text-4xl font-semibold">
            <DecryptedText
              text="Hi! I'm Alina!"
              speed={60}
              maxIterations={10}
              animateOn="view"
              revealDirection="center"
              sequential
            />
          </div>
          <div className="mb-4 text-md md:text-3xl max-w-3/4">
            <DecryptedText
              text="I'm a frontend developer"
              speed={60}
              maxIterations={10}
              animateOn="view"
              revealDirection="center"
              sequential
            />
            <DecryptedText
              text="and web designer based in Moscow."
              speed={60}
              maxIterations={10}
              animateOn="view"
              revealDirection="center"
              sequential
            />
          </div>
          <div className="h-0.5 w-full max-w-2/3 bg-neutral-50/10 mb-2"></div>
          <DecryptedText
            text="And this is my portfolio."
            speed={60}
            maxIterations={10}
            animateOn="view"
            revealDirection="center"
            sequential
          />
        </div>
        <div className="absolute h-[55vh] w-full top-1/2 -translate-y-1/2 opacity-50">
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
      </div>
    </div>
  );
}

export default Hero;
