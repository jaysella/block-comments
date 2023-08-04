/* eslint-disable react/no-unescaped-entities */
import { Explanation } from "@/app/_components/Snippet";
import KMersPlayground from "@/app/_components/KMersPlayground";
import { CodeSegment } from "@/app/_components/ui/code-segment";
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
            className="link"
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
          className="link"
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
        <ol className="mt-2 ml-6 leading-relaxed list-decimal">
          <li>
            <CodeSegment>sequence</CodeSegment>, which is a string
          </li>
          <li>
            <CodeSegment>k</CodeSegment>, which is an integer
          </li>
        </ol>
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
  {
    lines: [15],
    content: (
      <>
        This is a <CodeSegment>for</CodeSegment>-loop. Loops are recursive. It
        processes the given <CodeSegment>sequence</CodeSegment>{" "}
        character-by-character starting at the <CodeSegment>k</CodeSegment>-th
        character and ending at the last character (
        <CodeSegment>len(sequence) - 1</CodeSegment>).
        <br />
        <br />
        <CodeSegment>i</CodeSegment> is the local variable which represents the
        index of the current character in the{" "}
        <CodeSegment>sequence</CodeSegment> being evaluated.
        <br />
        <br />
        <CodeSegment>i++</CodeSegment> increments <CodeSegment>i</CodeSegment>{" "}
        by 1 after each iteration of the loop.
      </>
    ),
  },
  {
    lines: [16],
    content: (
      <>
        <CodeSegment>tempSequence</CodeSegment> is a string variable that holds
        the current k-mer being processed.
        <br />
        <br />
        In each iteration, the k-mer is shifted right by one position. The first
        character of the <CodeSegment>tempSequence</CodeSegment> is removed and
        a new character is appended from the <CodeSegment>sequence</CodeSegment>
        :
        <ol className="mt-3 ml-6 space-y-2 leading-relaxed list-decimal">
          <li>
            <CodeSegment>tempSequence[1:]</CodeSegment> is a{" "}
            <strong>slice</strong>. It removes the first character of{" "}
            <CodeSegment>tempSequence</CodeSegment>.
          </li>
          <li>
            <CodeSegment>sequence[i:i+1]</CodeSegment> is a{" "}
            <strong>slice</strong>. It accesses the character at the{" "}
            <CodeSegment>i</CodeSegment>-th index within the{" "}
            <CodeSegment>sequence</CodeSegment>.
          </li>
        </ol>
        <br />
        <KMersPlayground
          title="Sliding Window"
          sequence="ACGAGGTACGA"
          hideDetails={true}
        />
      </>
    ),
  },
  {
    lines: [17],
    content: (
      <>
        This line looks up the key equal to the{" "}
        <CodeSegment>tempSequence</CodeSegment> in the{" "}
        <CodeSegment>kmers</CodeSegment> map. Then, it increments the value of
        that key in the map by 1.
      </>
    ),
  },
  {
    lines: [18],
    content: (
      <>
        This closing curly brace (<CodeSegment>{"}"}</CodeSegment>) denotes the
        end of the <CodeSegment>for</CodeSegment>-loop which was opened on line
        15.
      </>
    ),
  },
  {
    lines: [20],
    content: (
      <>
        This <CodeSegment>return</CodeSegment> statement completes execution of
        the <CodeSegment>countkmers()</CodeSegment> function. The final
        <CodeSegment>kmers</CodeSegment> map is output.
      </>
    ),
  },
  {
    lines: [21],
    content: (
      <>
        This closing curly brace (<CodeSegment>{"}"}</CodeSegment>) denotes the
        end of the function body for <CodeSegment>countkmers()</CodeSegment>{" "}
        which was opened on line 5.
      </>
    ),
  },
  {
    lines: [23],
    content: (
      <>
        In Go, the <CodeSegment>main()</CodeSegment> function is the entry point
        of the program. This is automatically called when program execution
        begins.
        <br />
        <br />
        This function does not take any arguments as there are no parameters
        defined within the parentheses.
      </>
    ),
  },
  {
    lines: [24],
    content: (
      <>
        This line calls the <CodeSegment>countkmers()</CodeSegment> function
        (defined above) with two arguments:
        <ol className="mt-2 ml-6 leading-relaxed list-decimal">
          <li>
            <CodeSegment>"ACGAGGTACGA"</CodeSegment> as the string value for{" "}
            <CodeSegment>sequence</CodeSegment>
          </li>
          <li>
            <CodeSegment>3</CodeSegment> as the integer value for{" "}
            <CodeSegment>k</CodeSegment>
          </li>
        </ol>
        <br />
        The result of this function call is then printed to the console via the
        <CodeSegment>fmt.Println()</CodeSegment> function. Recall that{" "}
        <CodeSegment>fmt</CodeSegment> is provided by the package imported on
        line 3.
      </>
    ),
  },
  {
    lines: [25],
    content: (
      <>
        This closing curly brace (<CodeSegment>{"}"}</CodeSegment>) denotes the
        end of the <CodeSegment>main()</CodeSegment> function body which was
        opened on line 23.
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
        The count of each 3-mer identified is also returned as the value for
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
