"use client";

import { AnimatedList, AnimatedListItem } from "@/app/_components/AnimatedList";
import { CodeSegment } from "@/app/_components/ui/code-segment";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_components/ui/popover";
import { Slider } from "@/app/_components/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/app/_components/ui/tooltip";
import { useThemeDetector } from "@/app/_components/ui/use-theme-detector";
import { cn, findSubstrings, groupSubstrings } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  PauseIcon,
  PlayIcon,
  RotateCcwIcon,
  Settings2Icon,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

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

  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sequence, setSequence] = useState(initialSequence);
  const [k, setK] = useState<number>(
    kTarget > sequence.length ? sequence.length : kTarget
  );
  const [kmersGroupSort, setKmersGroupSort] = useState("observation");

  const totalSteps = sequence.length - k;
  const maxSequenceLength = 16;

  const sequenceVariants = {
    highlighted: {
      backgroundColor: darkMode ? "#1e3a8a" : "#dbeafe",
      borderColor: darkMode ? "#1d4ed8" : "#93c5fd",
      transition: { duration: 0.25 },
    },
    normal: {
      backgroundColor: darkMode ? "#0f172a" : "#f8fafc",
      borderColor: darkMode ? "#0f172a" : "#f8fafc",
      transition: { duration: 0.25 },
    },
  };

  useEffect(() => {
    let interval: NodeJS.Timer;

    if (isPlaying) {
      interval = setInterval(() => {
        setStep((prevStep) => prevStep + 1);
      }, 750);

      if (step === totalSteps) {
        setIsPlaying(false);
      }
    }

    // Clean up the interval when the component is unmounted or when the interval is stopped
    return () => clearInterval(interval);
  }, [isPlaying, step, totalSteps]);

  useEffect(() => {
    if (k > sequence.length) {
      setK(sequence.length);
    }
  }, [sequence, k]);

  return (
    <div className="@container border-2 rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50 text-slate-700 dark:text-slate-200 dark:bg-slate-900">
      <div className="flex items-center justify-between w-full px-4 py-2 border-b-2 @md:pl-8 border-b-slate-200 dark:border-b-slate-800">
        <h2 className="font-bold uppercase">
          K-Mers {playground ? "Playground" : "Visualization"}
        </h2>

        <div className="flex items-center">
          {!hideSteps && (
            <div
              className="mr-2 text-sm uppercase"
              aria-description={`Step ${step} of ${totalSteps}`}
            >
              <span className="@sm:hidden">
                {step}/{totalSteps}
              </span>
              <span className="hidden @sm:inline">
                Step {step} of {totalSteps}
              </span>
            </div>
          )}

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
              disabled={totalSteps === step}
              onClick={() => setStep(step + 1)}
            >
              <ArrowRightIcon size={18} />
            </TooltipTrigger>
            <TooltipContent>
              <p>Next</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger
              className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 disabled:cursor-not-allowed disabled:hover:bg-slate-100 disabled:dark:hover:bg-slate-800"
              onClick={() => {
                if (!isPlaying && step === totalSteps) {
                  setStep(0);
                }
                setIsPlaying(!isPlaying);
              }}
            >
              {isPlaying ? (
                <PauseIcon size={18} />
              ) : !isPlaying && step === totalSteps ? (
                <RotateCcwIcon size={18} />
              ) : (
                <PlayIcon size={18} />
              )}
            </TooltipTrigger>
            <TooltipContent>
              <p>{isPlaying ? "Stop" : "Play"}</p>
            </TooltipContent>
          </Tooltip>

          {playground && (
            <Popover>
              <PopoverTrigger className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 disabled:cursor-not-allowed disabled:hover:bg-slate-100 disabled:dark:hover:bg-slate-800">
                <Settings2Icon size={18} />
              </PopoverTrigger>

              <PopoverContent align="end" className="w-full px-6 pt-4 pb-6">
                <div className="flex flex-col gap-4">
                  <div className="grid gap-1">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="sequence">Sequence</Label>
                      <span
                        className={cn(
                          "w-8 rounded-md border border-transparent px-2 py-0.5 text-right text-sm hover:border-slate-200 dark:hover:border-slate-800",
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

                  <div className="grid gap-2">
                    <Label htmlFor="group-sort">Group sort</Label>
                    <Select
                      defaultValue={kmersGroupSort}
                      onValueChange={(value) => setKmersGroupSort(value)}
                    >
                      <SelectTrigger aria-labelledby="group-sort">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="observation">
                          Observation <small>(1{"->"}9)</small>
                        </SelectItem>
                        <SelectItem value="alpha">
                          Alphabetical <small>(A{"->"}Z)</small>
                        </SelectItem>
                        <SelectItem value="prevalence">
                          Prevalence <small>(9{"->"}1)</small>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="k-value">Window size (k-value)</Label>
                    <span
                      className="w-8 rounded-md border border-transparent px-2 py-0.5 text-right text-sm hover:border-slate-200 dark:hover:border-slate-800"
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

                  <div className="flex items-center justify-between">
                    <Label htmlFor="step">Step</Label>
                    <span
                      className="w-8 rounded-md border border-transparent px-2 py-0.5 text-right text-sm hover:border-slate-200 dark:hover:border-slate-800"
                      aria-hidden="true"
                    >
                      {step}
                    </span>
                  </div>
                  <Slider
                    id="step"
                    min={0}
                    max={totalSteps}
                    step={1}
                    value={[step]}
                    onValueChange={(value) => setStep(value[0])}
                    className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                  />
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>

      <div className="flex flex-col justify-between gap-6 p-4 divide-y-2 @md:divide-y-0 @md:flex-row @md:divide-x-2 @md:pb-6 @md:px-8 divide-slate-200 dark:divide-slate-800">
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

          <p className="mt-4">
            Current {k}-mer:{" "}
            <CodeSegment>{sequence.substring(step, step + k)}</CodeSegment>
          </p>
          <p className="mt-1">
            Total {k}-mers identified: {step + 1}
          </p>
        </div>

        <div className="flex flex-col pt-6 gap-y-4 sm:flex-row @md:divide-x-2 divide-slate-200 dark:divide-slate-800 gap-x-6 @md:pt-0 @sm:justify-between">
          <div className="@md:px-4">
            <h3 className="font-bold uppercase">{k}-mers Identified</h3>
            <AnimatedList>
              {findSubstrings(sequence, k)
                .filter((_, i) => i <= step)
                .map((s, i) => (
                  <AnimatedListItem key={i}>{s}</AnimatedListItem>
                ))}
            </AnimatedList>
          </div>

          <div className="@sm:px-4">
            <h3 className="font-bold uppercase">{k}-mers, Grouped</h3>
            <AnimatedList>
              {groupSubstrings(
                findSubstrings(sequence, k).filter((_, i) => i <= step)
              )
                .sort((a, b) => {
                  const textA = a.string.toLowerCase();
                  const textB = b.string.toLowerCase();

                  switch (kmersGroupSort) {
                    case "alpha":
                      return textA < textB ? -1 : textA > textB ? 1 : 0;
                    case "prevalence":
                      return a.count < b.count ? 1 : a.count > b.count ? -1 : 0;
                    default:
                      return 0;
                  }
                })
                .map((s, i) => (
                  <AnimatedListItem key={i}>
                    {s.string} <span className="text-sm">x{s.count}</span>
                  </AnimatedListItem>
                ))}
            </AnimatedList>
          </div>
        </div>
      </div>
    </div>
  );
}
