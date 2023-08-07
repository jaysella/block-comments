import { cn } from "@/lib/utils";
import { dynamicIconImports } from "lucide-react";
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
  points,
}: {
  title: string;
  points: number;
}) {
  return (
    <div className="p-2 border rounded-md shadow-sm bg-slate-100 dark:bg-slate-950 border-slate-200 dark:border-slate-800">
      <h3 className="mb-2 text-sm text-slate-700">{title}</h3>
      <StoryPoint points={points} />
    </div>
  );
}

export function KanbanLabel({
  icon,
  name,
  color,
}: {
  icon?: keyof typeof dynamicIconImports;
  name: string;
  color: string;
}) {
  const Icon = dynamic(dynamicIconImports[icon || "circle"]);

  return (
    <h3
      className={cn(
        `flex flex-row items-center px-2 py-1 font-bold uppercase border rounded-md border-${color}-200 text-${color}-600 bg-${color}-100 w-max dark:border-${color}-700 dark:text-${color}-400 dark:bg-${color}-900 text-xs gap-1.5`
      )}
    >
      <Icon size={16} />
      {name}
    </h3>
  );
}
