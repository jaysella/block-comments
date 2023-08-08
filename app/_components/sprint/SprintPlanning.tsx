import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/app/_components/ui/alert";
import {
  Block,
  BlockContent,
  BlockControls,
  BlockHeader,
  BlockTitle,
} from "@/app/_components/ui/block";
import { Checkbox } from "@/app/_components/ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/app/_components/ui/tooltip";
import { PRODUCT_BACKLOG, Story, Ticket } from "@/app/product/sprint/data";
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
  CheckIcon,
  Contact2Icon,
  GemIcon,
} from "lucide-react";
import { Dispatch, SetStateAction, useEffect } from "react";
import StoryPoint from "./StoryPoint";

export default function SprintPlanning({
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
        return prevSelected.filter((item) => item.label !== ticket.label);
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
                      "transition-colors",
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

                {selectedPoints > maxStoryPoints / 4 &&
                selectedPoints <= maxStoryPoints ? (
                  <motion.div
                    initial={{ scale: 2 }}
                    animate={{ scale: 1 }}
                    className="p-2 text-green-600"
                  >
                    <CheckIcon size={18} />
                  </motion.div>
                ) : (
                  <GemIcon size={18} />
                )}
              </div>
            </TooltipTrigger>
            <TooltipContent>Selected Story Points</TooltipContent>
          </Tooltip>
        </BlockControls>
      </BlockHeader>

      <BlockContent withPadding={false}>
        <div className="flex flex-col w-full gap-4 p-2 @md:p-3">
          {selectedPoints > maxStoryPoints && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
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
              className="p-3 border rounded-lg first-of-type:mt-0 border-slate-200 bg-slate-100 dark:bg-slate-950 dark:border-slate-800"
            >
              <div className="flex flex-row w-full gap-3 px-1">
                <Contact2Icon className="w-8 h-8 shrink-0" />
                <h3 className="font-bold">{story}</h3>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                {ticketsByStory[story].map((ticket) => (
                  <Ticket
                    key={ticket.label}
                    label={ticket.label}
                    storyId={ticket.storyId}
                    title={ticket.title}
                    points={ticket.points}
                    checked={selectedTickets.some(
                      (item) => item.label === ticket.label
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
          ))}
        </div>
      </BlockContent>
    </Block>
  );
}

function Ticket({
  label,
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
        id={label}
        checked={checked}
        disabled={disabled}
        onCheckedChange={(value) => {
          if (onCheckedChange && typeof value === "boolean") {
            onCheckedChange(value);
          }
        }}
      />

      <div className="flex flex-row items-start justify-between w-full gap-4">
        <label htmlFor={label}>{title}</label>
        <StoryPoint points={points} />
      </div>
    </div>
  );
}
