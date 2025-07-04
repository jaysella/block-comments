"use client";

import { File } from "@/app/_components/Files";
import { Block, BlockContent, BlockHeader } from "@/app/_components/ui/block";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import {
  CalendarIcon,
  ClockIcon,
  GitBranchIcon,
  GitCommitIcon,
  UserCircle2Icon,
} from "lucide-react";
import moment from "moment";
import { ReactNode, useEffect, useMemo, useRef, useState } from "react";

type CommitBase = {
  hash: string;
  ts: Date;
  author: string;
  message: string;
};

export type Commit = CommitBase & {
  files: File[];
  branches: string[];
};

export function CommitHistory({
  commits,
  branch,
  setCurrentCommit,
}: {
  commits: Commit[];
  branch?: string;
  setCurrentCommit?: (commit: Commit) => void;
}) {
  const [firstRender, setFirstRender] = useState(true);

  if (branch) {
    commits = commits.filter((c) => c.branches.includes(branch));
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setFirstRender(false);
  });

  return (
    <Block>
      <BlockHeader>
        <h2 className="flex items-center gap-2 font-bold @md:gap-1 @lg:gap-2 @md:items-start @lg:items-center @md:flex-col @lg:flex-row">
          <span className="uppercase">
            {branch ? "History" : "Commit History"}
          </span>
          {branch ? (
            <code className="flex items-center gap-2 px-2 py-1 text-sm border rounded-lg border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
              <GitBranchIcon size={18} aria-label="branch" /> {branch}
            </code>
          ) : null}
        </h2>
      </BlockHeader>

      <BlockContent>
        {commits.length === 0 && <>No commits.</>}

        <ol className="relative flex flex-col gap-6 border-l border-slate-200 dark:border-slate-800">
          <AnimatePresence>
            {commits
              .sort((a, b) => moment(b.ts).diff(a.ts))
              .map((c) => (
                <Commit
                  key={c.hash}
                  hash={c.hash}
                  ts={c.ts}
                  author={c.author}
                  message={c.message}
                  firstRender={firstRender}
                  allCommits={commits}
                  setCurrentCommit={setCurrentCommit}
                />
              ))}
          </AnimatePresence>
        </ol>
      </BlockContent>
    </Block>
  );
}

function Commit({
  hash,
  ts,
  author,
  message,
  firstRender = true,
  allCommits,
  setCurrentCommit,
}: CommitBase & {
  firstRender?: boolean;
  allCommits: Commit[];
  setCurrentCommit?: (commit: Commit) => void;
}) {
  return (
    <motion.li
      initial={{ opacity: firstRender ? 1 : 0 }}
      viewport={{ once: true }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="ml-4"
    >
      <div className="absolute w-3 h-3 bg-slate-200 rounded-full mt-1.5 -left-[0.4rem] border-2 border-slate-50 dark:border-slate-900 dark:bg-slate-700"></div>

      <button
        className={cn(
          "p-2 pt-1 -m-2 text-left border border-transparent rounded-lg transition-colors",
          setCurrentCommit
            ? "hover:bg-slate-100 dark:hover:bg-slate-900 hover:border-slate-200 dark:hover:border-slate-800"
            : "cursor-default select-text"
        )}
        onClick={() => {
          if (setCurrentCommit) {
            setCurrentCommit(allCommits.filter((c) => c.hash === hash)[0]);
          }
        }}
      >
        <motion.div
          initial={{ translateY: firstRender ? 0 : -10 }}
          animate={{ translateY: 0 }}
        >
          <h3 className="font-semibold text-md text-slate-900 dark:text-white">
            {message}
          </h3>

          <div className="flex flex-wrap gap-1 mt-1">
            <CommitMetaTag>
              <GitCommitIcon size={14} />
              <code>{hash}</code>
            </CommitMetaTag>
            <CommitMetaTag>
              <UserCircle2Icon size={14} />
              {author}
            </CommitMetaTag>
            <CommitMetaTag>
              <CalendarIcon size={14} />
              <time>{moment(ts).format("MMMM D, YYYY")}</time>
            </CommitMetaTag>
            <CommitMetaTag>
              <ClockIcon size={14} />
              <time>{moment(ts).format("h:mm a")}</time>
            </CommitMetaTag>
          </div>
        </motion.div>
      </button>
    </motion.li>
  );
}

function CommitMetaTag({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 px-2 py-1 text-xs rounded-lg bg-slate-100 dark:bg-slate-900 w-max border border-slate-200 dark:border-slate-800",
        className
      )}
    >
      {children}
    </div>
  );
}
