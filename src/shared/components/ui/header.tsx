import { cn } from "@/shared/lib/utils";

type HeaderProps = {
  text: string;
  align?: "left" | "center" | "right";
};

function Header({ text, align = "left" }: HeaderProps) {
  return (
    <div
      className={cn(
        "text-5xl mb-[4vh] font-bold",
        align === "center" && "text-center",
        align === "right" && "text-right"
      )}
    >
      {text}
    </div>
  );
}

export default Header;
