/* eslint-disable react/no-unescaped-entities */
import { Explanation } from "@/app/_components/Snippet";
import { CodeSegment } from "@/app/_components/ui/code-segment";
import Link from "next/link";

export const CONFLICT = `<<<<<<< HEAD
This is some content
which is very important to Serif
=======
Totally different text
>>>>>>> new_branch_to_merge_later`;

export const CONFLICT_EXPLANATIONS: Explanation[] = [
  {
    lines: [1],
    content: (
      <>
        This denotes the start of the conflicting content from the current
        branch which the <CodeSegment>HEAD</CodeSegment> ref is pointing to.
      </>
    ),
  },
  {
    lines: [2, 3],
    content: (
      <>
        This content exists in this file only on the current branch which the{" "}
        <CodeSegment>HEAD</CodeSegment> ref is pointing to.
      </>
    ),
  },
  {
    lines: [4],
    content: (
      <>
        <CodeSegment>=======</CodeSegment> denotes the "center" of the conflict.
        <br />
        <br />
        Everything between the center and the{" "}
        <CodeSegment>{"<<<<<<< HEAD"}</CodeSegment> line exists in the current
        branch which the <CodeSegment>HEAD</CodeSegment> ref is pointing to.
        <br />
        <br />
        Everything between the center and the{" "}
        <CodeSegment>{">>>>>>> new_branch_to_merge_later"}</CodeSegment> line is
        present in the merging branch.
      </>
    ),
  },
  {
    lines: [5],
    content: (
      <>
        This content exists in this file only on the{" "}
        <CodeSegment>new_branch_to_merge_later</CodeSegment> branch.
      </>
    ),
  },
  {
    lines: [6],
    content: (
      <>
        This line denotes the end of the conflicting content from the{" "}
        <CodeSegment>new_branch_to_merge_later</CodeSegment> branch.
      </>
    ),
  },
];
