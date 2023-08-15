import Snippet from "@/app/_components/Snippet";
import { CODE, CODE_EXPLANATIONS } from "./data";
import { Metadata } from "next";
import {
  Block,
  BlockContent,
  BlockHeader,
  BlockTitle,
} from "@/app/_components/ui/block";
import { CodeSegment } from "@/app/_components/ui/code-segment";
import { KeyRoundIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/app/_components/ui/tooltip";

export const metadata: Metadata = {
  title: "Databases: Create Table",
};

export default function Page() {
  return (
    <>
      <Snippet title="Code" language="sql" explanations={CODE_EXPLANATIONS}>
        {CODE}
      </Snippet>

      <Block>
        <BlockHeader>
          <BlockTitle title="Table Schema: Customers" />
        </BlockHeader>

        <BlockContent>
          <div className="relative w-full overflow-x-auto border rounded-lg border-slate-200 dark:border-slate-800">
            <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
              <thead className="text-xs uppercase border-b text-slate-700 dark:text-slate-400 border-slate-200 dark:border-slate-800">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 bg-slate-100 dark:bg-slate-900"
                  >
                    Attribute Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 bg-slate-100 dark:bg-slate-900"
                  >
                    Data Type
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 bg-slate-100 dark:bg-slate-900"
                  >
                    Business Definition
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 bg-slate-100 dark:bg-slate-900"
                  >
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="transition-colors border-b hover:bg-slate-100 dark:hover:bg-slate-900 border-slate-200 dark:border-slate-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-mono font-bold text-slate-900 bg-slate-100 whitespace-nowrap dark:text-white dark:bg-slate-900"
                  >
                    <span className="flex flex-row items-center gap-2">
                      CustomerID
                      <Tooltip>
                        <TooltipTrigger>
                          <KeyRoundIcon size={16} className="text-blue-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="font-sans font-normal">Primary Key</p>
                        </TooltipContent>
                      </Tooltip>
                    </span>
                  </th>
                  <td className="px-6 py-4">integer</td>
                  <td className="px-6 py-4">
                    A unique, universal identification for a customer.
                  </td>
                  <td className="px-6 py-4">Unique identifier</td>
                </tr>
                <tr className="transition-colors border-b hover:bg-slate-100 dark:hover:bg-slate-900 border-slate-200 dark:border-slate-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-mono font-bold text-slate-900 bg-slate-100 whitespace-nowrap dark:text-white dark:bg-slate-900"
                  >
                    Name
                  </th>
                  <td className="px-6 py-4">text</td>
                  <td className="px-6 py-4">
                    The first and last name of a customer.
                  </td>
                  <td className="px-6 py-4"></td>
                </tr>
                <tr className="transition-colors border-b hover:bg-slate-100 dark:hover:bg-slate-900 border-slate-200 dark:border-slate-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-mono font-bold text-slate-900 bg-slate-100 whitespace-nowrap dark:text-white dark:bg-slate-900"
                  >
                    Affiliate_Company
                  </th>
                  <td className="px-6 py-4">text</td>
                  <td className="px-6 py-4">
                    An organization a customer may be connected to.
                  </td>
                  <td className="px-6 py-4"></td>
                </tr>
                <tr className="transition-colors border-b hover:bg-slate-100 dark:hover:bg-slate-900 border-slate-200 dark:border-slate-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-mono font-bold text-slate-900 bg-slate-100 whitespace-nowrap dark:text-white dark:bg-slate-900"
                  >
                    Email
                  </th>
                  <td className="px-6 py-4">text</td>
                  <td className="px-6 py-4">
                    A customer's email address, used for receipts, news, and
                    promotional offerings.
                  </td>
                  <td className="px-6 py-4"></td>
                </tr>
                <tr className="transition-colors border-b hover:bg-slate-100 dark:hover:bg-slate-900 border-slate-200 dark:border-slate-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-mono font-bold text-slate-900 bg-slate-100 whitespace-nowrap dark:text-white dark:bg-slate-900"
                  >
                    Address
                  </th>
                  <td className="px-6 py-4">text</td>
                  <td className="px-6 py-4">
                    A customer's mailing address, used for deliveries and secure
                    statements.
                  </td>
                  <td className="px-6 py-4"></td>
                </tr>
                <tr className="transition-colors border-b hover:bg-slate-100 dark:hover:bg-slate-900 border-slate-200 dark:border-slate-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-mono font-bold text-slate-900 bg-slate-100 whitespace-nowrap dark:text-white dark:bg-slate-900"
                  >
                    City
                  </th>
                  <td className="px-6 py-4">text</td>
                  <td className="px-6 py-4">The city a customer resides in.</td>
                  <td className="px-6 py-4"></td>
                </tr>
                <tr className="transition-colors border-b hover:bg-slate-100 dark:hover:bg-slate-900 border-slate-200 dark:border-slate-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-mono font-bold text-slate-900 bg-slate-100 whitespace-nowrap dark:text-white dark:bg-slate-900"
                  >
                    Age
                  </th>
                  <td className="px-6 py-4">integer</td>
                  <td className="px-6 py-4">A customer's age, in years.</td>
                  <td className="px-6 py-4"></td>
                </tr>
                <tr className="transition-colors hover:bg-slate-100 dark:hover:bg-slate-900">
                  <th
                    scope="row"
                    className="px-6 py-4 font-mono font-bold text-slate-900 bg-slate-100 whitespace-nowrap dark:text-white dark:bg-slate-900"
                  >
                    Loyalty_Plan
                  </th>
                  <td className="px-6 py-4">integer</td>
                  <td className="px-6 py-4">
                    Tells if a customer is a loyalty member.
                  </td>
                  <td className="px-6 py-4">
                    {" "}
                    <ol className="leading-relaxed list-decimal list-inside">
                      <li>
                        <CodeSegment>FALSE</CodeSegment> is a keyword for 0
                      </li>
                      <li>
                        <CodeSegment>TRUE</CodeSegment> is a keyword for 1
                      </li>
                    </ol>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </BlockContent>
      </Block>
    </>
  );
}
