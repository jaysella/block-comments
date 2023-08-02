import Link from "next/link";

export default function Page() {
  return (
    <div className="container min-h-screen p-4 mx-auto bg-slate-100 md:p-8 dark:bg-slate-800 links">
      <h1 className="mb-3 text-2xl font-bold">Pages</h1>
      <ul className="space-y-4">
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
              <Link href="/git">Git Playground</Link>
            </li>
            <li>
              <Link href="/git/conflict">Git Conflict (Plain Text)</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
