"use client";

import Files from "@/app/_components/Files";
import { CommitHistory } from "@/app/_components/ui/commit-history";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import { Separator } from "@/app/_components/ui/separator";
import { TooltipContent } from "@/app/_components/ui/tooltip";
import { Tooltip, TooltipTrigger } from "@radix-ui/react-tooltip";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  GitBranchIcon,
  GitCommitIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { COMMITS as commits } from "../git/visualization/data";
import { Block, BlockControls, BlockHeader, BlockTitle } from "./ui/block";

export default function GitVisualization() {
  const DEFAULT_BRANCH = "main";
  const [branches, setBranches] = useState<{ [branch: string]: Set<string> }>(
    {}
  );
  const [branchCommits, setBranchCommits] = useState(
    commits.filter(({ branches }) => branches.includes(DEFAULT_BRANCH))
  );
  const [step, setStep] = useState(branchCommits.length - 1);
  const [currentCommit, setCurrentCommit] = useState(
    commits[commits.length - 1]
  );
  const [currentBranch, setCurrentBranch] = useState(DEFAULT_BRANCH);

  useEffect(() => {
    commits.forEach((c) => {
      const { hash, branches } = c;

      branches.forEach((branchName: string) => {
        setBranches((prevState) => {
          const newState = { ...prevState };

          if (!newState[branchName]) {
            newState[branchName] = new Set();
          }

          newState[branchName].add(hash);

          return newState;
        });
      });
    });
  }, []);

  useEffect(() => {
    setBranchCommits(commits.filter((c) => c.branches.includes(currentBranch)));
  }, [currentBranch]);

  useEffect(() => {
    setStep(commits.indexOf(commits.filter((c) => c === currentCommit)[0]));
  }, [currentCommit]);

  useEffect(() => {
    setCurrentCommit(branchCommits[Math.min(branchCommits.length - 1, step)]);
  }, [branchCommits, step, currentBranch]);

  return (
    <>
      <Block>
        <BlockHeader>
          <BlockTitle title="Git Visualization" />

          <BlockControls>
            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center text-sm border rounded-lg border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
                    <code className="flex items-center gap-2 px-2 py-1">
                      <GitBranchIcon size={18} aria-label="branch" />{" "}
                      {currentBranch}
                    </code>
                    <Separator orientation="vertical" className="h-[18px]" />
                    <button className="my-0.5 mx-1 p-0.5 rounded-md shadow-none hover:bg-slate-200 dark:hover:bg-slate-700">
                      <ChevronDownIcon className="w-4 h-4 text-secondary-foreground" />
                    </button>
                  </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-[200px]" forceMount>
                  <DropdownMenuLabel>Branches</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {Object.keys(branches).map((b) => (
                    <DropdownMenuCheckboxItem
                      key={b}
                      checked={currentBranch === b}
                      onCheckedChange={() => setCurrentBranch(b)}
                    >
                      {b}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="mr-2 text-sm">
                <code className="flex items-center gap-2 px-2 py-1 border rounded-lg border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
                  <GitCommitIcon size={18} aria-label="commit" />{" "}
                  {branchCommits[Math.min(branchCommits.length - 1, step)].hash}
                </code>
              </div>
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
                disabled={step === branchCommits.length - 1}
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
        <Files
          files={currentCommit.files}
          defaultFile={currentCommit.files[currentCommit.files.length - 1]}
        />
        <CommitHistory
          commits={branchCommits.filter((_, i) => i <= step)}
          setCurrentCommit={setCurrentCommit}
        />
      </div>
    </>
  );
}
