import { cn } from "@/lib/utils";
import { InfoIcon } from "lucide-react";
import { ReactNode } from "react";

export default function InfoBlock({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 py-4 px-6 rounded-xl md:flex-row bg-slate-100 border-blue-300 dark:bg-slate-900 border-2 dark:border-blue-600 dark:text-white",
        className
      )}
    >
      <InfoIcon />
      <span>{children}</span>
    </div>
  );
}
