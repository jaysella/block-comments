import { GemIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function StoryPoint({
  points,
  estimate = false,
}: {
  points: number;
  estimate?: boolean;
}) {
  return (
    <Tooltip>
      <TooltipTrigger className="px-2 py-0.5 font-mono cursor-help rounded-md bg-slate-200 dark:bg-slate-700 text-sm font-bold flex flex-row gap-1 items-center">
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
