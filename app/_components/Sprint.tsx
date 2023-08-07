/* eslint-disable react/no-unescaped-entities */
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
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  AlertTriangleIcon,
  ArrowRightIcon,
  CheckIcon,
  Contact2Icon,
  GemIcon,
  UserSquare2Icon,
} from "lucide-react";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import {
  ACTION_ITEMS,
  PRODUCT_BACKLOG,
  SPRINT_BACKLOG,
  Story,
  Ticket,
} from "../product/sprint/data";
import {
  KanbanCard,
  KanbanColumn,
  KanbanContent,
  KanbanHeader,
  KanbanLabel,
} from "./Kanban";
import StoryPoint from "./StoryPoint";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Checkbox } from "./ui/checkbox";

export default function Sprint() {
  const MAX_STORIES = 3;
  const MAX_POINTS = 15;

  const [stage, setStage] = useState(0);
  const [canProgress, setCanProgress] = useState(false);

  const [selectedStories, setSelectedStories] = useState<Story[]>([]);

  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [selectedTickets, setSelectedTickets] = useState<Ticket[]>([]);

  let selectedPoints = selectedTickets.reduce(
    (prev, curr) => prev + curr.points,
    0
  );

  useEffect(() => {
    setCanProgress(false);
  }, [stage]);

  useEffect(() => {
    if (selectedStories.length === MAX_STORIES) {
      setCanProgress(true);
    }

    let availableTickets: Ticket[] = [];
    selectedStories.map((story) => {
      availableTickets = availableTickets.concat([
        ...SPRINT_BACKLOG.filter((ticket) => ticket.storyId === story.id),
      ]);
    });
    setTickets(availableTickets);
  }, [selectedStories]);

  useEffect(() => {
    if (selectedPoints > 1 && selectedPoints <= MAX_POINTS) {
      setCanProgress(true);
    }
  }, [selectedPoints]);

  return (
    <>
      <Block>
        <BlockHeader>
          <BlockTitle title="Sprint Simulation" />

          <BlockControls>
            <span className="mr-2 text-sm uppercase">
              {canProgress
                ? "Proceed to the next stage"
                : "Complete action items!"}
            </span>

            <Tooltip>
              <TooltipTrigger
                className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 disabled:cursor-not-allowed disabled:hover:bg-slate-100 disabled:dark:hover:bg-slate-800 disabled:text-slate-400 dark:disabled:text-slate-600"
                disabled={!canProgress}
                onClick={() => setStage(stage + 1)}
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
              {ACTION_ITEMS.map((action, i) => {
                if (action.stage === stage) {
                  return (
                    <ActionItem key={i} title={action.title}>
                      {action.message}
                    </ActionItem>
                  );
                }
              })}
            </div>
          </BlockContent>
        </Block>

        {stage === 0 && (
          <ProductBacklog
            maxStories={MAX_STORIES}
            selectedStories={selectedStories}
            setSelectedStories={setSelectedStories}
          />
        )}

        {stage === 1 && (
          <SprintPlanning
            maxStoryPoints={MAX_POINTS}
            tickets={tickets}
            selectedTickets={selectedTickets}
            setSelectedTickets={setSelectedTickets}
          />
        )}

        {stage === 2 && <SprintBacklog tickets={selectedTickets} />}
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

      <BlockContent>
        <div className="flex flex-col w-full gap-2">
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

function SprintPlanning({
  maxStoryPoints,
  tickets,
  selectedTickets = [],
  setSelectedTickets,
}: {
  maxStoryPoints: number;
  tickets: Ticket[];
  selectedTickets: Ticket[];
  setSelectedTickets: Dispatch<SetStateAction<Ticket[]>>;
}) {
  const ticketsByStory: { [story: string]: Ticket[] } = {};
  tickets.forEach((ticket) => {
    const story = PRODUCT_BACKLOG.find((s) => s.id === ticket.storyId) as Story;
    const key = `As a ${story.persona}, I want to ${story.action} so that I can ${story.goal}`;

    if (!ticketsByStory[key]) {
      ticketsByStory[key] = [];
    }
    ticketsByStory[key].push(ticket);
  });

  let selectedPoints = selectedTickets.reduce(
    (prev, curr) => prev + curr.points,
    0
  );
  const initialValue = useMotionValue(0);
  const rounded = useTransform(initialValue, (latest) => Math.round(latest));

  function handleCheckChanged(ticket: Ticket, checked: boolean) {
    setSelectedTickets((prevSelected) => {
      if (checked) {
        return [...prevSelected, ticket];
      } else {
        return prevSelected.filter((item) => item.id !== ticket.id);
      }
    });
  }

  useEffect(() => {
    const controls = animate(initialValue, selectedPoints);
    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTickets]);

  return (
    <Block>
      <BlockHeader>
        <BlockTitle title="Sprint Planning" />

        <BlockControls>
          <Tooltip>
            <TooltipTrigger>
              <div className="flex flex-row items-center gap-2 mr-2 text-sm uppercase">
                <div>
                  <motion.span
                    className={cn(
                      "transition-colors font-mono",
                      selectedPoints > maxStoryPoints - maxStoryPoints / 4
                        ? "text-orange-400 font-bold"
                        : "",
                      selectedPoints > maxStoryPoints
                        ? "text-red-500 font-bold"
                        : ""
                    )}
                  >
                    {rounded}
                  </motion.span>{" "}
                  of {maxStoryPoints}
                </div>
                <GemIcon size={18} />
              </div>
            </TooltipTrigger>
            <TooltipContent>Total Story Points Selected</TooltipContent>
          </Tooltip>
        </BlockControls>
      </BlockHeader>

      <BlockContent>
        <div className="flex flex-col w-full gap-2 -mx-3">
          {selectedPoints > maxStoryPoints && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="mb-2"
              >
                <Alert variant="destructive">
                  <AlertTriangleIcon className="w-4 h-4" />
                  <AlertTitle>Too much work!</AlertTitle>
                  <AlertDescription>
                    The tickets you have selected exceed your development team's
                    capacity. Please adjust your plan to stay within 15 Story
                    Points.
                  </AlertDescription>
                </Alert>
              </motion.div>
            </AnimatePresence>
          )}
          {Object.keys(ticketsByStory).map((story) => (
            <div
              key={story}
              className="p-3 mt-4 border rounded-lg first-of-type:mt-0 bg-slate-100"
            >
              <div className="flex flex-row w-full gap-3">
                <Contact2Icon className="w-8 h-8 shrink-0" />
                <h3 className="font-bold">{story}</h3>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                {ticketsByStory[story].map((ticket) => (
                  <Ticket
                    key={ticket.id}
                    id={ticket.id}
                    storyId={ticket.storyId}
                    title={ticket.title}
                    points={ticket.points}
                    checked={selectedTickets.some(
                      (item) => item.id === ticket.id
                    )}
                    disabled={
                      !selectedTickets.includes(ticket) &&
                      selectedPoints >= maxStoryPoints
                    }
                    onCheckedChange={(value) =>
                      handleCheckChanged(ticket, value)
                    }
                  />
                ))}
              </div>
            </div>
          ))}{" "}
        </div>
      </BlockContent>
    </Block>
  );
}

function SprintBacklog({ tickets }: { tickets: Ticket[] }) {
  return (
    <Block>
      <BlockHeader>
        <BlockTitle title="Daily Scrum" />
      </BlockHeader>

      <BlockContent>
        <div className="@container w-full">
          <div className="grid gap-5 @lg:grid-cols-3 @md:grid-cols-3 @sm:grid-cols-2">
            <KanbanColumn>
              <KanbanHeader>
                <KanbanLabel icon="circle" name="Not Started" color="slate" />
              </KanbanHeader>
              <KanbanContent>
                {tickets.map((ticket) => (
                  <KanbanCard
                    key={ticket.id}
                    title={ticket.title}
                    points={ticket.points}
                  />
                ))}
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
                <KanbanCard title="Something" points={0} />
                <KanbanCard title="Something" points={0} />
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
                <KanbanCard title="Something" points={0} />
              </KanbanContent>
            </KanbanColumn>
          </div>
        </div>
      </BlockContent>
    </Block>
  );
}

function Ticket({
  id,
  storyId,
  title,
  points,
  checked = false,
  disabled = false,
  onCheckedChange,
}: Ticket & {
  checked?: boolean;
  disabled?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}) {
  return (
    <div
      className={cn(
        "flex flex-row w-full gap-3 p-3 border rounded-lg hover:bg-slate-100 dark:hover:bg-slate-950 group",
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

      <div className="flex flex-row items-start justify-between w-full gap-4">
        <label htmlFor={id}>{title}</label>
        <StoryPoint points={points} />
      </div>
    </div>
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
      <div
        className={cn(
          "flex flex-row w-full gap-3 p-3 border rounded-lg hover:bg-slate-100 dark:hover:bg-slate-950 group",
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
              <mark className="transition-colors bg-transparent dark:text-slate-100 group-hover:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 dark:group-hover:text-blue-100 -mx-0.5 px-0.5 rounded-sm">
                {persona}
              </mark>
              ,
            </p>
            <p>
              <span className="text-sm font-bold uppercase">I want to</span>{" "}
              <mark className="transition-colors bg-transparent dark:text-slate-100 group-hover:text-purple-800 group-hover:bg-purple-200 dark:group-hover:bg-purple-800 dark:group-hover:text-purple-100 -mx-0.5 px-0.5 rounded-sm">
                {action}
              </mark>
            </p>
            <p>
              <span className="text-sm font-bold uppercase">so that I can</span>{" "}
              <mark className="transition-colors bg-transparent dark:text-slate-100 group-hover:text-green-800 group-hover:bg-green-200 dark:group-hover:bg-green-800 dark:group-hover:text-green-100 -mx-0.5 px-0.5 rounded-sm">
                {goal}
              </mark>
              .
            </p>
          </div>

          <StoryPoint points={points} estimate />
        </div>
      </div>
    </div>
  );
}
