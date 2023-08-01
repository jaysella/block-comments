"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/_components/ui/tooltip";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useThemeDetector } from "@/app/_components/ui/use-theme-detector";
import { useSearchParams } from "next/navigation";

function findSubstrings(sequence: string, k: number): string[] {
  const res: string[] = [];

  for (let i = 0; i <= sequence.length - k; i++) {
    const substring = sequence.slice(i, i + k);
    res.push(substring);
  }

  return res;
}

function groupSubstrings(
  substrings: string[]
): { string: string; count: number }[] {
  const stringCountMap: { [key: string]: number } = {};
  substrings.forEach((str) => {
    stringCountMap[str] = (stringCountMap[str] || 0) + 1;
  });

  const groupedStrings: { string: string; count: number }[] = [];
  for (const [string, count] of Object.entries(stringCountMap)) {
    groupedStrings.push({ string, count });
  }

  return groupedStrings;
}

export default function KMersPlayground({ sequence }: { sequence: string }) {
  const darkMode = useThemeDetector();
  const searchParams = useSearchParams();
  const kTarget = parseInt(searchParams.get("k") || "3");

  const [step, setStep] = useState<number>(0);
  const [k, setK] = useState<number>(
    kTarget > sequence.length ? sequence.length : kTarget
  );
  const totalSteps = sequence.length - k;

  const sequenceVariants = {
    highlighted: {
      backgroundColor: darkMode ? "#1e3a8a" : "#dbeafe",
      borderColor: darkMode ? "#1d4ed8" : "#93c5fd",
    },
    normal: {
      backgroundColor: "transparent",
      borderColor: darkMode ? "#0f172a" : "#f8fafc",
    },
  };

  return (
    <TooltipProvider>
      <div className="border-2 rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 text-slate-700 dark:text-slate-200 dark:bg-slate-900">
        <div className="flex items-center justify-between w-full py-2 pl-4 pr-4 border-b-2 md:pl-8 md:pr-6 border-b-slate-200 dark:border-b-slate-800">
          <h2 className="font-bold uppercase">{k}-mers Playground</h2>

          <div className="flex items-center -mr-2">
            <span className="mr-2 text-sm uppercase">
              Step {step} of {totalSteps}
            </span>

            <Tooltip>
              <TooltipTrigger
                className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 disabled:cursor-not-allowed disabled:hover:bg-slate-100 disabled:dark:hover:bg-slate-800"
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
                className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 disabled:cursor-not-allowed disabled:hover:bg-slate-100 disabled:dark:hover:bg-slate-800"
                disabled={totalSteps === step}
                onClick={() => setStep(step + 1)}
              >
                <ArrowRightIcon size={18} />
              </TooltipTrigger>
              <TooltipContent>
                <p>Next</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6 px-4 py-4 divide-y-2 md:divide-y-0 md:flex-row md:divide-x-2 md:pb-6 md:px-8 divide-slate-200 dark:divide-slate-800">
          <div className="w-max">
            <div className="-ml-2 font-mono text-5xl font-bold text-black dark:text-white">
              {sequence.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={sequenceVariants.normal}
                  variants={sequenceVariants}
                  className={cn(
                    "inline-block p-2 border-2 border-slate-50 dark:border-slate-900",
                    index > step && index < step + k ? "border-l-0" : ""
                  )}
                  animate={
                    index >= step && index < step + k ? "highlighted" : "normal"
                  }
                >
                  {char}
                </motion.span>
              ))}
            </div>

            <div className="mt-4">
              Current {k}-mer:{" "}
              <code className="px-2 py-1 font-bold text-black rounded-lg dark:text-white bg-slate-200 dark:bg-slate-700">
                {sequence.substring(step, step + k)}
              </code>
            </div>
          </div>

          <div className="flex flex-col pt-6 gap-y-4 sm:flex-row md:divide-x-2 gap-x-6 md:pt-0 sm:justify-between">
            <div className="md:px-4">
              <h3 className="font-bold uppercase">{k}-mers Identified</h3>
              <ul>
                <AnimatePresence>
                  {findSubstrings(sequence, k)
                    .filter((_, i) => i <= step)
                    .map((s, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {s}
                      </motion.li>
                    ))}
                </AnimatePresence>
              </ul>
            </div>

            <div className="sm:px-4">
              <h3 className="font-bold uppercase">{k}-mers, Grouped</h3>
              <ul>
                <AnimatePresence>
                  {groupSubstrings(
                    findSubstrings(sequence, k).filter((_, i) => i <= step)
                  ).map((s, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {s.string} <span className="text-sm">x{s.count}</span>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
