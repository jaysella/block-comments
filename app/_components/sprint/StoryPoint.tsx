import { GemIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { cn } from "@/lib/utils";

export default function StoryPoint({
  points,
  estimate = false,
  className,
}: {
  points: number;
  estimate?: boolean;
  className?: string;
}) {
  return (
    <Tooltip>
      <TooltipTrigger
        className={cn(
          "px-2 py-0.5 font-mono cursor-help rounded-md bg-slate-200 dark:bg-slate-800 text-sm font-bold flex flex-row gap-1 items-center",
          className
        )}
      >
        <GemIcon size={14} aria-label="story points" />
        {points}
      </TooltipTrigger>
      <TooltipContent className="not-sr-only">
        Story Points
        {estimate ? " (estimate)" : null}
      </TooltipContent>
    </Tooltip>
  );
}
