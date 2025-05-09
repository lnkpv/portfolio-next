import CircleImage from "@/shared/components/CircleImage";
import { NeonGradientCard } from "@/shared/components/magicui/neon-gradient-card";
import MyButton from "@/shared/components/ui/my-button";
import { cn } from "@/shared/lib/utils";
import { IconBrandTelegram } from "@tabler/icons-react";
import { GithubOriginal } from "devicons-react";
import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";

function Contacts({ className }: { className: string }) {
  return (
    <div id="contacts" className={cn("-mt-20", className)}>
      {/* <Header text={"Contacts"} align="center" />
      <div className="max-w-[40vw] mx-auto text-center mb-14">
        {`I'm always open to discussing new opportunities, collaborations, or just
        chatting about interesting projects.`}
      </div> */}
      <div className="relative w-full">
        <div className="flex justify-center absolute top-3 sm:top-5 md:top-0 left-1/2 -translate-x-1/2 z-50">
          <CircleImage type="contacts" />
        </div>
        <div className="pt-28 pb-2">
          <NeonGradientCard
            type="contacts"
            borderSize={1}
            neonColors={{
              firstColor: "rgba(70, 3, 139, 0.5)",
              secondColor: "rgba(172, 144, 11, 0.5)",
            }}
          >
            <div className="px-2 py-4 md:p-6 lg:p-10 bg-background rounded-[20px] flex justify-center gap-2 md:gap-8">
              <div className="flex flex-col gap-2 md:gap-4 w-2/7">
                <Link href="https://github.com/lnkpv">
                  <MyButton
                    text="github"
                    iconLeft={
                      <GithubOriginal
                        size=""
                        strokeWidth={1.5}
                        id="github"
                        className="size-3 md:size-6"
                      />
                    }
                  />
                </Link>
                <Link href="https://t.me/lnkpvv">
                  <MyButton
                    text="@lnkpvv"
                    iconLeft={
                      <IconBrandTelegram
                        strokeWidth={1.5}
                        className="p-0 size-3 md:size-6"
                      />
                    }
                  />
                </Link>
                <Link href="mailto:a.yakupova2004@yandex.ru">
                  <MyButton
                    text="email&nbsp;me"
                    iconLeft={
                      <Mail
                        strokeWidth={1.5}
                        className="p-0 size-3 md:size-6"
                      />
                    }
                  />
                </Link>
              </div>
              <div className="text-center flex flex-col gap-2 md:gap-4 justify-center w-3/7 pt-4">
                <div className="text-[1rem] sm:text-2xl md:text-4xl font-semibold">
                  Get&nbsp;in&nbsp;touch
                </div>
                <div className="w-2/5 mx-auto border-accent-yellow/40 border-t-2 border-dotted mt-2"></div>
                <div className="text-[0.6rem] sm:text-xs md:text-sm text-foreground/80 font-light">
                  {"Let's work together to bring your vision to life"}
                  {/* <code className="tracking-tighter leading-none text-foreground/70 border-[1px] border-accent-purple/40 rounded-sm bg-accent-purple/20 px-3 py-0.5">
                    your vision
                  </code>{" "} */}
                  {/* <span className="font-medium text-accent-yellow border-[1px] border-accent-yellow/20 rounded-sm bg-accent-yellow/10 px-2 py-0.5">
                    life
                  </span> */}
                </div>
              </div>
              <div className="flex flex-col gap-2 md:gap-4 w-2/7">
                <Link href="https://my-gradients.vercel.app/">
                  <MyButton
                    text="gradients"
                    align="text-center"
                    iconRight={
                      <ArrowUpRight
                        strokeWidth={1.5}
                        className="p-0 -my-2 md:my-0 size-3 md:size-6"
                      />
                    }
                  />
                </Link>
                <Link href="https://lnkpv.github.io/portfolio-js/">
                  <MyButton
                    text="old&nbsp;version"
                    align="text-center"
                    iconRight={
                      <ArrowUpRight
                        strokeWidth={1.5}
                        className="p-0 -my-2 md:my-0 size-3 md:size-6"
                      />
                    }
                  />
                </Link>
                <Link href="https://github.com/mxerf/sandbox">
                  <MyButton
                    text="sandbox"
                    align="text-center"
                    iconRight={
                      <ArrowUpRight
                        strokeWidth={1.5}
                        className="p-0 -my-2 md:my-0 size-3 md:size-6"
                      />
                    }
                  />
                </Link>
              </div>
            </div>
          </NeonGradientCard>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
