import { ReactNode } from "react";

export function Block({ children }: { children: ReactNode }) {
  return (
    <div className="@container border-2 rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 text-slate-700 dark:text-slate-200 dark:bg-slate-900">
      {children}
    </div>
  );
}

export function BlockHeader({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-between w-full px-4 py-2 border-b-2 @md:pl-8 border-b-slate-200 dark:border-b-slate-800 min-h-[3.25rem]">
      {children}
    </div>
  );
}

export function BlockTitle({ title }: { title: string }) {
  return <h2 className="font-bold uppercase">{title}</h2>;
}

export function BlockContent({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col justify-between gap-6 p-4 divide-y-2 @md:divide-y-0 @md:flex-row @md:divide-x-2 @md:pb-6 @md:px-8 divide-slate-200 dark:divide-slate-800">
      {children}
    </div>
  );
}
