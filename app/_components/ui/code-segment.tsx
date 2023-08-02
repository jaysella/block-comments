export function CodeSegment({ children }: { children: string }) {
  return (
    <code className="inline-block break-all py-0.25 px-1.5 rounded-md bg-slate-200 dark:bg-slate-700 dark:text-slate-200">
      {children}
    </code>
  );
}
