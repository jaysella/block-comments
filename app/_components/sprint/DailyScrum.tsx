import {
  KanbanCard,
  KanbanColumn,
  KanbanContent,
  KanbanHeader,
  KanbanLabel,
} from "@/app/_components/Kanban";
import {
  Block,
  BlockContent,
  BlockHeader,
  BlockTitle,
} from "@/app/_components/ui/block";
import { Ticket } from "@/app/product/sprint/data";
import { useEffect, useState } from "react";

type Status = "backlog" | "in-progress" | "complete";
type KanbanTicket = Ticket & { status: Status };

export default function SprintBacklog({ tickets }: { tickets: Ticket[] }) {
  const [randomTickets, setRandomTickets] = useState<KanbanTicket[]>([]);

  function getRandomStatus(points: number): KanbanTicket["status"] {
    const statusOptions: KanbanTicket["status"][] = [
      "backlog",
      "in-progress",
      "complete",
    ];

    // weight statuses
    // const weights: number[] = [2, 1, 4];
    const weights: number[] = [
      Math.pow(1.618, points - 2),
      Math.pow(1.618, points - 1),
      Math.pow(1.618, points),
    ];

    // calculate total weight
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);

    // generate random value between 0 and totalWeight
    const randomValue = Math.random() * totalWeight;

    // choose status based on the weighted random value
    let cumulativeWeight = 0;
    for (let i = 0; i < statusOptions.length; i++) {
      cumulativeWeight += weights[i];
      if (randomValue <= cumulativeWeight) {
        return statusOptions[i];
      }
    }

    return "backlog";
  }

  useEffect(() => {
    const updatedArray: KanbanTicket[] = tickets.map((ticket) => ({
      ...ticket,
      status: getRandomStatus(ticket.points),
    }));
    setRandomTickets(updatedArray);
  }, [tickets]);

  return (
    <Block>
      <BlockHeader>
        <BlockTitle title="Daily Scrum" />
      </BlockHeader>

      <BlockContent>
        <div className="@container w-full">
          <div className="grid gap-5 grid-cols-1 @sm:grid-cols-2 @lg:grid-cols-3">
            <KanbanColumn>
              <KanbanHeader
                count={
                  randomTickets.filter((ticket) => ticket.status === "backlog")
                    .length
                }
              >
                <KanbanLabel icon="circle" name="Not Started" color="slate" />
              </KanbanHeader>
              <KanbanContent>
                {randomTickets
                  .filter((ticket) => ticket.status === "backlog")
                  .map((ticket) => (
                    <KanbanCard
                      key={ticket.title}
                      title={ticket.title}
                      label={ticket.label}
                      points={ticket.points}
                    />
                  ))}
              </KanbanContent>
            </KanbanColumn>

            <KanbanColumn>
              <KanbanHeader
                count={
                  randomTickets.filter(
                    (ticket) => ticket.status === "in-progress"
                  ).length
                }
              >
                <KanbanLabel
                  icon="circle-dot"
                  name="In Progress"
                  color="yellow"
                />
              </KanbanHeader>
              <KanbanContent>
                {randomTickets
                  .filter((ticket) => ticket.status === "in-progress")
                  .map((ticket) => (
                    <KanbanCard
                      key={ticket.title}
                      title={ticket.title}
                      label={ticket.label}
                      points={ticket.points}
                    />
                  ))}
              </KanbanContent>
            </KanbanColumn>

            <KanbanColumn>
              <KanbanHeader
                count={
                  randomTickets.filter((ticket) => ticket.status === "complete")
                    .length
                }
              >
                <KanbanLabel
                  icon="check-circle-2"
                  name="Complete"
                  color="green"
                />
              </KanbanHeader>
              <KanbanContent>
                {randomTickets
                  .filter((ticket) => ticket.status === "complete")
                  .map((ticket) => (
                    <KanbanCard
                      key={ticket.title}
                      title={ticket.title}
                      label={ticket.label}
                      points={ticket.points}
                    />
                  ))}
              </KanbanContent>
            </KanbanColumn>
          </div>
        </div>
      </BlockContent>
    </Block>
  );
}
