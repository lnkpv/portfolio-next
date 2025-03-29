import { cn } from "@/shared/lib/utils";
import { ReactNode } from "react";
import { MainMenusGradientCard } from "./gradient-card";

function MyButton({
  text,
  iconLeft,
  iconRight,
  align = "",
  type = "default",
  size = "large",
}: {
  text: string;
  size?: "default" | "large";
  align?: "text-center" | "";
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  type?: "default" | "simple";
}) {
  const content = (
    <div
      className={cn(
        "flex items-center justify-between gap-4",
        size === "large" ? "pl-6 pr-4 py-3" : "py-2 px-4"
      )}
    >
      {iconLeft}
      <div className={cn("grow-1", align)}>{text}</div>
      {iconRight}
    </div>
  );

  if (type === "simple") {
    return content;
  }
  return <MainMenusGradientCard type="button">{content}</MainMenusGradientCard>;
}

export default MyButton;
