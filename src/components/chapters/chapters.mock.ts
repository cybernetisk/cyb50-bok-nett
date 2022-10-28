import { Edge } from "./chapters";

export const edges: Edge[] = [
  generateItem("3", null, 100),
  generateItem("4", "II", 150),
  generateItem("2", "I", 3),
  generateItem("5", null, 1000),
  generateItem("1", null, 0)
];

function generateItem(title: string, partName: string | null, order: number): Edge {
  return {
    body: "",
    frontmatter: {
      chapter: null,
      next: null,
      order,
      part: null,
      partName,
      previous: null,
      short: null,
      title,
    },
    parent: {
      relativePath: ""
    }
  };
}
