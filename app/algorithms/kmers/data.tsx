/* eslint-disable react/no-unescaped-entities */
import { Explanation } from "@/app/_components/Highlight";
import { CodeSegment } from "@/app/_components/HighlightExplanation";
import KMersPlayground from "@/app/_components/KMersPlayground";
import Link from "next/link";

export const CODE = `package main

import "fmt"

func countkmers(sequence string, k int) map[string]int {
	var kmers = make(map[string]int)

	if k > len(sequence) {
		return kmers
	}

	var tempSequence = sequence[:k]
	kmers[tempSequence]++

	for i := k; i < len(sequence); i++ {
		tempSequence = tempSequence[1:] + sequence[i:i+1]
		kmers[tempSequence]++
	}

	return kmers
}

func main() {
	fmt.Println(countkmers("ACGAGGTACGA", 3))
}`;

export const CODE_EXPLANATIONS: Explanation[] = [
  {
    lines: [1],
    content: (
      <>
        Go programs are organized into packages. A package is a collection of
        source files in the same directory that are compiled together.
        Functions, types, variables, and constants defined in one source file
        are visible to all other source files within the same package.
        <footer className="mt-2 text-xs">
          Source:{" "}
          <Link
            href="https://go.dev/doc/code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Go
          </Link>
        </footer>
      </>
    ),
  },
  {
    lines: [3],
    content: (
      <>
        <Link
          href="https://pkg.go.dev/fmt"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          <CodeSegment>fmt</CodeSegment>
        </Link>{" "}
        is a package which implements formatted I/O (input/output)
        functionality. This is similar to <CodeSegment>System.out</CodeSegment>{" "}
        in Java.
      </>
    ),
  },
  {
    lines: [5],
    content: (
      <>
        This line defines a <CodeSegment>func</CodeSegment>tion named{" "}
        <CodeSegment>countkmers</CodeSegment>. It consumes two (2) arguments:
        <ul className="mt-2 ml-6 leading-relaxed list-decimal">
          <li>
            <CodeSegment>sequence</CodeSegment>, which is a string
          </li>
          <li>
            <CodeSegment>k</CodeSegment>, which is an integer
          </li>
        </ul>
        <br />
        The function returns a <CodeSegment>map[string]int</CodeSegment>. This
        means the value will be a map of strings to integers.
        <br />
        <br />
        <p>
          The open curly brace (<CodeSegment>{"{"}</CodeSegment>) denotes the
          start of the function body.
        </p>
      </>
    ),
  },
  {
    lines: [6],
    content: (
      <>
        <CodeSegment>var</CodeSegment> defines a variable to store data. This
        variable is named <CodeSegment>kmers</CodeSegment>.
        <br />
        <br />
        The value of this variable is an initialized, empty map of strings to
        integers. Strings are the map's keys. Integers are the corresponding
        values. This initialization with <CodeSegment>make()</CodeSegment>{" "}
        ensures that the map is ready to store key-value pairs.
      </>
    ),
  },
  {
    lines: [8],
    content: (
      <>
        This is a conditional statement. The contents on lines 9 will only be
        evaluated if <CodeSegment>k</CodeSegment> is greater than than (
        <CodeSegment>{">"}</CodeSegment>) the length of the given{" "}
        <CodeSegment>sequence</CodeSegment>.
        <br />
        <br />
        <CodeSegment>len()</CodeSegment> is a built-in function which returns
        the length of the given string.
      </>
    ),
  },
  {
    lines: [9],
    content: (
      <>
        This <CodeSegment>countkmers</CodeSegment> function will return with the
        current value of the <CodeSegment>kmers</CodeSegment> variable.
      </>
    ),
  },
  {
    lines: [10],
    content: (
      <>
        This closing curly brace (<CodeSegment>{"}"}</CodeSegment>) denotes the
        end of the conditional body which was opened on line 8.
      </>
    ),
  },
  {
    lines: [12],
    content: (
      <>
        <CodeSegment>var</CodeSegment> defines a variable to store data. This
        variable is named <CodeSegment>tempSequence</CodeSegment>.
        <br />
        <br />
        Its value is determined by taking part of the provided{" "}
        <CodeSegment>sequence</CodeSegment> string. This part, or{" "}
        <em>substring</em>, starts from the beginning (index zero (0)) of the{" "}
        <CodeSegment>sequence</CodeSegment> string and includes all characters
        up to, but not including, the "<CodeSegment>k</CodeSegment>"-th
        character in the sequence.
      </>
    ),
  },
  {
    lines: [13],
    content: (
      <>
        This statement looks up the <CodeSegment>tempSequence</CodeSegment> key
        in the <CodeSegment>kmers</CodeSegment> map. If it already exists in the
        map, its corresponding value (an integer) will be incremented by one
        (1).
        <br />
        <br />
        For example, a key named <CodeSegment>"ABC"</CodeSegment> with a value
        of <CodeSegment>3</CodeSegment> will be updated to have a value of{" "}
        <CodeSegment>4</CodeSegment>. The key will remain unchanged.
        <br />
        <br />
        If the key does not exist in the map, a new entry will be created with{" "}
        <CodeSegment>tempSequence</CodeSegment> as the key, and its value will
        be set to <CodeSegment>1</CodeSegment>.
      </>
    ),
  },
];

export const OUTPUT = `map[ACG:2 AGG:1 CGA:2 GAG:1 GGT:1 GTA:1 TAC:1]`;

export const OUTPUT_EXPLANATIONS: Explanation[] = [
  {
    lines: [1],
    content: (
      <>
        This is the output from line 24 (
        <CodeSegment>fmt.Println(...)</CodeSegment>). It tells us that there are
        seven (7) unique 3-mers in the <CodeSegment>"ACGAGGTACGA"</CodeSegment>{" "}
        sequence. These are: ACG, AGG, CGA, GAG, GGT, GTA, and TAC.
        <br />
        <br />
        The observation count of each 3-mer is also returned as the value for
        each key. Note that this matches the format of our{" "}
        <CodeSegment>kmers</CodeSegment> map which is returned by the{" "}
        <CodeSegment>countkmers</CodeSegment> function.
        <br />
        <br />
        <KMersPlayground sequence="ACGAGGTACGA" hideSteps playground={false} />
      </>
    ),
  },
];
