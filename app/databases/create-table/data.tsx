import { Explanation } from "@/app/_components/Snippet";
import { CodeSegment } from "@/app/_components/ui/code-segment";
import { ReactNode } from "react";

export const CODE = `CREATE TABLE IF NOT EXISTS Customers (
  CustomerID integer PRIMARY KEY,
  Name text,
  Affiliate_Company text,
  Email text,
  Address text,
  City text,
  Age integer,
  Loyalty_Plan integer
);`;

export const CODE_EXPLANATIONS: Explanation[] = [
  {
    lines: [1],
    content: (
      <>
        This <CodeSegment>CREATE</CodeSegment>s a{" "}
        <CodeSegment>TABLE</CodeSegment> called{" "}
        <CodeSegment>Customers</CodeSegment>.
        <br />
        <br />
        It is a great habit to supply the{" "}
        <CodeSegment>IF NOT EXISTS</CodeSegment> clause since SQLite will
        produce a naming error if a "Customers" table already exists.
        <br />
        <br />
        The open parenthesis (<CodeSegment>{"("}</CodeSegment>) denotes the
        start of the table construction body.
      </>
    ),
  },
  {
    lines: [2],
    content: (
      <>
        This line defines a column for the <CodeSegment>Customers</CodeSegment>{" "}
        table:
        <ColumnDetails
          name="CustomerID"
          type="integer"
          definition="A unique, universal identification for a customer."
          notes={
            <>
              Data entries for this attribute must be unique and not null across
              all records, as specified by the{" "}
              <CodeSegment>PRIMARY KEY</CodeSegment> constraint.
            </>
          }
        />
      </>
    ),
  },
  {
    lines: [3],
    content: (
      <>
        This line defines a column for the <CodeSegment>Customers</CodeSegment>{" "}
        table:
        <ColumnDetails
          name="Name"
          type="text"
          definition="The first and last name of a customer."
        />
      </>
    ),
  },
  {
    lines: [4],
    content: (
      <>
        This line defines a column for the <CodeSegment>Customers</CodeSegment>{" "}
        table:
        <ColumnDetails
          name="Affiliate_Company"
          type="text"
          definition="An organization a customer may be connected to."
        />
      </>
    ),
  },
  {
    lines: [5],
    content: (
      <>
        This line defines a column for the <CodeSegment>Customers</CodeSegment>{" "}
        table:
        <ColumnDetails
          name="Email"
          type="text"
          definition="A customer's email address, used for receipts, news, and promotional offerings."
        />
      </>
    ),
  },
  {
    lines: [6],
    content: (
      <>
        This line defines a column for the <CodeSegment>Customers</CodeSegment>{" "}
        table:
        <ColumnDetails
          name="Address"
          type="text"
          definition="A customer's mailing address, used for deliveries and secure statements."
        />
      </>
    ),
  },
  {
    lines: [7],
    content: (
      <>
        This line defines a column for the <CodeSegment>Customers</CodeSegment>{" "}
        table:
        <ColumnDetails
          name="City"
          type="text"
          definition="The city a customer resides in."
        />
      </>
    ),
  },
  {
    lines: [8],
    content: (
      <>
        This line defines a column for the <CodeSegment>Customers</CodeSegment>{" "}
        table:
        <ColumnDetails
          name="Age"
          type="integer"
          definition="A customer's age, in years."
        />
      </>
    ),
  },
  {
    lines: [9],
    content: (
      <>
        This line defines a column for the <CodeSegment>Customers</CodeSegment>{" "}
        table:
        <ColumnDetails
          name="Loyalty_Plan"
          type="integer"
          definition="Tells if a customer is a loyalty member."
          notes={
            <ol className="leading-relaxed list-decimal list-inside">
              <li>
                <CodeSegment>FALSE</CodeSegment> is a keyword for 0
              </li>
              <li>
                <CodeSegment>TRUE</CodeSegment> is a keyword for 1
              </li>
            </ol>
          }
        />
      </>
    ),
  },
  {
    lines: [10],
    content: (
      <>
        This closing parenthesis <CodeSegment>{")"}</CodeSegment> denotes the
        end of the table construction body which was opened on line 1.
      </>
    ),
  },
];

function ColumnDetails({
  name,
  type,
  definition,
  notes,
}: {
  name: string;
  type: string;
  definition: string;
  notes?: ReactNode;
}) {
  return (
    <div className="flex flex-row mt-2">
      <dl className="w-full border rounded-lg border-slate-200 overflow-clip dark:border-slate-800">
        <div className="p-3 transition-colors border-b sm:grid sm:grid-cols-4 sm:gap-4 hover:bg-slate-50 dark:hover:bg-slate-900 border-b-slate-200 dark:border-b-slate-800">
          <dt className="mt-0.5 text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
            Attribute Name
          </dt>
          <dd className="mt-1 font-mono text-sm sm:mt-0 sm:col-span-3">
            {name}
          </dd>
        </div>

        <div className="p-3 transition-colors border-b sm:grid sm:grid-cols-4 sm:gap-4 hover:bg-slate-50 dark:hover:bg-slate-900 border-b-slate-200 dark:border-b-slate-800">
          <dt className="mt-0.5 text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
            Data Type
          </dt>
          <dd className="mt-1 font-mono text-sm sm:mt-0 sm:col-span-3">
            {type}
          </dd>
        </div>

        <div className="p-3 transition-colors border-b sm:grid sm:grid-cols-4 sm:gap-4 hover:bg-slate-50 dark:hover:bg-slate-900 border-b-slate-200 dark:border-b-slate-800">
          <dt className="mt-0.5 text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
            Definition
          </dt>
          <dd className="mt-1 text-sm sm:mt-0 sm:col-span-3">{definition}</dd>
        </div>

        {notes ? (
          <div className="p-3 transition-colors sm:grid sm:grid-cols-4 sm:gap-4 hover:bg-slate-50 dark:hover:bg-slate-900">
            <dt className="mt-0.5 text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
              Notes
            </dt>
            <dd className="mt-1 text-sm sm:mt-0 sm:col-span-3">{notes}</dd>
          </div>
        ) : null}
      </dl>
    </div>
  );
}
