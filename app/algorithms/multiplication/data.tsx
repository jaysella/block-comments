/* eslint-disable react/no-unescaped-entities */
import { Explanation } from "@/app/_components/Snippet";
import { CodeSegment } from "@/app/_components/ui/code-segment";
import Link from "next/link";

export const CODE = `package main

import "fmt"

func multiplyTwoNumbers(x int, y int) int {
	return x * y
}

func main() {
	fmt.Println(multiplyTwoNumbers(4, 5))
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
        <CodeSegment>multiplyTwoNumbers</CodeSegment>. It consumes two (2)
        arguments:
        <ol className="mt-2 ml-6 leading-relaxed list-decimal">
          <li>
            <CodeSegment>x</CodeSegment>, which is an integer
          </li>
          <li>
            <CodeSegment>y</CodeSegment>, which is (also) an integer
          </li>
        </ol>
        <br />
        The function returns an integer.
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
        This line returns the product of <CodeSegment>x</CodeSegment> and{" "}
        <CodeSegment>y</CodeSegment>. The asterisk (<CodeSegment>*</CodeSegment>
        ) is a multiplication operator.
      </>
    ),
  },
  {
    lines: [7],
    content: (
      <>
        This closing curly brace (<CodeSegment>{"}"}</CodeSegment>) denotes the
        end of the <CodeSegment>multiplyTwoNumbers()</CodeSegment> function body
        which was opened on line 4.
      </>
    ),
  },
  {
    lines: [9],
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
    lines: [10],
    content: (
      <>
        This line calls the <CodeSegment>multiplyTwoNumbers()</CodeSegment>{" "}
        function (defined above) with two arguments:
        <ol className="mt-2 ml-6 leading-relaxed list-decimal">
          <li>
            <CodeSegment>4</CodeSegment> as the integer value for{" "}
            <CodeSegment>x</CodeSegment>
          </li>
          <li>
            <CodeSegment>5</CodeSegment> as the integer value for{" "}
            <CodeSegment>y</CodeSegment>
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
    lines: [11],
    content: (
      <>
        This closing curly brace (<CodeSegment>{"}"}</CodeSegment>) denotes the
        end of the <CodeSegment>main()</CodeSegment> function body which was
        opened on line 9.
      </>
    ),
  },
];

export const OUTPUT = `20`;

export const OUTPUT_EXPLANATIONS: Explanation[] = [
  {
    lines: [1],
    content: (
      <>
        This is the output from line 10 (
        <CodeSegment>fmt.Println(...)</CodeSegment>). It tells us that the
        product of 4 and 5 is 20. This is correct!
      </>
    ),
  },
];
