import {
  Block,
  BlockContent,
  BlockHeader,
  BlockTitle,
} from "@/app/_components/ui/block";
import { Problem, Story, Ticket } from "@/app/product/sprint/data";
import { cn } from "@/lib/utils";
import { Contact2Icon, ListTodoIcon, SmileIcon } from "lucide-react";
import { ReactNode } from "react";
import { KanbanLabel } from "../Kanban";

export default function SprintRecap({
  stories,
  tickets,
  improvements,
}: {
  stories: Story[];
  tickets: Ticket[];
  improvements: Problem[];
}) {
  return (
    <Block>
      <BlockHeader>
        <BlockTitle title="Sprint Recap" />
      </BlockHeader>

      <BlockContent withPadding={false}>
        <div className="flex flex-col w-full gap-4 p-2 @md:p-3">
          <Section
            icon={<Contact2Icon className="w-8 h-8 shrink-0" />}
            title="User Stories"
          >
            {stories.map((story) => (
              <Story
                key={story.id}
                id={story.id}
                points={story.points}
                persona={story.persona}
                action={story.action}
                goal={story.goal}
              />
            ))}
          </Section>

          <Section
            icon={<ListTodoIcon className="w-8 h-8 shrink-0" />}
            title="Tickets"
          >
            {tickets.map((ticket) => (
              <Ticket
                key={ticket.label}
                label={ticket.label}
                storyId={ticket.storyId}
                title={ticket.title}
                points={ticket.points}
                status={ticket.status}
              />
            ))}
          </Section>

          <Section
            icon={<SmileIcon className="w-8 h-8 shrink-0" />}
            title="Improvements"
          >
            {improvements.map((problem) => (
              <Problem
                key={problem.title}
                title={problem.title}
                description={problem.description}
                improvement={problem.improvement}
              />
            ))}
          </Section>
        </div>
      </BlockContent>
    </Block>
  );
}

function Section({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="p-3 border rounded-lg first-of-type:mt-0 border-slate-200 bg-slate-100 dark:bg-slate-950 dark:border-slate-800">
      <div className="flex flex-row w-full gap-3 px-1">
        {icon}
        <h3 className="mt-1.5 font-bold">{title}</h3>
      </div>

      <div className="flex flex-col gap-2 mt-4">{children}</div>
    </div>
  );
}

function Ticket({ label, title, status }: Ticket) {
  return (
    <div
      className={cn(
        "flex flex-row w-full gap-3 p-3 border rounded-lg border-slate-200 dark:border-slate-800"
      )}
    >
      <div className="flex flex-col-reverse items-start justify-between w-full gap-2 @lg:gap-4 @lg:flex-row">
        <p>
          <strong>{label}:</strong> {title}
        </p>
        <KanbanLabel type={status} />
      </div>
    </div>
  );
}

function Story({ persona, action, goal }: Story) {
  return (
    <div
      className={cn(
        "flex flex-row w-full gap-3 p-3 border rounded-lg border-slate-200 dark:border-slate-800"
      )}
    >
      <div className="flex flex-row items-start justify-between w-full gap-4">
        As a {persona}, I want to {action} so that I can {goal}.
      </div>
    </div>
  );
}

function Problem({ improvement }: Problem) {
  return (
    <div
      className={cn(
        "flex flex-row w-full gap-3 p-3 border rounded-lg border-slate-200 dark:border-slate-800"
      )}
    >
      <div className="flex flex-row items-start justify-between w-full gap-4">
        {improvement}
      </div>
    </div>
  );
}
