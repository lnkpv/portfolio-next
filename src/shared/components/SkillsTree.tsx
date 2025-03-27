import { File, Folder, Tree } from "@/shared/components/magicui/file-tree";

export function SkillsTree({ type }: { type: "soft" | "hard" }) {
  const softExpId = ["1", "2", "5", "8", "12", "16", "20"];

  const hardExpId = ["1", "6", "10", "20", "21"];

  return (
    <div className="relative flex h-[70vh] w-full flex-col items-center justify-center mx-auto overflow-hidden rounded-[19px] border bg-background">
      <Tree
        className="overflow-hidden rounded-md bg-background p-2"
        initialExpandedItems={type === "soft" ? softExpId : hardExpId}
      >
        {type === "soft" ? (
          <Folder element="soft-skills" value="1">
            <Folder value="2" element="adaptability">
              <File value="3">
                <p>learning-ability.tsx</p>
              </File>
              <File value="4">
                <p>open-mindedness.tsx</p>
              </File>
            </Folder>
            <Folder value="5" element="attention-to-detail">
              <File value="6">
                <p>accuracy.tsx</p>
              </File>
              <File value="7">
                <p>thoroughness.tsx</p>
              </File>
            </Folder>
            <Folder value="8" element="communication">
              <File value="9">
                <p>active-listening.tsx</p>
              </File>
              <File value="10">
                <p>persuasion.tsx</p>
              </File>
              <File value="11">
                <p>honesty.tsx</p>
              </File>
            </Folder>
            <Folder value="12" element="problem-solving">
              <File value="13">
                <p>analysis.tsx</p>
              </File>
              <File value="14">
                <p>decision-making.tsx</p>
              </File>
              <File value="15">
                <p>troubleshooting.tsx</p>
              </File>
            </Folder>
            <Folder value="16" element="teamwork">
              <File value="17">
                <p>collaboration.tsx</p>
              </File>
              <File value="18">
                <p>responsibility.tsx</p>
              </File>
              <File value="19">
                <p>support.tsx</p>
              </File>
            </Folder>
            <Folder value="20" element="time-management">
              <File value="21">
                <p>prioritization.tsx</p>
              </File>
              <File value="22">
                <p>planning.tsx</p>
              </File>
              <File value="23">
                <p>multitasking.tsx</p>
              </File>
            </Folder>
          </Folder>
        ) : (
          <Folder element="hard-skills" value="1">
            <Folder value="2" element="backend-development">
              <File value="3">
                <p>express</p>
              </File>
              <File value="4">
                <p>node.js</p>
              </File>
              <File value="5">
                <p>postgresql</p>
              </File>
            </Folder>
            <Folder value="6" element="design-tools">
              <File value="8">
                <p>figma</p>
              </File>
              <File value="9">
                <p>procreate</p>
              </File>
            </Folder>
            <Folder value="10" element="frontend-development">
              <File value="11">
                <p>css</p>
              </File>
              <File value="12">
                <p>html</p>
              </File>
              <File value="13">
                <p>javascript</p>
              </File>
              <File value="14">
                <p>next.js</p>
              </File>
              <File value="15">
                <p>react</p>
              </File>
              <File value="16">
                <p>tailwindcss</p>
              </File>
              <File value="17">
                <p>typescript</p>
              </File>
              <File value="18">
                <p>vite</p>
              </File>
              <File value="19">
                <p>webpack</p>
              </File>
            </Folder>
            <Folder value="20" element="other">
              <Folder value="21" element="languages">
                <File value="22">
                  <p>c</p>
                </File>
                <File value="23">
                  <p>c++</p>
                </File>
                <File value="24">
                  <p>java</p>
                </File>
                <File value="25">
                  <p>python</p>
                </File>
              </Folder>
              <Folder value="26" element="tools">
                <File value="27">
                  <p>jupyter-notebook</p>
                </File>
                <File value="28">
                  <p>pg-admin</p>
                </File>
                <File value="29">
                  <p>tilda</p>
                </File>
              </Folder>
            </Folder>
            <Folder value="30" element="version-control">
              <File value="31">
                <p>git</p>
              </File>
            </Folder>
          </Folder>
        )}
      </Tree>
    </div>
  );
}

// const ELEMENTS = [
//   {
//     id: "1",
//     isSelectable: true,
//     name: "src",
//     children: [
//       {
//         id: "2",
//         isSelectable: true,
//         name: "app",
//         children: [
//           {
//             id: "3",
//             isSelectable: true,
//             name: "layout.tsx",
//           },
//           {
//             id: "4",
//             isSelectable: true,
//             name: "page.tsx",
//           },
//         ],
//       },
//       {
//         id: "5",
//         isSelectable: true,
//         name: "components",
//         children: [
//           {
//             id: "6",
//             isSelectable: true,
//             name: "header.tsx",
//           },
//           {
//             id: "7",
//             isSelectable: true,
//             name: "footer.tsx",
//           },
//         ],
//       },
//       {
//         id: "8",
//         isSelectable: true,
//         name: "lib",
//         children: [
//           {
//             id: "9",
//             isSelectable: true,
//             name: "utils.ts",
//           },
//         ],
//       },
//     ],
//   },
// ];
