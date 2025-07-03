import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Credits"
};

export default function Page() {
  return (
    <div className="container min-h-screen p-6 mx-auto md:p-12 text-slate-800 dark:text-slate-200 links">
      <h1 className="mb-3 text-2xl font-bold text-slate-900 dark:text-slate-100">
        Credits
      </h1>
      <p>
        Site + interactive demos designed and built by{" "}
        <Link href="https://jaysella.com">Jay Sella</Link>, &copy; 2023. All
        Rights Reserved.
      </p>

      <p className="mt-6">Special thanks to these open-source packages:</p>
      <ul className="pl-4 mt-1 list-disc list-inside">
        <li>
          Framework:{" "}
          <Link
            href="https://github.com/vercel/next.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </Link>{" "}
          &middot;{" "}
          <Link
            href="https://github.com/facebook/react"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </Link>
        </li>
        <li>
          CSS Utilities:{" "}
          <Link
            href="https://github.com/tailwindlabs/tailwindcss"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind
          </Link>{" "}
          &middot;{" "}
          <Link
            href="https://github.com/dcastil/tailwind-merge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind Merge
          </Link>{" "}
          &middot;{" "}
          <Link
            href="https://github.com/joe-bell/cva"
            target="_blank"
            rel="noopener noreferrer"
          >
            Class Variance Authority
          </Link>{" "}
          &middot;{" "}
          <Link
            href="https://github.com/lukeed/clsx"
            target="_blank"
            rel="noopener noreferrer"
          >
            clsx
          </Link>
        </li>
        <li>
          UI Components:{" "}
          <Link
            href="https://github.com/radix-ui/primitives"
            target="_blank"
            rel="noopener noreferrer"
          >
            Radix Primitives
          </Link>{" "}
          &middot;{" "}
          <Link
            href="https://github.com/shadcn-ui/ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            shadcn/ui
          </Link>
        </li>
        <li>
          Icons:{" "}
          <Link
            href="https://github.com/lucide-icons/lucide"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lucide
          </Link>
        </li>
        <li>
          Syntax Highlighting:{" "}
          <Link
            href="https://github.com/PrismJS/prism"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prism
          </Link>
        </li>
        <li>
          Animations:{" "}
          <Link
            href="https://github.com/framer/motion"
            target="_blank"
            rel="noopener noreferrer"
          >
            Framer Motion
          </Link>
        </li>
        <li>
          Date/time Handling:{" "}
          <Link
            href="https://github.com/moment/moment"
            target="_blank"
            rel="noopener noreferrer"
          >
            Moment
          </Link>
        </li>
        <li>
          File Downloads:{" "}
          <Link
            href="https://github.com/eligrey/FileSaver.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            File Saver
          </Link>
        </li>
        <li>
          Type Safety:{" "}
          <Link
            href="https://github.com/microsoft/TypeScript"
            target="_blank"
            rel="noopener noreferrer"
          >
            TypeScript
          </Link>
        </li>
        <li>
          Linting:{" "}
          <Link
            href="https://github.com/eslint/eslint"
            target="_blank"
            rel="noopener noreferrer"
          >
            ESLint
          </Link>
        </li>
      </ul>
    </div>
  );
}
