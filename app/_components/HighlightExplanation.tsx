import { ReactNode } from "react";

export default function HighlightExplanation({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <h2 className="px-4 pt-4 pb-2 font-mono text-xs text-blue-600 uppercase bg-blue-50 dark:bg-blue-900 dark:text-blue-200">
        {title}
      </h2>
      <div className="p-4 text-sm">
        {children || "No explanation is available for this line."}
      </div>
    </>
  );
}
