import { NeonGradientCard } from "@/shared/components/magicui/neon-gradient-card";
import { SkillsTree } from "@/shared/components/SkillsTree";
import Header from "@/shared/components/ui/header";
import { cn } from "@/shared/lib/utils";

function Skills({ className }: { className: string }) {
  return (
    <div id="skills" className={cn("", className)}>
      <Header text="Skills" align="center" />
      <div className="grid grid-cols-2 pt-[4vh]">
        <NeonGradientCard
          className="max-w-md items-center justify-center text-center mx-auto"
          borderSize={1}
          neonColors={{
            firstColor: "rgba(70, 3, 139, 0.5)",
            secondColor: "rgba(172, 144, 11, 0.5)",
          }}
        >
          <SkillsTree type="soft" />
        </NeonGradientCard>
        <NeonGradientCard
          className="max-w-md items-center justify-center text-center mx-auto"
          borderSize={1}
          neonColors={{
            firstColor: "rgba(172, 144, 11, 0.5)",
            secondColor: "rgba(70, 3, 139, 0.5)",
          }}
        >
          <SkillsTree type="hard" />
        </NeonGradientCard>
      </div>
    </div>
  );
}

export default Skills;
