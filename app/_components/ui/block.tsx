import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Block({ children }: { children: ReactNode }) {
  return (
    <div className="@container border-2 rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 text-slate-700 dark:text-slate-200 dark:bg-slate-950">
      {children}
    </div>
  );
}

export function BlockHeader({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-between w-full px-4 py-1 min-h-[3rem] @md:px-6 gap-2">
      {children}
    </div>
  );
}

export function BlockControls({ children }: { children: ReactNode }) {
  return <div className="flex items-center -mr-2">{children}</div>;
}

export function BlockTitle({ title }: { title: string }) {
  return <h2 className="font-bold uppercase">{title}</h2>;
}

export function BlockContent({
  withPadding = true,
  children,
}: {
  withPadding?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "-mt-0.5 border-t-2 border-slate-200 dark:border-slate-800 flex flex-col justify-between gap-6 divide-y-2 @md:divide-y-0 @md:flex-row @md:divide-x-2 divide-slate-200 dark:divide-slate-800",
        withPadding ? "p-4 @md:pb-6 @md:px-6" : ""
      )}
    >
      {children}
    </div>
  );
}
