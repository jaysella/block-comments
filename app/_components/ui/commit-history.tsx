import { File } from "@/app/_components/Files";
import {
  Block,
  BlockContent,
  BlockHeader,
  BlockTitle,
} from "@/app/_components/ui/block";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarIcon,
  ClockIcon,
  GitCommitIcon,
  UserCircle2Icon,
} from "lucide-react";
import moment, { Moment } from "moment";
import { ReactNode } from "react";

type CommitBase = {
  hash: string;
  ts: Moment;
  author: string;
  message: string;
};

export type Commit = CommitBase & {
  files: File[];
};

export function CommitHistory({ commits }: { commits: Commit[] }) {
  return (
    <Block>
      <BlockHeader>
        <BlockTitle title="Commit History" />
      </BlockHeader>

      <BlockContent>
        <motion.ol
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative flex flex-col gap-6 border-l border-slate-200 dark:border-slate-700"
        >
          <AnimatePresence>
            {commits
              .sort((a, b) => b.ts.diff(a.ts))
              .map((c) => (
                <Commit
                  key={c.hash}
                  hash={c.hash}
                  ts={c.ts}
                  author={c.author}
                  message={c.message}
                />
              ))}
          </AnimatePresence>
        </motion.ol>
      </BlockContent>
    </Block>
  );
}

function Commit({ hash, ts, author, message }: CommitBase) {
  const metaVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="ml-4"
    >
      <div className="absolute w-3 h-3 bg-slate-200 rounded-full mt-1.5 -left-[0.4rem] border-2 border-slate-50 dark:border-slate-900 dark:bg-slate-700"></div>

      <motion.div initial={{ translateY: -10 }} animate={{ translateY: 0 }}>
        <h3 className="font-semibold text-md text-slate-900 dark:text-white">
          {message}
        </h3>

        <motion.div
          variants={metaVariants}
          initial="hidden"
          animate="show"
          className="flex flex-wrap gap-1 mt-1"
        >
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
          {/* <button>
          <CommitMetaTag className="transition-colors bg-orange-100 border-orange-200 dark:bg-orange-800 hover:bg-orange-200 dark:hover:bg-orange-700 dark:border-orange-700">
            <Undo2Icon size={14} />
            Revert
          </CommitMetaTag>
        </button> */}
        </motion.div>
      </motion.div>
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
  const variants = {
    hidden: { opacity: 0, translateX: -5 },
    show: { opacity: 1, translateX: 0 },
  };
  return (
    <motion.div
      variants={variants}
      className={cn(
        "flex items-center gap-2 px-2 py-1 text-xs rounded-md bg-slate-100 dark:bg-slate-800 w-max border border-slate-200 dark:border-slate-700",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
