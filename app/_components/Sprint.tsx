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
import { getRandomInt, shuffle } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ACTION_ITEMS,
  PROBLEMS,
  PRODUCT_BACKLOG,
  Problem,
  SPRINT_BACKLOG,
  Story,
  Ticket,
} from "../product/sprint/data";
import DailyScrum from "./sprint/DailyScrum";
import Onboarding from "./sprint/Onboarding";
import ProductBacklog from "./sprint/ProductBacklog";
import SprintPlanning from "./sprint/SprintPlanning";
import SprintPrioritization from "./sprint/SprintPrioritization";
import SprintRecap from "./sprint/SprintRecap";
import SprintRetro from "./sprint/SprintRetro";

function determineTicketStatus(
  ticket: Ticket,
  index: number,
  totalTickets: number,
  totalPoints: number
): Ticket {
  if (ticket.status) {
    return ticket;
  }

  const priority = 1 - (index + 1) / totalTickets;
  const randomSign = Math.random();
  const random = randomSign < 0.25 ? Math.random() * -0.5 : Math.random();
  const timeCommitment = ticket.points / totalPoints;
  const likelihood = priority - timeCommitment + random / 4;

  if (likelihood > 0.225) {
    ticket.status = "complete";
  } else if (likelihood > 0) {
    ticket.status = "in-progress";
  } else {
    ticket.status = "backlog";
  }

  return ticket;
}

function determineProblems(maxProblems: number): Problem[] {
  const problems: Problem[] = [];

  let i = 0;
  while (i < maxProblems || problems.length === 0) {
    const randomIndex = Math.floor(Math.random() * PROBLEMS.length);
    const randomProblem = PROBLEMS[randomIndex];

    const duplicateProblem = problems.some(
      (p) => p.title === randomProblem.title
    );

    if (!duplicateProblem) {
      problems.push(randomProblem);
    }
    i++;
  }

  return problems;
}

const MAX_STORIES = 3;
const MAX_POINTS = getRandomInt(7, 21);
const MAX_PROBLEMS = MAX_POINTS > 14 ? 3 : 2;
const MAX_IMPROVEMENTS = 1;

export default function Sprint() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [stage, setStage] = useState(0);
  const [canProgress, setCanProgress] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [nuid, setNuid] = useState("");

  const [stories, setStories] = useState<Story[]>([]);
  const [selectedStories, setSelectedStories] = useState<Story[]>([]);

  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [selectedTickets, setSelectedTickets] = useState<Ticket[]>([]);

  const [problems] = useState<Problem[]>(determineProblems(MAX_PROBLEMS));
  const [selectedImprovements, setSelectedImprovements] = useState<Problem[]>(
    []
  );

  let selectedPoints = selectedTickets.reduce(
    (prev, curr) => prev + curr.points,
    0
  );

  useEffect(() => {
    const sprintId = searchParams.get("id");
    if (sprintId) {
      router.replace(`/product/sprint/recap?id=${sprintId}`);
    }

    setStories(shuffle(PRODUCT_BACKLOG));
  }, []);

  useEffect(() => {
    if (firstName && nuid && nuid.length > 6 && nuid.length < 10) {
      setCanProgress(true);
    } else {
      setCanProgress(false);
    }
  }, [firstName, nuid]);

  useEffect(() => {
    if (selectedStories.length === MAX_STORIES) {
      setCanProgress(true);
    } else {
      setCanProgress(false);
    }

    let availableTickets: Ticket[] = [];
    selectedStories.map((story) => {
      availableTickets = availableTickets.concat(
        SPRINT_BACKLOG.filter((ticket) => ticket.storyId === story.id)
      );
    });
    setTickets(shuffle(availableTickets));
  }, [selectedStories]);

  useEffect(() => {
    if (selectedPoints > MAX_POINTS / 3 && selectedPoints <= MAX_POINTS) {
      setCanProgress(true);
    } else {
      setCanProgress(false);
    }
  }, [selectedPoints]);

  useEffect(() => {
    if (
      selectedImprovements.length >= 1 &&
      selectedImprovements.length <= MAX_POINTS
    ) {
      setCanProgress(true);
    } else {
      setCanProgress(false);
    }
  }, [selectedImprovements]);

  useEffect(() => {
    if (stage === 3 || stage === 4) {
      setCanProgress(true);
    } else {
      setCanProgress(false);
    }

    if (stage === 4) {
      setSelectedTickets((tickets) =>
        tickets.map((ticket, index) =>
          determineTicketStatus(ticket, index, tickets.length, selectedPoints)
        )
      );
    }
  }, [stage]);

  return (
    <>
      <Block>
        <BlockHeader>
          <BlockTitle title="Sprint Simulation" />

          {stage < ACTION_ITEMS.length - 1 && (
            <BlockControls>
              <span className="mr-2 text-sm uppercase">
                {canProgress
                  ? `Proceed to Stage ${stage + 1}`
                  : "See Action Items"}
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
                  <p>{canProgress ? "Next" : "Complete all action items"}</p>
                </TooltipContent>
              </Tooltip>
            </BlockControls>
          )}
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
                    <ActionItem
                      key={i}
                      title={action.title}
                      task={action.task}
                      content={action.message}
                      variable={{
                        MAX_POINTS: MAX_POINTS.toString(),
                      }}
                    />
                  );
                }
              })}
            </div>
          </BlockContent>
        </Block>

        {stage === 0 && (
          <Onboarding
            firstName={firstName}
            setFirstName={setFirstName}
            nuid={nuid}
            setNuid={setNuid}
          />
        )}

        {stage === 1 && (
          <ProductBacklog
            maxStories={MAX_STORIES}
            stories={stories}
            selectedStories={selectedStories}
            setSelectedStories={setSelectedStories}
          />
        )}

        {stage === 2 && (
          <SprintPlanning
            maxStoryPoints={MAX_POINTS}
            tickets={tickets}
            selectedTickets={selectedTickets}
            setSelectedTickets={setSelectedTickets}
          />
        )}

        {stage === 3 && (
          <SprintPrioritization
            selectedTickets={selectedTickets}
            setSelectedTickets={setSelectedTickets}
          />
        )}

        {stage === 4 && <DailyScrum tickets={selectedTickets} />}

        {stage === 5 && (
          <SprintRetro
            maxImprovements={MAX_IMPROVEMENTS}
            problems={problems}
            selectedImprovements={selectedImprovements}
            setSelectedImprovements={setSelectedImprovements}
          />
        )}

        {stage === 6 && (
          <SprintRecap
            firstName={firstName}
            nuid={nuid}
            stories={selectedStories}
            maxStoryPoints={MAX_POINTS}
            tickets={selectedTickets}
            problems={problems}
            improvements={selectedImprovements}
          />
        )}
      </div>
    </>
  );
}

function ActionItem({
  title,
  task,
  content,
  variable,
}: {
  title: string;
  task: string;
  content: string[];
  variable: Record<string, string>;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -15 }}
      animate={{ opacity: 1, translateY: 0 }}
      className="prose dark:prose-invert"
    >
      <h3 className="font-bold">{title}</h3>
      {content.map((c, i) => (
        <p key={i}>
          {c.replace(
            `{${Object.keys(variable)[0]}}`,
            Object.values(variable)[0]
          )}
        </p>
      ))}

      <h3 className="font-bold">Current Task</h3>
      <p>{task}</p>
    </motion.div>
  );
}
