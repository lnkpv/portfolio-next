import { File, Folder } from "@/shared/components/magicui/file-tree";
import { VariantProps } from "class-variance-authority";
import {
  COriginal,
  CplusplusOriginal,
  Css3Original,
  ExpressOriginal,
  FigmaOriginal,
  GitOriginal,
  GithubOriginal,
  Html5Original,
  JavaOriginal,
  JavascriptOriginal,
  JupyterOriginal,
  NextjsOriginal,
  NodejsOriginal,
  PostgresqlOriginal,
  PythonOriginal,
  ReactOriginal,
  TailwindcssOriginal,
  TypescriptOriginal,
  VercelOriginal,
  VitejsOriginal,
  WebpackOriginal,
} from "devicons-react";
import { ReactNode } from "react";
import ProcreateIcon from "./components/ui/icons/procreate-icon";
import TildaIcon from "./components/ui/icons/tilda-icon";
import { ColorType, badgesVariants } from "./components/ui/tag";

export type TagType = {
  icon: ReactNode;
  color: ColorType;
  children: ReactNode;
} & VariantProps<typeof badgesVariants>;

type ImageType = {
  name: string;
  src: string;
};

type ContentType = {
  title: string;
  description: string;
  type: "default" | "large" | "mobile";
  status: string;
  tags: TagType[];
  images: ImageType[];
};

export const content: ContentType[] = [
  {
    title: "Intelligent Language Competency Testing System (ISTOK)",
    description:
      "Independent language proficiency assessment according to the CEFR standard. The first Russian English test using DeepPavlov technologies developed at MIPT.",
    type: "default",
    status: "",
    tags: [
      {
        icon: <TypescriptOriginal size={16} />,
        color: "blue",
        children: "typescript",
      },
      {
        icon: <ReactOriginal size={16} />,
        color: "blue",
        children: "react",
      },
      {
        icon: <NextjsOriginal size={16} />,
        color: "neutral",
        children: "next.js",
      },
      {
        icon: <TailwindcssOriginal size={16} />,
        color: "blue",
        children: "tailwindCSS",
      },
      {
        icon: <Html5Original size={16} />,
        color: "orange",
        children: "html",
      },
      {
        icon: <Css3Original size={16} />,
        color: "blue",
        children: "css",
      },
      {
        icon: <VercelOriginal size={12} className="fill-foreground" />,
        color: "neutral",
        children: "vercel",
      },
      {
        icon: <FigmaOriginal size={14} />,
        color: "violet",
        children: "figma",
      },
    ],
    images: [
      {
        name: "istok1",
        src: "/istok/istok1.webp",
      },
      {
        name: "istok2",
        src: "/istok/istok2.webp",
      },
      {
        name: "istok3",
        src: "/istok/istok3.webp",
      },
      {
        name: "istok4",
        src: "/istok/istok4.webp",
      },
    ],
  },
  {
    title: "luna - a simple and efficient task manager",
    description: `An intuitive task management system designed to enhance productivity. It allows users to register, create projects and tasks, and optimize teamwork with built-in commenting feature.`,
    type: "large",
    status: "work in progress",
    tags: [
      {
        icon: <TypescriptOriginal size={16} />,
        color: "blue",
        children: "typescript",
      },
      {
        icon: <ReactOriginal size={16} />,
        color: "blue",
        children: "react",
      },
      {
        icon: <NextjsOriginal size={16} />,
        color: "neutral",
        children: "next.js",
      },
      {
        icon: <TailwindcssOriginal size={16} />,
        color: "blue",
        children: "tailwindCSS",
      },
      {
        icon: <Html5Original size={16} />,
        color: "orange",
        children: "html",
      },
      {
        icon: <Css3Original size={16} />,
        color: "blue",
        children: "css",
      },
      {
        icon: <ExpressOriginal size={12} className="fill-foreground" />,
        color: "neutral",
        children: "express",
      },
      {
        icon: <PostgresqlOriginal size={14} />,
        color: "violet",
        children: "postgreSQL",
      },
    ],
    images: [
      {
        name: "luna1",
        src: "/luna/luna1.webp",
      },
      {
        name: "luna2",
        src: "/luna/luna2.webp",
      },
      {
        name: "luna3",
        src: "/luna/luna3.webp",
      },
      {
        name: "luna4",
        src: "/luna/luna4.webp",
      },
    ],
  },
  {
    title: "CureSound by ElephaHealth",
    description:
      "CureSound is a mobile application designed to reduce stress and improve focus. By analyzing the user's pulse, it recommends specially crafted audio matrices that promote relaxation and restore balance.\n\nCureSound offers a personalized approach to relaxation and mental well-being in a convenient mobile format.",
    type: "mobile",
    status: "",
    tags: [
      {
        icon: <TypescriptOriginal size={16} />,
        color: "blue",
        children: "typescript",
      },
      {
        icon: <ReactOriginal size={16} />,
        color: "blue",
        children: "react native",
      },
      {
        icon: <TailwindcssOriginal size={16} />,
        color: "blue",
        children: "tailwindCSS",
      },
      {
        icon: <Css3Original size={16} />,
        color: "blue",
        children: "css",
      },
      {
        icon: <FigmaOriginal size={14} />,
        color: "violet",
        children: "figma",
      },
      {
        icon: <ProcreateIcon />,
        color: "violet",
        children: "procreate",
      },
    ],
    images: [
      {
        name: "elepha1",
        src: "/elepha/elepha1.webp",
      },
      {
        name: "elepha2",
        src: "/elepha/elepha2.webp",
      },
      {
        name: "elepha4",
        src: "/elepha/elepha4.webp",
      },
      {
        name: "elepha5",
        src: "/elepha/elepha5.webp",
      },
    ],
  },
];

