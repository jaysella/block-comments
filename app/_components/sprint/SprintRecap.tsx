import {
  Block,
  BlockContent,
  BlockHeader,
  BlockTitle,
} from "@/app/_components/ui/block";
import {
  PROBLEMS,
  PRODUCT_BACKLOG,
  Problem,
  SPRINT_BACKLOG,
  Story,
  Ticket,
} from "@/app/product/sprint/data";
import { AwardIcon, Contact2Icon, ListTodoIcon, SmileIcon } from "lucide-react";
import { ReactNode } from "react";
import { KanbanLabel } from "../Kanban";
import { CodeSegment } from "../ui/code-segment";
import { Tooltip } from "@radix-ui/react-tooltip";
import { TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { useToast } from "../ui/use-toast";
import { usePathname, useRouter } from "next/navigation";

export default function SprintRecap({
  firstName,
  nuid,
  stories,
  maxStoryPoints,
  tickets,
  problems,
  improvements,
}: {
  firstName: string;
  nuid: string;
  stories: Story[];
  maxStoryPoints: number;
  tickets: Ticket[];
  problems: Problem[];
  improvements: Problem[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { toast } = useToast();

  router.replace(`${pathname}?id=${getIdentifier()}`);

  const ICON_CLASSES = "w-8 h-8 shrink-0";

  function getIdentifier(): string {
    const SEPARATOR = "-";

    // add first name
    let identifier = "u";
    firstName
      .substring(0, Math.min(2, firstName.length))
      .split("")
      .forEach((char) => {
        identifier += char.charCodeAt(0) + "";
      });

    // add nuid
    identifier += SEPARATOR + "n";
    nuid.split("").forEach((char) => {
      identifier += char.charCodeAt(0);
    });

    // add stories
    identifier += SEPARATOR + "s";
    stories.forEach((story) => {
      identifier += PRODUCT_BACKLOG.findIndex((s) => s.id === story.id);
    });

    // add max story points
    identifier += SEPARATOR + "m" + maxStoryPoints;

    // add tickets
    identifier += SEPARATOR + "t";
    tickets.forEach((ticket) => {
      identifier += SPRINT_BACKLOG.findIndex((t) => t.label === ticket.label);
      switch (ticket.status) {
        case "backlog":
          identifier += "b";
          break;

        case "in-progress":
          identifier += "i";
          break;

        case "complete":
          identifier += "c";
          break;

        default:
          identifier += "e";
          break;
      }
    });

    // add problems
    identifier += SEPARATOR + "p";
    problems.forEach((problem) => {
      identifier += PROBLEMS.findIndex((p) => p.title === problem.title);
    });

    // add improvements
    identifier += SEPARATOR + "i";
    improvements.forEach((improvement) => {
      identifier += PROBLEMS.findIndex((i) => i.title === improvement.title);
    });

    return identifier;
  }

  return (
    <Block>
      <BlockHeader>
        <BlockTitle title="Sprint Recap" />
      </BlockHeader>

      <BlockContent withPadding={false}>
        <div className="flex flex-col w-full gap-4 p-2 @md:p-3 justify-start items-start">
          <Section
            icon={<AwardIcon className={ICON_CLASSES} />}
            title="About You"
          >
            <div className="flex flex-row">
              <dl className="w-full border rounded-lg border-slate-200 overflow-clip dark:border-slate-800">
                <div className="items-center p-3 border-b sm:grid sm:grid-cols-4 sm:gap-4 border-b-slate-200 dark:border-b-slate-800">
                  <dt className="text-xs font-medium uppercase text-slate-600 dark:text-slate-400">
                    Name
                  </dt>
                  <dd className="mt-1 font-mono text-sm sm:mt-0 sm:col-span-3">
                    {firstName.substring(0, 2).toUpperCase() + "·".repeat(4)}
                  </dd>
                </div>

                <div className="items-center p-3 border-b sm:grid sm:grid-cols-4 sm:gap-4 border-b-slate-200 dark:border-b-slate-800">
                  <dt className="text-xs font-medium uppercase text-slate-600 dark:text-slate-400">
                    NUID
                  </dt>
                  <dd className="mt-1 font-mono text-sm sm:mt-0 sm:col-span-3">
                    {"·".repeat(3) + nuid.slice(-3)}
                  </dd>
                </div>

                <div className="items-center p-3 sm:grid sm:grid-cols-4 sm:gap-4">
                  <dt className="text-xs font-medium uppercase text-slate-600 dark:text-slate-400">
                    Sprint Identifier
                  </dt>
                  <dd className="mt-1 font-mono text-sm sm:mt-0 sm:col-span-3">
                    {getIdentifier()}
                  </dd>
                </div>
              </dl>
            </div>

            {/* <div className="flex flex-row gap-2 p-3"> */}
            {/* <Tooltip>
                  <TooltipTrigger
                    onClick={() => {
                      navigator.clipboard.writeText(getIdentifier()).then(
                        () => {
                          toast({
                            title: "Copied!",
                            description:
                              "The identifier this Sprint has been copied to your clipboard.",
                            icon: "success",
                          });
                        },
                        () => {
                          toast({
                            title: "Unable to copy",
                            description:
                              "Please copy this identifier manually.",
                            icon: "error",
                          });
                        }
                      );
                    }}
                  >
                    <CodeSegment className="block transition-colors w-max hover:bg-slate-300 dark:hover:bg-slate-600">
                      {getIdentifier()}
                    </CodeSegment>
                  </TooltipTrigger>
                  <TooltipContent>Click to Copy Identifier</TooltipContent>
                </Tooltip> */}
            {/* </div> */}
          </Section>

          <Section
            icon={<Contact2Icon className={ICON_CLASSES} />}
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
            icon={<ListTodoIcon className={ICON_CLASSES} />}
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
            icon={<SmileIcon className={ICON_CLASSES} />}
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
    <div className="w-full p-3 border rounded-lg first-of-type:mt-0 border-slate-200 bg-slate-100 dark:bg-slate-950 dark:border-slate-800">
      <div className="flex flex-row gap-3 px-1">
        {icon}
        <h3 className="mt-1.5 font-bold">{title}</h3>
      </div>

      <div className="flex flex-col gap-2 mt-4">{children}</div>
    </div>
  );
}

function Ticket({ label, title, status }: Ticket) {
  return (
    <div className="flex flex-row gap-3 p-3 border rounded-lg border-slate-200 dark:border-slate-800">
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
    <div className="p-3 border rounded-lg border-slate-200 dark:border-slate-800">
      <p>
        As a {persona}, I want to {action} so that I can {goal}.
      </p>
    </div>
  );
}

function Problem({ improvement }: Problem) {
  return (
    <div className="p-3 border rounded-lg border-slate-200 dark:border-slate-800">
      <p>{improvement}</p>
    </div>
  );
}
