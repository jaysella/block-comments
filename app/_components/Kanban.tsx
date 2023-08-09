import { cn } from "@/lib/utils";
import {
  CheckCircle2Icon,
  CheckCircleIcon,
  CircleDotIcon,
  CircleIcon,
  TagIcon,
  dynamicIconImports,
} from "lucide-react";
import dynamic from "next/dynamic";
import { ReactNode } from "react";
import StoryPoint from "./sprint/StoryPoint";

export function KanbanColumn({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export function KanbanHeader({
  count,
  children,
}: {
  count: number;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-row items-center justify-between mb-2 mr-1">
      <div className="flex items-center gap-2.5">
        {children}
        <span className="text-sm text-slate-500">{count}</span>
      </div>
    </div>
  );
}

export function KanbanContent({ children }: { children?: ReactNode }) {
  return <div className="flex flex-col gap-2">{children}</div>;
}

export function KanbanCard({
  title,
  label,
  points,
}: {
  title: string;
  label: string;
  points: number;
}) {
  return (
    <div className="p-2 border rounded-md shadow-sm bg-slate-100 dark:bg-slate-950 border-slate-200 dark:border-slate-800">
      <h3 className="mb-2 text-sm text-slate-700 dark:text-slate-300">
        {title}
      </h3>
      <div className="flex flex-row gap-1">
        <StoryPoint points={points} />
        <div className="px-2 py-0.5 font-mono rounded-md bg-slate-200 dark:bg-slate-800 text-sm font-bold">
          {label}
        </div>
      </div>
    </div>
  );
}

export function KanbanLabel({
  type,
}: {
  type: "backlog" | "in-progress" | "complete";
}) {
  const ICON_SIZE = 16;

  return (
    <h3
      className={cn(
        `flex flex-row items-center px-2 py-1 font-bold uppercase border rounded-md  w-max text-xs gap-1.5`,
        type === "backlog" &&
          "border-red-200 text-red-600 bg-red-100 dark:border-red-700 dark:text-red-400 dark:bg-red-900",
        type === "in-progress" &&
          "border-amber-200 text-amber-600 bg-amber-100 dark:border-amber-700 dark:text-amber-400 dark:bg-amber-900",
        type === "complete" &&
          "border-green-200 text-green-600 bg-green-100 dark:border-green-700 dark:text-green-400 dark:bg-green-900"
      )}
    >
      {
        {
          backlog: <CircleIcon size={ICON_SIZE} />,
          "in-progress": <CircleDotIcon size={ICON_SIZE} />,
          complete: <CheckCircle2Icon size={ICON_SIZE} />,
        }[type]
      }
      {
        {
          backlog: "Backlog",
          "in-progress": "In Progress",
          complete: "Complete",
        }[type]
      }
    </h3>
  );
}
