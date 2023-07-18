import { ReactNode } from "react";

export default function HighlightExplainer({
  line,
  children,
}: {
  line: number;
  children: ReactNode;
}) {
  return (
    <>
      <h2 className="px-4 pt-4 pb-2 font-mono text-xs text-blue-600 uppercase bg-blue-50">
        Line {line}
      </h2>
      <p className="p-4 text-sm">{children || "👋"}</p>
    </>
  );
}

export function CodeSegment({ children }: { children: string }) {
  return (
    <code className="py-0.5 px-1 rounded-md bg-slate-100">{children}</code>
  );
}
