import { File, Folder, Tree } from "@/shared/components/magicui/file-tree";
import {
  COriginal,
  CplusplusOriginal,
  Css3Original,
  ExpressOriginal,
  FigmaOriginal,
  GithubOriginal,
  GitOriginal,
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
import ProcreateIcon from "./ui/icons/procreate-icon";
import TildaIcon from "./ui/icons/tilda-icon";

interface TreeNode {
  id: string;
  isSelectable: boolean;
  name: string;
  component: typeof Folder | typeof File;
  children?: TreeNode[];
  fileIcon?: React.ReactNode;
}

export function SkillsTree({ type }: { type: "soft" | "hard" }) {
  const softExpId = ["1", "2", "5", "8", "12", "16", "20"];

  const hardExpId = ["1", "6", "10", "20", "21"];

  const renderSkills = (elements: TreeNode) => {
    const renderChildren = (children: TreeNode[]) => {
      return children.map((child) => {
        if (child.component === Folder) {
          return (
            <Folder key={child.id} value={child.id} element={child.name}>
              {renderChildren(child.children || [])}
            </Folder>
          );
        } else {
          return (
            <File key={child.id} value={child.id} fileIcon={child.fileIcon}>
              <p>{child.name}</p>
            </File>
          );
        }
      });
    };

    return (
      <Folder element={elements.name} value={elements.id}>
        {renderChildren(elements.children || [])}
      </Folder>
    );
  };

  return (
    <div className="relative flex h-[80vh] w-full flex-col items-center justify-center mx-auto overflow-hidden rounded-[19px] border bg-background p-4">
      <Tree
        className="h-full w-full"
        initialExpandedItems={type === "soft" ? softExpId : hardExpId}
      >
        {type === "soft"
          ? renderSkills(SOFT_ELEMENTS)
          : renderSkills(HARD_ELEMENTS)}
      </Tree>
    </div>
  );
}

const HARD_ELEMENTS: TreeNode = {
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

const SOFT_ELEMENTS: TreeNode = {
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
