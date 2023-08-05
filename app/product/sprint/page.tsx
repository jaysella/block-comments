import {
  Block,
  BlockContent,
  BlockControls,
  BlockHeader,
  BlockTitle,
} from "@/app/_components/ui/block";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/app/_components/ui/tooltip";
import {
  ArrowRightIcon,
  CheckCircle2Icon,
  CircleDotIcon,
  CircleIcon,
  PalmtreeIcon,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Management: Spring Simulation",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <Block>
        <BlockHeader>
          <BlockTitle title="Sprint Simulation" />

          <BlockControls>
            <span className="mr-2 text-sm uppercase">Day 2 of 6</span>

            <Tooltip>
              <TooltipTrigger
                className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 disabled:cursor-not-allowed disabled:hover:bg-slate-100 disabled:dark:hover:bg-slate-800 disabled:text-slate-400 dark:disabled:text-slate-600"
                // disabled={step === branchCommits.length - 1}
                // onClick={() => setStep(step + 1)}
              >
                <ArrowRightIcon size={18} />
              </TooltipTrigger>
              <TooltipContent>
                <p>Next</p>
              </TooltipContent>
            </Tooltip>
          </BlockControls>
        </BlockHeader>

        <BlockContent>
          <div className="prose">
            <p>
              It's day 2 of this sprint. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Adipisci aliquid id est quo nobis iure.
            </p>
          </div>
        </BlockContent>
      </Block>

      <div className="grid grid-cols-2 gap-4">
        <Block>
          <BlockHeader>
            <BlockTitle title="Product Backlog" />
          </BlockHeader>

          <BlockContent>
            <div className="flex flex-col w-full gap-2">
              <div className="flex flex-col w-full gap-1 p-4 bg-white border rounded-lg border-slate-200">
                <span className="text-lg font-bold">Task</span>
              </div>
              <div className="flex flex-col w-full gap-1 p-4 bg-white border rounded-lg border-slate-200">
                <span className="text-lg font-bold">Task</span>
              </div>
            </div>
          </BlockContent>
        </Block>

        <Block>
          <BlockHeader>
            <BlockTitle title="Sprint Backlog" />
          </BlockHeader>

          <BlockContent>
            <div className="flex flex-col w-full gap-2">
              <div className="flex flex-col w-full gap-1 p-4 bg-white border rounded-lg border-slate-200">
                <span className="flex flex-row items-center gap-1.5 px-2 py-1 text-xs font-bold text-green-600 uppercase bg-green-100 border border-green-200 rounded-lg w-max">
                  <CheckCircle2Icon size={18} /> Complete
                </span>
                <span className="text-lg font-bold">Task</span>
              </div>
              <div className="flex flex-col w-full gap-1 p-4 bg-white border rounded-lg border-slate-200">
                <span className="flex flex-row items-center gap-1.5 px-2 py-1 text-xs font-bold uppercase border rounded-lg border-yellow-200 text-yellow-600 bg-yellow-100 w-max">
                  <CircleDotIcon size={18} /> In Progress
                </span>
                <span className="text-lg font-bold">Task</span>
              </div>
              <div className="flex flex-col w-full gap-1 p-4 bg-white border rounded-lg border-slate-200">
                <span className="flex flex-row items-center gap-1.5 px-2 py-1 text-xs font-bold uppercase border rounded-lg border-slate-200 text-slate-600 bg-slate-100 w-max">
                  <CircleIcon size={18} /> Not Started
                </span>
                <span className="text-lg font-bold">Task</span>
              </div>
              <div className="flex flex-col w-full gap-1 p-4 bg-white border rounded-lg border-slate-200">
                <span className="flex flex-row items-center gap-1.5 px-2 py-1 text-xs font-bold uppercase border rounded-lg border-slate-200 text-slate-600 bg-slate-100 w-max">
                  <CircleIcon size={18} /> Not Started
                </span>
                <span className="text-lg font-bold">Task</span>
              </div>
            </div>
          </BlockContent>
        </Block>
      </div>
    </div>
  );
}
