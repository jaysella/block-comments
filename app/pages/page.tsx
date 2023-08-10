import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Directory",
};

export default function Page() {
  return (
    <div className="container min-h-screen p-6 mx-auto md:p-12 links">
      <h1 className="mb-3 text-2xl font-bold dark:text-slate-100">Pages</h1>
      <ul className="space-y-4 dark:text-slate-200">
        <li>
          <h2 className="font-semibold">First Flight</h2>
          <ul className="pl-4 mt-1">
            <li>
              <Link href="/first-flight/racket">Racket</Link>
            </li>
            <li>
              <Link href="/first-flight/python">Python</Link>
            </li>
            <li>
              <Link href="/first-flight/javascript">JavaScript</Link>
            </li>
            <li>
              <Link href="/first-flight/typescript">TypeScript</Link>
            </li>
            <li>
              <Link href="/first-flight/rust">Rust</Link>
            </li>
          </ul>
        </li>
        <li>
          <h2 className="font-semibold">Algorithms</h2>
          <ul className="pl-4 mt-1">
            <li>
              <Link href="/algorithms/multiplication">Multiplication (Go)</Link>
            </li>
            <li>
              <Link href="/algorithms/kmers-naive">
                Counting k-mers: Naive (Go)
              </Link>
            </li>
            <li>
              <Link href="/algorithms/kmers-window">
                Counting k-mers: Sliding Window Technique (Go)
              </Link>
            </li>
            <li>
              <Link href="/algorithms/big-o">Big O Analysis (Go)</Link>
            </li>
            <li>
              <Link href="/algorithms/playground">K-Mers Playground</Link>
            </li>
          </ul>
        </li>
        <li>
          <h2 className="font-semibold">Product Management</h2>
          <ul className="pl-4 mt-1">
            <li>
              <Link href="/product/sprint">Sprint Simulation</Link>
            </li>
          </ul>
        </li>
        <li>
          <h2 className="font-semibold">Tools: Git</h2>
          <ul className="pl-4 mt-1">
            <li>
              <Link href="/git/commit">Git Commit</Link>
            </li>
            <li>
              <Link href="/git/conflict">Git Conflict (Plain Text)</Link>
            </li>
            <li>
              <Link href="/git/partial-conflict">
                Partial Git Conflict (Racket)
              </Link>
            </li>
            <li>
              <Link href="/git/branches">Git Branches</Link>
            </li>
            <li>
              <Link href="/git/visualization">Git Visualization</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
