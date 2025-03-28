"use client";
import { FloatingNav } from "@/shared/components/ui/floating-navbar";
import {
  BriefcaseBusiness,
  CircleUserRound,
  Dumbbell,
  House,
  Phone,
} from "lucide-react";
export function NavBar() {
  const navItems = [
    {
      name: "Terminal",
      link: "/",
      icon: <House className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Home",
      link: "#home",
      icon: <House className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: (
        <CircleUserRound className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <Dumbbell className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: (
        <BriefcaseBusiness className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contacts",
      link: "#contacts",
      icon: <Phone className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
