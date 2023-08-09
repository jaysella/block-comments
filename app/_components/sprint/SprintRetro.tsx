import {
  Block,
  BlockContent,
  BlockControls,
  BlockHeader,
  BlockTitle,
} from "@/app/_components/ui/block";
import { Problem } from "@/app/product/sprint/data";
import { cn } from "@/lib/utils";
import { BadgeAlertIcon, CheckIcon } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { Dispatch, SetStateAction } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { motion } from "framer-motion";

export default function SprintRetro({
  maxImprovements,
  problems,
  selectedImprovements,
  setSelectedImprovements,
}: {
  maxImprovements: number;
  problems: Problem[];
  selectedImprovements: Problem[];
  setSelectedImprovements: Dispatch<SetStateAction<Problem[]>>;
}) {
  function handleCheckChanged(problem: Problem, checked: boolean) {
    setSelectedImprovements((prevSelected) => {
      if (checked) {
        return [...prevSelected, problem];
      } else {
        return prevSelected.filter((item) => item.title !== problem.title);
      }
    });
  }

  return (
    <Block>
      <BlockHeader>
        <BlockTitle title="Sprint Retro" />

        <BlockControls>
          <div className="flex flex-row items-center gap-2 mr-2 text-sm uppercase">
            <Tooltip>
              <TooltipTrigger>
                {selectedImprovements.length >= 1 &&
                  selectedImprovements.length <= maxImprovements && (
                    <motion.div
                      initial={{ scale: 2 }}
                      animate={{ scale: 1 }}
                      className="p-2 text-green-600"
                    >
                      <CheckIcon size={18} />
                    </motion.div>
                  )}
              </TooltipTrigger>
              <TooltipContent>
                <p>Task Complete</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </BlockControls>
      </BlockHeader>

      <BlockContent withPadding={false}>
        <div className="flex flex-col w-full gap-4 p-2 @md:p-3">
          {problems.map((problem, i) => (
            <Problem
              key={i}
              title={problem.title}
              description={problem.description}
              improvement={problem.improvement}
              checked={selectedImprovements.some(
                (item) => item.title === problem.title
              )}
              disabled={
                !selectedImprovements.includes(problem) &&
                selectedImprovements.length >= maxImprovements
              }
              onCheckedChange={(value) => handleCheckChanged(problem, value)}
            />
          ))}
        </div>
      </BlockContent>
    </Block>
  );
}

function Problem({
  title,
  description,
  improvement,
  checked = false,
  disabled = false,
  onCheckedChange,
}: Problem & {
  checked?: boolean;
  disabled?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}) {
  return (
    <div className="p-3 border rounded-lg first-of-type:mt-0 border-slate-200 bg-slate-100 dark:bg-slate-950 dark:border-slate-800">
      <div className="flex flex-row w-full gap-3 px-1">
        <BadgeAlertIcon className="w-8 h-8 shrink-0" />
        <div>
          <h3 className="font-bold">{title}</h3>
          <p>{description}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <div
          className={cn(
            "flex flex-row w-full gap-3 p-3 border rounded-lg hover:bg-slate-100 dark:hover:bg-slate-950",
            checked
              ? "border-slate-700 dark:border-slate-300"
              : "border-slate-200 dark:border-slate-800"
          )}
        >
          <Checkbox
            id={title}
            checked={checked}
            disabled={disabled}
            onCheckedChange={(value) => {
              if (onCheckedChange && typeof value === "boolean") {
                onCheckedChange(value);
              }
            }}
          />

          <div className="flex flex-row items-start justify-between w-full gap-4">
            <label htmlFor={title}>{improvement}</label>
          </div>
        </div>
      </div>
    </div>
  );
}