export interface TreeNode {
  id: string;
  isSelectable: boolean;
  name: string;
  component: typeof Folder | typeof File;
  children?: TreeNode[];
  fileIcon?: React.ReactNode;
}

export const HARD_ELEMENTS: TreeNode = {
  id: "1",
  isSelectable: true,
  name: "hard-skills",
  component: Folder,
  children: [
    {
      id: "2",
      isSelectable: true,
      name: "backend-development",
      component: Folder,
      children: [
        {
          id: "3",
          isSelectable: true,
          name: "express",
          component: File,
          fileIcon: <ExpressOriginal className="fill-foreground" />,
        },
        {
          id: "4",
          isSelectable: true,
          name: "node.js",
          component: File,
          fileIcon: <NodejsOriginal />,
        },
        {
          id: "5",
          isSelectable: true,
          name: "postgresql",
          component: File,
          fileIcon: <PostgresqlOriginal />,
        },
      ],
    },
    {
      id: "6",
      isSelectable: true,
      name: "design-tools",
      component: Folder,
      children: [
        {
          id: "8",
          isSelectable: true,
          name: "figma",
          component: File,
          fileIcon: <FigmaOriginal />,
        },
        {
          id: "9",
          isSelectable: true,
          name: "procreate",
          component: File,
          fileIcon: <ProcreateIcon />,
        },
      ],
    },
    {
      id: "10",
      isSelectable: true,
      name: "frontend-development",
      component: Folder,
      children: [
        {
          id: "11",
          isSelectable: true,
          name: "css",
          component: File,
          fileIcon: <Css3Original />,
        },
        {
          id: "12",
          isSelectable: true,
          name: "html",
          component: File,
          fileIcon: <Html5Original />,
        },
        {
          id: "13",
          isSelectable: true,
          name: "javascript",
          component: File,
          fileIcon: <JavascriptOriginal />,
        },
        {
          id: "14",
          isSelectable: true,
          name: "next.js",
          component: File,
          fileIcon: <NextjsOriginal />,
        },
        {
          id: "15",
          isSelectable: true,
          name: "react",
          component: File,
          fileIcon: <ReactOriginal />,
        },
        {
          id: "16",
          isSelectable: true,
          name: "tailwindcss",
          component: File,
          fileIcon: <TailwindcssOriginal />,
        },
        {
          id: "17",
          isSelectable: true,
          name: "typescript",
          component: File,
          fileIcon: <TypescriptOriginal />,
        },
        {
          id: "18",
          isSelectable: true,
          name: "vite",
          component: File,
          fileIcon: <VitejsOriginal />,
        },
        {
          id: "19",
          isSelectable: true,
          name: "webpack",
          component: File,
          fileIcon: <WebpackOriginal />,
        },
      ],
    },
    {
      id: "20",
      isSelectable: true,
      name: "other",
      component: Folder,
      children: [
        {
          id: "21",
          isSelectable: true,
          name: "languages",
          component: Folder,
          children: [
            {
              id: "22",
              isSelectable: true,
              name: "c",
              component: File,
              fileIcon: <COriginal />,
            },
            {
              id: "23",
              isSelectable: true,
              name: "c++",
              component: File,
              fileIcon: <CplusplusOriginal />,
            },
            {
              id: "24",
              isSelectable: true,
              name: "java",
              component: File,
              fileIcon: <JavaOriginal />,
            },
            {
              id: "25",
              isSelectable: true,
              name: "python",
              component: File,
              fileIcon: <PythonOriginal />,
            },
          ],
        },
        {
          id: "26",
          isSelectable: true,
          name: "tools",
          component: Folder,
          children: [
            {
              id: "27",
              isSelectable: true,
              name: "jupyter-notebook",
              component: File,
              fileIcon: <JupyterOriginal />,
            },
            {
              id: "28",
              isSelectable: true,
              name: "pg-admin",
              component: File,
              fileIcon: <PostgresqlOriginal />,
            },
            {
              id: "29",
              isSelectable: true,
              name: "tilda",
              component: File,
              fileIcon: <TildaIcon className="fill-foreground h-full w-auto" />,
            },
            {
              id: "30",
              isSelectable: true,
              name: "vercel",
              component: File,
              fileIcon: <VercelOriginal className="fill-foreground" />,
            },
          ],
        },
      ],
    },
    {
      id: "31",
      isSelectable: true,
      name: "version-control",
      component: Folder,
      children: [
        {
          id: "32",
          isSelectable: true,
          name: "git",
          component: File,
          fileIcon: <GitOriginal />,
        },
        {
          id: "33",
          isSelectable: true,
          name: "github",
          component: File,
          fileIcon: (
            <GithubOriginal
              className="fill-foreground text-foreground"
              id="github"
            />
          ),
        },
      ],
    },
  ],
};

