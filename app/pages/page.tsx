import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Directory",
};

export default function Page() {
  return (
    <div className="container flex items-center justify-center min-h-screen mx-auto">
      <div className="w-full p-4 border-2 bg-slate-100 border-slate-200 rounded-xl dark:bg-slate-900 dark:border-slate-800 md:p-8 links">
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
                <Link href="/algorithms/multiplication">
                  Multiplication (Go)
                </Link>
              </li>
              <li>
                <Link href="/algorithms/kmers">K-Mers (Go)</Link>
              </li>
              <li>
                <Link href="/algorithms/playground">K-Mers Playground</Link>
              </li>
            </ul>
          </li>
          <li>
            <h2 className="font-semibold">Tools: Git</h2>
            <ul className="pl-4 mt-1">
              <li>
                <Link href="/git/visualization">Git Visualization</Link>
              </li>
              <li>
                <Link href="/git/conflict">Git Conflict (Plain Text)</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
