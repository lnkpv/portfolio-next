import { TerminalDemo } from "@/shared/components/TerminalDemo";
import { ChevronRightIcon } from "@/shared/components/ui/icons/chevron-right";
import MyButton from "@/shared/components/ui/my-button";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background">
      <div className="terminal h-screen flex justify-center items-center flex-col gap-20">
        <TerminalDemo />

        <Link href="/me">
          <MyButton
            text="Get started"
            size="large"
            iconRight={<ChevronRightIcon size={28} className="p-0" />}
          />
        </Link>

        <Link
          href="https://lnkpv.github.io/portfolio-js/"
          className="relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
        >
          <div className="flex items-center gap-2 text-foreground/40 -mt-16">
            <div className="text-sm">Сheck out the old version</div>
            <SquareArrowOutUpRight size={16} />
          </div>
        </Link>
      </div>
    </div>
  );
}