export const SOFT_ELEMENTS: TreeNode = {
  id: "1",
  isSelectable: true,
  name: "soft-skills",
  component: Folder,
  children: [
    {
      id: "2",
      isSelectable: true,
      name: "adaptability",
      component: Folder,
      children: [
        {
          id: "3",
          isSelectable: true,
          name: "learning-ability.tsx",
          component: File,
        },
        {
          id: "4",
          isSelectable: true,
          name: "open-mindedness.tsx",
          component: File,
        },
      ],
    },
    {
      id: "5",
      isSelectable: true,
      name: "attention-to-detail",
      component: Folder,
      children: [
        {
          id: "6",
          isSelectable: true,
          name: "accuracy.tsx",
          component: File,
        },
        {
          id: "7",
          isSelectable: true,
          name: "thoroughness.tsx",
          component: File,
        },
      ],
    },
    {
      id: "8",
      isSelectable: true,
      name: "communication",
      component: Folder,
      children: [
        {
          id: "9",
          isSelectable: true,
          name: "active-listening.tsx",
          component: File,
        },
        {
          id: "10",
          isSelectable: true,
          name: "persuasion.tsx",
          component: File,
        },
        {
          id: "11",
          isSelectable: true,
          name: "honesty.tsx",
          component: File,
        },
      ],
    },
    {
      id: "12",
      isSelectable: true,
      name: "problem-solving",
      component: Folder,
      children: [
        {
          id: "13",
          isSelectable: true,
          name: "analysis.tsx",
          component: File,
        },
        {
          id: "14",
          isSelectable: true,
          name: "decision-making.tsx",
          component: File,
        },
        {
          id: "15",
          isSelectable: true,
          name: "troubleshooting.tsx",
          component: File,
        },
      ],
    },
    {
      id: "16",
      isSelectable: true,
      name: "teamwork",
      component: Folder,
      children: [
        {
          id: "17",
          isSelectable: true,
          name: "collaboration.tsx",
          component: File,
        },
        {
          id: "18",
          isSelectable: true,
          name: "responsibility.tsx",
          component: File,
        },
        {
          id: "19",
          isSelectable: true,
          name: "support.tsx",
          component: File,
        },
      ],
    },
    {
      id: "20",
      isSelectable: true,
      name: "time-management",
      component: Folder,
      children: [
        {
          id: "21",
          isSelectable: true,
          name: "prioritization.tsx",
          component: File,
        },
        {
          id: "22",
          isSelectable: true,
          name: "planning.tsx",
          component: File,
        },
        {
          id: "23",
          isSelectable: true,
          name: "multitasking.tsx",
          component: File,
        },
      ],
    },
  ],
};
