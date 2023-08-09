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

export default function SprintBacklog({ tickets }: { tickets: Ticket[] }) {
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
                  tickets.filter((ticket) => ticket.status === "backlog").length
                }
              >
                <KanbanLabel type="backlog" />
              </KanbanHeader>
              <KanbanContent>
                {tickets
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
                  tickets.filter((ticket) => ticket.status === "in-progress")
                    .length
                }
              >
                <KanbanLabel type="in-progress" />
              </KanbanHeader>
              <KanbanContent>
                {tickets
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
                  tickets.filter((ticket) => ticket.status === "complete")
                    .length
                }
              >
                <KanbanLabel type="complete" />
              </KanbanHeader>
              <KanbanContent>
                {tickets
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
