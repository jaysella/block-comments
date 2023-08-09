import { cn } from "@/lib/utils";

export function CodeSegment({
  className,
  children,
}: {
  className?: string;
  children: string;
}) {
  return (
    <code
      className={cn(
        "inline-block break-all py-0.25 px-1.5 rounded-md bg-slate-200 dark:bg-slate-700 dark:text-slate-200 text-left",
        className
      )}
    >
      {children}
    </code>
  );
}
