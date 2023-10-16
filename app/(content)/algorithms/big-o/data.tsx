import { Explanation } from "@/app/_components/Snippet";
import { CodeSegment } from "@/app/_components/ui/code-segment";
import Link from "next/link";

export const CODE = `func countkmers(sequence string, k int) map[string]int {
  var kmers = make(map[string]int)

  if k > len(sequence) || k <= 0 {
    return kmers
  }

  var tempSequence = sequence[:k]
  kmers[tempSequence]++

  for i := k; i < len(sequence); i++ {
    tempSequence = tempSequence[1:] + sequence[i:i+1]
    kmers[tempSequence]++
  }

  return kmers
}`;

export const CODE_HIGHLIGHTS = {
  1: {
    color: "blue",
    label: "O(n)",
  },
  2: {
    color: "slate",
    label: "O(1)",
  },
  3: { label: "----" },
  4: {
    color: "slate",
    label: "O(1)",
  },
  5: {
    color: "slate",
    label: "O(1)",
  },
  6: { label: "----" },
  7: { label: "----" },
  8: {
    color: "slate",
    label: "O(1)",
  },
  9: {
    color: "slate",
    label: "O(1)",
  },
  10: { label: "----" },
  11: {
    color: "blue",
    label: "O(n)",
  },
  12: {
    color: "slate",
    label: "O(1)",
  },
  13: {
    color: "slate",
    label: "O(1)",
  },
  14: { label: "----" },
  15: { label: "----" },
  16: {
    color: "slate",
    label: "O(1)",
  },
  17: { label: "----" },
};

export const CODE_EXPLANATIONS: Explanation[] = [
  {
    lines: [1],
    content: (
      <>
        The asymptotic time complexity of any function is equal to the largest
        magnitude of its contents.
        <br />
        <br />
        The largest order of magnitude within this function is{" "}
        <CodeSegment>O(n)</CodeSegment> from the for-loop which begins on line
        11.
      </>
    ),
  },
  {
    lines: [2],
    content: (
      <>
        Simple variable declarations like this is a constant time operation (
        <CodeSegment>O(1)</CodeSegment>).
      </>
    ),
  },
  {
    lines: [3, 6, 7, 10, 14, 15, 17],
    content: <>This line has no time complexity.</>,
  },
  {
    lines: [4],
    content: (
      <>
        The asymptotic time complexity of any conditional is equal to the
        largest magnitude of its contents.
        <br />
        <br />
        The largest order of magnitude within this conditional is{" "}
        <CodeSegment>O(1)</CodeSegment>.
      </>
    ),
  },
  {
    lines: [5, 16],
    content: (
      <>
        Simple return statements like this is a constant time operation (
        <CodeSegment>O(1)</CodeSegment>).
      </>
    ),
  },
  {
    lines: [8],
    content: (
      <>
        In Go, a slice expression is a constant time operation (
        <CodeSegment>O(1)</CodeSegment>).
        <br />
        <br />
        This is because a{" "}
        <Link
          href="https://pkg.go.dev/reflect#SliceHeader"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          slice header
        </Link>{" "}
        contains only a pointer to the underlying array, size, and capacity.
        These three values can be updated behind the scenes in constant time.
      </>
    ),
  },
  {
    lines: [9, 13],
    content: (
      <>
        Accessing an array item (<CodeSegment>kmers[tempSequence]</CodeSegment>)
        by its index is a constant time operation. A simple numerical increment
        (<CodeSegment>++</CodeSegment>) is a constant time operation.
        <br />
        <br />
        Thus, the asymptotic time complexity of this line is{" "}
        <CodeSegment>O(1 + 1) = O(2) = O(1)</CodeSegment>.
      </>
    ),
  },
  {
    lines: [11],
    content: (
      <>
        The asymptotic time complexity of a loop is equal to the largest
        magnitude of possible iterations.
        <br />
        <br />
        This loop will iterate <CodeSegment>len(sequence)</CodeSegment> times.
        This is referred to as <CodeSegment>n</CodeSegment>. Thus, this loop has
        an asymptotic time complexity of <CodeSegment>O(n)</CodeSegment>.
      </>
    ),
  },
  {
    lines: [12],
    content: (
      <>
        As with line 8, a slice expression in Go is a constant time operation (
        <CodeSegment>O(1)</CodeSegment>). Defining a variable also takes
        constant time.
        <br />
        <br />
        Thus, this line has an asymptotic time complexity of{" "}
        <CodeSegment>O(1 + 1 + 1) = O(3) = O(1)</CodeSegment>.
      </>
    ),
  },
];
