"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/_components/ui/tooltip";
import { useThemeDetector } from "@/app/_components/ui/use-theme-detector";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon, Settings2Icon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

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

export default function KMersPlayground({
  sequence: initialSequence,
  k: initialK = 3,
  hideSteps = false,
  playground = true,
}: {
  sequence: string;
  k?: number;
  hideSteps?: boolean;
  playground?: boolean;
}) {
  const darkMode = useThemeDetector();
  const searchParams = useSearchParams();

  // determine target window size
  let kTarget: number = initialK ?? 3;
  let kParam = searchParams.get("k");
  if (kParam && parseInt(kParam)) {
    kTarget = parseInt(kParam);
  }

  const [step, setStep] = useState<number>(0);
  const [sequence, setSequence] = useState<string>(initialSequence);
  const [k, setK] = useState<number>(
    kTarget > sequence.length ? sequence.length : kTarget
  );
  const totalSteps = sequence.length - k;
  const maxSequenceLength = 16;

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

  useEffect(() => {
    if (k > sequence.length) {
      setK(sequence.length);
    }
  }, [sequence, k]);

  return (
    <TooltipProvider>
      <div className="border-2 rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 text-slate-700 dark:text-slate-200 dark:bg-slate-900">
        <div className="flex items-center justify-between w-full py-2 pl-4 pr-4 border-b-2 md:pl-8 md:pr-6 border-b-slate-200 dark:border-b-slate-800">
          <h2 className="font-bold uppercase">
            K-Mers {playground ? "Playground" : "Visualization"}
          </h2>

          <div className="flex items-center -mr-2">
            {!hideSteps && (
              <span className="mr-2 text-sm uppercase">
                <span className="hidden sm:inline">Step </span>
                {step} of {totalSteps}
              </span>
            )}

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

            {playground && (
              <Popover>
                <PopoverTrigger className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 disabled:cursor-not-allowed disabled:hover:bg-slate-100 disabled:dark:hover:bg-slate-800">
                  <Settings2Icon size={18} />
                </PopoverTrigger>

                <PopoverContent align="end" className="w-full px-6 pt-4 pb-6">
                  <div className="flex flex-col gap-4">
                    <div className="grid gap-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="sequence">Sequence</Label>
                        <span
                          className={cn(
                            "w-10 rounded-md border border-transparent px-2 py-0.5 text-right text-sm hover:border-slate-200 dark:hover:border-slate-800",
                            sequence.length >
                              maxSequenceLength - maxSequenceLength / 4
                              ? "text-orange-400"
                              : "",
                            sequence.length > maxSequenceLength
                              ? "text-red-700"
                              : ""
                          )}
                          aria-label="Sequence length"
                        >
                          {sequence.length}
                        </span>
                      </div>
                      <Input
                        id="sequence"
                        type="text"
                        value={sequence}
                        maxLength={maxSequenceLength}
                        onChange={(value) =>
                          setSequence(value.target.value.toUpperCase())
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <Label htmlFor="k-value">k-value</Label>
                      <span
                        className="w-10 rounded-md border border-transparent px-2 py-0.5 text-right text-sm hover:border-slate-200 dark:hover:border-slate-800"
                        aria-hidden="true"
                      >
                        {k}
                      </span>
                    </div>
                    <Slider
                      id="k-value"
                      min={1}
                      max={sequence.length}
                      step={1}
                      value={[k]}
                      onValueChange={(value) => setK(value[0])}
                      className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                    />
                  </div>
                </PopoverContent>
              </Popover>
            )}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6 p-4 divide-y-2 md:divide-y-0 md:flex-row md:divide-x-2 md:pb-6 md:px-8 divide-slate-200 dark:divide-slate-800">
          <div>
            <motion.div
              className="-ml-2 font-mono text-5xl font-bold text-black dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {sequence.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={sequenceVariants.normal}
                  variants={sequenceVariants}
                  animate={
                    index >= step && index < step + k ? "highlighted" : "normal"
                  }
                  className={cn(
                    "inline-block p-2 border-2 border-slate-50 dark:border-slate-900",
                    index > step && index < step + k ? "border-l-0" : ""
                  )}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>

            <div className="mt-4">
              Current {k}-mer:{" "}
              <code className="px-2 py-1 font-bold text-black rounded-lg dark:text-white bg-slate-200 dark:bg-slate-700">
                {sequence.substring(step, step + k)}
              </code>
            </div>
          </div>

          <div className="flex flex-col pt-6 gap-y-4 sm:flex-row md:divide-x-2 divide-slate-200 dark:divide-slate-800 gap-x-6 md:pt-0 sm:justify-between">
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
