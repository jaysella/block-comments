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
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import {
  ACTION_ITEMS,
  SPRINT_BACKLOG,
  Story,
  Ticket,
} from "../product/sprint/data";
import ProductBacklog from "./sprint/ProductBacklog";
import SprintPlanning from "./sprint/SprintPlanning";
import SprintBacklog from "./sprint/SprintBacklog";
import SprintRetro from "./sprint/SprintRetro";

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

        {stage === 3 && <SprintRetro tickets={selectedTickets} />}
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
