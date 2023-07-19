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
        "flex flex-col gap-4 py-4 px-6 rounded-xl md:flex-row bg-blue-100 dark:bg-slate-800 dark:text-white",
        className
      )}
    >
      <InfoIcon />
      <span>{children}</span>
    </div>
  );
}
