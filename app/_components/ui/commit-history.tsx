import moment, { Moment } from "moment";
import { Block, BlockContent, BlockHeader, BlockTitle } from "./block";
import {
  CalendarIcon,
  ClockIcon,
  GitCommitIcon,
  Undo2Icon,
  UserCircle2Icon,
} from "lucide-react";
import { cn, getRandomSeconds } from "@/lib/utils";
import { ReactNode } from "react";

export type Commit = {
  hash: string;
  ts: Moment;
  author: string;
  message: string;
};

export function CommitHistory() {
  return (
    <Block>
      <BlockHeader>
        <BlockTitle title="Commit History" />
      </BlockHeader>

      <BlockContent>
        <ol className="relative flex flex-col gap-6 border-l border-slate-200 dark:border-slate-700">
          <Commit
            hash="ab42acc"
            ts={moment()}
            author="Quiche Purpleson"
            message="Add about section"
          ></Commit>
          <Commit
            hash="bc7a18f"
            ts={moment()
              .subtract(15, "minutes")
              .subtract(getRandomSeconds(), "seconds")}
            author="Quiche Purpleson"
            message="Initial commit"
          ></Commit>
        </ol>
      </BlockContent>
    </Block>
  );
}

function Commit({ hash, ts, author, message }: Commit) {
  return (
    <li className="ml-4">
      <div className="absolute w-3 h-3 bg-slate-200 rounded-full mt-1.5 -left-[0.4rem] border-2 border-slate-50 dark:border-slate-900 dark:bg-slate-700"></div>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
        {message}
      </h3>

      <div className="flex flex-wrap gap-1 mt-1">
        <CommitMetaTag>
          <GitCommitIcon size={14} />
          <code>{hash}</code>
        </CommitMetaTag>
        <CommitMetaTag>
          <CalendarIcon size={14} />
          <time>{moment(ts).format("MMMM DD, YYYY")}</time>
        </CommitMetaTag>
        <CommitMetaTag>
          <ClockIcon size={14} />
          <time>{moment(ts).format("hh:mm:ss a")}</time>
        </CommitMetaTag>
        <CommitMetaTag>
          <UserCircle2Icon size={14} />
          {author}
        </CommitMetaTag>
        <button>
          <CommitMetaTag className="transition-colors bg-orange-100 dark:bg-orange-800 hover:bg-orange-200 dark:hover:bg-orange-700">
            <Undo2Icon size={14} />
            Revert
          </CommitMetaTag>
        </button>
      </div>
    </li>
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
        "flex items-center gap-2 px-2 py-1 text-xs rounded-md bg-slate-100 dark:bg-slate-800 w-max",
        className
      )}
    >
      {children}
    </div>
  );
}
