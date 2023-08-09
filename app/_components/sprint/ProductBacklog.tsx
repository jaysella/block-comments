import {
  Block,
  BlockContent,
  BlockControls,
  BlockHeader,
  BlockTitle,
} from "@/app/_components/ui/block";
import { Checkbox } from "@/app/_components/ui/checkbox";
import { PRODUCT_BACKLOG, Story } from "@/app/product/sprint/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { CheckIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import StoryPoint from "./StoryPoint";

export default function ProductBacklog({
  maxStories,
  selectedStories,
  setSelectedStories,
}: {
  maxStories: number;
  selectedStories: Story[];
  setSelectedStories: Dispatch<SetStateAction<Story[]>>;
}) {
  function handleCheckChanged(story: Story, checked: boolean) {
    setSelectedStories((prevSelected) => {
      if (checked) {
        return [...prevSelected, story];
      } else {
        return prevSelected.filter((item) => item.id !== story.id);
      }
    });
  }

  return (
    <Block>
      <BlockHeader>
        <BlockTitle title="Product Backlog" />

        <BlockControls>
          <span className="mr-2 text-sm uppercase ">
            Selected: {selectedStories.length} of {maxStories}
          </span>

          {selectedStories.length === maxStories && (
            <motion.div
              initial={{ scale: 2 }}
              animate={{ scale: 1 }}
              className="p-2 text-green-600"
            >
              <CheckIcon size={18} />
            </motion.div>
          )}
        </BlockControls>
      </BlockHeader>

      <BlockContent withPadding={false}>
        <div className="flex flex-col w-full gap-2 p-2 @md:p-3">
          {PRODUCT_BACKLOG.map((story) => (
            <Story
              key={story.id}
              id={story.id}
              points={story.points}
              persona={story.persona}
              action={story.action}
              goal={story.goal}
              checked={selectedStories.some((item) => item.id === story.id)}
              disabled={
                !selectedStories.includes(story) &&
                selectedStories.length >= maxStories
              }
              onCheckedChange={(value) => handleCheckChanged(story, value)}
            />
          ))}
        </div>
      </BlockContent>
    </Block>
  );
}

function Story({
  id,
  points,
  persona,
  action,
  goal,
  checked = false,
  disabled = false,
  onCheckedChange,
}: Story & {
  checked?: boolean;
  disabled?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}) {
  return (
    <div
      className={cn(
        "flex flex-row w-full gap-3 p-3 border rounded-lg hover:bg-slate-100 dark:hover:bg-slate-950 group border-slate-200 dark:border-slate-800",
        checked
          ? "border-slate-700 dark:border-slate-300"
          : "border-slate-200 dark:border-slate-800"
      )}
    >
      <Checkbox
        id={id}
        checked={checked}
        disabled={disabled}
        onCheckedChange={(value) => {
          if (onCheckedChange && typeof value === "boolean") {
            onCheckedChange(value);
          }
        }}
      />
      <label htmlFor={id} className="sr-only">
        As a {persona}, I want to {action} so that I can {goal}.
      </label>

      <div className="flex flex-row items-start justify-between w-full gap-4 not-sr-only">
        <div className="flex flex-col gap-2">
          <p>
            <span className="text-sm font-bold uppercase">As a</span>{" "}
            <mark className="bg-transparent dark:text-slate-100 group-hover:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 dark:group-hover:text-blue-100 -mx-0.5 px-0.5 rounded-sm">
              {persona}
            </mark>
            ,
          </p>
          <p>
            <span className="text-sm font-bold uppercase">I want to</span>{" "}
            <mark className="bg-transparent dark:text-slate-100 group-hover:text-purple-800 group-hover:bg-purple-200 dark:group-hover:bg-purple-800 dark:group-hover:text-purple-100 -mx-0.5 px-0.5 rounded-sm">
              {action}
            </mark>
          </p>
          <p>
            <span className="text-sm font-bold uppercase">so that I can</span>{" "}
            <mark className="bg-transparent dark:text-slate-100 group-hover:text-green-800 group-hover:bg-green-200 dark:group-hover:bg-green-800 dark:group-hover:text-green-100 -mx-0.5 px-0.5 rounded-sm">
              {goal}
            </mark>
            .
          </p>
        </div>

        <StoryPoint points={points} estimate />
      </div>
    </div>
  );
}
