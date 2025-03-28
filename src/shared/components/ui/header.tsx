import { cn } from "@/shared/lib/utils";

type HeaderProps = {
  text: string;
  align?: "left" | "center" | "right";
};

function Header({ text, align = "left" }: HeaderProps) {
  return (
    <div
      className={cn(
        "text-7xl mb-[4vh] font-semibold flex items-center gap-2 mx-auto",
        align === "center" && "justify-center",
        align === "right" && "text-right"
      )}
    >
      {text}
    </div>
  );
}

export default Header;
