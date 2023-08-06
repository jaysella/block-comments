"use client";

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
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangleIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  GemIcon,
  dynamicIconImports,
} from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { PRODUCT_BACKLOG, Story } from "../product/sprint/data";
import { Checkbox } from "./ui/checkbox";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

export default function Sprint() {
  const MAX_STORIES = 3;
  const [stage, setStage] = useState(0);
  const [stories, setStories] = useState<Record<string, boolean>>(
    PRODUCT_BACKLOG.reduce((acc, p) => ({ ...acc, [p.id]: false }), {})
  );

  useEffect(() => {
    if (Object.values(stories).filter((s) => s).length === MAX_STORIES) {
      setStage(1);
    }
  }, [stories]);

  return (
    <>
      <Block>
        <BlockHeader>
          <BlockTitle title="Sprint Simulation" />

          <BlockControls>
            <span className="mr-2 text-sm uppercase">Proceed</span>

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
      </Block>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-[35%_auto]">
        <Block>
          <BlockHeader>
            <BlockTitle title="Action Items" />
          </BlockHeader>

          <BlockContent>
            <div className="space-y-12">
              {stage === 1 && (
                <ActionItem title="It's time for stage #2!">
                  <p>
                    You and your team have completed Product Backlog Refinement!
                    Each Story is now broken down into smaller, more manageable
                    tickets and prioritized appropriately.
                  </p>
                  <div
                    role="alert"
                    className="p-4 !mt-4 border border-amber-500 rounded-lg bg-amber-50 dark:bg-amber-950/50 dark:border-amber-900"
                  >
                    <AlertTriangleIcon
                      size={24}
                      className="mb-2 text-amber-500"
                    />
                    <strong>
                      Pay close attention to each ticket&lsquo;s Story Points!
                    </strong>{" "}
                    Your development team has informed you that their maximum
                    capacity for this Sprint is 15 Story Points.
                  </div>
                </ActionItem>
              )}

              <ActionItem title="Welcome to the first stage of this sprint!">
                <p>This stage is all about Product Backlog Refinement.</p>
                <p>
                  Select three (3) Stories from your Product Backlog to break
                  down into smaller, more manageable tickets for your Sprint
                  Backlog.
                </p>
              </ActionItem>
            </div>
          </BlockContent>
        </Block>

        {stage === 0 && (
          <ProductBacklog stories={stories} setStories={setStories} />
        )}

        {stage === 1 && <SprintBacklog />}
      </div>
    </>
  );
}

function ActionItem({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -15 }}
      animate={{ opacity: 1, translateY: 0 }}
      className="space-y-2"
    >
      <h3 className="font-bold">{title}</h3>
      {children}
    </motion.div>
  );
}

function ProductBacklog({
  stories,
  setStories,
}: {
  stories: Record<string, boolean>;
  setStories: (stories: Record<string, boolean>) => void;
}) {
  const MAX_STORIES = 3;

  function handleCheckChanged(storyId: string, checked: boolean) {
    let storyMap = { ...stories };
    storyMap[storyId] = checked;
    setStories(storyMap);
  }

  return (
    <Block>
      <BlockHeader>
        <BlockTitle title="Product Backlog" />

        <BlockControls>
          <span className="mr-2 text-sm uppercase">
            Selected: {Object.values(stories).filter((s) => s).length} of{" "}
            {MAX_STORIES}
          </span>

          <AnimatePresence>
            {Object.values(stories).filter((s) => s).length === MAX_STORIES && (
              <motion.div
                initial={{ opacity: 0, scale: 0, translateX: -15 }}
                animate={{ opacity: 1, scale: 1, translateX: 0 }}
                exit={{ opacity: 0, scale: 0, translateX: -15 }}
                className="p-2 bg-green-600 rounded-lg"
              >
                <CheckCircleIcon size={18} />
              </motion.div>
            )}
          </AnimatePresence>
        </BlockControls>
      </BlockHeader>

      <BlockContent>
        <div className="flex flex-col w-full gap-2">
          {PRODUCT_BACKLOG.map((p) => (
            <Story
              key={p.id}
              id={p.id}
              points={p.points}
              persona={p.persona}
              action={p.action}
              goal={p.goal}
              checked={stories[p.id]}
              disabled={
                !stories[p.id] &&
                Object.values(stories).filter((s) => s).length >= MAX_STORIES
              }
              onCheckedChange={(value) => handleCheckChanged(p.id, value)}
            />
          ))}
        </div>
      </BlockContent>
    </Block>
  );
}

function SprintPlanning({
  stories,
}: // setStories,
{
  stories: Record<string, boolean>;
  // setStories: (stories: Record<string, boolean>) => void;
}) {
  // const MAX_STORIES = 3;

  // function handleCheckChanged(storyId: string, checked: boolean) {
  //   let storyMap = { ...stories };
  //   storyMap[storyId] = checked;
  //   setStories(storyMap);
  // }

  return (
    <Block>
      <BlockHeader>
        <BlockTitle title="Sprint Backlog" />

        <BlockControls>
          <span className="mr-2 text-sm uppercase">
            {/* Selected: {Object.values(stories).filter((s) => s).length} of{" "}
            {MAX_STORIES} */}
          </span>

          {/* <AnimatePresence>
            {Object.values(stories).filter((s) => s).length === MAX_STORIES && (
              <motion.div
                initial={{ opacity: 0, scale: 0, translateX: -15 }}
                animate={{ opacity: 1, scale: 1, translateX: 0 }}
                exit={{ opacity: 0, scale: 0, translateX: -15 }}
                className="p-2 bg-green-600 rounded-lg"
              >
                <CheckCircleIcon size={18} />
              </motion.div>
            )}
          </AnimatePresence> */}
        </BlockControls>
      </BlockHeader>

      <BlockContent>
        <div className="flex flex-col w-full gap-2">
          {PRODUCT_BACKLOG.map((p) => (
            <Story
              key={p.id}
              id={p.id}
              persona={p.persona}
              action={p.action}
              goal={p.goal}
              // checked={stories[p.id]}
              // disabled={
              //   !stories[p.id] &&
              //   Object.values(stories).filter((s) => s).length >= MAX_STORIES
              // }
              // onCheckedChange={(value) => handleCheckChanged(p.id, value)}
            />
          ))}
        </div>
      </BlockContent>
    </Block>
  );
}

