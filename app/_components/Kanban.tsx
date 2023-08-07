import { cn } from "@/lib/utils";
import { dynamicIconImports } from "lucide-react";
import dynamic from "next/dynamic";
import { ReactNode } from "react";
import StoryPoint from "./sprint/StoryPoint";

export function KanbanColumn({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export function KanbanHeader({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-row items-center justify-between mb-2 mr-1">
      <div className="flex items-center gap-2">
        {children}
        <span className="text-sm text-slate-500">3</span>
      </div>
    </div>
  );
}

export function KanbanContent({ children }: { children: ReactNode }) {
  return <div className="grid grid-rows-2 gap-2">{children}</div>;
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
      {/* <span className="flex flex-row items-center gap-1 px-2 py-1 text-[0.55rem] font-bold uppercase border rounded-md border-slate-200 text-slate-600 bg-slate-100 w-max">
        <CircleIcon size={10} /> Not Started
      </span> */}
      <h3 className="mb-2 text-sm text-slate-700">{title}</h3>
      <StoryPoint points={points} />
    </div>
  );
}

export function KanbanLabel({
  icon,
  name,
  color,
  size = "default",
}: {
  icon?: keyof typeof dynamicIconImports;
  name: string;
  color: string;
  size?: "small" | "default";
}) {
  const Icon = dynamic(dynamicIconImports[icon || "circle"]);

  return (
    <h3
      className={cn(
        `flex flex-row items-center gap-1.5 px-2 py-1 font-bold uppercase border rounded-md border-${color}-200 text-${color}-600 bg-${color}-100 w-max dark:border-${color}-700 dark:text-${color}-400 dark:bg-${color}-900`,
        size === "small" ? "text-[0.55rem]" : "text-xs"
      )}
    >
      {icon ? <Icon size={size === "small" ? 10 : 16} /> : null}
      {name}
    </h3>
  );
}
