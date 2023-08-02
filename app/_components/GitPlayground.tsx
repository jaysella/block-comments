"use client";
import Highlight from "@/app/_components/Highlight";
import { CommitHistory } from "@/app/_components/ui/commit-history";
import { processDiff, removeDiffChars } from "@/lib/utils";
import { useState } from "react";
import { Block, BlockControls, BlockHeader, BlockTitle } from "./ui/block";
import { Tooltip, TooltipTrigger } from "@radix-ui/react-tooltip";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  GitBranchIcon,
  GitCommitIcon,
} from "lucide-react";
import { TooltipContent } from "./ui/tooltip";
import { COMMITS as commits } from "../git/data";
import { CodeSegment } from "./ui/code-segment";

export default function GitPlayground() {
  const [step, setStep] = useState(0);

  return (
    <>
      <Block>
        <BlockHeader>
          <BlockTitle title="Git Playground" />

          <BlockControls>
            <div className="mr-2 text-sm uppercase">
              <code className="flex items-center gap-2 px-2 py-1 text-sm rounded-lg bg-slate-200">
                <GitBranchIcon size={18} aria-label="branch" /> main
              </code>
            </div>

            <div className="mr-2 text-sm uppercase">
              <code className="flex items-center gap-2 px-2 py-1 text-sm rounded-lg bg-slate-200">
                <GitCommitIcon size={18} aria-label="commit" />{" "}
                {commits[step].hash}
              </code>
            </div>

            <Tooltip>
              <TooltipTrigger
                className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 disabled:cursor-not-allowed disabled:hover:bg-slate-100 disabled:dark:hover:bg-slate-800 disabled:text-slate-400 dark:disabled:text-slate-600"
                disabled={step === 0}
                onClick={() => setStep(step - 1)}
              >
                <ArrowLeftIcon size={18} />
              </TooltipTrigger>
              <TooltipContent>
                <p>Previous</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger
                className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 disabled:cursor-not-allowed disabled:hover:bg-slate-100 disabled:dark:hover:bg-slate-800 disabled:text-slate-400 dark:disabled:text-slate-600"
                disabled={step === commits.length - 1}
                onClick={() => setStep(step + 1)}
              >
                <ArrowRightIcon size={18} />
              </TooltipTrigger>
              <TooltipContent>
                <p>Next</p>
              </TooltipContent>
            </Tooltip>
          </BlockControls>
        </BlockHeader>
      </Block>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Highlight
          title="README.md"
          language="markdown"
          highlights={processDiff(commits[step].diff)}
        >
          {removeDiffChars(commits[step].diff)}
        </Highlight>

        <CommitHistory commits={commits.filter((_, i) => i <= step)} />
      </div>
    </>
  );
}