function SprintBacklog() {
  return (
    <Block>
      <BlockHeader>
        <BlockTitle title="Sprint Backlog" />
      </BlockHeader>

      <BlockContent>
        <div className="@container w-full">
          <div className="grid gap-5 @lg:grid-cols-3 @md:grid-cols-3 @sm:grid-cols-2">
            <KanbanColumn>
              <KanbanHeader>
                <KanbanLabel icon="circle" name="Not Started" color="slate" />
              </KanbanHeader>
              <KanbanContent>
                <KanbanCard title="Something"></KanbanCard>
                <KanbanCard title="Something"></KanbanCard>
                <KanbanCard title="Something"></KanbanCard>
              </KanbanContent>
            </KanbanColumn>

            <KanbanColumn>
              <KanbanHeader>
                <KanbanLabel
                  icon="circle-dot"
                  name="In Progress"
                  color="yellow"
                />
              </KanbanHeader>
              <KanbanContent>
                <KanbanCard title="Something"></KanbanCard>
                <KanbanCard title="Something"></KanbanCard>
              </KanbanContent>
            </KanbanColumn>

            <KanbanColumn>
              <KanbanHeader>
                <KanbanLabel
                  icon="check-circle-2"
                  name="Complete"
                  color="green"
                />
              </KanbanHeader>
              <KanbanContent>
                <KanbanCard title="Something"></KanbanCard>
              </KanbanContent>
            </KanbanColumn>
          </div>
        </div>

        {/* <div className="flex flex-col w-full gap-2">
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
        </div> */}
      </BlockContent>
    </Block>
  );
}

function KanbanColumn({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

function KanbanHeader({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-row items-center justify-between mb-2 mr-1">
      <div className="flex items-center gap-2">
        {children}
        <span className="text-sm text-slate-500">3</span>
      </div>
    </div>
  );
}

function KanbanContent({ children }: { children: ReactNode }) {
  return <div className="grid grid-rows-2 gap-2">{children}</div>;
}

function KanbanCard({ title }: { title: string }) {
  return (
    <div className="p-2 border rounded-md shadow-sm bg-slate-100 dark:bg-slate-950 border-slate-200 dark:border-slate-800">
      {/* <span className="flex flex-row items-center gap-1 px-2 py-1 text-[0.55rem] font-bold uppercase border rounded-md border-slate-200 text-slate-600 bg-slate-100 w-max">
        <CircleIcon size={10} /> Not Started
      </span> */}
      <h3 className="mb-2 text-sm text-slate-700">{title}</h3>
      <StoryPoint points={12} />
    </div>
  );
}

function KanbanLabel({
  icon,
  name,
  color,
  size = "default",
}: {
  icon?: keyof typeof dynamicIconImports;
  name: string;
  color: string;
  size?: "small" | "default";
}) {
  const Icon = dynamic(dynamicIconImports[icon || "circle"]);

  return (
    <h3
      className={cn(
        `flex flex-row items-center gap-1.5 px-2 py-1 font-bold uppercase border rounded-md border-${color}-200 text-${color}-600 bg-${color}-100 w-max dark:border-${color}-700 dark:text-${color}-400 dark:bg-${color}-900`,
        size === "small" ? "text-[0.55rem]" : "text-xs"
      )}
    >
      {icon ? <Icon size={size === "small" ? 10 : 16} /> : null}
      {name}
    </h3>
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
    <div className="-mx-3">
      <div className="flex flex-row w-full gap-3 p-3 border rounded-lg hover:bg-slate-100 border-slate-200 dark:hover:bg-slate-950 dark:border-slate-800">
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
              <span className="text-sm font-light uppercase">As a</span>{" "}
              <mark className="px-1 font-semibold text-blue-700 bg-blue-100 rounded-md">
                {persona}
              </mark>
              ,
            </p>
            <p>
              <span className="text-sm font-light uppercase">I want to</span>{" "}
              <mark className="px-1 font-semibold text-purple-700 bg-purple-100 rounded-md">
                {action}
              </mark>
            </p>
            <p>
              <span className="text-sm font-light uppercase">
                so that I can
              </span>{" "}
              <mark className="px-1 font-semibold text-green-700 bg-green-100 rounded-md">
                {goal}
              </mark>
              .
            </p>
          </div>

          <StoryPoint points={points} />
        </div>
      </div>
    </div>
  );
}

function StoryPoint({ points }: { points: number }) {
  return (
    <Tooltip>
      <TooltipTrigger className="px-2 py-0.5 cursor-help rounded-md bg-slate-200 dark:bg-slate-700 text-sm font-bold flex flex-row gap-1 items-center">
        <GemIcon size={14} aria-label="story points" />
        {points}
      </TooltipTrigger>
      <TooltipContent>Story Points</TooltipContent>
    </Tooltip>
  );
}
