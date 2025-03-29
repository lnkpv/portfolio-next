import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/shared/components/ui/terminal";

export function TerminalDemo() {
  return (
    <Terminal className="bg-foreground/2">
      <TypingAnimation duration={40}>&gt; init welcome</TypingAnimation>

      <AnimatedSpan delay={1000} className="text-green-500">
        <span>✔ Initializing lnkpv`s portfolio</span>
      </AnimatedSpan>

      <AnimatedSpan delay={1300} className="text-green-500">
        <span>
          ✔ Installing best designs. Hang tight, this might be pretty!
        </span>
      </AnimatedSpan>

      <AnimatedSpan delay={1600} className="text-green-500">
        <span>✔ Updating projects. Let`s show off those skills!</span>
      </AnimatedSpan>

      <AnimatedSpan delay={1900} className="text-green-500">
        <span>✔ Checking for creativity overflow. Seems we`re good here!</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2100} className="text-green-500">
        <span>✔ Framework verified. Next.js detected. Ready to impress!</span>
      </AnimatedSpan>

      {/* You've found the Easter egg! ^^ */}
      <AnimatedSpan delay={2400} className="text-blue-500">
        <span>ℹ Updated 1 file:</span>
        <span className="pl-2">- src/shared/components/TerminalDemo.tsx</span>
        <span>(Added Easter egg for curious visitors.)</span>
      </AnimatedSpan>

      <TypingAnimation
        delay={2700}
        className="text-muted-foreground"
        duration={40}
      >
        Success! Portfolio initialization completed.
      </TypingAnimation>
    </Terminal>
  );
}
