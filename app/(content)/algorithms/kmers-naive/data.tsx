import { Explanation, SnippetContent } from "@/app/_components/Snippet";
import { CodeSegment } from "@/app/_components/ui/code-segment";
import Link from "next/link";

export const CODE = `package main

import "fmt"

func countkmers(sequence string, k int) map[string]int {
	var kmers = make(map[string]int)

	if k > len(sequence) || k ≤ 0 {
		return kmers
	}

	for i := 0; i < len(sequence) - k + 1; i++ {
		var kmer = sequence[i:i+k]
		kmers[kmer]++
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
        This is a conditional statement. The code on line 9 will only be
        evaluated if <CodeSegment>k</CodeSegment> is greater than (
        <CodeSegment>{">"}</CodeSegment>) the length of the given{" "}
        <CodeSegment>sequence</CodeSegment> <strong>OR</strong> (
        <CodeSegment>||</CodeSegment>) if <CodeSegment>k</CodeSegment> is less
        than or equal to (<CodeSegment>{"<="}</CodeSegment>) zero (0).
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
        If the above conditional is true, the empty{" "}
        <CodeSegment>kmers</CodeSegment> variable will be output as the result
        of the <CodeSegment>countkmers</CodeSegment> function.
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
        This is a <CodeSegment>for</CodeSegment>-loop. Loops are recursive. It
        processes the given <CodeSegment>sequence</CodeSegment>{" "}
        character-by-character starting at the <CodeSegment>0</CodeSegment>-th
        (first) character and ending at the last substring-able character.
        <br />
        <br />
        <CodeSegment>i</CodeSegment> is the local variable which represents the
        index of the current character in the{" "}
        <CodeSegment>sequence</CodeSegment> being evaluated.
        <br />
        <br />
        <CodeSegment>i++</CodeSegment> increments <CodeSegment>i</CodeSegment>{" "}
        by one (1) after each iteration of the loop.
      </>
    ),
  },
  {
    lines: [13],
    content: (
      <>
        <CodeSegment>kmer</CodeSegment> is a string variable that holds the
        current k-mer being processed.
        <br />
        <br />
        In each iteration, the appropiate k-mer is computed according to the
        current <CodeSegment>i</CodeSegment>ndex. :
        <ol className="mt-3 ml-6 space-y-2 leading-relaxed list-decimal">
          <li>
            <CodeSegment>sequence[i:i+k]</CodeSegment> is a{" "}
            <strong>slice</strong>. It substrings the characters starting at the{" "}
            <CodeSegment>i</CodeSegment>-th index within the{" "}
            <CodeSegment>sequence</CodeSegment> up to, but not including, the
            <CodeSegment>i+k</CodeSegment>-th index.
          </li>
        </ol>
      </>
    ),
  },
  {
    lines: [14],
    content: (
      <>
        This line looks up the key equal to the{" "}
        <CodeSegment>tempSequence</CodeSegment> in the{" "}
        <CodeSegment>kmers</CodeSegment> map. Then, it increments the value of
        that key by one (1).
        <br />
        <br />
        If the key does <strong>not</strong> exist in the map, a new key equal
        to the <CodeSegment>tempSequence</CodeSegment> will be created. Since
        the value must be an integer, Go defaults the key's value to{" "}
        <CodeSegment>0</CodeSegment>. The <CodeSegment>++</CodeSegment> operator
        increments that value to <CodeSegment>1</CodeSegment>.
        <details className="px-3 py-2 mt-2 border rounded-lg border-slate-200">
          <summary className="font-bold text-blue-500 uppercase">
            Example
          </summary>
          <div className="mt-1">
            Consider this map:
            <SnippetContent
              language="go"
              withLineNumbers={false}
              className="mt-1 mb-3 border-0 rounded-md bg-slate-100 dark:bg-slate-900"
            >
              map[ACG:2]
            </SnippetContent>
            While key <CodeSegment>"ACG"</CodeSegment> exists, key{" "}
            <CodeSegment>"CGA"</CodeSegment> does not. Running{" "}
            <CodeSegment>kmers["CGA"]++</CodeSegment> would result in this
            updated map:
            <SnippetContent
              language="go"
              withLineNumbers={false}
              className="mt-1 mb-1 border-0 rounded-md bg-slate-100 dark:bg-slate-900"
            >
              map[ACG:2 CGA:1]
            </SnippetContent>
          </div>
        </details>
      </>
    ),
  },
  {
    lines: [15],
    content: (
      <>
        This closing curly brace (<CodeSegment>{"}"}</CodeSegment>) denotes the
        end of the <CodeSegment>for</CodeSegment>-loop which was opened on line
        12.
      </>
    ),
  },
  {
    lines: [17],
    content: (
      <>
        This <CodeSegment>return</CodeSegment> statement completes execution of
        the <CodeSegment>countkmers()</CodeSegment> function. The final{" "}
        <CodeSegment>kmers</CodeSegment> map is output.
      </>
    ),
  },
  {
    lines: [18],
    content: (
      <>
        This closing curly brace (<CodeSegment>{"}"}</CodeSegment>) denotes the
        end of the function body for <CodeSegment>countkmers()</CodeSegment>{" "}
        which was opened on line 5.
      </>
    ),
  },
  {
    lines: [20],
    content: (
      <>
        In Go, the <CodeSegment>main()</CodeSegment> function is the entry point
        to the program. This is automatically called when program execution
        begins.
        <br />
        <br />
        This function does not take any arguments as there are no parameters
        defined within the parentheses.
      </>
    ),
  },
  {
    lines: [21],
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
    lines: [22],
    content: (
      <>
        This closing curly brace (<CodeSegment>{"}"}</CodeSegment>) denotes the
        end of the <CodeSegment>main()</CodeSegment> function body which was
        opened on line 20.
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
        This is the output from line 21 (
        <CodeSegment>fmt.Println(...)</CodeSegment>). It tells us that there are
        seven (7) unique 3-mers in the <CodeSegment>"ACGAGGTACGA"</CodeSegment>{" "}
        sequence. These are: ACG, AGG, CGA, GAG, GGT, GTA, and TAC.
        <br />
        <br />
        The count of each 3-mer identified is also returned as the value for
        each key. Note that this matches the format of our{" "}
        <CodeSegment>kmers</CodeSegment> map which is returned by the{" "}
        <CodeSegment>countkmers()</CodeSegment> function.
      </>
    ),
  },
];
