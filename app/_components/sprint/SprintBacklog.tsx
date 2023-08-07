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
