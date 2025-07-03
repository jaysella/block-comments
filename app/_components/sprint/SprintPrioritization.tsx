import {
  Block,
  BlockContent,
  BlockHeader,
  BlockTitle,
} from "@/app/_components/ui/block";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/app/_components/ui/tooltip";
import { Ticket } from "@/app/(content)/product/sprint/data";
import { cn, moveArrayItem } from "@/lib/utils";
import { Reorder } from "framer-motion";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import StoryPoint from "./StoryPoint";

export default function SprintPrioritization({
  selectedTickets,
  setSelectedTickets,
}: {
  selectedTickets: Ticket[];
  setSelectedTickets: Dispatch<SetStateAction<Ticket[]>>;
}) {
  function handleMove(ticketLabel: string, direction: "up" | "down") {
    const itemIndex = selectedTickets.findIndex(
      (item) => item.label === ticketLabel
    );

    if (itemIndex >= 0) {
      const targetIndex = direction === "up" ? itemIndex - 1 : itemIndex + 1;

      if (targetIndex >= 0 && targetIndex < selectedTickets.length) {
        const updatedTickets = moveArrayItem(
          selectedTickets,
          itemIndex,
          targetIndex
        );
        setSelectedTickets(updatedTickets);
      }
    }
  }

  return (
    <Block>
      <BlockHeader>
        <BlockTitle title="Sprint Prioritization" />
      </BlockHeader>

      <BlockContent withPadding={false}>
        <div className="flex flex-col w-full gap-4 p-2 @md:p-3">
          <Reorder.Group
            as="ol"
            values={selectedTickets}
            onReorder={setSelectedTickets}
            className="flex flex-col gap-2"
          >
            {selectedTickets.map((ticket) => (
              <Reorder.Item
                key={ticket.label}
                value={ticket}
                dragListener={false}
              >
                <div
                  className={cn(
                    "flex flex-row w-full gap-3 p-3 bg-white dark:bg-slate-950 border rounded-lg justify-between items-center border-slate-200 dark:border-slate-800 transition-colors"
                  )}
                >
                  <p className="pl-1">
                    <b>{ticket.label}</b>: {ticket.title}
                  </p>
                  <div className="flex flex-row items-center justify-between">
                    <StoryPoint points={ticket.points} className="mr-2" />
                    <Tooltip>
                      <TooltipTrigger
                        className="p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 disabled:cursor-not-allowed disabled:hover:bg-slate-100 dark:disabled:hover:bg-slate-800 disabled:text-slate-400 dark:disabled:text-slate-600"
                        disabled={ticket.label === selectedTickets[0].label}
                        onClick={() => handleMove(ticket.label, "up")}
                      >
                        <ArrowUpIcon size={18} />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Move Up</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger
                        className="p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 disabled:cursor-not-allowed disabled:hover:bg-slate-100 dark:disabled:hover:bg-slate-800 disabled:text-slate-400 dark:disabled:text-slate-600"
                        disabled={
                          ticket.label ===
                          selectedTickets[selectedTickets.length - 1].label
                        }
                        onClick={() => handleMove(ticket.label, "down")}
                      >
                        <ArrowDownIcon size={18} />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Move Down</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </div>
      </BlockContent>
    </Block>
  );
}
