import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/shared/components/ui/terminal";

export function TerminalDemo() {
  return (
    <Terminal className="dark:bg-neutral-900 bg-pink-300">
      <TypingAnimation>&gt; init welcome</TypingAnimation>

      <AnimatedSpan delay={1500} className="text-green-500">
        <span>✔ Initializing lnkpv`s portfolio</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2000} className="text-green-500">
        <span>
          ✔ Installing best designs. Hang tight, this might be pretty!
        </span>
      </AnimatedSpan>

      <AnimatedSpan delay={2500} className="text-green-500">
        <span>✔ Updating projects. Let`s show off those skills!</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3000} className="text-green-500">
        <span>✔ Checking for creativity overflow. Seems we`re good here!</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3500} className="text-green-500">
        <span>✔ Framework verified. Next.js detected. Ready to impress!</span>
      </AnimatedSpan>

      {/* You've found the Easter egg! ^^ */}
      <AnimatedSpan delay={4000} className="text-blue-500">
        <span>ℹ Updated 1 file:</span>
        <span className="pl-2">- src/shared/components/TerminalDemo.tsx</span>
        <span>(Added Easter egg for curious visitors.)</span>
      </AnimatedSpan>

      <TypingAnimation delay={4500} className="text-muted-foreground">
        Success! Portfolio initialization completed.
      </TypingAnimation>
    </Terminal>
  );
}
